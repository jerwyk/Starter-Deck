import {
	Typography,
	Tab,
	Tabs,
	Divider,
	GridList,
	Tooltip,
	GridListTile,
	Button,
} from "@material-ui/core";
import React, { Component } from "react";
import { Card } from "../../mobx/cardModel";
import TabPanel from "../../util/tabPanel";
import Axios from "axios";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

interface CardDetailProps {
	card?: Card;
	onSetCommander: (cardId: string) => void;
	onEditionChange: (newEdition: Card) => void;
}

export default class CardDetail extends Component<CardDetailProps> {
	state = {
		value: 0,
		editions: [],
		selected: "",
	};

	async componentDidUpdate(prevProps: CardDetailProps) {
		if (prevProps !== this.props && this.props.card) {
			const res = await Axios.get("https://api.scryfall.com/cards/search", {
				params: {
					q: `!"${this.props.card?.name}"`,
					unique: "prints",
					order: "released",
				},
			});

			this.setState({ editions: res.data.data, selected: this.props.card?.id });
		}
	}

	handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		this.setState({ value: newValue });
	};

	render() {
		const card = this.props.card;

		const CardInfo = () => (
			<div className="card-detail-info-container">
				<Typography variant="h5">{card?.name}</Typography>
				<Divider />
				<img
					style={{ width: "100%" }}
					src={card?.image_uris?.normal}
					alt={card?.name}
					className="card-detail-image"
				/>
				<Divider />
				<Typography>{card?.type_line}</Typography>
				{((card?.type_line.includes("Legendary ") &&
					card?.type_line.includes("Creature")) ||
					card?.type_line.includes("Planeswalker")) && (
					<>
						<Divider />
						<Button
							className="card-detail-set-commander"
							onClick={() => this.props.onSetCommander(card.id)}
						>
							Set as Commander
						</Button>
					</>
				)}
			</div>
		);

		const EditionSelect = () =>
			this.state.editions && (
				<div className="card-detail-edition-container">
					<GridList cellHeight={"auto"} spacing={8} cols={2}>
						{this.state.editions?.map((card: Card, index: number) => (
							<GridListTile key={index}>
								<Tooltip title={card.set_name}>
									<div onClick={() => this.props.onEditionChange(card)}>
										{card.card_faces && card.card_faces.length > 0 ? (
											<img
												style={{
													height: "100%",
													width: "100%",
													borderRadius: "11px",
												}}
												src={card.card_faces[0].image_uris?.normal}
												alt={card.name}
											></img>
										) : (
											<img
												style={{
													height: "100%",
													width: "100%",
													borderRadius: "11px",
												}}
												src={card.image_uris?.normal}
												alt={card.name}
											></img>
										)}
										{card.id === this.props.card?.id && (
											<div className="card-detail-edition-selected">
												<CheckRoundedIcon color="primary" fontSize="large" />
											</div>
										)}
									</div>
								</Tooltip>
							</GridListTile>
						))}
					</GridList>
				</div>
			);

		return (
			<div className="card-detail-container">
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
					indicatorColor="primary"
					className="card-detail-tabs"
				>
					<Tab label="Details" aria-label="selected card" />
					<Tab label="Edition" aria-label="search" />
				</Tabs>
				<TabPanel value={this.state.value} index={0}>
					<CardInfo />
				</TabPanel>
				<TabPanel value={this.state.value} index={1}>
					<EditionSelect />
				</TabPanel>
			</div>
		);
	}
}
