import { defineField, defineType } from 'sanity'

const TWhatsappConfig = defineType({
    name: 'whatsappConfig',
    title: 'Configuración de WhatsApp',
    type: 'document',
    fields: [
        defineField({
            name: 'phoneNumber',
            title: 'Número de Teléfono',
            type: 'string',
            description: 'Número de teléfono en formato internacional (ej: +541123456789)',
            validation: (Rule) => Rule.required().custom((value: string | undefined) => {
                const phoneRegex = /^\+\d{10,15}$/
                return phoneRegex.test(value || '') ? true : 'El número de teléfono debe estar en formato internacional (ej: +541123456789)'
            }),
        }),
        defineField({
            name: 'initialMessage',
            title: 'Mensaje Inicial',
            type: 'string',
            description: 'Mensaje que se prellenará automáticamente cuando el usuario inicie una conversación',
        }),
    ],
})

export default TWhatsappConfig
