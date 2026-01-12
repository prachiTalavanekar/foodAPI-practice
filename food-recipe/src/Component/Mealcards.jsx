import React from 'react'
import { NavLink } from 'react-router-dom'

const Mealcards = ({detail}) => {
    console.log(detail)
  return (
    <div className="meals">
        {!detail ? "" :
       detail.map((cur) =>{
return (
    <div className='mealImg'>
        <img src={cur.strMealThumb} />
        <p>{cur.strMeal}</p>
        <NavLink to={`/${cur.idMeal}`}>
           <button >Recipe</button>
        </NavLink>
    </div>
)
       })
        }
    </div>
  )
}


export default Mealcards