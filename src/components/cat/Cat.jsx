import "../../styles/Cat.css"
import { useParams } from "react-router-dom";
import { getCat } from "./CatData";


function CatInterlayer(){
    let params = useParams();
    let cat = getCat(parseInt(params.id, 10));
    
    return(
        <Cat {...cat} />
    )
}

function Cat({name, imagePath, character}){
        
    return(
        <div className="Cat">
        <h1>{name}</h1>  
        <img src={imagePath} className="Cat-photo" alt={name}/>
        <p>Character: {character}</p>
        </div>
    )
}

export default CatInterlayer