import React from 'react'
import { Link } from 'react-router-dom'

// Export a stateless functional componenet
// description, amount, createdAt

export const ExpenseListItem = ({ description, amount, createdAt, id }) => (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>{amount} - {createdAt}</p>
        </div>
    )


export default ExpenseListItem
