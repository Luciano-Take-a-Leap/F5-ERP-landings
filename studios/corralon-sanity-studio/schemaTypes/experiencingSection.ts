import {defineField, defineType} from 'sanity'

const TExperiencingSection = defineType({
  name: 'experiencingSection',
  title: 'Sección de Experiencia',
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
      name: 'cards',
      title: 'Tarjetas',
      type: 'array',
      description: '3 tarjetas que muestran los beneficios o características',
      of: [
        {
          type: 'object',
          name: 'card',
          title: 'Tarjeta',
          fields: [
            defineField({
              name: 'topText',
              title: 'Texto Superior',
              type: 'text',
              rows: 4,
              description: 'Texto principal que aparece en la parte superior de la tarjeta',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'bottomText',
              title: 'Texto Inferior',
              type: 'text',
              rows: 4,
              description: 'Texto descriptivo que aparece en la parte inferior de la tarjeta',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'topText',
              subtitle: 'bottomText',
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
      validation: (Rule) => Rule.required().max(3).min(3),
    }),
    defineField({
      name: 'bottomText',
      title: 'Texto Final',
      type: 'richText',
      description: 'Texto que aparece después de las tarjetas con formato de texto enriquecido',
      validation: (Rule) =>
        Rule.custom(() => {
          return true
        }),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Texto del Botón CTA',
      type: 'string',
      description: 'Texto que aparece en el botón de llamada a la acción',
      initialValue: 'ME UNO A TAKE A LEAP PROGRAM',
      validation: (Rule) => Rule.required(),
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
        title: titleText ? `${titleText.substring(0, 60)}...` : 'Sección de Experiencia',
        subtitle: `${cardsCount?.length || 0} tarjetas configuradas`,
      }
    },
  },
})

export default TExperiencingSection
