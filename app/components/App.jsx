import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

// import SearchField from '../components/search/input';
import ResultsList from './results-list/results-list';

const App = () => (
    <div>
        <section>
            <ResultsList handleSelection={console.log('click')} items={['first','second']} />
        </section>
        <h1> React SoundCloud </h1>
    </div>
);

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app')
);

export default App;