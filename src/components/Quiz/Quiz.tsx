import { useEffect, useState } from "react"
import { AnswserToResponse, Question, ResponseAnswer, Result } from "../../interfaces/question.interface"
import "./Quiz.css"
import Results from "../Result/Result"

const Quiz = () => {

    const [questions, setQuestions] = useState<Question[]>([

    ])

    const fetchQuestion = async () => {
        const response = await fetch("http://10.33.68.249:5000/volterra/questions/batch")
        return response.json()
    }

    const postResponse = async () => {
        console.log(JSON.stringify(responseAnswer))
        const response = await fetch("http://10.33.68.249:5000/volterra/evaluation",
            {
                method: "POST",
                body: JSON.stringify(responseAnswer),
                headers: {
                    "Content-Type": "application/json"
                },
                
            }
        )

        return response.json()
    }

    const [indexQuestion, setIndexQuestion] = useState(0)
    const [answerChecked, setAnswerChecked] = useState<number | null>(null)
    const [responseAnswer, setResponseAnswer] = useState<ResponseAnswer>({
        answers: []
    })

    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState<Result>()


    useEffect(() => {
        fetchQuestion().then((value) => {
            console.log(value)
            setQuestions(value)
        })
    }, [])

    const OnNextQuestion = async () => {
        if (!answerChecked) return

        const FormatResponse: AnswserToResponse = {
            questionId: questions[indexQuestion].id,
            answerId: answerChecked
        }

        const updatedAnswers = [...responseAnswer.answers, FormatResponse];

        setResponseAnswer({ answers: updatedAnswers });
        
        if (questions[indexQuestion].id === questions[questions.length - 1].id) {
            setIsLoading(true)
            postResponse().then((value) => {
                setResult(value)
            })
            
            return
        }

        setIndexQuestion(indexQuestion + 1)

    }

    return (
        <main>
            {
                !isLoading ? (
                    <div>

                        <div className="w-full text-center font-medium text-xl">
                            { questions.length !== 0 ? (
                                questions[indexQuestion].text
                            ) : null
                            }
                        </div>

                        <div className="w-full">
                            <form>
                                {
                                    questions.length !== 0 ? (
                                        
                                        questions[indexQuestion].answers.map((answer, index) => (
                
                                            <div className="radio-group" key={index}>
                                                <label className="custom-radio">
                                                    <input type="radio" value={answer.id} checked={ answerChecked === answer.id } onChange={() => setAnswerChecked(answer.id)}/>
                                                    <span className="radio-btn"></span>
                                                    {answer.value}
                                                </label>
                                            </div>
                
                                        ))
                                    ) : null
                                }
                            </form>
                        </div>

                        <div>
                            <div className="button-primary" onClick={() => OnNextQuestion()}>
                                Suivant
                            </div>
                        </div>
                    </div>
                ) : 
                <div>
                    { result ? (
                        <Results result={result} />
                    ) : <span className="loader"></span>
                    }
                </div>
            }
        </main>
    )
}

export default Quiz