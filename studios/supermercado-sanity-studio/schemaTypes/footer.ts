import {defineField, defineType} from 'sanity'

const TFooter = defineType({
  name: 'footer',
  title: 'Footer Content',
  type: 'document',
  icon: () => '📄',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Imagen del logo del sitio',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Texto de copyright',
      type: 'string',
      description:
        'Texto que aparecerá en el footer, por ejemplo: "© 2024 Mi Empresa. Todos los derechos reservados."',
    }),
    defineField({
      name: 'navigation',
      title: 'Links de navegación',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navigationLink',
          title: 'Link',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Texto mostrado en el enlace',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'URL/Link',
              type: 'string',
              description:
                'Puede ser un link interno (ej: /about-me), scroll a sección (ej: #about-me) o externo (ej: https://google.com)',
              validation: (Rule) =>
                Rule.required().custom((value: string | undefined) => {
                  const isInternal = value?.startsWith('/')
                  const isSection = value?.startsWith('#')
                  const isExternal = value?.startsWith('http://') || value?.startsWith('https://')

                  if (!isInternal && !isExternal && !isSection) {
                    return 'URL/Link debe comenzar con "#" para scroll a secciones, con "/" para enlaces internos o "http://" o "https://" para enlaces externos'
                  }
                  return true
                }),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
            prepare(value: Record<string, any>) {
              const {title, subtitle} = value
              return {
                title,
                subtitle,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
})

export default TFooter
