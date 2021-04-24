import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import "./styles.scss";
import { IconButton } from "@material-ui/core";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import RemoveCircleRoundedIcon from "@material-ui/icons/RemoveCircleRounded";
import { inject, observer } from "mobx-react";
import { Root } from "../../mobx";
import { Card } from "../../mobx/cardModel";

interface cardProps {
	card: Card;
	rootStore?: Root;
}

@inject("rootStore")
@observer
export default class CardView extends Component<cardProps, {}> {
	state = {};

	render() {
		const { id, image_uris, name, card_faces } = this.props.card;

		return (
			<div
				onClick={() => {
					this.props.rootStore?.editor.focusCard(id);
				}}
			>
				<Tooltip title={name}>
					{card_faces && card_faces.length > 0 ? (
						<div className="card-double-face-container card-container">
							<img
								style={{ width: "100%" }}
								src={card_faces[0].image_uris?.png}
								alt={name}
								className="card-front-face"
							></img>
							<img
								style={{ width: "100%" }}
								src={card_faces[1].image_uris?.png}
								alt={name}
								className="card-back-face"
							></img>
						</div>
					) : (
						<img
							className="card-container"
							style={{ height: "100%", width: "100%" }}
							src={image_uris?.normal}
							alt={name}
						></img>
					)}
				</Tooltip>
				<div className="card-action-bar-container">
					<IconButton
						size="small"
						onClick={() =>
							this.props.rootStore?.editor.addCard(this.props.card)
						}
					>
						<AddCircleRoundedIcon color="primary" />
					</IconButton>
					<IconButton
						size="small"
						onClick={() => this.props.rootStore?.editor.removeCard(id)}
					>
						<RemoveCircleRoundedIcon color="secondary" />
					</IconButton>
				</div>
			</div>
		);
	}
}
