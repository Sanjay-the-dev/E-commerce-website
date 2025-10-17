import React from 'react'
import './loginPage.css';
import { useState } from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';

const LoginPage = () => {

    const [show1, setShow1] = useState(false);

    const submitHandler = (e) => {
      e.preventDefault();

      const form = e.target;
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
  
      setShow1(true);
      form.classList.remove('was-validated');
      form.reset();
     
    }
  return (
    <div>
        <div className="container vh-100  p-0" >

  <ToastContainer className=" position-fixed top-0  start-50 p-5" position={ 'top-center'} style={{ zIndex: 1 }}>
    <Toast onClose={() => setShow1(false)} show={show1} delay={3000} autohide>
      <Toast.Body className={'bg-success text-light text-center fs-6'}>Account Created !</Toast.Body>
    </Toast>
  </ToastContainer>

            
            <div className="E-Login-Card">
                <h2 className=' h2'>Sign in or create account</h2>

                <form className='needs-Validation' noValidate onSubmit={submitHandler} >
                    <div className="position-relative">
                    <label htmlFor='userName' className='form-label mt-3' >Username : </label>
                    <input type='text' className=' form-control' id="userName" placeholder='Enter username' autoComplete='off' required />
                    <div className='invalid-tooltip'>Enter User Name</div>
                    </div>

                    <div className="position-relative">
                    <label htmlFor='e-mail' className='form-label mt-3' >Email: </label>
                    <input type='email' className=' form-control' id="e-mail" placeholder='Enter email' autoComplete='off' required />
                    <div className='invalid-tooltip'>e-mail must contain '@' and '.com'</div> 
                    </div>

                    <div className="position-relative">
                    <label htmlFor='pass' className='form-label mt-3' >Password : </label>
                    <input type='password' className=' form-control' id="pass" placeholder='Enter password' autoComplete='off' required />
                    <div className='invalid-tooltip'>Enter Password</div>
                    </div>

                    <button type='submit' className='btn btn-primary mt-4 w-100' >Submit</button>
                </form>

            </div>


        </div>

    </div>
  )
}

export default LoginPage