import './button.module.scss'

const Button = ({ text, onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button