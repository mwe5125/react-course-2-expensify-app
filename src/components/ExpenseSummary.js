import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className="page-hedaer__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

// how I did it which worked
// const ExpenseSummary = (props) => (
//     <div>
//         {   
//             props.expenses.length >= 1 ? (
//                 <p>
//                     Viewing {props.expenses.length} {props.expenses.length > 1 ? 'expenses' : 'expense'} totalling {numeral((getExpensesTotal(props.expenses)/100)).format('$0,0.00')}
//                 </p>
//             ) :  (<span></span>)
//         }
//     </div>
// )



const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
}


export default connect(mapStateToProps) (ExpenseSummary)