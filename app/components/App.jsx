import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

// import SearchField from '../components/search/input';
import ResultsList from './results-list/results-list';
import Search from './search/input';

const App = () => (
    <div>
        <h1> React Search and Destroy </h1>
        <section>
            <Search store={store} />
            {/*<ResultsList handleSelection={console.log('click')} items={['first','second']} />*/}
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