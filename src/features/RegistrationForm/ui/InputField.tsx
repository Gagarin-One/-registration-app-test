// src/features/RegistrationForm/ui/InputField.tsx
import { forwardRef, type InputHTMLAttributes } from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[8px] w-full">
        <label className="font-['Montserrat'] font-normal text-[16px] leading-[24px] text-white">
          {label}
        </label>
        <input
          ref={ref}
          className={`w-full px-[8px] py-[8px] rounded-[8px] text-white placeholder-white/30
            focus:outline-none focus:ring-2 focus:ring-[#75C9EA] focus:border-transparent
            transition-all font-['Montserrat'] font-normal text-[14px] leading-[20px]
            ${error ? 'ring-2 ring-[#FF6600]' : ''}`}
          style={{
            background: 'rgba(0, 12, 20, 0.5)',
            border: 'none'
          }}
          {...props}
        />
        {error && (
          <p className="font-['Montserrat'] font-normal text-[12px] leading-[16px] text-[#FF6600]">
            {error}
          </p>
        )}
      </div>
    )
  }
)

InputField.displayName = 'InputField'