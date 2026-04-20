
import type{ LectureGroup } from '../model/types'
import speaker1 from '../../../shared/assets/lectures/lecture5.png'
import speaker2 from '../../../shared/assets/lectures/lecture6.png'

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
        imageUrl: speaker1
      },
      {
        id: '1-2',
        time: '12:00-13:00',
        title: 'Экосистема Унифицированных Коммуникаций ПРОТЕЙ',
        speaker: 'Роман Дмитриев',
        position: 'Пресейл-менеджер',
        company: 'ПРОТЕЙ Технологии',
        imageUrl: speaker2
      },
      {
        id: '1-3',
        time: '12:00-13:00',
        title: 'Единая среда реагирования: как связь управляет инцидентами в ERP и системах безопасности',
        speaker: 'Павел Филлипов',
        position: 'Руководитель группы продуктового маркетинга',
        company: 'ПРОТЕЙ Технологии',
        imageUrl: speaker1
      },
      {
        id: '1-4',
        time: '16:00-17:00',
        title: 'Управление инфраструктурой в распределенных сетях: котроль сотен объектов из одной точки',
        speaker: 'Роман Дмитриев',
        position: 'Пресейл-менеджер',
        company: 'ПРОТЕЙ Технологии',
        imageUrl: speaker2
      }
    ]
  },
  {
    id: '2',
    date: '8 апреля',
    lectures: [
      {
        id: '2-1',
        time: '11:00-12:00',
        title: 'Выделенные сети pLTE на объектах КИИ. Надежная транспортная среда для взаимодействия людей и координации устройств',
        speaker: 'Кочетков Игорь',
        position: 'руководитель направления частных сетей',
        company: 'НТЦ ПРОТЕЙ',
        imageUrl: ''
      },
      {
        id: '2-2',
        time: '12:00-13:00',
        title: 'Технологии профессиональной радиосвязи для критической связи в экстренных ситуациях',
        speaker: 'Григорищенко Александр',
        position: 'руководитель продуктового офиса NGN/IMS',
        company: 'НТЦ ПРОТЕЙ',
        imageUrl: speaker1
      },
      {
        id: '2-3',
        time: '12:00-13:00',
        title: 'Тактическая система связи и оперативного реагирования «Метель»',
        speaker: 'Павел Филлипов',
        position: 'руководитель группы продуктового маркетинга',
        company: 'ПРОТЕЙ Технологии',
        imageUrl: speaker1
      },
      {
        id: '2-4',
        time: '16:00-17:00',
        title: 'Тактическая система связи и оперативного реагирования «Метель»',
        speaker: 'Олег Федоровских',
        position: 'руководитель проектного офиса',
        company: 'ПРОТЕЙ СТ',
        imageUrl: speaker1
      }
    ]
  },
  {
    id: '3',
    date: '9 апреля',
    lectures: [
      {
        id: '3-1',
        time: '11:00-12:00',
        title: 'Надежная корпоративная сеть телефонной связи - что нужно и как создать?',
        speaker: 'Пыхалов Виталий',
        position: 'Менеджер продуктов',
        company: 'ПРОТЕЙ Технологии',
        imageUrl: speaker1
      },
      {
        id: '3-2',
        time: '12:00-13:00',
        title: 'Стратегия обеспечения высокой доступности и надёжности информационных систем',
        speaker: 'Олег Федоровских',
        position: 'Пресейл-менеджер',
        company: 'НТЦ ПРОТЕЙ',
        imageUrl: speaker1
      },
      {
        id: '3-3',
        time: '12:00-13:00',
        title: 'Неизвестно, будет ли',
        speaker: 'Григорищенко Александр',
        position: 'Пресейл-менеджер',
        company: 'НТЦ ПРОТЕЙ',
        imageUrl: speaker1
      },
      {
        id: '3-4',
        time: '16:00-17:00',
        title: 'Неизвестно, будет ли',
        speaker: 'Григорищенко Александр',
        position: 'Пресейл-менеджер',
        company: 'НТЦ ПРОТЕЙ',
        imageUrl: speaker1
      }
    ]
  }
]

export { defaultFrame }