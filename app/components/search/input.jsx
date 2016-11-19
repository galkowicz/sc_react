import React from 'react';
import { connect } from 'react-redux';
import { fetchMusic } from '../../actions/basic-actions';

class Search extends React.Component {
    render() {
        return (
            <form onSubmit={ this.onSubmit.bind(this) }>
                <div>
                    <div>Search SoundCloud</div>
                    <input ref="title" type="text"/>
                </div>
                <button>Seacrh</button>
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
