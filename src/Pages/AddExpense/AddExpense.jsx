import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./AddExpense.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext";
import { UserContext } from "../../Context/UserContext";

function AddExpense() {
  const [isSubmitting, setIsSubmitting] = useState(true);
  const [error, setError] = useState("");
  const [date, setDate] = useState("");
  const [expenseData, setExpenseData] = useState({
    amount: "",
    description: "",
    date: "",
    category: "",
  });
  const { user } = useContext(UserContext);
  const { mode } = useContext(ThemeContext);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/expense/${id}`)
        .then((res) => setExpenseData(res.data))
        .catch(() =>
          setError(
            "Unable to load expense. Check that the API server is running.",
          ),
        )
        .finally(() => setIsSubmitting(false));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`http://localhost:3000/expense/${id}`, expenseData)
        // amount: expenseData.amount,
        // description: expenseData.description,
        // date: expenseData.date,
        // category: expenseData.category,

        .then((res) => setExpenseData(res.data));
      toast.success("Expense edited successfully");
      navigate("/home")
        .catch(() =>
          setError(
            "Unable to edit expense. Check that the API server is running.",
          ),
        )
        .finally(() => setIsSubmitting(false));
    } else {
      axios
        .post("http://localhost:3000/expense", expenseData)
        .then((res) => setExpenseData(res.data))
        .catch(() =>
          setError(
            "Unable to load expense. Check that the API server is running.",
          ),
        )
        .finally(() => setIsSubmitting(false));
      toast.success("Expense added successfully");
      navigate("/home");
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target; //destrucruing
    setExpenseData({ ...expenseData, [name]: value });
  };

  // Date validation(users not able to add future date):
  const today = new Date().toISOString().split("T")[0];
  const handleformatDate = (e) => {
    setExpenseData((previous) => ({
      ...previous,
      date: e.target.value,
    }));
  };
  return (
    <>
      <div className={`background ${mode}`}>
        <div className={`expense-back ${mode}`}>
          <h2>Add New Expense</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter amount"
                value={expenseData.amount}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Enter description"
                required
                autoComplete="off"
                value={expenseData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                id="date"
                required
                value={expenseData.date}
                max={today}
                onChange={handleformatDate}
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                value={expenseData.category}
                name="category"
                onChange={handleInputChange}
              >
                <option>Select Category</option>
                <option>Food</option>
                <option>Travel</option>
                <option>Shopping</option>
                <option>Entertainment</option>
                <option>Health</option>
                <option>Grocery</option>
              </select>
            </div>
            <Button label="Submit Expense" className="submit-btn" />
          </form>
        </div>
      </div>
    </>
  );
}
export default AddExpense;
