import React, { useState } from 'react'
import styled from 'styled-components'
import GoogleSvg from '../../IconsSvg/GoogleSvg/GoogleSvg.svg'
import FacebookSvg from '../../IconsSvg/FacebookSvg/FacebookSvg.svg'
import EyeSlash from '../../IconsSvg/EyeSlash/EyeSlash.svg'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [passwordView, setPasswordView] = useState('password')

  const handlePasswordView = () => {
    passwordView === 'password'
      ? setPasswordView('text')
      : setPasswordView('password')
  }

  const navigate = useNavigate()

  return (
    <RegisterContainer>
      <div className="login__logo">
        LOGO
        <br />o<br />
        NOMBRE
      </div>
      <h2 className="login__welcome">¡Welcome!</h2>
      <div className="login__text-container">
        <h2 className="text__account">Log in</h2>
        <p className="text__login">
          New user? <Link className='register__link' to={'/register'}>Create account</Link>
        </p>
      </div>

      <div className="login__form-container">
        <form className="login__form" action="">
          <div>
            <label htmlFor="email">Email</label>
            <input className="email__input-container" id="email" type="email" />
            <label htmlFor="password">Password</label>
            <div className="password__input-container">
              <input id="password" type={passwordView} />
              <img
                onClick={handlePasswordView}
                className="show-btn"
                src={EyeSlash}
                alt=""
              />
            </div>
          </div>
          <button onClick={() => navigate('/')} className="login__btn">LOGIN</button>
        </form>

        <div className="login__separator">
          <div className="line left"></div>
          <p>Or</p>
          <div className="line right"></div>
        </div>

        <div className="loginOptions__buttons">
          <div className='loginOptions__btn-container'>
            <img src={FacebookSvg} alt="" />
            <p>Continue with Facebook</p>
          </div>
          <div className='loginOptions__btn-container'>
            <img src={GoogleSvg} alt="" />
            <p>Continue with Google</p>
          </div>
        </div>
      </div>
    </RegisterContainer>
  )
}

export default Login

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  .login__logo {
    margin-top: 0px;
    color: black;
    font-size: 25px;
    align-self: flex-start;
  }
  .login__welcome {
    font-weight: 400;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }
  .login__text-container {
    padding: 1.2rem;
    background-color: white;
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
        color: #555;
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
          background-color: #888;
        }
        ::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #000;
          transform: translate3d(-100%, 0, 0);
          transition: transform .4s ease;
        }
        :hover {
          color: #000;
          ::after {
            transform: translate3d(0, 0, 0);
          }
        }
        :focus {
          color: #000;
          ::after {
            transform: translate3d(0, 0, 0);
          }
        }
      }
    }
  }
  .login__form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 748px;
    background: rgba(217, 217, 217, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .login__form {
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
      .login__btn {
        cursor: pointer;
        border: none;
        border-radius: 10px;
        background-color: #736e6e;
        color: white;
        width: 200px;
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
    .login__separator {
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
    .loginOptions__buttons {
      width: 95%;
      display: flex;
      justify-content: space-around;
      gap: 20px;
      margin-bottom: 20px;
      .loginOptions__btn-container {
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 45%;
        background: #D9D9D94D;
        padding: .5rem 1.2rem;
        font-size: 20px;
        border-radius: 20px;
        transition: transform 0.2s ease;
        img {
          width: 45px;
          height: 45px;
        }
        :hover {
          filter: brightness(0.8);
        }
      }
      @media (max-width: 740px) {
        justify-content: center;
        .loginOptions__btn-container {
          width: max-content;
        }
        p {
          display: none;
        }
      }
      @media (max-width: 860px) {
        p {
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .login__logo {
      font-size: 21px;
    }
    .login__welcome {
      font-size: 26px;
    }
    .login__text-container {
      .text__account {
        font-size: 21px;
      }
      .text__login {
        font-size: 16px;
      }
    }
    .login__form-container {
      .login__form {
        div {
          font-size: 16px;
          input {
            font-size: 16px;
          }
        }
        .login__btn {
          font-size: 16px;
        }
      }
      .login__separator {
        font-size: 16px;
      }
      .loginOptions__buttons {
        .loginOptions__btn-container {
          font-size: 16px;
        }
      }
    }
  }
`
