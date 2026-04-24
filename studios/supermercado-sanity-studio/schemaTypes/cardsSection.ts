import {defineField, defineType} from 'sanity'

const TCardsSection = defineType({
  name: 'cardsSection',
  title: 'Sección de Tarjetas',
  type: 'document',
  fields: [
    defineField({
      name: 'tag',
      title: 'Etiqueta',
      type: 'string',
      description: 'Etiqueta pequeña que aparece encima del título (ej: "EL PROBLEMA")',
      validation: (Rule) => Rule.required(),
    }),
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
          title: 'Tarjeta',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icono',
              type: 'string',
              description: 'Icono que representa visualmente la tarjeta',
              options: {
                list: [
                  {title: 'watch', value: 'watch'},
                  {title: 'box', value: 'box'},
                  {title: 'trendingUp', value: 'trendingUp'},
                  {title: 'trendingDown', value: 'trendingDown'},
                  {title: 'user', value: 'user'},
                  {title: 'star', value: 'star'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string',
              description: 'Título de la tarjeta',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Descripción',
              type: 'text',
              rows: 4,
              description: 'Texto descriptivo que aparece en la parte inferior de la tarjeta',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
            prepare({title, subtitle}) {
              return {
                title: title ? `${title.substring(0, 60)}...` : 'Tarjeta sin título',
                subtitle: subtitle ? `${subtitle.substring(0, 50)}...` : 'Sin descripción',
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('Debes añadir al menos una tarjeta.'),
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
        title: titleText ? `${titleText.substring(0, 60)}...` : 'Sección de Tarjetas',
        subtitle: `${cardsCount?.length || 0} tarjetas configuradas`,
      }
    },
  },
})

export default TCardsSection
