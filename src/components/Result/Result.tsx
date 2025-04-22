import { Result } from "../../interfaces/question.interface"

interface Props {
    result: Result
}

const Results: React.FC<Props> = ({ result }) => {


    return (
        <main className="bg-amber-400">
            <p> {"Votre note :" + result.note}</p>
            <p> {"Votre Bilan :" + result.summary}</p>
        </main>
    )
}

export default Results