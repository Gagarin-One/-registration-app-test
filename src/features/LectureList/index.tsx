// src/features/LectureList/index.tsx
import { mockLectureGroups } from '../../entities/lecture/api/mockData'
import { AccordionGroup } from './ui/AccordionGroup'


interface LectureListProps {
  selectedIds: string[]
  onToggle: (id: string) => void
  isSelected: (id: string) => boolean
}

export const LectureList = ({ selectedIds, onToggle, isSelected }: LectureListProps) => {
  return (
    <div>
      {mockLectureGroups.map((group) => (
        <AccordionGroup 
          key={group.id} 
          group={group}
          selectedIds={selectedIds}
          onToggle={onToggle}
          isSelected={isSelected}
        />
      ))}
    </div>
  )
}