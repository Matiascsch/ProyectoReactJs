import { Link } from "react-router-dom";
const Category = (props) => {
    return(
        <Link to={`/tienda/categorias/${props.link}`}>
            <div className="category">
                <div className="categoryImg">
                    <img src={props.image} alt={`imagen de categoria ${props.categoryTitle}`}/>
                </div>
                <div className="categoryCont">
                    <div>
                        <h3>{props.categoryTitle}</h3>
                        <p>{props.categoryContent}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Category;