import * as React from 'react';

const List = (props) => {
    const list = props.list ? props.list : [];
    return(
        <ul>
            {
                list.map(el => {
                    return <li key={`${el.name}-key`} onClick={() => props.onClick(el.id)}>{el.name}</li>;
                })
            }
        </ul>
    )
};

export default List;
