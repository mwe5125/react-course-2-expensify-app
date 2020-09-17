
const sumReducer = (sum, val) => {
    return sum + val
}

const getExpensesTotal = (expenses) => {
    let allExpenses = expenses.map((expense) => {
        return expense.amount
    })
    const expensesTotal = allExpenses.reduce(sumReducer, 0)
    return expensesTotal
}

// const expenses1 = [{
//     id: '1',
//     description: 'gum',
//     amount: 195
// },{
//     id: '2',
//     description: 'rent',
//     amount: 109500
// }, {
//     id: '3',
//     description: 'credit card',
//     amount: 4500
// }]

// const augustExpenses = getExpensesTotal(expenses1)
// console.log(augustExpenses)

export default getExpensesTotal

// DID IT LOOK AT OTHER ASPECTS OF CHALLENGE TO FINISH