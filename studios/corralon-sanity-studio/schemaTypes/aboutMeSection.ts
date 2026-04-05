import {defineField, defineType} from 'sanity'

const TAboutMeSection = defineType({
  name: 'aboutMeSection',
  title: 'Sección Acerca de Mí',
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
      name: 'image',
      title: 'Imagen',
      type: 'image',
      description: 'Imagen que se muestra en la derecha de la sección',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
          description: 'Descripción de la imagen para accesibilidad',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mobileImage',
      title: 'Imagen Mobile',
      type: 'image',
      description: 'Imagen que se muestra para celulares',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
          description: 'Descripción de la imagen para accesibilidad',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'richText',
      description: 'Contenido principal con formato de texto enriquecido',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
      content: 'content',
    },
    prepare({title, image, content}: {title: string; image: any; content: Array<any>}) {
      const firstBlock = content?.find((block) => block._type === 'block')
      const previewText = firstBlock?.children?.map((child: any) => child.text)?.join('') || ''

      return {
        title: title || 'Sección Acerca de Mí',
        subtitle: previewText ? `${previewText.substring(0, 60)}...` : 'Sin contenido',
        media: image,
      }
    },
  },
})

export default TAboutMeSection
