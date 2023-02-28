import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CommonPath } from '../../Components/Constant';
import Layout1 from '../../Layout/Layout1';
import MobileViewBtn from '../../Components/Pages/UserDashboard/MobileViewBtn';
import { Col, Container, Row, Button, Input, FormGroup } from 'reactstrap';
import LeftNavigation from '../../Components/Pages/UserDashboard/LeftNavigation';
import { useRouter } from 'next/router';
import { Country, State, City } from 'country-state-city';
import Select from "react-select";
import axios from 'axios';
import { baseURL } from '../../constants/baseurl';


const AccountSettings = ({ fullNameData, addressData, cityData, countryData, zip, phone, token }) => {
  // ROUTER
  const router = useRouter()

  // STATES
  const [country, setCountry] = useState(countryData)
  const [city, setCity] = useState(cityData)
  const [address, setAddress] = useState(addressData)
  const [phoneNumber, setPhoneNumber] = useState(phone)
  const [zipCode, setZipCode] = useState(zip)
  const [fullName, setFullName] = useState(fullNameData)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setCity(State.getStatesOfCountry(country.isoCode)[0]);
  }, [country])


  // Save Changes
  const handleSaveChanges = async () => {
    setLoading(true)
    try {
      await axios.post(`${baseURL}/user/change-user-info`,
        {
          fullName: fullName,
          phoneNumber: phoneNumber,
          address: address,
          country: country,
          zipCode: zipCode,
          city: city,
        },
        { headers: { "Authorization": `Bearer ${token}` } })
      router.reload()
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <Layout1>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' type='image/x-icon' href={`${CommonPath}/favicon/2.png`} />
      </Head>

      <section className='section-b-space'>
        <Container>
          <Row>

            <Col lg='3'>
              <LeftNavigation active={router.pathname} />
            </Col>
            <Col lg='9'>
              <MobileViewBtn />
              <div className='box-head mb-4'>
                <h3>Account Settings</h3>
              </div>

              <div className='mb-2'>
                <Row>
                  <Col lg="4">
                    <FormGroup>
                      <Select
                        options={Country.getAllCountries()}
                        getOptionLabel={(options) => {
                          return options["name"];
                        }}
                        getOptionValue={(options) => {
                          return options["name"];
                        }}
                        value={country}
                        onChange={(item) => {

                          setCountry(item);
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <Select
                        options={State.getStatesOfCountry(country.isoCode)}
                        getOptionLabel={(options) => {
                          return options["name"];
                        }}
                        getOptionValue={(options) => {
                          return options["name"];
                        }}
                        value={city}
                        onChange={(item) => {
                          console.log(item)
                          setCity(item);
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </div>

              <div className='input'>
                <Input
                  type='textarea'
                  placeholder='Address'
                  name='address'
                  id='address'
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <span className='spin'></span>
                <div className='valid-feedback'>Address</div>
              </div>

              <div>
                <Row>
                  <Col lg="4" className='mb-2'>
                    <Input
                      type='text'
                      placeholder='Phone Number'
                      name='phone'
                      id='phone'
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Col>
                  <Col lg="4" className='mb-2'>
                    <Input
                      type='text'
                      placeholder='Zip Code'
                      name='phone'
                      id='phone'
                      required
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </Col>
                  <Col lg="4" className='mb-2'>
                    <Input
                      type='text'
                      placeholder='Full Name'
                      name='name'
                      id='name'
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Col>
                </Row>
              </div>

              <div className='d-flex justify-content-end mt-2'>
                <Button
                  className='btn btn-success'
                  onClick={() => handleSaveChanges()}
                  disabled={loading}
                >Save Account Settings</Button>
              </div>

            </Col>
            {/* <AllTabContain activeTab={activeTab} num={num} /> */}

          </Row>
        </Container>
      </section>

    </Layout1>
  );
};

export async function getServerSideProps({ locale, query, req }) {
  // if token exists redirect into homepage
  if (!req.cookies.token) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }

  // fetch user data from server
  const { data } = await axios.get(`${baseURL}/user/get-user-info`, { headers: { "Authorization": `Bearer ${req.cookies.token}` } })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      fullNameData: data.fullName,
      addressData: data.address,
      countryData: data.country,
      phone: data.phoneNumber,
      cityData: data.city,
      zip: data.zipCode,
      token: req.cookies.token
    },
  }
}

export default AccountSettings;
