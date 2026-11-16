import "./ExpenseItems.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";

function ExpenseItems() {
  const [items, setItems] = useState([]);
  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.recipes);
      })
      .catch((error) => {
        console.log("Error fetching recipes:", error);
      });
  }, []);

  return (
    <>
      <div className={`background ${mode}`}>
        <div className="recipe-container">
          <div className={`recipe-header ${mode}`}>
            <h1>Food Recipes</h1>
            <p>Explore delicious recipes from around the world</p>
          </div>

          <div className={`recipe-grid ${mode}`}>
            {items.map((item) => (
              <div className="recipe-card" key={item.id}>
                <div className="recipe-image">
                  <img src={item.image} alt={item.name} />
                  <span className="recipe-id">#{item.id}</span>
                </div>
                <div className="recipe-content">
                  <h3>{item.name}</h3>
                  <div className="meal-types">
                    {item.mealType.map((type, index) => (
                      <span
                        key={index}
                        className={`meal-badge ${type.toLowerCase().replace(" ", "-")}`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItems;
