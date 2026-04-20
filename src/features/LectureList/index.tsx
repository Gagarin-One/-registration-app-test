
import { mockLectureGroups } from '../../entities/lecture/api/mockData'
import { AccordionGroup } from './ui/AccordionGroup'


export const LectureList = () => {
  return (
    <div>
      {mockLectureGroups.map((group) => (
        <AccordionGroup key={group.id} group={group} />
      ))}
    </div>
  )
}