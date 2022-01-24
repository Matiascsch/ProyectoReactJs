const FilterInput =(props)=>{
    return(
        <div className="personalInput">
            <input type={"checkbox"} value={props.link}/>
            <p>{props.name}</p>
        </div>
    )
}

export default FilterInput;