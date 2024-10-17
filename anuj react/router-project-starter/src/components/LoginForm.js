import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const LogInForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const[formData , setFormData] = useState( {
        email :"" , password : ""
    })

    const[showPassword , setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("loged In");
        navigate("/Dashboard");
    }

    return (
        <form onSubmit={submitHandler}>

            <label>
                <p>
                Email addess <sup>*</sup>
                </p>

                <input
                    required
                    type="email"
                    onChange={changeHandler}
                    value={formData.email}
                    placeholder="Enter email id"
                    name="email"
                />
            </label>

            <label>
                <p>
                    Password <sup>*</sup>
                </p>

                <input
                    required
                    type= {showPassword ? ("text") : ("password")}
                    onChange={changeHandler}
                    value={formData.password}
                    placeholder="Enter password"
                    name="password"
                />

                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? ("this") : ("that")}
                </span>

                <Link to="#" >
                    <p>
                        forget password
                    </p>
                </Link>
            </label>

            <button>
                signIn
            </button>
        </form>
    );
}

export default LogInForm;