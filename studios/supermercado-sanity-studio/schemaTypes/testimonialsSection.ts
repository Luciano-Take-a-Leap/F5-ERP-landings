import {defineField, defineType} from 'sanity'

const TTestimonialsSection = defineType({
  name: 'testimonialsSection',
  title: 'Sección de Testimonios',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'richText',
      description: 'Título principal de la sección con formato de texto enriquecido',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      description: 'Subtítulo que aparece debajo del título principal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cards',
      title: 'Tarjetas',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'card',
          title: 'Testimonio',
          fields: [
            defineField({
              name: 'rate',
              title: 'Calificación',
              type: 'number',
              description: 'Calificación del testimonio (de 1 a 5)',
              options: {
                list: [
                  {title: '1', value: 1},
                  {title: '2', value: 2},
                  {title: '3', value: 3},
                  {title: '4', value: 4},
                  {title: '5', value: 5},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'quote',
              title: 'Cita',
              type: 'text',
              rows: 4,
              description: 'Texto del testimonio',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'author',
              title: 'Autor',
              type: 'object',
              description: 'Información del autor del testimonio',
              fields: [
                defineField({
                  name: 'avatar',
                  title: 'Avatar',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                }),
                defineField({
                  name: 'name',
                  title: 'Nombre',
                  type: 'string',
                  description: 'Nombre del autor del testimonio',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'role',
                  title: 'Rol o Cargo',
                  type: 'string',
                  description: 'Rol o cargo del autor (ej: "CEO de XYZ")',
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'quote',
              subtitle: 'author.name',
            },
            prepare({title, subtitle}) {
              return {
                title: title ? `${title.substring(0, 60)}...` : 'Tarjeta sin título',
                subtitle: subtitle || 'Sin descripción',
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('Debes añadir al menos un testimonio.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      cardsCount: 'cards',
    },
    prepare({title, cardsCount}: {title: Array<any>; cardsCount: Array<any>}) {
      const firstBlock = title?.find((block) => block._type === 'block')
      const titleText = firstBlock?.children?.map((child: any) => child.text)?.join('') || ''

      return {
        title: titleText ? `${titleText.substring(0, 60)}...` : 'Sección de Testimonios',
        subtitle: `${cardsCount?.length || 0} testimonios configurados`,
      }
    },
  },
})

export default TTestimonialsSection
