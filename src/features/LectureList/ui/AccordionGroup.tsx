// src/features/LectureList/ui/AccordionGroup.tsx
import { LectureCard } from './LectureCard'
import { useAccordion } from '../model/useAccordion'
import type { LectureGroup } from '../../../entities/lecture/model/types'

interface AccordionGroupProps {
  group: LectureGroup
  selectedIds: string[]
  onToggle: (id: string) => void
  isSelected: (id: string) => boolean
}

export const AccordionGroup = ({ group,  onToggle, isSelected }: AccordionGroupProps) => {
  const { isOpen, toggle } = useAccordion(false)

  return (
    <div className="w-full lg:max-w-[743px] mb-[24px] lg:mb-[32px] border-gradient-bottom">
      <button
        onClick={toggle}
        className="w-full px-0 py-4 flex items-center transition-colors"
      >
        <h3 className="text-h3 text-white">
          {group.date}
        </h3>
        <svg
          className={`ml-[10px] w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white/60 transition-transform duration-300 ${
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
        <div>
          {group.lectures.map((lecture) => (
            <LectureCard 
              key={lecture.id} 
              lecture={lecture}
              isSelected={isSelected(lecture.id)}
              onToggle={() => onToggle(lecture.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}