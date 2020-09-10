import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

// refactor edit expense page to be a class based component
// setup mapDispatchToProps...editExpense and removeExpense

// should render EditExpensePage
  //snapshot

// should hanlde editExpense
  //spies

// should handle removeExpense
    // just setup similar to first one of last

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onClick = () => {
        this.props.removeExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }
    render () {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense} 
                    onSubmit={this.onSubmit}
                />
                <button 
                    onClick={this.onClick}
                    >
                Remove
                </button>
            </div>
            )
        }
    }


const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
})

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)