
import type { RegistrationFormData } from './schema'

type FieldConfig = {
  name: keyof RegistrationFormData
  label: string
  placeholder?: string
  type?: string
}

export const FORM_FIELDS: {
  firstRow: FieldConfig[]
  secondRow: FieldConfig[]
} = {
  firstRow: [
    {
      name: 'fullName',
      label: 'ФИО*',
      placeholder: 'Иванов Иван Иванович'
    },
    {
      name: 'phone',
      label: 'Телефон*',
      type: 'tel',
      placeholder: '+7 (987) 654-32-10'
    }
  ],
  secondRow: [
    {
      name: 'company',
      label: 'Компания*',
      placeholder: 'Название компании'
    },
    {
      name: 'position',
      label: 'Должность*',
      placeholder: 'Руководитель отдела...'
    }
  ]
}