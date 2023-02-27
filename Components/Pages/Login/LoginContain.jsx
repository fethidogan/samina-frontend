import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { Button, Form, Input } from 'reactstrap';
import { Forgotyourpassword, LogIn, Logins, Pleasefillthename } from '../../Constant';

const LoginContain = () => {

  return (
    <div className='login-section'>
      <div className='materialContainer'>
        <div className='box'>
          <div className='login-title'>
            <h2>{Logins}</h2>
          </div>

          <Form onSubmit={handleSubmit}>
            {/* Email */}
            <div className='input'>
              <Input
                type='text'
                placeholder='Email'
                name='name'
                id='name'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)} />
              <span className='spin'></span>
              <div className='valid-feedback'>{Pleasefillthename}</div>
            </div>

            {/* Password */}
            <div className='input'>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)} />
              <span className='spin'></span>
            </div>

            {/* Forgot password */}
            <Link href={`/page/forgot_password`} className='pass-forgot'>
              {Forgotyourpassword}
            </Link>

            {/* Login Button */}
            <div className='button login'>
              <Button type='submit'>Login</Button>
            </div>
          </Form>

          {/* Facebook - Google Sign in */}
          {/* <AddAccountLink /> */}
        </div>
      </div>
    </div>
  );
};

export default LoginContain;
