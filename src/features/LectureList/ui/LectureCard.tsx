
import { defaultFrame } from '../../../entities/lecture/api/mockData'
import type { Lecture } from '../../../entities/lecture/model/types'
import { useLectures, useIsSelected } from '../../../entities/lecture/model/useLectures'


interface LectureCardProps {
  lecture: Lecture
}

export const LectureCard = ({ lecture }: LectureCardProps) => {
  const toggleLecture = useLectures((state) => state.toggleLecture)
  const selected = useIsSelected(lecture.id)
  const imageSource = lecture.imageUrl || defaultFrame

  return (
    <div
      onClick={() => toggleLecture(lecture.id)}
      className={`w-full lg:max-w-[743px] mb-4 cursor-pointer transition-all
        bg-gradient-card rounded-[8px] p-[16px]
        ${selected ? 'ring-2 ring-accent-blue' : ''}`}
    >
      <div className="flex flex-row items-start gap-3 md:gap-4">
        <div 
          className="w-[80px] h-[120px] md:w-[120px] md:h-[160px] flex-shrink-0 rounded-lg overflow-hidden bg-cover bg-center p-[12px]"
          style={{
            backgroundImage: `url(${imageSource}), linear-gradient(rgba(114, 199, 252, 0.1), rgba(114, 199, 252, 0.1))`
          }}
        >
          <div className="w-full h-full" />
        </div>
        
        <div className="flex flex-col gap-2 flex-1">
          <div 
            className="inline-flex items-center justify-center px-3 md:px-4 py-0.5 w-auto max-w-[104px] h-[24px]
              bg-gradient-card border border-accent-blue rounded-[8px]"
          >
            <span className="text-caption text-white whitespace-nowrap">
              {lecture.time}
            </span>
          </div>
          
          <h3 className="text-h3 text-white">
            {lecture.title}
          </h3>
          
          <div className="flex flex-col">
            <p className="text-body-m text-white">
              {lecture.speaker}, {lecture.position}
            </p>
            <p className="text-body-m text-white">
              {lecture.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}