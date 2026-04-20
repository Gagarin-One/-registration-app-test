
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registrationSchema, type RegistrationFormData } from './schema'
import { useLectures } from '../../../entities/lecture/model/useLectures'

interface UseRegistrationFormProps {
  onSuccess: () => void
  onError: (message: string) => void
  selectedCount: number
}

export const useRegistrationForm = ({ onSuccess, onError, selectedCount }: UseRegistrationFormProps) => {
  const { clearSelection } = useLectures()
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema)
  })

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      const shouldSucceed = Math.random() > 0.3
      
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      if (shouldSucceed) {
        console.log('Form data:', { ...data, selectedLectures: selectedCount })
        onSuccess()
        reset()
        clearSelection()
      } else {
        throw new Error('Сервер временно недоступен. Пожалуйста, попробуйте позже.')
      }
    } catch (error) {
      onError(error instanceof Error ? error.message : 'Произошла неизвестная ошибка')
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit
  }
}