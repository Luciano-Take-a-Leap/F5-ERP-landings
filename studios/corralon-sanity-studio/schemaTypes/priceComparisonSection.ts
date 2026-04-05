import {defineField, defineType} from 'sanity'

const TPriceComparisonSection = defineType({
  name: 'priceComparisonSection',
  title: 'Sección de Comparación',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Título principal que aparece en la parte superior',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      description: 'Subtítulo que aparece debajo del título principal',
    }),
    defineField({
      name: 'tableTitle',
      title: 'Título de la tabla',
      type: 'string',
      description: 'Título que aparece antes de la tabla',
    }),
    defineField({
      name: 'tableDescription',
      title: 'Descripción',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
          },
        },
      ],
      description: 'Descripción detallada que aparece antes de la tabla',
    }),
    defineField({
      name: 'firstColTitle',
      title: 'Título de la primer columna',
      type: 'object',
      fields: [
        {name: 'text', type: 'string'},
        {name: 'image', type: 'image'},
      ],
      description:
        'Título cabecera de la primer columna. Si sube una imagen, tendra prioridad sobre el texto.',
    }),
    defineField({
      name: 'secondColTitle',
      title: 'Título de la segunda columna',
      type: 'object',
      fields: [
        {name: 'text', type: 'string'},
        {name: 'image', type: 'image'},
      ],
      description:
        'Título cabecera de la segunda columna. Si sube una imagen, tendra prioridad sobre el texto.',
    }),
    defineField({
      name: 'comparisonItems',
      title: 'Items de Comparación',
      type: 'array',
      description: 'Listado de características a comparar',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Característica',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [{title: 'Normal', value: 'normal'}],
                  marks: {
                    decorators: [
                      {title: 'Strong', value: 'strong'},
                      {title: 'Emphasis', value: 'em'},
                      {title: 'Underline', value: 'underline'},
                    ],
                  },
                },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'withoutTakeALeap',
              title: 'Sin Take a Leap',
              type: 'string',
              description: 'Valor sin el servicio (ej: ❌, Limitado)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'withTakeALeap',
              title: 'Con Take a Leap',
              type: 'string',
              description: 'Valor con el servicio (ej: ✅, Acceso completo)',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(1).error('Debe haber al menos un item de comparación'),
    }),
    defineField({
      name: 'regularPrice',
      title: 'Precio Regular',
      type: 'string',
      description: 'Precio sin Take a Leap (ej: $25.000)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio con Take a Leap',
      type: 'string',
      description: 'Precio con Take a Leap (ej: $1.700)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Texto del Botón CTA',
      type: 'string',
      description: 'Texto que aparecerá en el botón de llamada a la acción',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: {title: string}) {
      return {
        title: title || 'Sección de Comparación',
      }
    },
  },
})

export default TPriceComparisonSection
