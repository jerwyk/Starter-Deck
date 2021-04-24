import {
	generateTtsCard,
	generateTtsDoubleCard,
	generateTtsDeckBox,
	generateTtsDeckObject,
	generateTtsSingleCard,
} from "./generateObjects";
import Axios from "axios";
import { Card } from "../mobx/cardModel";

const defaltBackUrl =
	"https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/f8/Magic_card_back.jpg/revision/latest?cb=20140813141013";

function getCardImageUrl(card: Card): string[] {
	if (card.image_uris) {
		return [card.image_uris.normal];
	} else if (card.card_faces) {
		return card.card_faces.map((face: any) => face.image_uris.normal);
	} else {
		return [];
	}
}

function buildDeckObject(deckIds: number[], cardList: any[]) {
	let deckObj: any = {};

	if (cardList.length > 1) {
		deckObj = generateTtsDeckObject();
		deckObj.DeckIDs = deckIds;

		deckObj.CustomDeck = Object.assign(
			{},
			...cardList.map((card) => ({
				[card.data.CardID / 100]: card.model,
			}))
		);

		deckObj.ContainedObjects = cardList.map((card) => card.data);
	} else {
		deckObj = generateTtsSingleCard(
			deckIds[0],
			cardList[0].data.Nickname,
			cardList[0].model.FaceURL,
			cardList[0].model.BackURL
		);
	}

	return deckObj;
}

export default async function generateTtsDeck(
	title: string,
	deckList: any[],
	backUrl: string = defaltBackUrl
) {
	const deckIds: number[] = [];
	const commanderIds: number[] = [];
	const tokenIds: number[] = [];

	let tokenList: any[] = [];
	const commanderList: any[] = [];
	let id: number = 1;

	const ttsCardList = deckList.flatMap((card) => {
		// check for any tokens
		if (card.all_parts) {
			card.all_parts.forEach((part: any) => {
				if (part.component === "token" && !tokenList.includes(part.id)) {
					tokenList.push(part.id);
				}
			});
		}
		const cardImage = getCardImageUrl(card);
		// chack for commander
		if (card.isCommander) {
			commanderIds.push(id);
			commanderList.push(generateTtsCard(id, card.name, cardImage[0], backUrl));
			return [];
		}

		deckIds.push(id * 100);
		// check if the card is double sided
		if (cardImage.length > 1) {
			return generateTtsDoubleCard(
				id++,
				card.name,
				card.oracle_text,
				cardImage[0],
				cardImage[1],
				backUrl
			);
		}

		return generateTtsCard(id++, card.name, cardImage[0], backUrl);
	});

	let deckBox = generateTtsDeckBox();

	// set deck name
	deckBox.ObjectStates[0].Nickname = title;

	// main deck
	const mainDeck = buildDeckObject(deckIds, ttsCardList);
	deckBox.ObjectStates[0].ContainedObjects = [mainDeck];

	// double sided deck
	if (commanderList.length > 0) {
		const commanderDeck = buildDeckObject(commanderIds, commanderList);
		deckBox.ObjectStates[0].ContainedObjects.push(commanderDeck);
	}

	// first fetch token data
	if (tokenList.length > 0) {
		const res = await Axios.post(
			"https://api.scryfall.com/cards/collection",
			{
				identifiers: tokenList.map((card: any) => ({
					id: card,
				})),
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		// map tokens
		tokenList = res.data.data.map((card: any) => {
			tokenIds.push(id * 100);
			return generateTtsCard(id++, card.name, card.image_uris.normal, backUrl);
		});

		const tokenDeck = buildDeckObject(tokenIds, tokenList);
		deckBox.ObjectStates[0].ContainedObjects.push(tokenDeck);
	}

	return deckBox;
}
