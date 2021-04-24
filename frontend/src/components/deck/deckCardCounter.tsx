import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import {
	Fab,
	Popper,
	Paper,
	Fade,
	Table,
	TableContainer,
	TableBody,
} from "@material-ui/core";
import PopupState, { bindPopper, bindToggle } from "material-ui-popup-state";
import React from "react";

function processDeck(deck: any[]) {
	let data: any = {};
	deck.forEach((card) => {
		// eslint-disable-next-line
		let [msg, superType, basic, type] = card.type_line
			.split(" — ")[0]
			.match(/(Legendary)?(Basic)?([^/]*).*/);
		type = type.trim();
		if (data[type]) {
			data[type]++;
		} else {
			data[type] = 1;
		}
	});

	return Object.entries(data).sort(([keyA, valueA], [keyB, valueB]) => {
		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;
		return 0;
	});
}

interface IDeckDataProps {
	deck?: any[];
}

export default function CardCounter({ deck }: IDeckDataProps) {
	let deckData: any = {};

	if (deck) deckData = processDeck(deck);

	return (
		<PopupState variant="popper" popupId="demoPopover">
			{(popupState) => (
				<div className="deck-counter">
					<Fab color="primary" aria-label="add" {...bindToggle(popupState)}>
						{deck?.length || 0}
					</Fab>
					<Popper
						{...bindPopper(popupState)}
						placement="top-end"
						transition
						disablePortal={true}
						modifiers={{
							offset: {
								enabled: true,
								offset: "0, 10",
							},
						}}
					>
						{({ TransitionProps }) => (
							<Fade {...TransitionProps} timeout={350}>
								<TableContainer component={Paper} style={{ minWidth: "240px" }}>
									<Table>
										<TableBody>
											{deckData.map(([key, value]: any[]) => (
												<TableRow key={key}>
													<TableCell component="th" scope="row">
														{key}
													</TableCell>
													<TableCell align="right">{value}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</Fade>
						)}
					</Popper>
				</div>
			)}
		</PopupState>
	);
}
