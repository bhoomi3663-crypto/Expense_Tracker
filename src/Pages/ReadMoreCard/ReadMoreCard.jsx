import React, { useState, useEffect } from "react";
import "./ReadMoreCard.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function ReadMoreCard() {
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [error, setError] = useState("");
  const [expenseCard, setExpenseCard] = useState({
    amount: "",
    description: "",
    date: "",
    category: "",
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/expense/${id}`)
        .then((res) => setExpenseCard(res.data))
        .catch(() =>
          setError(
            "Unable to load expense. Check that the API server is running.",
          ),
        )
        .finally(() => setIsSubmitting(false));
    }
  }, [id]);
  return (
    <div className="expense-card">
      <div className="card-header">
        <h3>Expense Details</h3>
        <span className="category">{expenseCard.category}</span>
      </div>

      <div className="card-amount">{expenseCard.amount} </div>

      <div className="card-details">
        <div className="detail-item">
          <span>Description</span>
          <p>{expenseCard.description}</p>
        </div>

        <div className="detail-item">
          <span>Date</span>
          <p>{expenseCard.date}</p>
        </div>

        <div className="detail-item">
          <span>Category</span>
          <p>{expenseCard.category}</p>
        </div>
      </div>
    </div>
  );
}

export default ReadMoreCard;
