import "./App.css";
import "fontsource-roboto";
import AppHeader from "./components/header/appHeader";
import DeckEditor from "./components/editor/deckEditor";
import React from "react";
import { rootStore, Provider as ContextProvider } from "./mobx";
import { Provider } from "mobx-react";

function App() {
	return (
		<Provider rootStore={rootStore}>
			<ContextProvider value={rootStore}>
				<div className="App">
					<AppHeader />
					<DeckEditor />
				</div>
			</ContextProvider>
		</Provider>
	);
}

export default App;
