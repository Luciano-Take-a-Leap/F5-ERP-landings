import {defineField, defineType} from 'sanity'

const TScrollableSection = defineType({
  name: 'scrollableSection',
  title: 'Sección Desplazable',
  type: 'document',
  fields: [
    defineField({
      name: 'tag',
      title: 'Etiqueta',
      type: 'string',
      description: 'Etiqueta pequeña que aparece encima del título (ej: "EL PROBLEMA")',
    }),
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'richText',
      description: 'Título principal de la sección con formato de texto enriquecido',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subsections',
      title: 'Subsecciones',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'subsection',
          title: 'Subsección',
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
              title: 'Imágen',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          validation: (Rule) =>
            Rule.custom((subsections: any[] | undefined) => {
              if (!subsections || subsections.length === 0) {
                return 'Debe haber al menos una subsección'
              }
              for (const subsection of subsections) {
                if (!subsection.title) {
                  return 'Cada subsección debe tener un título'
                }
                if (!subsection.content) {
                  return 'Cada subsección debe tener contenido'
                }
                if (!subsection.image) {
                  return 'Cada subsección debe tener una imagen'
                }
              }
              return true
            }),
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Sección de tarjetas desplazables',
      }
    },
  },
})

export default TScrollableSection
