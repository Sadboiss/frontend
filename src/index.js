import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './helpers';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './index.scss';


const theme = createMuiTheme({
	palette: {
		type: 'dark'
	},
	primary: {},
	secondary: {}

})

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
