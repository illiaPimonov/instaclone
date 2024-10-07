import React from 'react'
import {Routes,Route} from 'react-router-dom';
import {Home} from './_root/pages';
import SigninForm from './_auth/forms/SignInForm';
import SignupForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/*Public*/}
            <Route element={<AuthLayout/>}>

            </Route>
            <Route path = '/sign-in' element={<SigninForm/>}/>
            <Route path = '/sign-up' element={<SignupForm/>}/>
            {/*Private*/}
            <Route element={<RootLayout/>}>

            </Route>
            <Route index element ={<Home/>}/>
        </Routes>
    </main>
  )
}

export default App