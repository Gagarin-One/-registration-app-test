import { z } from 'zod'

export const registrationSchema = z.object({
  fullName: z.string().min(1, 'ФИО обязательно для заполнения'),
  phone: z.string()
    .min(1, 'Телефон обязателен')
    .regex(/^\+7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/, 'Неверный формат телефона'),
  company: z.string().min(1, 'Компания обязательна'),
  position: z.string().min(1, 'Должность обязательна'),
  email: z.string()
    .min(1, 'Email обязателен')
    .email('Неверный формат email'),
  questions: z.string().optional()
})

export type RegistrationFormData = z.infer<typeof registrationSchema>