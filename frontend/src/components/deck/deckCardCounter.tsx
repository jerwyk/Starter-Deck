import { Fab } from "@material-ui/core";
import React from "react";
interface IDeckDataProps {
	deck?: any[];
}

export default function CardCounter({ deck }: IDeckDataProps) {
	return (
		<div className="deck-counter">
			<Fab color="primary" aria-label="add">
				{deck?.length || 0}
			</Fab>
		</div>
	);
}
