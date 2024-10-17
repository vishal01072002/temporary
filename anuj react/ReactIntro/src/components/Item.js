import './Item.css';
// only one parent should be

function Item(props) {
    const itemName = props.name;

    return (
        <div>
        <p className="nirma">{itemName}</p>
        {props.children}
        </div>
        );
        
    
}


export default Item;