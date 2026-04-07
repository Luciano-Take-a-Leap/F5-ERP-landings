import {defineField, defineType} from 'sanity'
const THero = defineType({
  name: 'hero',
  title: 'Sección Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'mainContent',
      title: 'Contenido Principal',
      type: 'richText',
      description: 'Texto descriptivo principal con formato de texto enriquecido',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'object',
      description: 'Botón destacado en el header (opcional)',
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
    defineField({
      name: 'backgroundImage',
      title: 'Imagen de Fondo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mobileBackgroundImage',
      title: 'Imagen de Fondo para Móvil',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
    prepare({title, subtitle}: {title: string; subtitle: string}) {
      return {
        title: title || 'Sección Hero',
        subtitle: subtitle ? `${subtitle.substring(0, 60)}...` : 'Sin subtítulo',
      }
    },
  },
})

export default THero
