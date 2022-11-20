import React, { useState } from 'react'
import ErrorCheck from '../../IconsSvg/Checks/error-check.svg'
import RightCheck from '../../IconsSvg/Checks/right-check.svg'
import GoogleSvg from '../../IconsSvg/GoogleSvg/GoogleSvg.svg'
import FacebookSvg from '../../IconsSvg/FacebookSvg/FacebookSvg.svg'
import EyeSlash from '../../IconsSvg/EyeSlash/EyeSlash.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Subtitle, Title, Text, LinkedText, Form, AdvicesContainer, BigButton, MediumButton, MiniButton, SmallSeparator, SeparatorOr, WrapContainer, TitlesContainer } from '../../AppGlobalStyles.js'

const Login = () => {



  const [passwordView, setPasswordView] = useState('password')

  const handlePasswordView = () => {
    passwordView === 'password'
      ? setPasswordView('text')
      : setPasswordView('password')
  }

  // PARA VERIFICAR EL EMAIL

  const [checkEmailData, setCheckEmailData] = useState({
    height: 0,
    color: false,
    opacity: 'hide',
    message: 'Empty e-mail!',
    xmark: 'hide',
    check: 'hide'
  })

  const checkEmail = (e) => {
    let currentEmail = e.target.value
    let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(currentEmail.length === 0) {
      setCheckEmailData({
        height: 0,
        color: false,
        opacity: 'hide',
        message: 'Empty e-mail!',
        xmark: 'hide',
        check: 'hide'
      })
    } else if(regex.test(currentEmail)) {
      setCheckEmailData({
        height: '30px',
        color: '#4CAF50',
        opacity: false,
        message: 'Correct e-mail!',
        xmark: 'hide',
        check: ''
      })
    } else {
      setCheckEmailData({
        height: '30px',
        color: '#FF3D00',
        opacity: false,
        message: 'Incorrect e-mail!',
        xmark: '',
        check: 'hide'
      })
    }
  }

  // PARA MOSTRAR ERROR AL INICIAR SESIÓN

  const credentialsError = {
    height: 0,
    color: '#FF3D00',
    opacity: 'hide',
    message: 'Incorrect e-mail or password!',
    xmark: 'hide'
  }

  const navigate = useNavigate()

  return (
    <section>
      <TitlesContainer>
        <Title className='color-gray'>¡Welcome!</Title>
        <div>
          <Subtitle className='color-gray'>Log in</Subtitle>
          <LinkedText className='color-gray'>New user? <Link to={'/register'}>Create account</Link></LinkedText>
        </div>
      </TitlesContainer>
      <Form>
        <form>
          <label htmlFor="email">Email</label>
          <input onChange={checkEmail} className="email__input-container" id="email" type="email" />
          <AdvicesContainer style={{height: checkEmailData.height}}>
            <span>
              <div>
                <img
                  className={checkEmailData.xmark}
                  src={ErrorCheck}
                  alt="error"
                />
                <img
                  className={checkEmailData.check}
                  src={RightCheck}
                  alt="check"
                />
              </div>
              <Text className={checkEmailData.opacity} style={{ color: checkEmailData.color }}>{checkEmailData.message}</Text>
            </span>
          </AdvicesContainer>
          <label htmlFor="password">Password</label>
          <div className="password__input-container">
            <input id="password" type={passwordView} />
            <MiniButton className='input__button'>
              <img
                onClick={handlePasswordView}
                src={EyeSlash}
                alt="EyeSlash"
              />
            </MiniButton>
          </div>
          <AdvicesContainer style={{height: credentialsError.height}}>
            <span>
              <div>
                <img
                  className={credentialsError.xmark}
                  src={ErrorCheck}
                  alt="error"
                />
              </div>
              <Text className={credentialsError.opacity} style={{ color: credentialsError.color }}>{credentialsError.message}</Text>
            </span>
          </AdvicesContainer>
          <MediumButton className='color-skyblue font-bold' onClick={() => navigate('/')}>LOGIN</MediumButton>
        </form>

        <SmallSeparator></SmallSeparator>

        <Link className='font-light' to='/forgotPassword'>Forgot Password?</Link>

        <SeparatorOr>
          <div className="line-left"></div>
          <Text>Or</Text>
          <div className="line-right"></div>
        </SeparatorOr>

        <WrapContainer>
          <BigButton>
            <img src={FacebookSvg} alt="" />
            <Text>Continue with Facebook</Text>
          </BigButton>
          <BigButton>
            <img src={GoogleSvg} alt="" />
            <Text>Continue with Google</Text>
          </BigButton>
        </WrapContainer>
      </Form>
    </section>
  )
}

export default Login