import Label from "./label"
import Input from "./input"

const InputForm = (props) => {
    const { label, name, type, placeholder} = props
    return (
        <div className="mb-4">
            <Label htmlFor={name} text>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name}></Input>
        </div>
    )
}

export default InputForm