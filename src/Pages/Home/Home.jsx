import "./Home.css";
import React, { useEffect, useState } from "react";
import { Search, Trash2, Pencil, Eye } from "lucide-react";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import ConfirmModel from "../../ConfirmationModel/ConfirmationModel";
import axios from "axios";
import { toast } from "react-toastify";

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/expense")
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) =>
        console.error(
          "Unable to load Expense. Check that the API server is running.",
          error,
        ),
      );
  }, []);
  // delete post:
  const deleteHandlerId = (id) => {
    axios
      .delete(`http://localhost:3000/expense/${id}`)
      .then(() => {
        toast.success("Expense Deleted Successfully");
      })
      .catch(() => toast.error("Unable to delete Expense."))
      .finally(() => handleDeleteClose());
  };
  const deleteHandler = (id) => {
    setShowModel(true);
    setDeleteId(id);
  };
  const handleDeleteClose = () => {
    setShowModel(false);
  };

  // Edit expense list:
  const editHandler = (id) => {
    navigate(`/addExpense/${id}`);
  };

  // readmore of expense list:
  const readMoreHandler = (id) => {
    navigate(`/readMoreCard/${id}`);
  };
  // serch function:
  const filteredExpenses = expenses.filter((expense) => {
    const matchesDescription = expense.description
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" ||
      expense.category.toLowerCase() === category.toLowerCase();

    return matchesDescription && matchesCategory;
  });
  // category type function:
  return (
    <>
      <div className="expense-container">
        <div className="expense-header">
          <h2>Expense List</h2>
          <p>Manage and track all your expenses</p>
        </div>

        {/* Search and Category */}
        <div className="expense-filters">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search expenses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Entertainment</option>
            <option>Health</option>
            <option>Grocery</option>
          </select>
        </div>

        {/* Expense Table */}
        <div className="table-wrapper">
          <table className="expense-table">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Date</th>
                <th>Category</th>
                <th>Delete</th>
                <th>Edit</th>
                <th>Read More</th>
              </tr>
            </thead>

            <tbody>
              {filteredExpenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.amount}</td>
                  <td>{expense.description}</td>
                  <td>{expense.date}</td>
                  <td>
                    <span className="category food">{expense.category}</span>
                  </td>
                  <td>
                    <Button
                      className="delete-btn"
                      label="Delete"
                      onClick={() => deleteHandler(expense.id)}
                    />
                  </td>
                  <td>
                    <Button
                      className="edit-btn"
                      label="Edit"
                      onClick={() => editHandler(expense.id)}
                    />
                  </td>
                  <td>
                    <Button
                      className="read-more-btn"
                      label="Read More"
                      onClick={() => readMoreHandler(expense.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showModel && (
        <ConfirmModel
          title="Are Want To Delete this expense?"
          onClose={handleDeleteClose}
          onSuccess={() => deleteHandlerId(deleteId)}
          name={"Delete"}
        />
      )}
    </>
  );
}
export default Home;
