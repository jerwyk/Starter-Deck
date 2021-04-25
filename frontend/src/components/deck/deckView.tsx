import React, { Component } from "react";
import { BulkImporter, NameChanger } from "./deckDialogs";
import DeckList from "./deckDisplay/deckList";
import { identifier } from "../../types";
import Axios from "axios";
import { Button, Menu, MenuItem, Typography } from "@material-ui/core";
import "./styles.scss";
import generateTtsDeck from "../../ttsGenerator/generateDeck";
import FileSaver from "file-saver";
import CardCounter from "./deckCardCounter";
import { inject, observer } from "mobx-react";
import { Root } from "../../mobx";
import { getSnapshot } from "mobx-state-tree";

interface DeckViewState {
	importerOpen: boolean;
	actionAnchorEl: any;
	deckTitle: string;
	changeNameOpen: boolean;
}

interface DeckViewProps {
	rootStore?: Root;
}

@inject("rootStore")
@observer
export default class DeckView extends Component<DeckViewProps, DeckViewState> {
	state = {
		importerOpen: false,
		changeNameOpen: false,
		actionAnchorEl: null,
		deckTitle: "",
	};

	bulkImportCards = async (identifiers: identifier[]) => {
		const cards: any[] = [];
		let remain = identifiers.length;
		// scryfall has a limit of 75 cards
		while (remain > 0) {
			const fetched = identifiers.length - remain;
			const res = await Axios.post(
				"https://api.scryfall.com/cards/collection",
				{
					identifiers: identifiers.slice(
						fetched,
						fetched + 75 < identifiers.length
							? fetched + 75
							: identifiers.length
					),
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			cards.push(...res.data.data);

			remain -= 75;
		}

		this.props.rootStore?.editor.addCards(cards);
	};

	importAction = () => {
		this.setState({ importerOpen: true, actionAnchorEl: null });
	};

	exportAction = async () => {
		const blob = new Blob(
			[
				JSON.stringify(
					await generateTtsDeck(
						this.props.rootStore!.editor.deckName,
						this.props.rootStore!.editor.deck
					)
				),
			],
			{ type: "application/json;charset=utf-8" }
		);
		console.log(
			JSON.stringify(
				await generateTtsDeck(
					this.props.rootStore!.editor.deckName,
					this.props.rootStore!.editor.deck
				)
			)
		);

		FileSaver.saveAs(blob, `${this.props.rootStore!.editor.deckName}.json`);
	};

	changeNameAction = () => {
		this.setState({ changeNameOpen: true });
	};

	clearAction = () => {
		this.props.rootStore!.editor.clearDeck();
	};

	handleCardDelete = (cardId: string) => {
		this.props.rootStore!.editor.removeCard(cardId);
	};

	render() {
		const deck = this.props.rootStore
			? getSnapshot(this.props.rootStore.editor.deck)
			: [];

		const ActionMenu = () => (
			<Menu
				id="simple-menu"
				anchorEl={this.state.actionAnchorEl}
				keepMounted
				open={Boolean(this.state.actionAnchorEl)}
				onClose={() => this.setState({ actionAnchorEl: null })}
			>
				<MenuItem onClick={this.changeNameAction}>Change Name</MenuItem>
				<MenuItem onClick={this.importAction}>Bulk Import</MenuItem>
				<MenuItem onClick={this.exportAction}>Export to tts</MenuItem>
				<MenuItem onClick={this.clearAction}>Clear</MenuItem>
			</Menu>
		);

		return (
			<div className="deck-view-container">
				<BulkImporter
					open={this.state.importerOpen}
					onClose={() => {
						this.setState({ importerOpen: false });
					}}
					onImport={this.bulkImportCards}
				/>
				<NameChanger
					name={this.state.deckTitle}
					open={this.state.changeNameOpen}
					onClose={() => {
						this.setState({ changeNameOpen: false });
					}}
					onConfirm={(newName) => {
						this.setState({ deckTitle: newName });
					}}
				/>
				<div className="deck-view-title"></div>
				<div className="deck-menu">
					<Button
						variant="contained"
						color="primary"
						onClick={(e) => this.setState({ actionAnchorEl: e.currentTarget })}
					>
						Actions
					</Button>
					<ActionMenu />
				</div>
				<Typography
					variant="h2"
					align="left"
					paragraph
					className="deck-title"
					style={{ color: "white" }}
				>
					{this.state.deckTitle || ""}
				</Typography>
				<DeckList cards={deck}></DeckList>
				<CardCounter deck={this.props.rootStore?.editor.deck} />
			</div>
		);
	}
}
