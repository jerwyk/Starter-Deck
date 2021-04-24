import React, { useMemo } from "react";
import { Card } from "src/mobx/cardModel";
import withWidth from "@material-ui/core/withWidth";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import {
	List,
	ListSubheader,
	ListItem,
	ListItemText,
	IconButton,
	ListItemIcon,
	ListItemSecondaryAction,
} from "@material-ui/core";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import RemoveCircleRoundedIcon from "@material-ui/icons/RemoveCircleRounded";

import "./styles.scss";
import "../../../../assets/mana-cost.css";
import { useMst } from "src/mobx";

interface DeckListProps {
	name?: string;
	cards: any;
	width: Breakpoint;
}

function DeckList({ name, cards, width }: DeckListProps) {
	const groups: any = {
		commander: "Commanders",
		planeswalker: "Planeswalkers",
		creature: "Creatures",
		sorcery: "Sorceries",
		instant: "Instants",
		artifact: "Artifacts",
		enchantment: "Enchantments",
		land: "Lands",
	};

	const groupedDeck = useMemo(() => {
		const grouped: any = {};
		cards.forEach((card: Card) => {
			if (card.isCommander) {
				grouped.commander
					? grouped.commander.push(card)
					: (grouped.commander = [card]);
				return;
			}
			[
				"land",
				"creature",
				"planeswalker",
				"artifact",
				"enchantment",
				"sorcery",
				"instant",
			].some((type) => {
				if (card.type_line.toLowerCase().includes(type)) {
					grouped[type] ? grouped[type].push(card) : (grouped[type] = [card]);
					return true;
				}
				return false;
			});
		});
		return grouped;
	}, [cards]);

	return (
		<div className="deck-list-columns">
			{Object.keys(groups).map(
				(key) =>
					groupedDeck[key] && (
						<List
							dense
							className="deck-list"
							subheader={
								<ListSubheader
									className="deck-list-subheader"
									component="div"
									id="nested-list-subheader"
								>
									<div>{`${groups[key]} (${groupedDeck[key].length})`}</div>
								</ListSubheader>
							}
						>
							{groupedDeck[key]?.map((card: Card) => (
								<CardListEntry card={card} />
							))}
						</List>
					)
			)}
		</div>
	);
}

interface CardListEntryProps {
	card: Card;
}

function CardListEntry({ card }: CardListEntryProps) {
	const { editor } = useMst();

	const ManaCosts = () => {
		// tokenize mana cost
		const matches = card.mana_cost?.match(/{([^{}]*)}/g);
		return (
			<ListItemIcon className="card-mana">
				{matches?.map((match) => {
					const manas = match
						.substring(1, match.length - 1)
						.toLowerCase()
						.replace("/", "");
					return <div className={`mana small s${manas}`} />;
				})}
			</ListItemIcon>
		);
	};

	return (
		<ListItem
			button
			divider
			onClick={() => editor.focusCard(card.id)}
			className="deck-list-entry-container"
		>
			<ListItemText
				className="card-quantity"
				classes={{ primary: "card-text" }}
				primary={card.quantity}
			/>
			<ListItemText
				classes={{ primary: "card-name card-text" }}
				primary={card.name}
			/>
			<ManaCosts />
			<ListItemSecondaryAction className="deck-list-entry-actions">
				<IconButton size="small" onClick={() => editor.addCard(card)}>
					<AddCircleRoundedIcon color="primary" />
				</IconButton>
				<IconButton size="small" onClick={() => editor.removeCard(card.id)}>
					<RemoveCircleRoundedIcon color="secondary" />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
}

export default withWidth()(DeckList);
