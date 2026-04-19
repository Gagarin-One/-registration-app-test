// src/features/LectureList/ui/LectureCard.tsx
import type { Lecture } from '../../../entities/lecture/model/types';
import { useLectures } from '../../../entities/lecture/model/useLectures';

interface LectureCardProps {
  lecture: Lecture;
}

export const LectureCard = ({ lecture }: LectureCardProps) => {
  const { toggleLecture, isSelected } = useLectures();
  const selected = isSelected(lecture.id);

  return (
    <div
      onClick={() => toggleLecture(lecture.id)}
      className={`w-full max-w-[743px] mb-4 cursor-pointer transition-all ${
        selected ? 'ring-2 ring-[#75C9EA]' : ''
      }`}
      style={{
        background:
          'linear-gradient(90deg, rgba(0, 109, 239, 0.1) 0%, rgba(114, 199, 252, 0.1) 100%)',
        borderRadius: '8px',
        padding: '24px',
      }}>
      <div className="flex flex-row items-start gap-4">
        <div
          className="w-[120px] h-[160px] flex-shrink-0 rounded-lg overflow-hidden"
          style={{
            background: `url(${lecture.imageUrl}) center/cover, rgba(114, 199, 252, 0.1)`,
            padding: '12px',
          }}>
          <div className="w-full h-full" />
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <div
            className="inline-flex items-center px-4 py-0.5 w-[104px] h-[24px]"
            style={{
              background:
                'linear-gradient(90deg, rgba(0, 109, 239, 0.1) 0%, rgba(114, 199, 252, 0.1) 100%)',
              border: '1px solid #75C9EA',
              borderRadius: '8px',
              borderImageSlice: 1,
            }}>
            <span className="font-['Montserrat'] w-[72px] font-normal text-[14px] leading-[20px] text-white whitespace-nowrap">
  {lecture.time}
</span>
          </div>

          <h3 className="font-['Montserrat'] font-semibold text-[24px] leading-[32px] text-white">
            {lecture.title}
          </h3>

          <div className="flex flex-col">
            <p className="font-['Montserrat'] font-normal text-[16px] leading-[24px] text-white">
              {lecture.speaker}, {lecture.position}
            </p>
            <p className="font-['Montserrat'] font-normal text-[16px] leading-[24px] text-white">
              {lecture.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
