import React from 'react';
import style from "./recipe.module.css"

function Recipe({title,calories,image,ingredients}) {
  return (
    <div className={style.recipe}>
       <h1>{title}</h1>
       <ol>
        <p>
            <strong>INGREDIENTS</strong>
        </p>
        {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
        ))}
       </ol>
       <p>
        <strong>CALORIES :</strong> {calories}</p>
       <img className={style.image} src={image} alt=""/>
    </div>
  )
}

export default Recipe
