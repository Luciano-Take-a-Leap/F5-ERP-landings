import {defineField, defineType} from 'sanity'

const TCurrentEditionPeopleSection = defineType({
  name: 'currentEditionPeopleSection',
  title: 'Sección de Personas de la Edición Actual',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la Sección',
      type: 'string',
      description: 'Título principal que aparece al inicio de la sección',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo de la Sección',
      type: 'richText',
      description: 'Subtítulo que aparece debajo del título principal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cards',
      title: 'Tarjetas de fases',
      type: 'array',
      description: 'Tarjetas con texto destinado a las fases',
      of: [
        {
          type: 'object',
          title: 'Tarjeta de fase',
          fields: [
            {
              name: 'name',
              title: 'Nombre de fase',
              type: 'string',
              description: 'Nombre de la fase (por ejemplo, "• Customer - Problem Fit •")',
            },
            {
              name: 'subtitle',
              title: 'Subtítulo de la fase',
              type: 'string',
              description: 'Subtítulo que aparece debajo del número de fase',
            },
            {
              name: 'content',
              title: 'Contenido de la fase',
              type: 'richText',
              description: 'Contenido narrativo con formato de texto enriquecido',
            },
          ],
        },
      ],

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'postCardsText',
      title: 'Texto posterior a las tarjetas',
      type: 'string',
      description: 'Texto que aparece después de las tarjetas',
    }),
    defineField({
      name: 'titleGuidanceCards',
      title: 'Título de la Sección de Tarjetas de Acompañamiento al Proceso',
      type: 'string',
      description: 'Título que aparece antes de las tarjetas de acompañamiento al proceso',
    }),
    defineField({
      name: 'processGuidanceCards',
      title: 'Tarjetas de acompañamiento al proceso',
      type: 'array',
      description: 'Tarjetas con texto destinado a guiar el proceso',
      of: [
        {
          type: 'object',
          title: 'Tarjeta de acompañamiento al proceso',
          fields: [
            {name: 'icon', title: 'Icono', type: 'image', options: {hotspot: true}},
            {
              name: 'title',
              title: 'Título de la tarjeta',
              type: 'string',
              description: 'Título principal de la tarjeta',
            },
            {
              name: 'content',
              title: 'Contenido de la tarjeta',
              type: 'string',
              description: 'Contenido narrativo de la tarjeta',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().max(4).min(1),
    }),
    defineField({
      name: 'bonusTitle',
      title: 'Título de la sección de Bonos',
      type: 'string',
      description: 'Título que aparece antes del listado de bonos',
    }),
    defineField({
      name: 'bonusSubtitle',
      title: 'Subtítulo de la sección de Bonos',
      type: 'string',
      description: 'Subtítulo que aparece debajo del título de bonos',
    }),
    defineField({
      name: 'bonuses',
      title: 'Bonos',
      type: 'array',
      description: 'Listado de bonos que se ofrecen',
      of: [
        {
          type: 'object',
          title: 'Bono',
          fields: [
            {
              name: 'title',
              title: 'Título del bono',
              type: 'string',
              description: 'Título principal del bono',
            },
            {
              name: 'description',
              title: 'Descripción del bono',
              type: 'richText',
              description: 'Descripción detallada del bono con formato de texto enriquecido',
            },
            defineField({
              name: 'image',
              title: 'Imagen del bono',
              type: 'image',
              description: 'Imagen representativa del bono',
            }),
            defineField({
              name: 'cost',
              title: 'Costo del bono',
              type: 'string',
              description: 'Costo asociado al bono',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'extraBonusesTitle',
      title: 'Título de la sección de Bonos Adicionales',
      type: 'string',
      description: 'Título que aparece antes del listado de bonos adicionales',
    }),
    defineField({
      name: 'extraBonusesSubtitle',
      title: 'Subtítulo de la sección de Bonos Adicionales',
      type: 'string',
      description: 'Subtítulo que aparece debajo del título de bonos adicionales',
    }),
    defineField({
      name: 'extraBonuses',
      title: 'Bonos Adicionales',
      type: 'array',
      description: 'Listado de bonos adicionales que se ofrecen',
      of: [
        {
          type: 'object',
          title: 'Bono',
          fields: [
            {
              name: 'title',
              title: 'Título del bono',
              type: 'string',
              description: 'Título principal del bono',
            },
            {
              name: 'description',
              title: 'Descripción del bono',
              type: 'richText',
              description: 'Descripción detallada del bono con formato de texto enriquecido',
            },
            defineField({
              name: 'image',
              title: 'Imagen del bono',
              type: 'image',
              description: 'Imagen representativa del bono',
            }),
            defineField({
              name: 'cost',
              title: 'Costo del bono',
              type: 'string',
              description: 'Costo asociado al bono',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'warningTitle',
      title: 'Título de sección de atención',
      type: 'string',
    }),
    defineField({
      name: 'warningSubtitle',
      title: 'Subtítulo de sección de atención',
      type: 'string',
    }),
    defineField({
      name: 'warningText',
      title: 'Texto de sección de atención',
      type: 'richText',
      description: 'Texto con formato de texto enriquecido para la sección de atención',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonios',
      type: 'array',
      description: 'Listado de testimonios para mostrar en la sección',
      of: [{type: 'image'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare({title, content}: {title: string; content: Array<any>}) {
      const firstBlock = content?.find((block) => block._type === 'block')
      const previewText = firstBlock?.children?.map((child: any) => child.text)?.join('') || ''

      return {
        title: title || 'Sección de Personas de la Edición Actual',
        subtitle: previewText ? `${previewText.substring(0, 60)}...` : 'Sin contenido',
      }
    },
  },
})

export default TCurrentEditionPeopleSection
