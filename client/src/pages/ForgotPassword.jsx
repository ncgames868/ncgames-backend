import React from 'react'
import { Link } from 'react-router-dom'
import { Title, Text, LinkedText, Form, MediumButton, MediumSeparator, TitlesContainer } from '../AppGlobalStyles.js'

const ForgotPassword = () => {
  return (
    <section>
      <TitlesContainer>
        <Title className='color-gray'>Forgot Password?</Title>
      </TitlesContainer>
      <Form>
        <Text>We’ll send you an email with link that allows you to set new password</Text>
        <MediumSeparator></MediumSeparator>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" />
          <LinkedText>Go back to <Link to='/login'>log in</Link></LinkedText>
          <MediumSeparator></MediumSeparator>
          <MediumButton className='color-skyblue font-bold'>CONFIRM</MediumButton>
        </form>
      </Form>
    </section>
  )
}

export default ForgotPassword