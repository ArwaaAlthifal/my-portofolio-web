import { Link } from "react-router-dom"

const AuthLayouts = (props) => {
    const {children, title, type} = props
    return (
                <div className='w-full max-w-xs'>
                    <h1 className='text-3xl font-bold mb-1 text-slate-700'>{title}</h1>
                    <p className='font-light text-slate-600 mb-8'>Welcome, Please enter your details</p>
                    {children}

                    {type === 'login' ? 
                    <p className='text-sm text-center text-slate-600'>Don't have an account? <Link to="/register" className='text-slate-800 font-semibold'>Register</Link></p> : 
                    <p className='text-sm text-center text-slate-600'>Don't have an account? <Link to="/login" className='text-slate-800 font-semibold'>Login</Link></p>}
                    
                </div>
    )
}

export default AuthLayouts