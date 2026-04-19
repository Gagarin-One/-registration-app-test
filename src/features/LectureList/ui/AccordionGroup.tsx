// src/features/LectureList/ui/AccordionGroup.tsx
import { useState } from 'react'
import { LectureCard } from './LectureCard'
import type { LectureGroup } from '../../../entities/lecture/model/types'

interface AccordionGroupProps {
  group: LectureGroup
}

export const AccordionGroup = ({ group }: AccordionGroupProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full max-w-[743px] mt-[48px]" style={{
      borderBottom: '1px solid',
      borderImage: 'linear-gradient(90deg, #77CDDD 0%, #0BA1DD 100%) 1'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-0 pb-4 flex items-center transition-colors"
        
      >
        <h3 className="font-['Montserrat'] font-semibold text-[24px] leading-[32px] text-white">
          {group.date}
        </h3>
        <svg
          className={`ml-[10px] w-6 h-6 text-white/60 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div >
          {group.lectures.map((lecture) => (
            <LectureCard key={lecture.id} lecture={lecture} />
          ))}
        </div>
      )}
    </div>
  )
}