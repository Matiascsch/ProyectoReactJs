import { Link } from "react-router-dom";

const Category = (props) => {
    const {link, categoryTitle, categoryContent, image} = props;
    
    return(
        <Link to={`/tienda/categorias/${link}`}>
            <div className="category">
                <div className="categoryImg">
                    <img src={image} alt={`imagen de categoria ${categoryTitle}`}/>
                </div>
                <div className="categoryCont">
                    <div>
                        <h3>{categoryTitle}</h3>
                        <p>{categoryContent}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Category;