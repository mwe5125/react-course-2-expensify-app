import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state',  () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const newExpense = {
        id: 4,
        description: 'test',
        note: '',
        amount: 5,
        createdAt: 1000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2], newExpense])
})


// should edit an expense

test('should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'hospital bill'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe('hospital bill')
})

// should not edit expense if expense not found (id doesn't exist)

test('should not edit expense when no id match', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'hospital bill'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})