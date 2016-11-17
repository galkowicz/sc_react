import React from 'react';

const List = (props) => {
    const items = props.items;
    const listItem = items.map((item) =>
        <li onClick={() => props.handleSelection(item)} >{item}</li>
    );
    return (
        <ul> {listItem} </ul>
    );
};

List.propTypes = {
    items: React.PropTypes.array.isRequired,
    handleSelection: React.PropTypes.func.isRequired
};

export default List;