import {defineType} from 'sanity'

const TRichText = defineType({
  name: 'richText',
  title: 'Texto enriquecido',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Encabezado 1', value: 'h1'},
        {title: 'Encabezado 2', value: 'h2'},
        {title: 'Encabezado 3', value: 'h3'},
        {title: 'Encabezado 4', value: 'h4'},
        {title: 'Encabezado 5', value: 'h5'},
        {title: 'Encabezado 6', value: 'h6'},
        {title: 'Cita', value: 'blockquote'},
        {title: 'Código', value: 'code'},
      ],
      lists: [
        {title: 'Lista con Viñetas', value: 'bullet'},
        {title: 'Lista Numerada', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Negrita', value: 'strong'},
          {title: 'Cursiva', value: 'em'},
          {title: 'Subrayado', value: 'underline'},
          {title: 'Código', value: 'code'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Enlace',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Abrir en nueva pestaña',
                initialValue: false,
              },
            ],
          },
          {
            name: 'textSettings',
            type: 'object',
            title: 'Text Settings',
            icon: () => '⚙️',
            fields: [
              {
                name: 'lineHeight',
                type: 'string',
                title: 'Line Height',
                options: {
                  list: [
                    {title: 'Default', value: 'normal'},
                    {title: 'Relaxed', value: 'relaxed'},
                    {title: 'Tight', value: 'tight'},
                  ],
                },
                initialValue: 'normal',
              },
              {
                name: 'highlightBox',
                type: 'string',
                title: 'Estilo de la Caja',
                options: {
                  list: [
                    {title: 'Ninguno', value: 'none', description: 'Sin caja de fondo'},
                    {title: 'Caja Blanca', value: 'white'},
                    {title: 'Caja Negra', value: 'black'},
                    {title: 'Caja Naranja', value: 'orange'},
                    {title: 'Caja Azul Claro', value: 'blue'},
                    {title: 'Caja Azul Oscuro', value: 'dark-blue'},
                  ],
                },
                validation: (Rule) => Rule.required(),
                initialValue: 'none',
              },
              {
                name: 'textColor',
                type: 'string',
                title: 'Color del Texto',
                options: {
                  list: [
                    {title: 'Negro', value: 'black'},
                    {title: 'Blanco', value: 'white'},
                    {title: 'Naranja', value: 'orange'},
                    {title: 'Azul', value: 'blue'},
                    {title: 'Azul Oscuro', value: 'dark-blue'},
                  ],
                },
                initialValue: 'black',
              },
              {
                name: 'fontFamily',
                type: 'string',
                title: 'Fuente',
                options: {
                  list: [
                    {title: 'Montserrat', value: 'montserrat'},
                    {title: 'Archivo Black 400', value: 'archivo-black-400'},
                    {title: 'Lora', value: 'lora'},
                    {title: 'Montagu Slab', value: 'montagu'},
                    {title: 'Work Sans', value: 'work-sans'}
                  ],
                },
                initialValue: 'montserrat',
              },
            ],
          },
        ],
      },
    },
  ],
  validation: (Rule) => Rule.required(),
})

export default TRichText
