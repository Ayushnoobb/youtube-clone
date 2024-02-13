import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginValidation } from '../../assets/lib/loginValidation';
import { AuthContext, AuthContextType } from '../../Auth';
// import { AuthContext , AuthContextTyp } from 


function Login() {

  interface FormItem{
    email : string,
    password : string
  }

  const authContext = useContext<AuthContextType>(AuthContext);
  const { login} = authContext;



  const [formValue , setFormValue] = useState<FormItem>(
    {
      email:'',
      password:''
    }
  )
  const [error , setError] = useState('');
  const navigate = useNavigate()
 

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    const {name , value} = e.target;
    setFormValue((prev)=>({
      ...prev,
      [name]:value
    }))
  }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      setError("")
      LoginValidation(formValue.email,formValue.password,setError);
      const res = formValue.email === "ayushwilltry@gmail.com" && formValue.password === "123"
      if(!res){
        setError("Invalid Credentials");
        console.log("invalid");
        return null;
      }
      login();
      navigate(`/`, { replace: true });
    }

  return (
    <section className="log-in">
        <div className="log-in__wrapper">
          <div className="signin">
            <form className="content form login-form form__primary" onSubmit={handleSubmit}>
              <h2 className="form__heading-primary">Log In</h2>

              <div className="form login-form form__primary">
                <div className="inputBox">
                  <input type="text" required  name="email" id="email" onChange={(e)=>{handleChange(e)}}/> <i>Email</i>
                </div>

                <div className="inputBox">
                  <input type="password" name="password" id="password" required onChange={(e)=>{handleChange(e)}} /> <i>Password</i>
                </div>

                <div className="inputBox btn__submit btn_has-login-event btn-form">
                  <input type="submit" value="Login" />
                </div>
                <p className="error">{error}</p>
              </div>
            </form>
          </div>
        </div>
    </section>
  )
}

export default Login