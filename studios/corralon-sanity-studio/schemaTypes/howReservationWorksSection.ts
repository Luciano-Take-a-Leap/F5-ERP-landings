import {defineField, defineType} from 'sanity'

const THowReservationWorksSection = defineType({
  name: 'howReservationWorksSection',
  title: 'Sección de Cómo Funciona la Reservación',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Título principal de la sección',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cards',
      title: 'Tarjetas',
      type: 'array',
      description: 'Tarjetas que muestran el proceso de reservación',
      of: [
        {
          type: 'object',
          name: 'card',
          title: 'Tarjeta',
          fields: [
            defineField({
              name: 'content',
              title: 'Contenido',
              type: 'text',
              rows: 4,
              description: 'Texto descriptivo que aparece dentrode la tarjeta',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'content',
            },
            prepare({title}) {
              return {
                title: title ? `${title.substring(0, 60)}...` : 'Tarjeta sin título',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Texto del Botón CTA',
      type: 'string',
      description: 'Texto que aparece en el botón de llamada a la acción',
      initialValue: 'RESERVA TU PLAZA',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      cardsCount: 'cards',
    },
    prepare({title, cardsCount}: {title: string; cardsCount: Array<any>}) {
      return {
        title: title || 'Sección de Cómo Funciona la Reservación',
        subtitle: `${cardsCount?.length || 0} tarjetas configuradas`,
      }
    },
  },
})

export default THowReservationWorksSection
