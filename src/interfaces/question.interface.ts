export interface Answers {
    id: number
    value: string
}

export interface Question {
    id: number
    text: string
    answers: Answers[]
}