const Input = (props) => {
    const { type, placeholder, name } = props
    return (
        <input 
            type={type}
            className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3 placeholder: opacity-70'
            placeholder={placeholder}
            name={name}
            id={name}
        />
    )
}

export default Input