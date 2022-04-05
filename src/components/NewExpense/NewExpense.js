import './NewExpense.css'
import FormExpense from './FormExpense';
function NewExpense(props) {
    function getFormData(formData) {
        const newExpenseFormData = {
            ...formData,
            id: new Date().getTime().toString()
        }
        props.onExpenseItemData(newExpenseFormData);
    }
    return (
        <div className="new-expense">
            <FormExpense onFormData={getFormData} />
        </div>
    );
}
export default NewExpense;