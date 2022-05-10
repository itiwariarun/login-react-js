import {React, useState} from 'react';
import Dashboard from './Dashboard'
import {useNavigate, useLocation} from 'react-router-dom'
// import { BrowserRouter as Router,Routes,Route, Navigate, BrowserRouter } from 'react-router-dom'
const Login = () => {
// const navigate = useNavigate()
// const location = useLocation()
//  const redirectPath = location.state?.Dashboard||'/'
 const handleFormSubmit = (e) => {

        e.preventDefault();
      let email = e.target.elements.email?.value;
       console.log(email)
       alert( window.location.href="./Dashboard.js")
       
      // navigate(redirectPath,{replace:false})
      
    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     return(
    //         <BrowserRouter>
    //         <Router>
    //         <Routes>
    //        <Route path="/Dashboard" element={"/Dashboard"}>

    //       </Route>
    //       </Routes>

    //         </Router>
    //         </BrowserRouter>
    //     )
    };
    return (
        <div className='h-screen flex bg-gray-700'>
            <div className='w-full  max-w-md m-auto bg-orange-200 rounded-lg border border-primary Border opacity:-50 shadow-2xl shadow-black py-10 px-16'>
                <h1 className='text-2xl font-serif text-sky-900 mt-2 mb-11 text-center'>
                    Log in to your account <span className='shadow-2xl'>&#128274;</span>
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                     <label htmlFor='email'  className='text-red-900 text-lg'>&#128231;	 Email</label>
                        <input
                            type='email'
                            className={`hover:bg-blue-100 w-full p-2 text-black-600 mary border shadow-2xl rounded-md outline-none text-sm hover:border-4 hover:border-b-green-600 transition duration-150 ease-in-out mb-8 hover:text-red-800 hover:border-green-300`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                    <label htmlFor='password' className='text-red-900 text-lg'>  &#128273; Password</label>
                        <input
                            type='password'
                            className={`w-full hover:bg-blue-100 p-2 text-gray-600 border shadow-2xl  rounded-md outline-none text-sm hover:border-4 hover:border-b-green-600 transition duration-150 ease-in-out mb-4 hover:text-red-800 hover:border-green-300`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button type='submit'
                            className={`bg-Red hover:bg-yellow-900 py-2 px-4 text-sm text-green-900 border shadow-xl hover:shadow-slate-600  shadow-orange-300 rounded border hover:border-4 border-black hover:outline-none hover:text-slate-100 hover:font-style-bold hover:border-amber-700`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

