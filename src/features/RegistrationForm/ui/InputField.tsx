
import { forwardRef, type InputHTMLAttributes } from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-[8px] w-full">
        <label className="text-body-m text-white">
          {label}
        </label>
        <input
          ref={ref}
          className={`w-full px-[8px] py-[8px] rounded-[8px] text-white placeholder-white/30
            focus:outline-none focus:ring-2 focus:ring-[#75C9EA] focus:border-transparent
            transition-all text-caption bg-input-dark
            ${error ? 'ring-2 ring-[#FF6600]' : ''}
            ${className || ''}`}
          {...props}
        />
        {error && (
          <p className="text-caption text-[#FF6600]">
            {error}
          </p>
        )}
      </div>
    )
  }
)

InputField.displayName = 'InputField'