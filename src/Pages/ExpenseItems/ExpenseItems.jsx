import "./ExpenseItems.css";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../Context/ThemeContext";
import ReactPaginateModule from "react-paginate";
import CircularProgress from "@mui/material/CircularProgress";

const ReactPaginate = ReactPaginateModule.default ?? ReactPaginateModule;

function ExpenseItems() {
  const { mode } = useContext(ThemeContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  const itemsPerPage = 4;

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => setItems(data.recipes || []))
      .catch(() => setError("Unable to load recipes. Please try again."))
      .finally(() => setLoading(false));
  }, []);

  const pageCount = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage,
  );

  return (
    <div className={`background-expwnseItem ${mode}`}>
      {loading ? (
        <div className="recipe-loading">
          <CircularProgress />
        </div>
      ) : error ? (
        <p className="recipe-error" role="alert">
          {error}
        </p>
      ) : (
        <div className="recipe-container">
          <div className={`recipe-header ${mode}`}>
            <h1>Food Recipes</h1>
            <p>Explore delicious recipes from around the world</p>
          </div>

          <div className={`recipe-grid ${mode}`}>
            {currentItems.map((item) => (
              <div className="recipe-card" key={item.id}>
                <div className="recipe-image">
                  <img src={item.image} alt={item.name} />
                  <span className="recipe-id">#{item.id}</span>
                </div>

                <div className="recipe-content">
                  <h3>{item.name}</h3>
                  <div className="meal-types">
                    {item.mealType?.map((type) => (
                      <span
                        key={type}
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

          {pageCount > 1 && (
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel="..."
              pageCount={pageCount}
              forcePage={page}
              onPageChange={({ selected }) => setPage(selected)}
              containerClassName={`recipe-pagination ${mode}`}
              pageClassName="pagination-page"
              pageLinkClassName="pagination-link"
              previousClassName="pagination-previous"
              nextClassName="pagination-next"
              activeClassName="selected"
              disabledClassName="disabled"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ExpenseItems;
