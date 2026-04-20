
import { InputField } from './ui/InputField'
import { useRegistrationForm } from './model/useRegistrationForm'

interface RegistrationFormProps {
  onSuccess: () => void
  onError: (message: string) => void
  selectedCount: number
}

export const RegistrationForm = ({ onSuccess, onError, selectedCount }: RegistrationFormProps) => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit
  } = useRegistrationForm({ onSuccess, onError, selectedCount })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[24px]">
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[24px] mt-[24px]">
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
        <label className="text-body-m text-white">
          Ваши вопросы к обсуждению
        </label>
        <textarea
          {...register('questions')}
          rows={6}
          className="w-full px-[8px] py-[8px] rounded-[8px] text-white placeholder-white/30
            focus:outline-none focus:ring-2 focus:ring-[#75C9EA] focus:border-transparent
            resize-none transition-all text-caption bg-input-dark"
          placeholder="Какие темы вам особенно интересны?"
        />
      </div>
      
      <div className="text-body-m text-white mt-[24px]">
        Выбрано <span className="text-accent-blue">{selectedCount}</span> лекции
      </div>
      
      <div className="flex flex-col gap-[8px] mt-[48px]">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-[48px] text-body-m text-white
            hover:opacity-90 transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            bg-gradient-card border border-accent-blue rounded-[8px]"
        >
          {isSubmitting ? 'Отправка...' : 'Зарегистрироваться'}
        </button>
        
        <p className="text-caption text-center text-white/30">
          Нажимая кнопку, вы соглашаетесь с{' '}
          <span className="underline">политикой обработки персональных данных.</span>
        </p>
      </div>
    </form>
  )
}