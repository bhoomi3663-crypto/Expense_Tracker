import "./Home.css";
import React, { useEffect, useState } from "react";
import { Search, Trash2, Pencil, Eye } from "lucide-react";
import Button from "../../Components/Button/Button";

function Home() {
  const [expenses, setExpenses] = useState([]);
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
  });
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
            <input type="text" placeholder="Search expenses..." />
          </div>

          <select className="category-select">
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
              {expenses.map((expense, index) => (
                <tr key={expense.id}>
                  <td>{expense.amount}</td>
                  <td>{expense.description}</td>
                  <td>{expense.date}</td>
                  <td>
                    <span className="category food">{expense.category}</span>
                  </td>
                  <td>
                    <Button className="delete-btn" label="Delete" />
                  </td>
                  <td>
                    <Button className="edit-btn" label="Edit" />
                  </td>
                  <td>
                    <Button className="read-more-btn" label="Read More" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Home;
