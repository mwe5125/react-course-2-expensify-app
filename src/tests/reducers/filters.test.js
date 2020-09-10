import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

// should set text filter

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'test'
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('test')
})

// should set start date

test('should set start date', () => {
    const action = {
        type: 'SET_START_DATE',
        date: moment(0).valueOf()
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toBe(moment(0).valueOf())
})

// should set end date

test('should set end date', () => {
    const action = {
        type: 'SET_END_DATE',
        date: moment(0).valueOf()
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toBe(moment(0).valueOf())
})