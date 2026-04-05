import {defineField, defineType} from 'sanity'

const TWarrantySection = defineType({
  name: 'warrantySection',
  title: 'Sección de Garantía',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Título principal de la sección',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'Carousel',
      title: 'Carousel de personas',
      type: 'object',
      description: 'Carousel de personas con las que puedes hablar',
      fields: [
        defineField({
          name: 'title',
          title: 'Título del Carousel',
          type: 'string',
          description: 'Título que aparece encima del carousel',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'people',
          title: 'Personas',
          type: 'array',
          description: 'Lista de personas que aparecen en el carousel',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Nombre y apellido',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'role',
                  title: 'Rol o posición',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'linkedIn',
                  title: 'URL de LinkedIn',
                  type: 'url',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(3),
        }),
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'Texto del Botón CTA',
      type: 'string',
      description: 'Texto que aparece en el botón de llamada a la acción',
      initialValue: 'BASTA DE EXPERIMENTOS, VOY CON LUCIANO',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: {title: string}) {
      return {
        title: title || 'Sección de Garantía',
      }
    },
  },
})

export default TWarrantySection
