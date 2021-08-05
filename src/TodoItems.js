import React from 'react';
function TodoItems(props) {
    const { items } = props;

    const rows = items.map((todo) => {
                    return (
                        <li>
                            {todo}
                        </li>
                        
                    )
                })
    return (
        <div>
            <h1>
                Todo Items
            </h1>
            <ul>
                { rows }
            </ul>
        </div>
    )
}

export default TodoItems;