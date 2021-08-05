import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoItems(props) {
    const { items, removeItem } = props;

    const rows = items.map((todo, index) => {
                    return (
                        <li>
                            {todo}
                            <DeleteIcon onClick={() => removeItem(index)} />
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