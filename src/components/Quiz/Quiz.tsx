import { useEffect, useState } from "react"
import { Question } from "../../interfaces/question.interface"
import "./Quiz.css"

const Quiz = () => {

    const [questions, setQuestions] = useState<Question[]>([
        {
            "id": 7,
            "text": "As-tu des habitudes pour réduire ta conso électrique ?",
            "answers": [
            {
                "id": 20,
                "value": "Oui : je cuisine groupé, fais tourner mes machines la nuit, etc."
            },
            {
                "id": 21,
                "value": "Parfois, mais pas de façon régulière."
            },
            {
                "id": 22,
                "value": "Non, je fais pas vraiment attention."
            }
            ]
        }
    ])

    const [indexQuestion, setIndexQuestion] = useState(0)
    const [answerChecked, setAnswerChecked] = useState()


    useEffect(() => {
        // Requete API Vers les questions

        setQuestions
    }, [])

    return (
        <main>
            <div className="w-full text-center font-medium text-xl">
                {questions[indexQuestion].text}
            </div>

            <div className="w-full">
                <form>
                    {
                        questions[indexQuestion].answers.map((answer) => (

                            <div className="radio-group">
                                <label className="custom-radio">
                                    <input type="radio" value={answer.id} checked={ answerChecked === answer.id } />
                                    <span className="radio-btn"></span>
                                    {answer.value}
                                </label>
                            </div>

                        ))
                    }
                </form>
            </div>
        </main>
    )
}

export default Quiz