import React from 'react';
import '../../sass/middle.scss';

const Widget = (props) => {
    // const items = props.items;
    // const listItem = items.map((item) =>
    //     <li onClick={() => this.handleSelection(item)} >{item}</li>
    // );
    return (
        <div className="widget">
        <div id="target"> </div>
        </div>
    );
};

Widget.propTypes = {
    // items: React.PropTypes.array.isRequired
};

export default Widget;