import {defineField, defineType} from 'sanity'
const TFullWidthTextSection = defineType({
  name: 'fullWidthTextSection',
  title: 'Sección de Texto',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'richText',
      description: 'Texto con formato de texto enriquecido',
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

export default TFullWidthTextSection
