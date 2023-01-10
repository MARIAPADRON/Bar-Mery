const Drinks = ({data}) =>{

    return (
    <div className="drink-card">
        <img src={data.strDrinkThumb} alt="" />
        <h2>{data.strDrink}</h2>
        <h3>{data.strInstructions}</h3>
    </div>
    )
    }
    
    export default Drinks