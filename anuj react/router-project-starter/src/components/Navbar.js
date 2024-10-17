import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import toast from 'react-hot-toast';

const Navbar = (props) => {

    let IsLogedIn = props.IsLogedIn;
    let SetIsLogedIn = props.SetIsLogedIn;

  return (
    <div className='flex justify-between items-center w-11\12 max-w-[1160px]'>

        <Link to="/">
            <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-2'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex gap-3 ml-5 mr-3'>

            { !IsLogedIn &&
                <Link to="/signup">
                    <button>SignUp</button>
                </Link>
            }
            { !IsLogedIn &&
                <Link to="/login">
                    <button>LogIn</button>
                </Link>
            }
            { IsLogedIn &&
                <Link to="/">
                    <button onClick={ () => {
                        SetIsLogedIn(false);
                        toast.success("logout");
                    }}>LogOut</button>
                </Link>
            }
            { IsLogedIn &&
                <Link to="/dashboard">
                    <button>Dashboard</button>
                </Link>
            }
        </div>
    </div>
  );
}

export default Navbar;
