import React from 'react';

import { Provider } from 'react-redux';
import generateStore from './src/redux/store/store';

import MainNavigation from './src/navigation/MainNavigation';


const App = () => {

	const store = generateStore();

	return (
		<Provider store={store}>
			<MainNavigation/>
		</Provider>
	);
};
export default App;