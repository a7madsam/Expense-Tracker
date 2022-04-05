import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__detailes'>
                <div className='expense-item__title'>{props.title}</div>
                <div className='expense-item__amount'>${props.price}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;