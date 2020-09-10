import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import Header from '../components/Header'
import HelpPage from '../components/Help'
import NotFoundPage from '../components/NotFound'


// Create 6 new files for the 6 components
// setup imports, component, default export
// import into AppRouter so they can be used

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>    
    </BrowserRouter>
)

export default AppRouter