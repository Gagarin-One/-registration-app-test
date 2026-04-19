// src/entities/lecture/model/useLectures.ts
import { create } from 'zustand'

interface LecturesState {
  selectedIds: Set<string>
  toggleLecture: (id: string) => void
  isSelected: (id: string) => boolean
  selectedCount: number
  clearSelection: () => void
}

export const useLectures = create<LecturesState>((set, get) => ({
  selectedIds: new Set<string>(),
  
  toggleLecture: (id: string) => {
    const { selectedIds } = get()
    const newSet = new Set(selectedIds)
    
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    
    set({ 
      selectedIds: newSet,
      selectedCount: newSet.size 
    })
  },
  
  isSelected: (id: string) => get().selectedIds.has(id),
  
  selectedCount: 0,
  
  clearSelection: () => set({ 
    selectedIds: new Set(),
    selectedCount: 0 
  }),
}))