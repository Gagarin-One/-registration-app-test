
import { RegistrationWidget } from '../widgets/RegistrationWidget'

export const RegistrationPage = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center px-[20px] py-[20px] md:px-[63px] md:py-[63px] lg:px-[100px] lg:py-[100px]"
      style={{ backgroundColor: '#131C2D' }}
    >
      <div className="w-full max-w-[1440px]">
        <RegistrationWidget />
      </div>
    </div>
  )
}