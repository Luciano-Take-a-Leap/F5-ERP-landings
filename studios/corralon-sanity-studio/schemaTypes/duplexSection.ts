import {defineField, defineType} from 'sanity'

const TDuplexSection = defineType({
  name: 'duplexSection',
  title: 'Sección Dúplex',
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
      name: 'textContent',
      title: 'Contenido de Texto',
      type: 'richText',
      description: 'Contenido narrativo con formato de texto enriquecido',
    }),
    defineField({
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
    }),
    defineField({
      name: 'ctaButton',
      title: 'Botón de Llamado a la Acción',
      type: 'object',
      description: 'Botón destacado al final de la sección (opcional)',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'Texto mostrado en el botón',
        }),
        defineField({
          name: 'href',
          title: 'URL/Link',
          type: 'string',
          description:
            'Puede ser un link interno (ej: /about-me), scroll a sección (ej: #about-me) o externo (ej: https://google.com)',
          validation: (Rule) =>
            Rule.custom((value: string | undefined) => {
              if (!value) return true
              const isInternal = value.startsWith('/')
              const isSection = value.startsWith('#')
              const isExternal = value.startsWith('http://') || value.startsWith('https://')

              if (!isInternal && !isExternal && !isSection) {
                return 'URL/Link debe comenzar con "#" para scroll a secciones, con "/" para enlaces internos o "http://" o "https://" para enlaces externos'
              }
              return true
            }),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Sección dúplex',
      }
    },
  },
})

export default TDuplexSection
