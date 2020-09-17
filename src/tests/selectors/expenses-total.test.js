import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

//should return 0 if no expenses
test('should return 0 when no expenses', () => {
    const noExpenses = []
    const result = getExpensesTotal(noExpenses)
    expect(result).toBe(0)
})

//should add up single expense
test('should return amount of a single expense', () => {
    const oneExpense = [{
        id: '1',
        description: 'poop',
        amount: 500
    }]
    const result = getExpensesTotal(oneExpense)
    expect(result).toBe(500)
})

//should add up multiple expenses
test('should return sum of multiple expenses', () => {
    const result = getExpensesTotal(expenses)
    expect(result).toBe(114195)
})