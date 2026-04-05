import { defineField, defineType } from 'sanity'

const THeader = defineType({
  name: 'header',
  title: 'Header Content',
  type: 'document',
  icon: () => '📄',
  fields: [
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
            defineField({
              name: 'isButton',
              title: 'Mostrar como botón',
              type: 'boolean',
              initialValue: false,
              description: 'Mostrar este enlace con estilo de botón',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
              isButton: 'isButton',
            },
            prepare(value: Record<string, any>) {
              const { title, subtitle, isButton } = value
              return {
                title,
                subtitle: `${subtitle} ${isButton ? '(Button)' : ''}`,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'countdownBanner',
      title: 'Countdown Banner',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Habilitar Banner de Cuenta Regresiva',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'limitDate',
          title: 'Fecha limite de la cuenta regresiva',
          type: 'datetime',
          description: 'Cuando la cuenta regresiva llegará a cero',
          validation: (Rule) =>
            Rule.custom((value: string | undefined, context: any) => {
              if (context.parent.enabled && !value) {
                return 'La fecha de finalización es obligatoria cuando el contador está habilitado'
              }
              return true
            }),
        }),
        defineField({
          name: 'mainText',
          title: 'Texto Principal de Promoción',
          type: 'text',
          rows: 3,
          description: 'Mensaje principal mostrado en el banner',
          validation: (Rule) =>
            Rule.custom((value: string | undefined, context: any) => {
              if (context.parent.enabled && !value) {
                return 'El texto principal es obligatorio cuando el contador está habilitado'
              }
              return true
            }),
        }),
        defineField({
          name: 'ctaButtonText',
          title: 'Texto del Botón CTA',
          type: 'string',
          description: 'Texto mostrado en el botón CTA',
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
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      }
    },
  },
})

export default THeader
