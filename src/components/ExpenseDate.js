import './ExpenseDate.css'
function ExpenseDate(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    return (
        <div className='expense-item__date'>
            <span>{months[props.date.getMonth()]}</span>
            <span>{props.date.getFullYear()}</span>
            <span>{props.date.getDate()}</span>
        </div>
    );
}
export default ExpenseDate;