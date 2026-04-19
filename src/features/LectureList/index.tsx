import { AccordionGroup } from './ui/AccordionGroup'
import { mockLectureGroups } from '../../entities/lecture/api/mockData'

export const LectureList = () => {
  return (
    <div className="w-full">
      {mockLectureGroups.map((group) => (
        <AccordionGroup key={group.id} group={group} />
      ))}
    </div>
  )
}