import "../../styles/Cat.css"
import { useParams } from "react-router-dom";
import { getCat } from "./CatData";


function Cat(){
    
    let params = useParams();
    let cat = getCat(parseInt(params.id, 10));
        
    return(
        <div className="Cat">
        <h1>{cat.name}</h1>  
        <img src={cat.imagePath} className="Cat-photo" alt={cat.name}/>
        <p>Character: {cat.character}</p>
        </div>
    )
}

export default Cat