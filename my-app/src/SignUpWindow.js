import './signUpWindow.css'

export const SignUpWindow = () => {
    return (
        <div className="SignUpWindow">
        <div className="Window">
          <div className="TopBlock">
            <p className="TB__SignUp">Sign Up</p>
            <div className="TB__HaveAccount">
              <div className="HA__question">Already have an account?</div>
              <a href="" className="HA__LogIn"> Log in</a>
            </div>
          </div>
          <div className="EmailInput">
            <div className="EI__Email">Email</div>
            <input type="email" placeholder="Alisa_1998@list.ru" name="email" />
          </div>
          <div className="PasswordInput">
            <div className="PI__password">Password</div>
            <input type="text" placeholder="Password" name="password" />
          </div>
          <div className="ConfirmPasswordInput">
            <div className="CPI__password">Confirm password</div>
            <input type="text" placeholder="Confirm Password" name="password" />
          </div>
          <div className="TellMore">
            <div className="TM__text">Tell a little bit more about yourself</div>
            <img src="source/element/TellMore.png" className="TM__button" alt="" />
          </div>
          <div className="Accept">
            <input type="checkbox" className="custom-checkbox" value="yes" />
            <div className="A__text">I accept the Terms and Conditions</div>
          </div>
          <div className="SU__button">Sign Up</div>
        </div>
      </div>
    )
  }