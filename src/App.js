import './App.css';
import {useState, useEffect} from "react";
import Recipe from './Recipe';

const App = () => {

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }

  return(
    <div className='App'>
      <form className="search-form" onSubmit={getSearch}>
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch} 
          />
        <button 
          className="search-button" 
          type="submit" 
        >Search
          </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe 
        key= {recipe.recipe.label}
        ingredients = {recipe.recipe.ingredients}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
