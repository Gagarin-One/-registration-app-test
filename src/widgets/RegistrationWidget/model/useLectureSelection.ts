// src/widgets/RegistrationWidget/model/useLectureSelection.ts
import { useState, useCallback, useMemo } from 'react'

export const useLectureSelection = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const toggleLecture = useCallback((id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((selectedId) => selectedId !== id)
      }
      return [...prev, id]
    })
  }, [])

  const isSelected = useCallback((id: string) => {
    return selectedIds.includes(id)
  }, [selectedIds])

  const clearSelection = useCallback(() => {
    setSelectedIds([])
  }, [])

  const selectedCount = useMemo(() => selectedIds.length, [selectedIds])

  return {
    selectedIds,
    selectedCount,
    toggleLecture,
    isSelected,
    clearSelection
  }
}