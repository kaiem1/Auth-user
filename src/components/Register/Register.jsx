import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";
import { Link } from "react-router-dom";




const Register = () => {
   
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);

         //reset error
         setRegisterError('');
         setSuccess('');

        if(password.length < 6){
            setRegisterError('password should be at least 6 characters');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password should have at least one upper case characters.');
            return;
        }
        else if(!accepted){
            setRegisterError('Please accept our Terms and Conditions');
            return;
        }

       


        // create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
            setSuccess('User Created Successfully.')

            // send verification email:
            sendEmailVerification(result.user)
            .then( ()=>{
                alert('Please check your email and verify your email')
            })
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message);
        })
    }
    
    return (
        <div className="hero bg-base-200 min-h-screen "
        style={{
            backgroundImage: "url(https://i.ibb.co.com/ySsmx04/skyline-255116-1920.jpg)",
          }}
        >
            <div className="pl-10 py-7 mx-auto md:w-1/3 card w-full max-w-sm shrink-0 shadow-2xl bg-black">
            <h2 className="text-3xl mb-8 text-white font-extrabold">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="border border-rose-600 mb-4 w-3/4 py-2 px-4" type="email" name="email" id="" required placeholder="Your email" />
                <br />
                <div className="flex">
                <input 
                className="border border-rose-600 mb-4 w-3/4 py-2 px-4" 
                type={ showPassword ? "text" : "password"} 
                name="password" 
                id="" 
                required
                 placeholder="Your password" />
            <span className="relative top-4 right-8" onClick={ () => setShowPassword(!showPassword) }>
                {
                    showPassword ?  <RiEyeFill /> : <RiEyeCloseFill />
                }
            </span>
                </div>
               <div className="mb-2">
               <input type="checkbox" name="terms" id="terms" />
               <label className="ml-2 text-white" htmlFor="terms">Accept our Terms and Conditions</label>
               </div>
                <br />
                <input className="btn btn-secondary w-3/4" type="submit" value="Register" />
                <p className="text-white">Already have an account? Please <Link to={"/login"} className="text-blue-600 font-semibold">Log in</Link> </p>
            </form>
            {
                registerError && <p className="text-red-700">{registerError}</p>
            }
            {
                success && <p className="text-green-600 font-extrabold">{success}</p>
            }
            </div>

        </div>
    );
};

export default Register;