// src/entities/lecture/model/types.ts
export interface Lecture {
  id: string
  time: string
  title: string
  speaker: string
  position: string
  company: string
  imageUrl: string
}

export interface LectureGroup {
  id: string
  date: string
  lectures: Lecture[]
}