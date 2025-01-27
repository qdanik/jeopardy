export type CategoriesState = {
  categories: AppCategories
}

export type AppCategories = AppCategory[]

export type AppCategory = {
  id: number
  title: string
  questions: AppQuestion[]
}

export type AppQuestion = {
  id: number
  question: string
  prize: number
}