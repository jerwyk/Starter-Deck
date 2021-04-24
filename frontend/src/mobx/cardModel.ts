import { Instance, types as t } from "mobx-state-tree";

const CardImageModel = t.model("Image", {
	small: t.string,
	normal: t.string,
	large: t.string,
	png: t.string,
	art_crop: t.string,
	border_crop: t.string,
});

const CardFaceModel = t.array(
	t.model({
		object: t.string,
		name: t.string,
		mana_cost: t.string,
		type_line: t.string,
		oracle_text: t.string,
		colors: t.array(t.string),
		flavor_text: t.string,
		artist: t.string,
		artist_id: t.string,
		illustration_id: t.string,
		image_uris: CardImageModel,
	})
);

const CardModel = t.model("Card", {
	id: t.string,
	name: t.string,
	quantity: t.optional(t.number, 1),
	isCommander: t.optional(t.boolean, false),
	lang: t.string,
	released_at: t.string,
	uri: t.string,
	scryfall_uri: t.string,
	highres_image: t.boolean,
	image_uris: t.maybe(CardImageModel),
	mana_cost: t.maybe(t.string),
	cmc: t.number,
	type_line: t.string,
	oracle_text: t.maybe(t.string),
	power: t.optional(t.string, "0"),
	toughness: t.optional(t.string, "0"),
	colors: t.array(t.string),
	color_identity: t.array(t.string),
	keywords: t.array(t.string),
	all_parts: t.array(
		t.model({
			object: t.string,
			id: t.string,
			component: t.string,
			name: t.string,
			type_line: t.string,
			uri: t.string,
		})
	),
	card_faces: CardFaceModel,
	legalities: t.model({
		standard: t.string,
		future: t.string,
		historic: t.string,
		gladiator: t.string,
		pioneer: t.string,
		modern: t.string,
		legacy: t.string,
		pauper: t.string,
		vintage: t.string,
		penny: t.string,
		commander: t.string,
		brawl: t.string,
		duel: t.string,
		oldschool: t.string,
		premodern: t.string,
	}),
	set: t.string,
	set_name: t.string,
	set_type: t.string,
	set_uri: t.string,
	set_search_uri: t.string,
	scryfall_set_uri: t.string,
	rulings_uri: t.string,
	prints_search_uri: t.string,
	collector_number: t.string,
	digital: t.boolean,
	rarity: t.string,
});

export default CardModel;
export interface Card extends Instance<typeof CardModel> {}
export type CardImage = typeof CardImageModel;
export type CardFace = typeof CardFaceModel;
