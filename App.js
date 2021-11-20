import React from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';

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