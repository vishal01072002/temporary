import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData , setFormData] = useState( {
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : ""
    })

    const [showPassword , setShowPassword] = useState(false)

    const [accountType ,setAccountType] = useState("student");

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
        if(formData.password !== formData.confirmPassword) {
            toast.error("password does not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("account created");
        const accountData = {
            ...formData
        };

        console.log("printing form data");
        console.log(accountData);

        navigate("/Dashboard");
    }

    return (
        <div>

            <div>
                <button
                onClick={() => setAccountType("student")}>Student</button>

                <button>Instrutor</button>
            </div>

            <form onSubmit={submitHandler}>

                { /* first name and last name*/}
                <div>
                <label>
                    <p>First Name</p> <span>*</span>
                    <input
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="enter your first name"
                        value={FormData.firstName}
                    />
                </label>

                <label>
                    <p>Last Name</p> <span>*</span>
                    <input
                        required
                        type="text"
                        name="lastName"
                        onChange={changeHandler}
                        placeholder="enter your last name"
                        value={FormData.lastName}
                    />
                </label>
                </div>

                { /* email */ }
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

                { /* create password and confirm password */}
                <div>
                    <label>
                        <p>Create password</p>
                        <input
                            required
                            name="password"
                            onChange={changeHandler}
                            value={formData.password}
                            type={showPassword ? ("text") : ("password")}
                            placeholder="enter your password"
                        />
                    </label>

                    <label>
                        <p>confirm password</p>
                        <input
                            required
                            name="confirmPassword"
                            onChange={changeHandler}
                            value={formData.confirmPassword}
                            type={showPassword ? ("text") : ("password")}
                            placeholder="enter your confirm password"
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? ("this") : ("that")}
                        </span>
                        
                    </label>
                </div>

                <button>
                    create password
                </button>

            </form>
        </div>
    );
}

export default SignupForm ;