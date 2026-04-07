import {defineField, defineType} from 'sanity'
const TCalendlySection = defineType({
  name: 'calendlySection',
  title: 'Sección de Calendly',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'richText',
      description: 'Texto con formato de texto enriquecido',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'calendlyLink',
      title: 'Enlace de Calendly',
      type: 'url',
      description:
        'Enlace a tu calendario de Calendly para que los usuarios puedan agendar una reunión contigo',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      cardsCount: 'cards',
    },
    prepare({title}: {title: Array<any>}) {
      const firstBlock = title?.find((block) => block._type === 'block')
      const titleText = firstBlock?.children?.map((child: any) => child.text)?.join('') || ''

      return {
        title: titleText ? `${titleText.substring(0, 60)}...` : 'Sección de Texto',
      }
    },
  },
})

export default TCalendlySection
