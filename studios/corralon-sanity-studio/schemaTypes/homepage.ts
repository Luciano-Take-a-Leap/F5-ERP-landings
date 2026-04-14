import {defineField, defineType} from 'sanity'

const THomePage = defineType({
  name: 'homePage',
  title: 'Página de Inicio',
  type: 'document',
  icon: () => '🏠',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: {collapsible: true, collapsed: true},
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título Interno',
      type: 'string',
      description: 'Título interno para gestionar este documento',
      initialValue: 'Página de Inicio',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'Configuración SEO',
      type: 'seo',
      fieldset: 'seo',
      description: 'Configuración de optimización para motores de búsqueda de la página de inicio',
    }),
    defineField({
      name: 'sections',
      title: 'Secciones',
      type: 'array',
      of: [
        {type: 'reference', to: {type: 'hero'}, name: 'hero', title: 'Sección Hero'},
        {
          type: 'reference',
          to: {type: 'fullWidthTextSection'},
          name: 'fullWidthTextSection',
          title: 'Sección de Texto a Ancho Completo',
        },
        {
          type: 'reference',
          to: {type: 'cardsSection'},
          name: 'cardsSection',
          title: 'Sección de Tarjetas',
        },
        {
          type: 'reference',
          to: {type: 'scrollableSection'},
          name: 'scrollableSection',
          title: 'Sección Desplazable',
        },
        {
          type: 'reference',
          to: {type: 'duplexSection'},
          name: 'duplexSection',
          title: 'Sección Dúplex',
        },
        {
          type: 'reference',
          to: {type: 'testimonialsSection'},
          name: 'testimonialsSection',
          title: 'Sección de Testimonios',
        },
        {
          type: 'reference',
          to: {type: 'FAQSection'},
          name: 'FAQSection',
          title: 'Sección de Preguntas Frecuentes',
        },
        {
          type: 'reference',
          to: {type: 'calendlySection'},
          name: 'calendlySection',
          title: 'Sección de Calendly',
        },
        {
          type: 'reference',
          to: {type: 'infiniteCarouselSection'},
          name: 'infiniteCarouselSection',
          title: 'Sección de Carrusel Infinito',
        },
      ],
      description: 'Añade y organiza las secciones que aparecerán en la página de inicio.',
      validation: (Rule) => Rule.required().min(1).error('Debes añadir al menos una sección.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      seoTitle: 'seo.title',
    },
    prepare({title, seoTitle}: {title: string; seoTitle: string}) {
      return {
        title,
        subtitle: seoTitle ? `SEO: ${seoTitle}` : 'Sin título SEO configurado',
      }
    },
  },
})

export default THomePage
