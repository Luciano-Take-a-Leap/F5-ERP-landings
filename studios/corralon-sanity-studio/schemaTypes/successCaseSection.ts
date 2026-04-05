import {defineField, defineType} from 'sanity'

const TSuccessCaseSection = defineType({
  name: 'successCaseSection',
  title: 'Sección de Casos de Éxito',
  type: 'document',
  fields: [
    defineField({
      name: 'cases',
      title: 'Casos de Éxito',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'case',
          title: 'Caso de Éxito',
          fields: [
            {
              name: 'title',
              title: 'Título',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Contenido',
              type: 'richText',
              description: 'Contenido narrativo con formato de texto enriquecido',
            },
            {
              name: 'image',
              title: 'Imagen',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
        {
          type: 'object',
          name: 'video',
          title: 'Video',
          description: 'Enlace a un video externo (Vimeo)',
          fields: [
            {
              name: 'url',
              title: 'URL del Video',
              type: 'url',
              validation: (Rule) => Rule.uri({allowRelative: false, scheme: ['https']}),
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Sección de Casos de Éxito',
      }
    },
  },
})

export default TSuccessCaseSection
