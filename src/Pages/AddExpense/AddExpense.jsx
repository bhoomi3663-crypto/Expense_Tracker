import Button from "../../Components/Button/Button";
import "./AddExpense.css";

function AddExpense() {
  return (
    <>
      <div className="expense-back">
        <h2>Add New Expense</h2>
        <form>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter description"
              required
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" id="date" required />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select>
              <option value="">Select Category</option>
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
    </>
  );
}
export default AddExpense;
