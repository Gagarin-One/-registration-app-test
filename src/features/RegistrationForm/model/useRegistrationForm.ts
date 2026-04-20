
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { registrationSchema, type RegistrationFormData } from './schema'

interface UseRegistrationFormProps {
  onSuccess: () => void
  onError: (message: string) => void
  selectedCount: number
}

interface UseRegistrationFormReturn {
  register: ReturnType<typeof useForm<RegistrationFormData>>['register']
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
  errors: ReturnType<typeof useForm<RegistrationFormData>>['formState']['errors']
  isSubmitting: boolean
}

export const useRegistrationForm = ({ 
  onSuccess, 
  onError, 
  selectedCount 
}: UseRegistrationFormProps): UseRegistrationFormReturn => {
  const {
    register,
    handleSubmit: hookHandleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema)
  })

  const onSubmit: SubmitHandler<RegistrationFormData> = useCallback(async (data) => {
    try {
      const shouldSucceed = Math.random() > 0.3
      
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      if (shouldSucceed) {
        console.log('Form data:', { ...data, selectedLectures: selectedCount })
        onSuccess()
        reset()
      } else {
        throw new Error('Сервер временно недоступен. Пожалуйста, попробуйте позже.')
      }
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Произошла неизвестная ошибка')
    }
  }, [onSuccess, onError, selectedCount, reset])

  return {
    register,
    handleSubmit: hookHandleSubmit(onSubmit),
    errors,
    isSubmitting
  }
}