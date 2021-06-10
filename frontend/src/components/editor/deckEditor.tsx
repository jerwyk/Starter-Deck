import React from "react";
import DeckView from "../deck/deckView";
import EditorSidebar from "./editorSidebar";
import "./styles.scss";

export default function DeckEditor() {
	return (
		<div className="editor-container">
			<EditorSidebar />
			<DeckView />
		</div>
	);
}
