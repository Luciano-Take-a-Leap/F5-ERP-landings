import {defineField, defineType} from 'sanity'

const TReasonSection = defineType({
  name: 'reasonSection',
  title: 'Sección de Razones',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'text',
      rows: 2,
      description: 'Título principal de la sección',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'extraTitle',
      title: 'Título extra',
      type: 'text',
      rows: 4,
      description: 'Texto que acompaña al título principal con el mismo formato, en un parrafo aparte.',
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      description: 'Imagen que aparece al lado derecho del contenido',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Contenido Principal',
      type: 'richText',
      description: 'Contenido narrativo con formato de texto enriquecido',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
      content: 'content',
    },
    prepare({title, image, content}: {title: string; image: string; content: Array<any>}) {
      const firstBlock = content?.find((block) => block._type === 'block')
      const previewText = firstBlock?.children?.map((child: any) => child.text)?.join('') || ''

      return {
        title: title ? `${title.substring(0, 60)}...` : 'Sección de Razones',
        subtitle: previewText ? `${previewText.substring(0, 50)}...` : 'Sin contenido',
        media: image,
      }
    },
  },
})

export default TReasonSection
