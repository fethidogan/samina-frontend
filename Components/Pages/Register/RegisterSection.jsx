import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';


const RegisterSection = () => {
  // STATES
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // REGİSTER REQUEST
  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='login-section'>
      <div className='materialContainer'>
        <div className='box'>
          <div className='login-title'>
            <h2>Register</h2>
          </div>

          <Form onSubmit={handleSubmit}>
            <div className='input'>
              <Input
                placeholder='Full Name'
                type='text'
                name='name'
                id='name'
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <span className='spin'></span>
            </div>

            <div className='input'>
              <Input
                type='text'
                name='name'
                id='emailname'
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className='spin'></span>
            </div>

            <div className='input'>
              <Input
                type='password'
                name='pass'
                id='pass'
                placeholder='Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className='spin'></span>
            </div>

            <div className='input'>
              <Input
                type='password'
                name='pass'
                id='compass'
                placeholder='Confirm Password'
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span className='spin'></span>
            </div>

            <div className='button login'>
              <Button type='submit'>Sign Up</Button>
            </div>
          </Form>

          {/* Google and facebook signup */}
          {/* <p className='sign-category'>
            <span>{Orsignupwith}</span>
          </p> */}

          {/* <Row className='gx-md-3 gy-3'>
            <Col md='6'>
            <a href='www.facebook.com'>
                <div className='social-media fb-media'>
                  <img src='/assets/images/inner-page/facebook.png' className='img-fluid' alt='facebook' />
                  <h6>{Facebook}</h6>
                </div>
              </a>
            </Col>
            <Col md='6'>
              <a href='www.gmail.com'>
                <div className='social-media google-media'>
                  <img src='/assets/images/inner-page/google.png' className='img-fluid' alt='google' />
                  <h6>{Google}</h6>
                </div>
              </a>
            </Col>
          </Row> */}
          <p>
            <Link href={'/page/login'} className='theme-color'>
              Already have an account ? Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
