import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThmeProvider } from './provider/ThemeProvider.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<ThmeProvider>
				<App />
			</ThmeProvider>
		</BrowserRouter>
	</Provider>
);
