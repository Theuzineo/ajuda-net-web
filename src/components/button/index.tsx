import { ButtonProps } from "./type"

function Button ({ label, onClick } : ButtonProps) {
    return(
        <button onClick={onClick}>{label}</button>
    )
}

export default Button