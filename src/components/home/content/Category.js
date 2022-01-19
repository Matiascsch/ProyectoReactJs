const Category = (props) => {
    return(
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
    );
}

export default Category;