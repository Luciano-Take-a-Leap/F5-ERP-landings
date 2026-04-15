import {defineField, defineType} from 'sanity'
const TInfiniteCarouselSection = defineType({
  name: 'infiniteCarouselSection',
  title: 'Sección de Carrusel Infinito',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'Título de la sección de carrusel infinito',
    }),
    defineField({
      name: 'rows',
      title: 'Filas',
      type: 'array',
      of: [{type: 'infiniteCarouselRow'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}: {title: string}) {
      return {
        title: title ? `${title.substring(0, 60)}...` : 'Sección de Carrusel Infinito sin título',
      }
    },
  },
})

const TInfiniteCarouselRow = defineType({
  name: 'infiniteCarouselRow',
  title: 'Fila de Carrusel Infinito',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'image'}],
      description: 'Imágenes para la fila del carrusel infinito',
    }),
    defineField({
      name: 'speed',
      title: 'Velocidad',
      type: 'string',
      options: {
        list: [
          {title: 'Lenta', value: 'slow'},
          {title: 'Media', value: 'medium'},
          {title: 'Rápida', value: 'fast'},
        ],
      },
      description: 'Velocidad de desplazamiento de la fila del carrusel infinito',
    }),
    defineField({
      name: 'direction',
      title: 'Dirección',
      type: 'string',
      options: {
        list: [
          {title: 'Izquierda a Derecha', value: 'leftToRight'},
          {title: 'Derecha a Izquierda', value: 'rightToLeft'},
        ],
        layout: 'radio',
      },
      initialValue: 'leftToRight',
      description: 'Dirección de desplazamiento de la fila del carrusel infinito',
    }),
  ],
})

export {TInfiniteCarouselRow, TInfiniteCarouselSection}
