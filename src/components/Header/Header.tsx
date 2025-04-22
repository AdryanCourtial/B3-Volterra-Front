import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
    return (
        <header className="flex justify-between w-[100vw] py-4">
            <div className="w-fit">
                ICON
            </div>
            <div className="flex max-w-[50%] justify-center flex-1">
                <div className="flex w-full gap-8 justify-end">

                    <Link className="" to="/"> Accueil </Link>

                    <Link to="/questionnaire"> Questionnaire </Link>

                </div>
            </div>
        </header>
    )
}

export default Header