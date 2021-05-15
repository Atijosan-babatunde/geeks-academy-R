import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppRouter from './router';

const client = new ApolloClient({
	uri: process.env.REACT_APP_APOLLO_SOCKET,
	cache: new InMemoryCache()
});

const history = createBrowserHistory();

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<AppRouter history={history} />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
