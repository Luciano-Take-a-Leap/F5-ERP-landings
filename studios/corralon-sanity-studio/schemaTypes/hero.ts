import {defineField, defineType} from 'sanity'
const THero = defineType({
  name: 'hero',
  title: 'Sección Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Título principal en la parte superior (ej: ⚡ Take a Leap Program ⚡)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainContent',
      title: 'Contenido Principal',
      type: 'richText',
      description: 'Texto descriptivo principal con formato de texto enriquecido',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coloredSectionText',
      title: 'Texto de Sección Destacada',
      type: 'text',
      rows: 3,
      description: 'Texto que aparece en la sección con fondo de color destacado',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Texto del Botón CTA',
      type: 'string',
      description: 'Texto que aparece en el botón de llamada a la acción',
      initialValue: 'Me uno a Take a Leap',
      validation: (Rule) => Rule.required(),
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
