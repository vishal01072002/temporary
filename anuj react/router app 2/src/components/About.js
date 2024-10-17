import { useNavigate} from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

    function changeHandler () {
        navigate('/Support');
    }

    return (
        <div>
            <div>
                this is about page
            </div>
    
            <button onClick={changeHandler}>move to support page</button>

        </div>
    );
}

export default About;