//import { useState } from "react";
function PackingList({name , isPacked}) {

    if(isPacked)
        {
            return(
                <li>{name}**</li>
            );
        }

        else{
            return(
                <li>{name}</li>
            );
        }
}

export default PackingList;