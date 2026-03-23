// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/initialized-firebase";
// import { useState } from "react";
// import { HiOutlineEye } from "react-icons/hi";
// import { FaEyeSlash } from "react-icons/fa";


// const Register = () => {
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [successful, setSuccessful] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const terms = e.target.terms.checked;
//     console.log("form submited successful", email, password,terms);

//     const passwordPattern =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//     if (!passwordPattern.test(password)) {
//       setError(
//         "Password must be at least 8 characters and include uppercase, lowercase, number & special character."
//       );
//       return;
//     }

//     if(!terms){
//       setError("Place accepts our terms and condition..")
//       return;
//     }

//     // reset error
//     setError("");
//     setSuccessful(false);
//     setLoading(true);

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         console.log(result.user);
//         setSuccessful(true);
//         e.target.reset("");
//       })
//       .catch((error) => {
//         console.log("emil happend:", error.message);
//         setError(error.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <div className="hero-content flex flex-col">
//       <div className="text-center lg:text-left">
//         <h1 className="text-5xl font-bold">Register now!</h1>
//         <p className="py-6">
//           Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//           excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
//           id nisi.
//         </p>
//       </div>
//       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//         <div className="card-body">
//           <form onSubmit={handleFormSubmit}>
//             <fieldset className="fieldset">
//               <label className="label">Email</label>
//               <input
//                 type="email"
//                 className="input"
//                 name="email"
//                 placeholder="Email"
//                 required
//               />

//               <label className="label">Password</label>

//               <div className="relative">
//                 <input
//                   type={showPassword? "text" : "password" }
//                   className="input"
//                   name="password"
//                   placeholder="Password"
//                   required
//                 />
//                 <div onClick={()=>setShowPassword(!showPassword)} className="absolute top-[8px] right-[28px]">
//                   <span className="text-2xl">
//                     {
//                       showPassword? <HiOutlineEye /> : <FaEyeSlash />
//                     }
                    
//                   </span>
//                 </div>
//               </div>
//               <div>
//                 <input type="checkbox" name="terms" className="checkbox checkbox-accent" />
//                 <p>Accepts ours terms and condition</p>
//               </div>
//               <button className="btn btn-neutral mt-4" disabled={loading}>
//                 {loading ? "Creating Account..." : "Register Now"}
//               </button>
//             </fieldset>
//             {successful && (
//               <p className="text-green-600">Accout create successful...</p>
//             )}

//             {error && <p className="text-red-500">{error}</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/initialized-firebase";
import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log("form submitted successfully", email, password, terms);

    // Reset previous error and success states
    setError("");
    setSuccessful(false);

    // Check terms and conditions
 

    // Password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return; // Stop further execution
    }

       if (!terms) {
      setError("Please accept our terms and conditions.");
      return; // Stop further execution
    }

    // Start Firebase authentication
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessful(true);
        e.target.reset();
      })
      .catch((error) => {
        console.log("Error happened:", error.message);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="hero-content flex flex-col">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register now!</h1>
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
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                required // Added for better UX
              />

              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input"
                  name="password"
                  placeholder="Password"
                  required // Added for better UX
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[8px] right-[28px] cursor-pointer"
                >
                  <span className="text-2xl">
                    {showPassword ? <HiOutlineEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox checkbox-accent"
                />
                <label>
                  {
                    error? "Please accept our terms and conditions." : "Accept our terms and conditions"
                  }
                </label>
              </div>
              <button className="btn btn-neutral mt-4" disabled={loading}>
                {loading ? "Creating Account..." : "Register Now"}
              </button>
            </fieldset>
            {successful && (
              <p className="text-green-600 mt-2">Account created successfully!</p>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
          <p>Already have an accout. pleace 
            <Link to="/login" className="underline text-[green]"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;