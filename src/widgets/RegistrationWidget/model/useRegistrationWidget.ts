
import { useState, useCallback } from 'react'
import { useLectures } from '../../../entities/lecture/model/useLectures'

export const useRegistrationWidget = () => {
  const { selectedCount } = useLectures()
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSuccessSubmit = useCallback(() => {
    setIsSuccessModalOpen(true)
  }, [])

  const handleErrorSubmit = useCallback((message: string) => {
    setErrorMessage(message)
    setIsErrorModalOpen(true)
  }, [])

  const closeSuccessModal = useCallback(() => {
    setIsSuccessModalOpen(false)
  }, [])

  const closeErrorModal = useCallback(() => {
    setIsErrorModalOpen(false)
  }, [])

  return {
    selectedCount,
    isSuccessModalOpen,
    isErrorModalOpen,
    errorMessage,
    handleSuccessSubmit,
    handleErrorSubmit,
    closeSuccessModal,
    closeErrorModal
  }
}