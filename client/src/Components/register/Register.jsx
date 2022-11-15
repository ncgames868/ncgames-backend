import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GoogleSvg from '../../IconsSvg/GoogleSvg/GoogleSvg.svg'
import FacebookSvg from '../../IconsSvg/FacebookSvg/FacebookSvg.svg'
import EyeSlash from '../../IconsSvg/EyeSlash/EyeSlash.svg'
import ErrorCheck from '../../IconsSvg/Checks/error-check.svg'
import InfoCheck from '../../IconsSvg/Checks/info-check.svg'
import RightCheck from '../../IconsSvg/Checks/right-check.svg'

const Register = () => {

  // PARA DARLE LA FUNCION DE MOSTRAR/OCULTAR CONTRASEÑA A LOS BOTONES

  const [passwordView, setPasswordView] = useState('password')
  const [passwordRepeatView, setPasswordRepeatView] = useState('password')

  const handlePasswordView = () => {
    (passwordView === 'password') ? setPasswordView('text') : setPasswordView('password')
  }
  const handlePasswordRepeatView = () => {
    (passwordRepeatView === 'password') ? setPasswordRepeatView('text') : setPasswordRepeatView('password')
  }

  return (
    <RegisterContainer>
      <div className='register__logo'>LOGO<br />o<br />NOMBRE</div>
      <h2 className='register__welcome'>¡Welcome!</h2>
      <div className='register__text-container'>
        <h2 className='text__account'>Create an account</h2>
        <p className='text__login'>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>

      <div className='register__form-container'>
        <form className='register__form' action="">
          <div>
            <label htmlFor="email">Email</label>
            <input className='email__input-container' id ="email" type="email" />
            <label htmlFor="password">Password</label>
            <div className='password__input-container'>
              <input id ="password" type={passwordView} />
              <img onClick={handlePasswordView} className='show-btn' src={EyeSlash} alt="" />
            </div>
            <label htmlFor="repeat__password">Repeat Password</label>
            <div className='password__input-container'>
              <input id ="repeat__password" type={passwordRepeatView} />
              <img onClick={handlePasswordRepeatView} className='show-btn' src={EyeSlash} alt="" />
            </div>
          </div>
          <div className='password__requirements'>
            <div>
              <div className="icon-container">
                <i className="fa-solid fa-exclamation hide"></i>
                <i className="fa-solid fa-xmark"></i>
                <i style={{fontSize: '10px'}} className="fa-solid fa-check hide"></i>
              </div>
              <p>At least 8 characters</p>
            </div>
            <div>
              <div className="icon-container"><i className="fa-solid fa-exclamation"></i></div>
              <p>At least one number (0-8), special symbol 
or one capital letter</p>
            </div>
          </div>
          <button className='create__btn'>CREATE AN ACCOUNT</button>
        </form>

        <div className='register__separator'>
          <div className='line left'></div>
          <p>Or</p>
          <div className='line right'></div>
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
  padding: 20px;
  .register__logo {
    margin-top: 0px;
    color: black;
    font-size: 25px;
    align-self: flex-start;
  }
  .register__welcome {
    font-weight: 400;
    text-align: center;
    font-size: 30px;
    line-height: 36px;
  }
  .register__text-container {
    padding: 20px;
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
      a {
        color: black;
      }
    }
  }
  .register__form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
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
        padding: 30px 0;
        font-size: 20px;
        input {
          padding: 32px 20px;
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
          transition: transform .2s ease;
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
        margin-bottom: 5px;
        div {
          padding: 0;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          .icon-container {
            margin-top: 2px;
            position: relative;
            font-size: 14px;
            border: 3px solid #555;
            border-radius: 50%;
            color: #555;
            width: 14px;
            height: 14px;
            i {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
              font-weight: 700;
            }
            .hide {
              opacity: 0;
            }
          }
          p {
            width: 95%;
            margin: 0;
            font-size: 20px;
          }
        }
      }
      .create__btn {
        cursor: pointer;
        border: none;
        border-radius: 10px;
        background-color: #736E6E;
        color: white;
        padding: 21px 12px;
        align-self: center;
        font-size: 20px;
        font-weight: 700;
        line-height: 1;
        transition: transform .2s ease;
        :hover {
          transform: scale(1.04);
          filter: brightness(.8);
        }
        :active {
          transform: scale(.96)
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
        img {
          width: 100%;
          aspect-ratio: 1;
        }
      }
    }
  }
  
`
    

  //   /* @media (min-width: 320px) {
  //     margin-left: 10px;
  //   }

  //   @media (max-width: 375px) {
  //     margin-left: 10px;
  //   } */

  //   /* @media (width: 425) {
  //     margin-left: 10px;
  //     background-color: aliceblue;
  //   } */
  // `
  // const Account = styled.div`
  //   margin: 0%;
  //   padding: 0%;
  //   width: 200px;
  //   margin-left: 500px;

  //   /* @media (min-width: 320px) {
  //     margin-left: 10px;
  //   }

  //   @media (max-width: 375px) {
  //     margin-left: 10px;
  //   } */
  // `
  // const Texto = styled.h5`
  //   margin: 0;
  // `
  // const Input = styled.input`
  //   border-radius: 4px;
  //   width: 100%;
  //   height: 30px;
  //   margin-bottom: 20px;
  // `
  // const Raya = styled.div`
  //   border-top: 1px solid black;
  //   height: 2px;
  //   max-width: 200px;
  //   padding: 0;
  //   margin: 10px auto 20px auto;
  // `
  // const ButtonSvg = styled.a`
  //   /* border-radius: 50%; */
  //   background-color: white;
  //   margin-right: -40px;
  //   margin-left: 65px;
  // `
  // const Button = styled.button`
  //   cursor: pointer;
  //   border-radius: 5px;
  //   border: 1px solid gray;
  //   margin-left: 50px;

  //   &:hover {
  //     background-color: red;
  //   }
  // `