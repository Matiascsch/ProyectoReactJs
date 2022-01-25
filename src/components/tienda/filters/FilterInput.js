import { Link } from "react-router-dom";

const FilterInput =(props)=>{
    return(
            <Link to={"/tienda/categorias/"+ props.link}>
                <p>{props.name}</p>
            </Link>
    )
}

export default FilterInput;