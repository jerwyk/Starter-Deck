import { cast, Instance, types as t } from "mobx-state-tree";
import CardModel, { Card } from "./cardModel";

const EditorModel = t
	.model({
		focusedCard: t.optional(t.string, ""),
		bulkImportDialog: t.boolean,
		deckName: t.string,
		deck: t.optional(t.array(CardModel), []),
	})
	.actions((self) => ({
		addCard(card: Card) {
			if (self.deck.find((item) => item.name === card.name)) {
				self.deck.replace(
					self.deck.map((item) => {
						if (item.name === card.name) {
							item.quantity++;
							return item;
						}
						return item;
					})
				);
			} else {
				self.deck.push(card);
				const sorted = self.deck;
				sorted.sort((a, b) => (a.name > b.name ? 1 : -1));
				self.deck = sorted;
			}
		},
	}))
	.actions((self) => ({
		setDeck(deck: Card[]) {
			self.deck = cast(deck);
		},
		setDeckName(name: string) {
			self.deckName = name;
		},
		addCards(cards: Card[]) {
			cards.forEach((card) => self.addCard(card));
		},
		removeCard(cardId: string) {
			if (self.deck.find((item) => item.id === cardId)) {
				self.deck.replace(
					self.deck.map((item) => {
						if (item.id === cardId) {
							item.quantity--;
							return item;
						}
						return item;
					})
				);

				const deckList = self.deck;
				const index = deckList
					.map((card: any) => (card.quantity <= 0 ? card.id : ""))
					.lastIndexOf(cardId);
				if (index > -1) {
					deckList.splice(index, 1);
					self.deck = deckList;
				}
			}
		},
		focusCard(cardId: string) {
			self.focusedCard = cardId;
		},
		setCommander(cardId: string) {
			self.deck.replace(
				self.deck.map((card) => {
					if (card.id === cardId) {
						card.isCommander = true;
						return card;
					}
					card.isCommander = false;
					return card;
				})
			);
		},
		changeEdition(newEdition: Card) {
			self.deck.replace(
				self.deck.map((card) => {
					if (card.name === newEdition.name) {
						newEdition.quantity = card.quantity;
						return newEdition;
					}
					return card;
				})
			);
			self.focusedCard = newEdition.id;
		},
	}))
	.views((self) => ({}));

export default EditorModel;
export type EditorState = Instance<typeof EditorModel>;
