import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function TodoItems(props) {
    const { items, removeItem, editItem } = props;

    const rows = items.map((item, index) => {
                    return (
                        <li>
                            {item.todo}
                            <DeleteIcon onClick={() => removeItem(index, item.id)} />
                            <EditIcon onClick={() => editItem(index, item.id)} />
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