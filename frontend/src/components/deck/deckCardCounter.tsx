import { Fab } from "@material-ui/core";
import React, { useMemo } from "react";
import { Card } from "src/mobx/cardModel";
interface IDeckDataProps {
	deck?: Card[];
}

export default function CardCounter({ deck }: IDeckDataProps) {
	const count = useMemo(() => {
		let card_num = 0;
		deck?.forEach((card) => (card_num += card.quantity));
		return card_num;
	}, [deck]);

	return (
		<div className="deck-counter">
			<Fab color="primary" aria-label="add">
				{count}
			</Fab>
		</div>
	);
}
