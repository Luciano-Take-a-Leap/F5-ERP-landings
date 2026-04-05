import {defineField, defineType} from 'sanity'

const TBeforeAfterSection = defineType({
  name: 'beforeAfterSection',
  title: 'Sección de Antes y Después',
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
        name: 'leftTitle',
        title: 'Título Sección Izquierda (Antes)',
        type: 'string',
        description: 'Título que aparece en la sección izquierda (Antes)',
      }),
    defineField({
      name: 'leftContent',
      title: 'Sección Izquierda (Antes)',
      type: 'array',
      description: 'Listado de items que se muestran en la sección izquierda (Antes)',
      of: [{type: 'string'}],
      validation: (Rule) =>
        Rule.required().min(1).error('Debe haber al menos un item en la sección izquierda'),
    }),
    defineField({
        name: 'rightTitle',
        title: 'Título Sección Derecha (Después)',
        type: 'string',
        description: 'Título que aparece en la sección derecha (Después)',
    }),
    defineField({
      name: 'rightContent',
      title: 'Sección Derecha (Después)',
      type: 'array',
      description: 'Listado de items que se muestran en la sección derecha (Después)',
      of: [{type: 'string'}],
      validation: (Rule) =>
        Rule.required().min(1).error('Debe haber al menos un item en la sección derecha'),
    }),
    defineField({
      name: 'ctaText',
      title: 'Texto del Botón de Llamada a la Acción (CTA)',
      type: 'string',
      description: 'Texto que aparecerá en el botón de llamada a la acción',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: {title: string}) {
      return {
        title: title || 'Sección de antes y después',
      }
    },
  },
})

export default TBeforeAfterSection
