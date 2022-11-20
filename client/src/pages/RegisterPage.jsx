import React from 'react'
import { Link } from 'react-router-dom'
import { Title, LinkedText, TitlesContainer, Subtitle } from '../AppGlobalStyles.js'
import RegisterForm from '../Components/register/RegisterForm.jsx'

const RegisterPage = () => {
  return (
    <section>
      <TitlesContainer>
        <Title className="color-gray">¡Welcome!</Title>
        <div>
          <Subtitle className="color-gray">Create an account</Subtitle>
          <LinkedText className="color-gray">Already have an account? <Link to={'/login'}>Log in</Link></LinkedText>
      </div>
      </TitlesContainer>
      <RegisterForm />
    </section>
  )
}

export default RegisterPage