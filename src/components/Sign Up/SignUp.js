import React from 'react'

import "./SignUp.css"
function SignUp() {
    
  return (
    <section className='sign-up'>
        <form action="">

          <div className="auth-container">
            <h1>Sign Up</h1>

            <div className="name-inputs">
              {/* <label htmlFor="firstName">First Name</label> */}
              <input type="text" name="firstName" id="firstName" placeholder='Enter First Name' required/>

              {/* <label htmlFor="lastName">Last Name</label> */}
              <input type="text" name="lastName" id="lastName" placeholder='Enter Lastname' required/>
            </div>

            {/* <label htmlFor="email">Email</label> */}
            <input type="email" name="email" id="email" placeholder='Enter Email' required/> 

            {/* <label htmlFor="password">Password</label> */}
            <input type="password" name="password" id="password" placeholder='Enter Password' required/> 
          

          </div>

        </form>

        <button className='signUp-btn'>Create Account</button>

        <a className='to-signIn'>&#8592; Already Have an account. Sign In</a>


    </section>
    
  )
}

export default SignUp