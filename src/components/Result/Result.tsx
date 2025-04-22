import { Result } from "../../interfaces/question.interface"
import "./Result.css"

interface Props {
    result: Result
}

const Results: React.FC<Props> = ({ result }) => {

    const ChooseColor = (letter: string) => {
        switch (letter) {
            case "A":
                return "#00B050"
            case "B":
                return "#92D050"
            case "C":
                return "#FFFF00"
            case "D":
                return "#FFC000"
            case "E":
                return "#FF9900"
            case "F":
                return "#FF3300"
            case "G":
                return "#C00000"
        }
    }


    return (
        <main className="flex flex-col container_result gap-4 text-center">
            <div className="flex flex-col w-full items-center justify-center">
                <h1 className="text-4xl"> Etiquette Energétique </h1>
                <p className="text-5xl" style={{
                    color: ChooseColor(result.note)
                }}>{result.note}</p>
            </div>
            <div className="flex flex-col w-full items-center justify-center">
                <p className="text-xl">{result.summary}</p>
            </div>
        </main>
    )
}

export default Results