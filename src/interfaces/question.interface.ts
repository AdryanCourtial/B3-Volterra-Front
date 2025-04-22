export interface Answers {
    id: number
    value: string
}

export interface Question {
    id: number
    text: string
    answers: Answers[]
}

export interface AnswserToResponse {
    questionId: number,
    answerId: number
}

export interface ResponseAnswer {
    answers: AnswserToResponse[]
}

export interface Result {
    note: string
    summary: string
}