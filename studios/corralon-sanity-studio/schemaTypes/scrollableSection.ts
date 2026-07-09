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
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              title: 'Contenido',
              type: 'richText',
              description: 'Contenido narrativo con formato de texto enriquecido',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'images',
              title: 'Imágenes',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
              ],
              validation: (Rule) => Rule.min(1).error('Debes añadir al menos una imagen.'),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('Debe haber al menos una subsección'),
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
