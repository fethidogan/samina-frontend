import React, { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';

const ForgotPasswordSection = () => {


  return (
    <div className='login-section'>
      <div className='materialContainer'>
        <div className='box'>
          <div className='login-title'>
            <h2>Forgot Password</h2>
          </div>
          <Form onSubmit={handleResetPassword}>
            <div className='input'>
              <Input
                type='text'
                name='name'
                placeholder='Your Email'
                className='is-invalid'
                Fid='emailname'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className='spin'></span>
            </div>

            <div className='button login button-1'>
              <Button>Send</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordSection;
