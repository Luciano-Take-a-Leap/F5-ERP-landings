import {defineField, defineType} from 'sanity'

const TIntegrationsSection = defineType({
  name: 'integrationsSection',
  title: 'Sección de Integraciones',
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
      name: 'mainImage',
      title: 'Imagen Principal',
      type: 'image',
      options: {hotspot: true},
      description: 'Imagen que se muestra en el centro de las órbitas',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orbits',
      title: 'Órbitas',
      type: 'array',
      description: 'Cada órbita es un anillo giratorio con íconos. Máximo 5 órbitas.',
      of: [
        {
          type: 'object',
          name: 'orbit',
          title: 'Órbita',
          fields: [
            defineField({
              name: 'direction',
              title: 'Dirección de giro',
              type: 'string',
              description: 'Sentido en el que gira esta órbita',
              options: {
                list: [
                  {title: '↻ Horario', value: 'clockwise'},
                  {title: '↺ Antihorario', value: 'counterclockwise'},
                ],
                layout: 'radio',
              },
              initialValue: 'clockwise',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'items',
              title: 'Ítems',
              type: 'array',
              description: 'Íconos o logos que aparecerán en esta órbita',
              of: [
                {
                  type: 'object',
                  name: 'orbitItem',
                  title: 'Ítem',
                  fields: [
                    defineField({
                      name: 'image',
                      title: 'Imagen / Logo',
                      type: 'image',
                      options: {hotspot: true},
                    }),
                    defineField({
                      name: 'alt',
                      title: 'Texto alternativo',
                      type: 'string',
                      description: 'Nombre de la integración (ej: "Power BI", "MercadoLibre")',
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'alt',
                      media: 'image',
                    },
                    prepare({title, media}) {
                      return {
                        title: title || 'Ítem sin nombre',
                        media,
                      }
                    },
                  },
                },
              ],
              validation: (Rule) =>
                Rule.required().min(1).error('Cada órbita debe tener al menos un ítem.'),
            }),
          ],
          preview: {
            select: {
              direction: 'direction',
              items: 'items',
            },
            prepare({direction, items}: Record<string, any>) {
              const dirLabel = direction === 'clockwise' ? '↻ Horario' : '↺ Antihorario'
              return {
                title: `Órbita ${dirLabel}`,
                subtitle: `${items?.length || 0} ítem(s)`,
              }
            },
          },
        },
      ],
      validation: (Rule) =>
        Rule.required().min(1).max(3).error('Debes configurar entre 1 y 3 órbitas.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      orbits: 'orbits',
    },
    prepare({title, orbits}: {title: Array<any>; orbits: Array<any>}) {
      const firstBlock = title?.find((block: any) => block._type === 'block')
      const titleText = firstBlock?.children?.map((child: any) => child.text)?.join('') || ''

      return {
        title: titleText ? `${titleText.substring(0, 60)}...` : 'Sección de Integraciones',
        subtitle: `${orbits?.length || 0} órbita(s) configurada(s)`,
      }
    },
  },
})

export default TIntegrationsSection
