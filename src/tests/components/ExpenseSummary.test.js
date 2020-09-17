import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'

test('should render Expense summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render Expense summary with multiple expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={5} expensesTotal={2356781} />)
    expect(wrapper).toMatchSnapshot()
})