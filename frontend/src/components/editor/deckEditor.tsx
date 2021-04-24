import React, { Component } from "react";
import DeckView from "../deck/deckView";
import EditorSidebar from "./editorSidebar";
import "./styles.scss";

export default class DeckEditor extends Component {
	render() {
		return (
			<div className="editor-container">
				<EditorSidebar />
				<DeckView />
			</div>
		);
	}
}
