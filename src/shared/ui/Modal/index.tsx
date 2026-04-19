import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
  type: 'success' | 'error'
}

export const Modal = ({ isOpen, onClose, title, message, type }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const bgColor = type === 'success' ? 'bg-accent-blue' : 'bg-accent-orange'
  const iconPath = type === 'success' 
    ? "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
    : "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-bg-primary border border-text-primary/10 rounded-2xl max-w-md w-full p-6 md:p-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-primary/40 hover:text-text-primary/60 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
          </svg>
        </div>

        <h3 className="text-h3-mobile md:text-h3-tablet lg:text-h3-desktop font-semibold text-center mb-3 text-text-primary">
          {title}
        </h3>
        
        <p className="text-body-m-mobile md:text-body-m-tablet lg:text-body-m-desktop text-text-primary/70 text-center">
          {message}
        </p>

        <button
          onClick={onClose}
          className={`w-full mt-8 py-3 px-4 rounded-xl font-semibold text-white transition-all
            ${bgColor} hover:opacity-90`}
        >
          Закрыть
        </button>
      </div>
    </div>
  )
}