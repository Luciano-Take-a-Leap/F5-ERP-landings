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
      name: 'redirectionButtonUrl',
      title: 'URL del Botón de Redirección',
      type: 'url',
      description:
        'URL a la que redirigen los botones CTA (No aplica al Cta button del header, quien tiene su propia configuración)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Secciones',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'aboutMeSection'},
          name: 'aboutMeSection',
          title: 'Sección Acerca de Mí',
        },
        {
          type: 'reference',
          to: {type: 'conversationSection'},
          name: 'conversationSection',
          title: 'Sección de Conversación',
        },
        {
          type: 'reference',
          to: {type: 'currentEditionPeopleSection'},
          name: 'currentEditionPeopleSection',
          title: 'Sección de Personas de la Edición Actual',
        },
        {
          type: 'reference',
          to: {type: 'experiencingSection'},
          name: 'experiencingSection',
          title: 'Sección de Experiencias',
        },
        {
          type: 'reference',
          to: {type: 'FAQSection'},
          name: 'FAQSection',
          title: 'Sección de Preguntas Frecuentes',
        },
        {type: 'reference', to: {type: 'hero'}, name: 'hero', title: 'Sección Hero'},
        {
          type: 'reference',
          to: {type: 'howReservationWorksSection'},
          name: 'howReservationWorksSection',
          title: 'Sección de Cómo Funciona la Reserva',
        },
        {
          type: 'reference',
          to: {type: 'reasonSection'},
          name: 'reasonSection',
          title: 'Sección de Razones',
        },
        {
          type: 'reference',
          to: {type: 'successCaseSection'},
          name: 'successCaseSection',
          title: 'Sección de Casos de Éxito',
        },
        {
          type: 'reference',
          to: {type: 'warrantySection'},
          name: 'warrantySection',
          title: 'Sección de Garantía',
        },
        {
          type: 'reference',
          to: {type: 'priceSection'},
          name: 'priceSection',
          title: 'Sección de Precio del Programa',
        },
        {
          type: 'reference',
          to: {type: 'beforeAfterSection'},
          name: 'beforeAfterSection',
          title: 'Sección de Antes y Después',
        },
        {
          type: 'reference',
          to: { type: 'priceComparisonSection'},
          name: 'priceComparisonSection',
          title: 'Seccion de comparacion'
        }
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
