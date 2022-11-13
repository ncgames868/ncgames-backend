import React from 'react'

const Register = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <h1>Welcome!</h1>
        <h3>Create an account</h3>
        <h5>
          Already have an account? <a href="/">Login</a>
        </h5>

        <form action="">
          <label>
            Name
            <input type="text" />
            <br />
            Password
            <input type="text" />
            <br />
            Repeat password
            <input type="text" />
            <br />
          </label>
        </form>
      </div>
    </div>
  )
}

export default Register
