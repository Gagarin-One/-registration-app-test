// src/entities/lecture/api/mockData.ts
import type { LectureGroup } from '../model/types'
import lecture1 from '../../../shared/assets/lectures/lecture1.png'
import lecture3 from '../../../shared/assets/lectures/lecture3.png'
import lecture4 from '../../../shared/assets/lectures/lecture4.png'
import defaultFrame from '../../../shared/assets/lectures/Frame 3.png'
export const mockLectureGroups: LectureGroup[] = [
  {
    id: '1',
    date: '7 апреля',
    lectures: [
      {
        id: '1-1',
        time: '11:00-12:00',
        title: 'Вертикальное импортозамещение: Путь к технологической безопасности сетей связи',
        speaker: 'Григорищенко Александр',
        position: 'Пресейл-менеджер',
        company: 'НТЦ ПРОТЕЙ',
        imageUrl: lecture1
      },
      {
        id: '1-2',
        time: '14:00-15:00',
        title: 'Генеративный ИИ в бизнесе: практические кейсы внедрения',
        speaker: 'Иванов Павел',
        position: 'Руководитель направления ИИ',
        company: 'Сбер',
        imageUrl: ''
      }
    ]
  },
  {
    id: '2',
    date: '8 апреля',
    lectures: [
      {
        id: '2-1',
        time: '10:00-11:30',
        title: 'Микрофронтенды: архитектурные подходы к построению масштабируемых приложений',
        speaker: 'Смирнов Денис',
        position: 'Lead Frontend Developer',
        company: 'Яндекс',
        imageUrl: lecture3
      },
      {
        id: '2-2',
        time: '16:00-17:30',
        title: 'Безопасность в облачных средах: стратегии защиты и мониторинг угроз',
        speaker: 'Козлов Андрей',
        position: 'CISO',
        company: 'VK Cloud',
        imageUrl: lecture4
      }
    ]
  }
]
export { defaultFrame }