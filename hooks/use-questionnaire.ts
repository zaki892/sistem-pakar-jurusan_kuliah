"use client"

import { useState, useCallback } from "react"
import { analyzeUserProfile, type Major } from "@/lib/expert-system"

interface UseQuestionnaireReturn {
  answers: Record<number, string>
  setAnswer: (questionId: number, answer: string) => void
  clearAnswers: () => void
  getRecommendations: () => Major[]
  isComplete: boolean
}

export function useQuestionnaire(): UseQuestionnaireReturn {
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const setAnswer = useCallback((questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }))
  }, [])

  const clearAnswers = useCallback(() => {
    setAnswers({})
  }, [])

  const getRecommendations = useCallback(() => {
    return analyzeUserProfile(answers)
  }, [answers])

  const isComplete = Object.keys(answers).length >= 8 // Assuming 8 questions

  return {
    answers,
    setAnswer,
    clearAnswers,
    getRecommendations,
    isComplete,
  }
}
