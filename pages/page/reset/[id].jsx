import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Form, Input } from 'reactstrap';
import { CommonPath } from '../../../Components/Constant';
import { baseURL } from '../../../constants/baseurl';
import ThemeCustomizer from '../../../Layout/Common/Customizer';
import Layout1 from '../../../Layout/Layout1';

const ResetPassword = ({ id }) => {
  // ROUTER
  const router = useRouter();

  // STATES
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false)

  // ERROR
  const [error, setError] = useState("")

  // RESET REQUEST
  const handleReset = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      return setError("Passwords doesn't match !")
    }

    setError("")

    try {
      await axios.post(`${baseURL}/auth/change-password/${id}`, {
        password: password
      })
      setLoading(true)
      toast.success("Password changed successfully !")
      setTimeout(() => {
        router.push("/")
      }, 1500)
    } catch (error) {
      setError(error.response.data.message)
    }
  };

  return (
    <>
      <Layout1>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
        </Head>
        <div className='login-section'>
          <div className='materialContainer'>
            <div className='box'>
              <div className='login-title'>
                <h2>Reset Password</h2>
              </div>

              <Form onSubmit={handleReset}>

                {/* Password */}
                <div className='mb-1'>
                  <p className='text-start mb-2'>New Password <span className='text-danger'>(Min. 8 Characters)</span></p>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='New Password'
                    value={password}
                    minLength={8}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>


                {/* Confirm Password */}
                <div>
                  <p className='text-start mb-2'>Confirm Password</p>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    minLength={8}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                {/* Error */}
                <p className='text-start' style={{ color: "red" }}>{error}</p>

                {/* Login Button */}
                <div className='button login'>
                  <Button type='submit' disabled={loading}>Reset Password</Button>
                </div>
              </Form>

            </div>
          </div>
        </div>
        <ThemeCustomizer />
      </Layout1 >
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params
  try {
    const { data } = await axios.post(`${baseURL}/auth/reset-password/${id}`)
    return {
      props: {
        id: id
      },
    }
  } catch (error) {
    return {
      notFound: true
    }
  }

}
export default ResetPassword;
