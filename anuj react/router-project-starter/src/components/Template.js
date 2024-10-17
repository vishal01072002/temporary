import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import frameImage from "../assets/frame.png"

const Template = ({title,desc1,desc2,formtype,image,setIsLoggedIn}) => {
    return (
        <div className="flex w-11\12 max-w-[1160px]">

            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formtype === 'signup' ? 
                (<SignupForm  setIsLoggedIn={setIsLoggedIn} />) :
                (<LoginForm   setIsLoggedIn={setIsLoggedIn}/>)}

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                    <p>Sign Up with google</p>
                </button>
            </div>

            <div>
                <img src={frameImage}
                loading="lazy"
                alt="pattern"
                width={558}
                height={584}
                >
                </img>

                <img src={image}
                loading="lazy"
                alt="pattern"
                width={558}
                height={490}
                >
                </img>
            </div>
        </div>
    );
}

export default Template;