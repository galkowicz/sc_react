import React from 'react';
import { connect } from 'react-redux';
import { fetchMusic } from '../../actions/basic-actions';

class Search extends React.Component {
    componentWillMount(){
     console.debug('will mount from search');
     console.debug(this.props);
     // this.props.dispatch(fetchMusic());
     // this.props.store.dispatch(fetchMusic('queen'));
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit.bind(this) }>
                <div>
                    <input ref="title" type="text"/>
                    <button>Search</button>
                </div>
            </form>
        );
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.fetchMusic(
            this.refs.title.value,
        );

        this.refs.title.value = '';
    }
}

Search.propTypes = {
    fetchMusic: React.PropTypes.func.isRequired
};

export default connect(null, { fetchMusic })(Search);
