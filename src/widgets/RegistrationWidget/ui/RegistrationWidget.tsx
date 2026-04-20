
import { LectureList } from '../../../features/LectureList'
import { RegistrationForm } from '../../../features/RegistrationForm'
import { Modal } from '../../../shared/ui/Modal'
import { useRegistrationWidget } from '../model/useRegistrationWidget'

export const RegistrationWidget = () => {
  const {
    selectedCount,
    isSuccessModalOpen,
    isErrorModalOpen,
    errorMessage,
    handleSuccessSubmit,
    handleErrorSubmit,
    closeSuccessModal,
    closeErrorModal
  } = useRegistrationWidget()

  return (
    <div className="flex flex-col lg:flex-row lg:gap-[25px] justify-center">
      <div className="flex-1 lg:max-w-[743px] w-full mx-auto lg:mx-0">
        <div className="mb-6 md:mb-[24px] max-w-[546px] mx-auto lg:mx-0">
          <h2 className="text-h2 text-white mb-3 md:mb-[24px] text-left">
            Программа лектория
          </h2>
          <p className="text-body-l text-white/70 text-left">
            Выберите интересующие вас темы и составьте индивидуальное расписание. Регистрация доступна на каждое событие отдельно.
          </p>
        </div>
        <LectureList />
      </div>

      <div className="w-full lg:w-[360px] mx-auto lg:mx-0 mt-[48px] md:mt-8 lg:mt-0">
        <h2 
          className="text-h2 text-white mb-[24px] md:mb-[48px] text-center w-full lg:w-[277px] lg:h-[96px] lg:mx-auto mx-auto"
          style={{ letterSpacing: '-0.5%' }}
        >
          Регистрация на лекторий
        </h2>
        
        <div className="p-[24px] md:p-[48px] bg-gradient-card border border-accent-blue rounded-[8px]">
          <RegistrationForm 
            onSuccess={handleSuccessSubmit}
            onError={handleErrorSubmit}
            selectedCount={selectedCount}
          />
        </div>
      </div>

      <Modal 
        isOpen={isSuccessModalOpen}
        onClose={closeSuccessModal}
        title="Успешная регистрация"
        message="Вы успешно зарегистрировались на выбранные лекции. На вашу почту отправлено подтверждение."
        type="success"
      />

      <Modal 
        isOpen={isErrorModalOpen}
        onClose={closeErrorModal}
        title="Ошибка регистрации"
        message={errorMessage}
        type="error"
      />
    </div>
  )
}