import React from 'react'
import { Title, Form, MediumButton, MediumSeparator, TitlesContainer } from '../AppGlobalStyles.js'

const CreateNewPassword = () => {
  return (
    <section>
      <TitlesContainer>
        <Title className='color-gray'>Enter your new password</Title>
      </TitlesContainer>
      <Form>
        <form>
          <label htmlFor="password">Password</label>
          <input type="password" />
          <label htmlFor="password">Repeat Password</label>
          <input type="password" />
          <MediumSeparator></MediumSeparator>
          <MediumButton className='color-skyblue font-bold'>CONFIRM</MediumButton>
        </form>
      </Form>
    </section>
  )
}

export default CreateNewPassword