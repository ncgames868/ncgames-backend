import React from 'react'
import styled from 'styled-components'
import GoogleSvg from '../../IconsSvg/GoogleSvg/GoogleSvg'
import FacebookSvg from '../../IconsSvg/FacebookSvg/FacebookSvg'

const Register = () => {
  const Logo = styled.div`
    margin-top: 0px;
    color: blue;
    float: left;
  `

  const Welcome = styled.h1`
    text-align: center;
  `
  const Form = styled.div`
    padding: 40px;
    padding-top: 20px;
    padding-bottom: 50px;
    background-color: white;
    border: 1px solid gray;
    width: 200px;
    margin-left: 500px;

    /* @media (min-width: 320px) {
      margin-left: 10px;
    }

    @media (max-width: 375px) {
      margin-left: 10px;
    } */

    /* @media (width: 425) {
      margin-left: 10px;
      background-color: aliceblue;
    } */
  `
  const Account = styled.div`
    margin: 0%;
    padding: 0%;
    width: 200px;
    margin-left: 500px;

    /* @media (min-width: 320px) {
      margin-left: 10px;
    }

    @media (max-width: 375px) {
      margin-left: 10px;
    } */
  `
  const Texto = styled.h5`
    margin: 0;
  `
  const Input = styled.input`
    border-radius: 4px;
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
  `
  const Raya = styled.div`
    border-top: 1px solid black;
    height: 2px;
    max-width: 200px;
    padding: 0;
    margin: 10px auto 20px auto;
  `
  const ButtonSvg = styled.a`
    /* border-radius: 50%; */
    background-color: white;
    margin-right: -40px;
    margin-left: 65px;
  `
  const Button = styled.button`
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid gray;
    margin-left: 50px;

    &:hover {
      background-color: red;
    }
  `

  return (
    <div>
      <Logo>Logo</Logo>
      <Welcome>Welcome!</Welcome>
      <Account>
        <Texto>Create an account</Texto>
        <Texto>
          Already have an account? <a href="/">Login</a>
        </Texto>
      </Account>

      <Form>
        <form action="">
          <label>
            Email
            <Input type="email" />
            Password
            <Input type="text" />
            Repeat password
            <Input type="text" />
          </label>
        </form>

        <Button>Create account</Button>

        <Raya />

        <ButtonSvg href="/">
          <GoogleSvg />
        </ButtonSvg>

        <ButtonSvg href="/">
          <FacebookSvg />
        </ButtonSvg>
      </Form>
    </div>
  )
}

export default Register
