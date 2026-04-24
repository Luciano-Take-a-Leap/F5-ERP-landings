import { defineField, defineType } from 'sanity'

const TSEO =defineType({
  name: 'seo',
  title: 'Configuración SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título Meta',
      type: 'string',
      description: 'Título para motores de búsqueda (recomendado 50-60 caracteres)',
      validation: (Rule) => 
        Rule.max(60).warning('Los títulos de más de 60 caracteres pueden ser truncados'),
    }),
    defineField({
      name: 'description',
      title: 'Descripción Meta',
      type: 'text',
      rows: 3,
      description: 'Descripción para motores de búsqueda (recomendado 150-160 caracteres)',
      validation: (Rule) => 
        Rule.max(160).warning('Las descripciones de más de 160 caracteres pueden ser truncadas'),
    }),
    defineField({
      name: 'keywords',
      title: 'Palabras Clave',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Palabras clave para esta página (opcional)',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'openGraph',
      title: 'Open Graph (Redes Sociales)',
      type: 'object',
      description: 'Configuración para compartir en redes sociales',
      fields: [
        defineField({
          name: 'title',
          title: 'Título OG',
          type: 'string',
          description: 'Título al compartir en redes sociales (usa el Título Meta si está vacío)',
        }),
        defineField({
          name: 'description',
          title: 'Descripción OG',
          type: 'text',
          rows: 2,
          description: 'Descripción al compartir en redes sociales (usa la Descripción Meta si está vacía)',
        }),
        defineField({
          name: 'image',
          title: 'Imagen OG',
          type: 'image',
          description: 'Imagen al compartir en redes sociales (recomendado 1200x630px)',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Texto Alternativo',
              type: 'string',
              description: 'Texto alternativo para la imagen',
            }),
          ],
        }),
        defineField({
          name: 'type',
          title: 'Tipo OG',
          type: 'string',
          options: {
            list: [
              { title: 'Sitio Web', value: 'website' },
              { title: 'Artículo', value: 'article' },
              { title: 'Producto', value: 'product' },
            ],
          },
          initialValue: 'website',
        }),
      ],
    }),
    defineField({
      name: 'twitter',
      title: 'Tarjeta de Twitter',
      type: 'object',
      description: 'Configuración para compartir en Twitter',
      fields: [
        defineField({
          name: 'cardType',
          title: 'Tipo de Tarjeta',
          type: 'string',
          options: {
            list: [
              { title: 'Resumen', value: 'summary' },
              { title: 'Resumen con Imagen Grande', value: 'summary_large_image' },
            ],
          },
          initialValue: 'summary_large_image',
        }),
        defineField({
          name: 'site',
          title: 'Usuario de Twitter del Sitio',
          type: 'string',
          description: 'Usuario de Twitter del sitio web (ej: @tuusuario)',
          validation: (Rule) => 
            Rule.custom((value?: string) => {
              if (value && !value.startsWith('@')) {
                return 'El usuario de Twitter debe comenzar con @';
              }
              return true;
            }),
        }),
        defineField({
          name: 'creator',
          title: 'Usuario de Twitter del Creador',
          type: 'string',
          description: 'Usuario de Twitter del creador del contenido (ej: @creador)',
          validation: (Rule) => 
            Rule.custom((value?: string) => {
              if (value && !value.startsWith('@')) {
                return 'El usuario de Twitter debe comenzar con @';
              }
              return true;
            }),
        }),
      ],
    }),
    defineField({
      name: 'canonical',
      title: 'URL Canónica',
      type: 'url',
      description: 'URL canónica para esta página (opcional)',
    }),
    defineField({
      name: 'noIndex',
      title: 'No Indexar',
      type: 'boolean',
      description: 'Impedir que los motores de búsqueda indexen esta página',
      initialValue: false,
    }),
    defineField({
      name: 'noFollow',
      title: 'No Seguir',
      type: 'boolean',
      description: 'Impedir que los motores de búsqueda sigan los enlaces de esta página',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }: { title: string; description: string }) {
      return {
        title: title || 'Configuración SEO',
        subtitle: description ? `${description.substring(0, 50)}...` : 'Sin descripción',
      };
    },
  },
})

export default TSEO