import React, { useEffect, useState } from 'react'
import GoogleSvg from '../../IconsSvg/GoogleSvg/GoogleSvg.svg'
import FacebookSvg from '../../IconsSvg/FacebookSvg/FacebookSvg.svg'
import EyeSlash from '../../IconsSvg/EyeSlash/EyeSlash.svg'
import ErrorCheck from '../../IconsSvg/Checks/error-check.svg'
import RightCheck from '../../IconsSvg/Checks/right-check.svg'
import { Text, SmallSeparator, Form, BigButton, MediumButton, MiniButton, SeparatorOr, WrapContainer, AdvicesContainer } from '../../AppGlobalStyles.js'

const RegisterForm = () => {
  // PARA DARLE LA FUNCION DE MOSTRAR/OCULTAR CONTRASEÑA A LOS BOTONES

  const [passwordView, setPasswordView] = useState('password')
  const [passwordRepeatView, setPasswordRepeatView] = useState('password')

  const handlePasswordView = () => {
    passwordView === 'password'
      ? setPasswordView('text')
      : setPasswordView('password')
  }
  const handlePasswordRepeatView = () => {
    passwordRepeatView === 'password'
      ? setPasswordRepeatView('text')
      : setPasswordRepeatView('password')
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

  // SE GUARDAN LOS ESTADOS ACTUALES DE LAS CONTRASEÑAS PARA VERIFICAR SU IGUALDAD MÁS ADELANTE

  const [firstPassword, setFirstPassword] = useState()
  const [secondPassword, setSecondPassword] = useState()

  // PARA VERIFICAR LA LONGITUD DE CONTRASEÑA

  const [checkPasswordLenghtData, setCheckPasswordLenghtData] = useState({
    height: 0,
    color: false,
    opacity: 'hide',
    message: 'At least 8 characters',
    xmark: 'hide',
    check: 'hide'
  })

  const checkPasswordLenght = (e) => {
    let currentPassword = e.target.value
    setFirstPassword(currentPassword)
    
    if (currentPassword.length === 0) {
      setCheckPasswordLenghtData({
        height: 0,
        color: false,
        opacity: 'hide',
        message: 'At least 8 characters',
        xmark: 'hide',
        check: 'hide'
      })
    } else if (currentPassword.length >= 8) {
      setCheckPasswordLenghtData({
        height: '24px',
        color: '#4CAF50',
        opacity: '',
        message: 'At least 8 characters',
        xmark: 'hide',
        check: ''
      })
    } else if (currentPassword.length !== 0) {
      setCheckPasswordLenghtData({
        height: '24px',
        color: '#FF3D00',
        opacity: '',
        message: 'At least 8 characters',
        xmark: '',
        check: 'hide'
      })
    }
  }

// PARA VERIFICAR SI CONTIENE ALGÚN NÚMERO, SIMBOLO O MAYÚSCULA

const [checkPasswordCharactersData, setCheckPasswordCharactersData] = useState({
  height: 0,
  color: false,
  opacity: 'hide',
  message: 'At least one number (0-9), special symbol or one capital letter',
  xmark: 'hide',
  check: 'hide'
})

const checkPasswordCharacters = (e) => {
  let currentPassword = e.target.value
  const numbers = '0123456789'
  const capitals = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
  const symbols = " !#$%&'()*+,-.ªº?¿/:;<=>?@][^_`{|}~"

  let containANumberState = false
  let containACapitalState = false
  let containASymbolState = false

  const containANumber = () => {
    for (let i = 0; i < currentPassword.length; i++) {
      if (numbers.indexOf(currentPassword.charAt(i), 0) !== -1) {
        return containANumberState = true
      }
    }
    return containANumberState = false
  }
  containANumber()

  const containACapital = () => {
    for (let i = 0; i < currentPassword.length; i++) {
      if (capitals.indexOf(currentPassword.charAt(i), 0) !== -1) {
        return containACapitalState = true
      }
    }
    return containACapitalState = false
  }
  containACapital()

  const containASymbol = () => {
    for (let i = 0; i < currentPassword.length; i++) {
      if (symbols.indexOf(currentPassword.charAt(i), 0) !== -1) {
        return containASymbolState = true
      }
    }
    return containASymbolState = false
  }
  containASymbol()
  
  if (currentPassword.length === 0) {
    setCheckPasswordCharactersData({
      height: 0,
      color: false,
      opacity: 'hide',
      message: 'At least one number (0-9), special symbol or one capital letter',
      xmark: 'hide',
      check: 'hide'
    })
  } else if (containANumberState || containACapitalState || containASymbolState) {
    setCheckPasswordCharactersData({
      height: '54px',
      color: '#4CAF50',
      opacity: '',
      message: 'At least one number (0-9), special symbol or one capital letter',
      xmark: 'hide',
      check: ''
    })
  } else {
    setCheckPasswordCharactersData({
      height: '54px',
      color: '#FF3D00',
      opacity: '',
      message: 'At least one number (0-9), special symbol or one capital letter',
      xmark: '',
      check: 'hide'
    })
  }
}

  // PARA VERIFICAR LA IGUALDAD DE LAS CONTRASEÑAS

  const [checkPasswordEqualityData, setCheckPasswordEqualityData] = useState({
    height: 0,
    color: false,
    opacity: 'hide',
    message: 'Passwords must match',
    xmark: 'hide',
    check: 'hide'
  })

  const checkRepeatPassword = (e) => {
    let currentPassword = e.target.value
    setSecondPassword(currentPassword)
  }

  useEffect(() => {
    if (secondPassword.length === 0) {
      setCheckPasswordEqualityData({
        height: 0,
        color: false,
        opacity: 'hide',
        message: 'Passwords must match',
        xmark: 'hide',
        check: 'hide'
      })
    } else if (firstPassword.length === 0 && secondPassword.length === 0) {
      setCheckPasswordEqualityData({
        height: 0,
        color: false,
        opacity: 'hide',
        message: 'Passwords must match',
        xmark: 'hide',
        check: 'hide'
      })
    } else if (firstPassword === secondPassword) {
      setCheckPasswordEqualityData({
        height: '24px',
        color: '#4CAF50',
        opacity: '',
        message: 'Passwords must match',
        xmark: 'hide',
        check: ''
      })
    } else {
      setCheckPasswordEqualityData({
        height: '24px',
        color: '#FF3D00',
        opacity: '',
        message: 'Passwords must match',
        xmark: '',
        check: 'hide'
      })
    }
  }, [firstPassword, secondPassword])

  return (
    <Form>
      <form className="register__form" action="">
        <div>
          <label htmlFor="email">Email</label>
          <input onKeyUp={checkEmail} className="email__input-container" id="email" type="email" />
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
          <div>
            <input
              onChange={(e) => {
                checkPasswordLenght(e)
                checkPasswordCharacters(e)
              }}
              id="password"
              type={passwordView}
            />
            <MiniButton className='input__button'>
              <img
                onClick={handlePasswordView}
                className="show-btn"
                src={EyeSlash}
                alt=""
              />
            </MiniButton>
          </div>
          <AdvicesContainer style={{height: checkPasswordLenghtData.height}}>
            <span>
              <div>
                <img
                  className={checkPasswordLenghtData.xmark}
                  src={ErrorCheck}
                  alt="error"
                />
                <img
                  className={checkPasswordLenghtData.check}
                  src={RightCheck}
                  alt="check"
                />
              </div>
              <Text className={checkPasswordLenghtData.opacity} style={{ color: checkPasswordLenghtData.color }}>{checkPasswordLenghtData.message}</Text>
            </span>
          </AdvicesContainer>
          <AdvicesContainer style={{height: checkPasswordCharactersData.height}}>
            <span>
              <div>
                <img
                  className={checkPasswordCharactersData.xmark}
                  src={ErrorCheck}
                  alt="error"
                />
                <img
                  className={checkPasswordCharactersData.check}
                  src={RightCheck}
                  alt="check"
                />
              </div>
              <Text className={checkPasswordCharactersData.opacity} style={{ color: checkPasswordCharactersData.color }}>{checkPasswordCharactersData.message}</Text>
            </span>
          </AdvicesContainer>
          <label htmlFor="repeat__password">Repeat Password</label>
          <div className="password__input-container">
            <input
              onChange={checkRepeatPassword}
              id="repeat__password"
              type={passwordRepeatView}
            />
            <MiniButton className='input__button'>
              <img
                onClick={handlePasswordRepeatView}
                className="show-btn"
                src={EyeSlash}
                alt=""
              />
            </MiniButton>
          </div>
          <AdvicesContainer style={{height: checkPasswordEqualityData.height}}>
            <span>
              <div>
                <img
                  className={checkPasswordEqualityData.xmark}
                  src={ErrorCheck}
                  alt="error"
                />
                <img
                  className={checkPasswordEqualityData.check}
                  src={RightCheck}
                  alt="check"
                />
              </div>
              <Text className={checkPasswordEqualityData.opacity} style={{ color: checkPasswordEqualityData.color }}>{checkPasswordEqualityData.message}</Text>
            </span>
          </AdvicesContainer>
        </div>
        <SmallSeparator></SmallSeparator>
        <MediumButton className='font-bold color-skyblue'>CREATE AN ACCOUNT</MediumButton>
      </form>

      <SeparatorOr>
        <div className="line-left"></div>
        <p>Or</p>
        <div className="line-right"></div>
      </SeparatorOr>

      <WrapContainer>
        <BigButton>
          <img src={FacebookSvg} alt="" />
          <Text>Register with Facebook</Text>
        </BigButton>
        <BigButton>
          <img src={GoogleSvg} alt="" />
          <Text>Register with Google</Text>
        </BigButton>
      </WrapContainer>
    </Form>
  )
}

export default RegisterForm