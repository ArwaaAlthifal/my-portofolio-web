const Label = (props) => {
    const { children, htmlFor } = props
    return (
        <label 
            htmlFor={htmlFor}
            className='block mb-2 text-sm font-medium text-slate-600'
            >
              {children}
        </label>
    )
}

export default Label
