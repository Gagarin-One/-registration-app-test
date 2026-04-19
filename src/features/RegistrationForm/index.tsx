import { useForm } from 'react-hook-form'
import { registrationSchema, type RegistrationFormData } from './model/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputField } from './ui/InputField'
import { useLectures } from '../../entities/lecture/model/useLectures'

interface RegistrationFormProps {
  onSuccess: () => void
  onError: (message: string) => void
  selectedCount: number
}

export const RegistrationForm = ({ onSuccess, onError, selectedCount }: RegistrationFormProps) => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
      <div className="grid grid-cols-1 min-[376px]:grid-cols-2 lg:grid-cols-1 gap-[24px]">
        <InputField
          label="ФИО*"
          placeholder="Иванов Иван Иванович"
          error={errors.fullName?.message}
          {...register('fullName')}
        />
        
        <InputField
          label="Телефон*"
          type="tel"
          placeholder="+7 (987) 654-32-10"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>
      
      <div className="grid grid-cols-1 min-[376px]:grid-cols-2 lg:grid-cols-1 gap-[24px] mt-[24px]">
        <InputField
          label="Компания*"
          placeholder="Название компании"
          error={errors.company?.message}
          {...register('company')}
        />
        
        <InputField
          label="Должность*"
          placeholder="Руководитель отдела..."
          error={errors.position?.message}
          {...register('position')}
        />
      </div>
      
      <div className="mt-[24px]">
        <InputField
          label="Email*"
          type="email"
          placeholder="example@company.ru"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>
      
      <div className="flex flex-col gap-[8px] mt-[24px]">
        <label className="font-['Montserrat'] font-normal text-[14px] leading-[20px] min-[376px]:text-[14px] min-[376px]:leading-[20px] lg:text-[16px] lg:leading-[24px] text-white">
          Ваши вопросы к обсуждению
        </label>
        <textarea
          {...register('questions')}
          rows={6}
          className="w-full px-[8px] py-[8px] rounded-[8px] text-white placeholder-white/30
            focus:outline-none focus:ring-2 focus:ring-[#75C9EA] focus:border-transparent
            resize-none transition-all font-['Montserrat'] font-normal
            text-[10px] leading-[12px]
            min-[376px]:text-[12px] min-[376px]:leading-[20px]
            lg:text-[14px] lg:leading-[20px]"
          style={{
            background: 'rgba(0, 12, 20, 0.5)',
            border: 'none'
          }}
          placeholder="Какие темы вам особенно интересны?"
        />
      </div>
      
      <div className="font-['Montserrat'] font-normal
        text-[12px] leading-[15px]
        min-[376px]:text-[14px] min-[376px]:leading-[20px]
        lg:text-[16px] lg:leading-[24px]
        text-white mt-[48px]">
        Выбрано {selectedCount} лекции
      </div>
      
      <div className="flex flex-col gap-[8px] mt-[48px]">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-[48px] font-['Montserrat'] font-normal
            text-[12px] leading-[15px]
            min-[376px]:text-[14px] min-[376px]:leading-[20px]
            lg:text-[16px] lg:leading-[24px]
            text-white hover:opacity-90 transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: 'var(--gradient-card) padding-box border-box',
            border: '1px solid transparent',
            borderRadius: '8px'
          }}
        >
          {isSubmitting ? 'Отправка...' : 'Зарегистрироваться'}
        </button>
        
        <p className="font-['Montserrat'] font-normal
          text-[10px] leading-[12px]
          min-[376px]:text-[12px] min-[376px]:leading-[20px]
          lg:text-[14px] lg:leading-[20px]
          text-center text-white/30">
          Нажимая кнопку, вы соглашаетесь с{' '}
          <span className="underline">политикой обработки персональных данных.</span>
        </p>
      </div>
    </form>
  )
}