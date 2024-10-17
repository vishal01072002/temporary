import {useNavigate } from "react-router-dom";

const Lab = () => {

    const navigate = useNavigate();

    function clickHandler () {
        navigate('/About');
    }
    function backHandler () {
        navigate(-1);
    }

    return (
        <div>

            <div>
            this is lab page
            </div>

            <button onClick={clickHandler}>move to About page</button>
            <br/>
            <button onClick={backHandler}>Go back</button>
        </div>
    
    );
}

export default Lab;
