import './Itemdate.css'

function Itemdate(props) {
    const day = props.day;
    const month = props.month;
    const year = props.year;
    
    return (<div className="mfg-date">
        <div> {day} </div>
        <div>{month}</div>
        <div>{year}</div>
    </div>);
}

export default Itemdate;