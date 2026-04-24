import {defineField, defineType} from 'sanity'

const TFAQsSection = defineType({
  name: 'FAQSection',
  title: 'FAQ Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'richText',
      description: 'Título principal de la sección',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'faqs',
      title: 'Preguntas Frecuentes',
      type: 'array',
      description: 'Lista de preguntas frecuentes y sus respuestas',
      of: [
        {
          type: 'object',
          name: 'faq',
          title: 'FAQ',
          fields: [
            defineField({
              name: 'question',
              title: 'Pregunta',
              type: 'string',
              description: 'Texto de la pregunta frecuente',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Respuesta',
              type: 'richText',
              description: 'Respuesta a la pregunta con formato de texto enriquecido',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Sección de Preguntas Frecuentes',
      }
    },
  },
})
export default TFAQsSection
