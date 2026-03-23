import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase/initialized-firebase";

const Login = () => {


  const handleFormSubmit = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("you submited successfully ", email,password);

    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error=>{
      console.log(error);
    })
  } 

  return (
    // <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Login;
