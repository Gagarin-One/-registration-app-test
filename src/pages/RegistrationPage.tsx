// src/pages/RegistrationPage.tsx
import { RegistrationWidget } from '../widgets/RegistrationWidget'

export const RegistrationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 lg:p-10" style={{ backgroundColor: '#131C2D' }}>
      <div className="w-full max-w-[1440px]">
        <RegistrationWidget />
      </div>
    </div>
  )
}