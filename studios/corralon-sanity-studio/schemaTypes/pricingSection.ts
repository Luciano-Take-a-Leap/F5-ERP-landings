import { defineField, defineType } from 'sanity'

const TPricingSection = defineType({
    name: 'priceSection',
    title: 'Sección de Precio del Programa',
    type: 'document',
    fields: [
        defineField({
            name: 'topText',
            title: 'Texto Superior',
            type: 'richText',
            description: 'Texto enriquecido que aparece al inicio de las sección',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'ctaButtonText',
            title: 'Texto del Botón CTA',
            type: 'string',
            description: 'Texto que aparece en el botón de llamada a la acción',
        }),
        defineField({
            name: 'regularPriceTitle',
            title: 'Título del Precio Oficial',
            type: 'string',
            description: 'Título que aparece sobre el precio oficial',
        }),
        defineField({
            name: 'regularPrice',
            title: 'Precio oficial',
            type: 'string',
            description: 'Precio oficial del programa (ej: U$D2600)',
        }),
        defineField({
            name: 'launchPriceTitle',
            title: 'Título del Precio de lanzamiento',
            type: 'string',
            description: 'Título que aparece sobre el precio de lanzamiento',
        }),
        defineField({
            name: 'launchPrice',
            title: 'Precio de lanzamiento',
            type: 'string',
            description: 'Precio de lanzamiento del programa (ej: U$D1400)',
        }),
        defineField({
            name: 'boxItemsTitle',
            title: 'Título de los items de la caja',
            type: 'string',
            description: 'Apertura de la lista de ítems que se muestran dentro de la caja',
        }),
        defineField({
            name: 'boxItems',
            title: 'Items de la caja',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Lista de ítems que se muestran dentro de la caja',
        }),
        defineField({
            name: 'boxCtaText',
            title: 'Texto del botón dentro de la caja',
            type: 'string',
            description: 'Texto que aparece en el botón dentro de la caja',
        })
    ],
    preview: {
        prepare() {
            return {
                title: 'Seccion de precio del programa',
            }
        }
    },
})

export default TPricingSection
