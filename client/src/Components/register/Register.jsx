import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GoogleSvg from '../../IconsSvg/GoogleSvg/GoogleSvg.svg'
import FacebookSvg from '../../IconsSvg/FacebookSvg/FacebookSvg.svg'
import EyeSlash from '../../IconsSvg/EyeSlash/EyeSlash.svg'
import ErrorCheck from '../../IconsSvg/Checks/error-check.svg'
import InfoCheck from '../../IconsSvg/Checks/info-check.svg'
import RightCheck from '../../IconsSvg/Checks/right-check.svg'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
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

  // PARA DARLE COLOR A LOS CHECKS DEPENDIENDO DE LA CONTRASEÑA QUE ESTAMOS ESCRIBIENDO

  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const [repeatPasswordCheck, setRepeatPasswordCheck] = useState('white')
  const [checkPasswordRepeatStatus, setCheckPasswordRepeatStatus] = useState({
    xmark: 'hide',
    exclamation: '',
    check: 'hide',
  })

  const [lengthIsRigth, setLengthIsRigth] = useState('white')
  const [checkLengthStatus, setCheckLengthStatus] = useState({
    xmark: 'hide',
    exclamation: '',
    check: 'hide',
  })

  const [containNumbers, setContainNumbers] = useState()
  const [containCapital, setContainCapital] = useState()
  const [containSymbol, setContainSymbol] = useState()
  const [containRequiredCharacters, setContainRequiredCharacters] =
    useState('white')
  const [checkCharactersStatus, setCheckCharactersStatus] = useState({
    xmark: 'hide',
    exclamation: '',
    check: 'hide',
  })

  const checkPassword = (e) => {
    let currentPassword = e.target.value
    setPassword(currentPassword)

    // PARA VERIFICAR LA LONGITUD CORRECTA

    if (currentPassword.length >= 8) {
      setLengthIsRigth('#007000')
      setCheckLengthStatus({
        xmark: 'hide',
        exclamation: 'hide',
        check: '',
      })
    } else if (currentPassword.length !== 0) {
      setLengthIsRigth('#a80000')
      setCheckLengthStatus({
        xmark: '',
        exclamation: 'hide',
        check: 'hide',
      })
    } else {
      setLengthIsRigth('white')
      setCheckLengthStatus({
        xmark: 'hide',
        exclamation: '',
        check: 'hide',
      })
    }

    //PARA VERIFICAR SI TIENE LOS CARACTERES REQUERIDOS

    const numbers = '0123456789'
    const capitals = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    const symbols = " !#$%&'()*+,-.ªº?¿/:;<=>?@][^_`{|}~"

    const containANumber = () => {
      for (let i = 0; i < currentPassword.length; i++) {
        if (numbers.indexOf(currentPassword.charAt(i), 0) !== -1) {
          return setContainNumbers(true)
        }
      }
      return setContainNumbers(false)
    }
    containANumber()

    const containACapital = () => {
      for (let i = 0; i < currentPassword.length; i++) {
        if (capitals.indexOf(currentPassword.charAt(i), 0) !== -1) {
          return setContainCapital(true)
        }
      }
      return setContainCapital(false)
    }
    containACapital()

    const containASymbol = () => {
      for (let i = 0; i < currentPassword.length; i++) {
        if (symbols.indexOf(currentPassword.charAt(i), 0) !== -1) {
          return setContainSymbol(true)
        }
      }
      return setContainSymbol(false)
    }
    containASymbol()

    if (currentPassword.length === 0) {
      setRepeatPasswordCheck('white')
      setCheckPasswordRepeatStatus({
        xmark: 'hide',
        exclamation: '',
        check: 'hide',
      })
    } else if (currentPassword === repeatedPassword) {
      setRepeatPasswordCheck('#007000')
      setCheckPasswordRepeatStatus({
        xmark: 'hide',
        exclamation: 'hide',
        check: '',
      })
    } else {
      setRepeatPasswordCheck('#a80000')
      setCheckPasswordRepeatStatus({
        xmark: '',
        exclamation: 'hide',
        check: 'hide',
      })
    }
  }

  // CAMBIAR LOS SIMBOLOS SEGÚN EL ESTADO DE LOS CHECKS

  useEffect(() => {
    if (password.length === 0) {
      setContainRequiredCharacters('white')
      setCheckCharactersStatus({
        xmark: 'hide',
        exclamation: '',
        check: 'hide',
      })
    } else if (
      containNumbers === true ||
      containCapital === true ||
      containSymbol === true
    ) {
      setContainRequiredCharacters('#007000')
      setCheckCharactersStatus({
        xmark: 'hide',
        exclamation: 'hide',
        check: '',
      })
    } else {
      setContainRequiredCharacters('#a80000')
      setCheckCharactersStatus({
        xmark: '',
        exclamation: 'hide',
        check: 'hide',
      })
    }
  }, [containNumbers, containCapital, containSymbol, password])

  // PARA VERIFICAR LA IGUALDAD DE LAS CONTRASEÑAS

  const checkRepeatPassword = (e) => {
    let repeatPassword = e.target.value
    setRepeatedPassword(repeatPassword)

    if (repeatPassword.length === 0) {
      setRepeatPasswordCheck('white')
      setCheckPasswordRepeatStatus({
        xmark: 'hide',
        exclamation: '',
        check: 'hide',
      })
    } else if (repeatPassword === password) {
      setRepeatPasswordCheck('#007000')
      setCheckPasswordRepeatStatus({
        xmark: 'hide',
        exclamation: 'hide',
        check: '',
      })
    } else {
      setRepeatPasswordCheck('#a80000')
      setCheckPasswordRepeatStatus({
        xmark: '',
        exclamation: 'hide',
        check: 'hide',
      })
    }
  }

  const navigate = useNavigate()

  return (
    <RegisterContainer>
      <h2 className="register__welcome">¡Welcome!</h2>
      <div className="register__text-container">
        <h2 className="text__account">Create an account</h2>
        <p className="text__login">
          Already have an account? <Link to={'/login'}>Log in</Link>
        </p>
      </div>

      <div className="register__form-container">
        <form className="register__form" action="">
          <div>
            <label htmlFor="email">Email</label>
            <input className="email__input-container" id="email" type="email" />
            <label htmlFor="password">Password</label>
            <div className="password__input-container">
              <input
                onChange={checkPassword}
                id="password"
                type={passwordView}
              />
              <img
                onClick={handlePasswordView}
                className="show-btn"
                src={EyeSlash}
                alt=""
              />
            </div>
            <label htmlFor="repeat__password">Repeat Password</label>
            <div className="password__input-container">
              <input
                onChange={checkRepeatPassword}
                id="repeat__password"
                type={passwordRepeatView}
              />
              <img
                onClick={handlePasswordRepeatView}
                className="show-btn"
                src={EyeSlash}
                alt=""
              />
            </div>
          </div>
          <div className="password__requirements">
            <div>
              <div className="icon-container" style={{ color: lengthIsRigth }}>
                <img
                  className={checkLengthStatus.xmark}
                  src={ErrorCheck}
                  alt="error"
                />
                <img
                  className={checkLengthStatus.exclamation}
                  src={InfoCheck}
                  alt="info"
                />
                <img
                  className={checkLengthStatus.check}
                  src={RightCheck}
                  alt="check"
                />
              </div>
              <p style={{ color: lengthIsRigth }}>At least 8 characters</p>
            </div>
            <div>
              <div
                className="icon-container"
                style={{ color: containRequiredCharacters }}
              >
                <img
                  className={checkCharactersStatus.xmark}
                  src={ErrorCheck}
                  alt="error"
                />
                <img
                  className={checkCharactersStatus.exclamation}
                  src={InfoCheck}
                  alt="info"
                />
                <img
                  className={checkCharactersStatus.check}
                  src={RightCheck}
                  alt="check"
                />
              </div>
              <p style={{ color: containRequiredCharacters }}>
                At least one number (0-9), special symbol or one capital letter
              </p>
            </div>
            <div>
              <div
                className="icon-container"
                style={{ color: repeatPasswordCheck }}
              >
                <img
                  className={checkPasswordRepeatStatus.xmark}
                  src={ErrorCheck}
                  alt="error"
                />
                <img
                  className={checkPasswordRepeatStatus.exclamation}
                  src={InfoCheck}
                  alt="info"
                />
                <img
                  className={checkPasswordRepeatStatus.check}
                  src={RightCheck}
                  alt="check"
                />
              </div>
              <p style={{ color: repeatPasswordCheck }}>Passwords must match</p>
            </div>
          </div>
          <button onClick={() => navigate('/')} className="create__btn">CREATE AN ACCOUNT</button>
        </form>

        <div className="register__separator">
          <div className="line left"></div>
          <p>Or</p>
          <div className="line right"></div>
        </div>

        <div className="registerOptions__buttons">
          <a href="/">
            <img src={GoogleSvg} alt="" />
          </a>
          <a href="/">
            <img src={FacebookSvg} alt="" />
          </a>
        </div>
      </div>
    </RegisterContainer>
  )
}

export default Register

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  color: white;
  .register__welcome {
    font-weight: 400;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }
  .register__text-container {
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 658px;
    .text__account {
      font-weight: 400;
      font-size: 25px;
    }
    .text__login {
      margin: 0;
      font-weight: 400;
      font-size: 20px;
      display: flex;
      align-items: center;
      gap: 5px;
      a {
        text-decoration: none;
        color: #666;
        display: inline-block;
        position: relative;
        overflow: hidden;
        transition: color .4s ease;
        ::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #666;
        }
        ::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: white;
          transform: translate3d(-100%, 0, 0);
          transition: transform .4s ease;
        }
        :hover {
          color: white;
          ::after {
            transform: translate3d(0, 0, 0);
          }
        }
        :focus {
          color: white;
          ::after {
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }
  .register__form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 658px;
    background: rgba(217, 217, 217, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .register__form {
      width: 80%;
      max-width: 510px;
      text-align: start;
      display: flex;
      flex-direction: column;
      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 1.8rem;
        font-size: 20px;
        input {
          padding: 2rem 1.2rem;
          border: none;
          border-radius: 10px;
          outline: none;
          background-color: rgba(217, 217, 217, 0.3);
          font-size: 20px;
        }
        .email__input-container {
          margin-bottom: 20px;
        }
        .password__input-container {
          position: relative;
          margin-bottom: 20px;
          padding: 0;
        }
        .show-btn {
          width: 24px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 25px;
          cursor: pointer;
          transition: transform 0.2s ease;
          :hover {
            transform: scale(1.1) translateY(-50%);
          }
          :active {
            transform: scale(0.9) translateY(-50%);
          }
        }
      }
      .password__requirements {
        padding: 0;
        div {
          padding: 0;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          margin-bottom: 5px;
          .icon-container {
            margin-top: 5.5px;
            position: relative;
            width: 14px;
            height: 14px;
            transition: opacity 0.2s ease;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
              font-weight: 700;
              transition: opacity 0.8 ease;
            }
            .hide {
              opacity: 0;
              transition: 0.2s ease;
            }
          }
          p {
            width: 95%;
            margin: 0;
            font-size: 20px;
            transition: color 0.2s ease;
          }
        }
      }
      .create__btn {
        cursor: pointer;
        border: none;
        border-radius: 10px;
        background-color: #736e6e;
        color: white;
        padding: 1.2rem .6rem;
        align-self: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 1;
        transition: transform 0.2s ease;
        :hover {
          filter: brightness(0.8);
        }
      }
    }
    .register__separator {
      text-align: center;
      font-size: 20px;
      position: relative;
      width: 80%;
      max-width: 460px;
      .line {
        position: absolute;
        background: black;
        width: 45%;
        height: 1px;
      }
      .left {
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      .right {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .registerOptions__buttons {
      display: flex;
      justify-content: space-around;
      gap: 20px;
      margin-bottom: 20px;
      a {
        width: 44px;
        height: 44px;
        transition: transform 0.2s ease;
        img {
          width: 100%;
          aspect-ratio: 1;
        }
        :hover {
          transform: scale(1.04);
        }
        :active {
          transform: scale(0.96);
        }
      }
    }
  }
  @media (max-width: 600px) {
    .register__logo {
      font-size: 21px;
    }
    .register__welcome {
      font-size: 26px;
    }
    .register__text-container {
      .text__account {
        font-size: 21px;
      }
      .text__login {
        font-size: 16px;
      }
    }
    .register__form-container {
      .register__form {
        div {
          font-size: 16px;
          input {
            font-size: 16px;
          }
        }
        .password__requirements {
          div {
            p {
              font-size: 16px;
            }
          }
        }
        .create__btn {
          font-size: 16px;
        }
      }
    }
  }
`
