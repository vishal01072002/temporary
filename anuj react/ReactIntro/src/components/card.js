import './card.css'

// props.children use for other element render inside card components like item ,itemdate    and   should be only one parent

function Card(props) {
    return (
        <div className='Card'>
        {props.children};
        </div>
    );
}

export default Card;