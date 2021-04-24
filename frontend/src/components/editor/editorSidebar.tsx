import { Tab, Tabs } from "@material-ui/core";
import React from "react";
import BookIcon from "@material-ui/icons/Book";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import CardDetail from "./cardDetail";
import TabPanel from "../../util/tabPanel";
import { useMst } from "../../mobx";
import { Card } from "../../mobx/cardModel";
import { observer } from "mobx-react";

const sidebarWitdh = "400px";

function EditorSidebar() {
	const [value, setValue] = React.useState(0);
	const store = useMst();

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	const focusedCardId = store.editor.focusedCard;
	const focusedCard = store.editor.deck.find(
		(card: Card) => card.id === focusedCardId
	);

	return (
		<div style={{ position: "relative", minWidth: sidebarWitdh }}>
			<div className="editor-sidebar-container" style={{ width: sidebarWitdh }}>
				<Tabs
					value={value}
					orientation="vertical"
					onChange={handleChange}
					indicatorColor="secondary"
					className="editor-sidebar-tabs"
				>
					<Tab
						icon={<BookIcon style={{ fill: "white" }} />}
						aria-label="selected card"
					/>
					<Tab
						icon={<FindInPageIcon style={{ fill: "white" }} />}
						aria-label="search"
					/>
				</Tabs>
				<TabPanel value={value} index={0}>
					<CardDetail
						card={focusedCard}
						onSetCommander={(id) => store.editor.setCommander(id)}
						onEditionChange={(newEdition) =>
							store.editor.changeEdition(newEdition)
						}
					/>
				</TabPanel>
				<TabPanel value={value} index={1}>
					Search
				</TabPanel>
			</div>
		</div>
	);
}

export default observer(EditorSidebar);
