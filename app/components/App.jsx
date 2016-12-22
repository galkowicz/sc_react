import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

// import SearchField from '../components/search/input';
import ResultsList from './results-list/results-list';
import Search from './search/input';
import Widget from './oEmbedSC/oembedsc';

const App = () => (
    <div className="row">

        <section className="right col">
            <h1 className="header"> React Search and Destroy </h1>
            <Search store={store} />
            {/*<ResultsList handleSelection={console.log('click')} items={['first','second']} />*/}
        </section>

        <section className="middle col">
            <Widget store={store} />
        </section>

        <section className="right col">

        </section>
    </div>
);



render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app')
);

export default App;