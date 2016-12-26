import React from 'react';
import '../../sass/middle.scss';
import {CLIENT_ID} from '../../consts/consts';

export default class Widget extends React.Component {

    componentWillMount() {
        SC.initialize({
            client_id: CLIENT_ID
        });
    }

    render(){
        return (
            <div className="widget"></div>
        )
    }

}
