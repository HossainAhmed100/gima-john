import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsBoxArrowInLeft, BsBoxArrowUpRight} from 'react-icons/bs'

function SignUp() {
    const handleFormSubmit = () => {
        console.log('sumbin')
    }
    
    const handleEmailChange = () => {
        console.log('emmail')
    }
    const handlePasswordChange = () => {
        console.log('password')
    }
  return (
    <div className='bg-slate-100 h-screen'>
    <div className='py-20'>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 className="text-4xl font-medium">SignUp</h1>
        <p className="text-slate-500">Hi, Welcome Gigma 👋</p>

        <div className="my-5">
            <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt=""/> <span>Signup with Google</span>
            </button>
        </div>
        <form onSubmit={handleFormSubmit} className="my-10">
            <div className="flex flex-col space-y-5">
                <label htmlFor="email">
                    <p className="font-medium text-slate-700 pb-2">Email address</p>
                    <input onBlur={handlePasswordChange} id="email" name="email" type="email" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address"/>
                </label>
                <label htmlFor="password">
                    <p className="font-medium text-slate-700 pb-2">Password</p>
                    <input onBlur={handleEmailChange} id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password"/>
                </label>
                <div className="flex flex-row justify-between">
                    <div>
                        <label htmlFor="remember" className="flex items-center justify-center">
                            <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600 mr-1"/>
                            Remember me
                        </label>
                    </div>
                    <div>
                        <a href="/" className="font-medium text-indigo-600">Forgot Password?</a>
                    </div>
                </div>
                <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <BsBoxArrowInLeft className='font-bold' size={23}/>
                      <span>Login</span>
                </button>
                <p className="text-center">Alredy have a account? <NavLink to="/login" className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Login now </span><span>
                  <BsBoxArrowUpRight />
                  </span></NavLink></p>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default SignUp