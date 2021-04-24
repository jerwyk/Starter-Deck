import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

import CardView from "../../../card/card";

interface IDeckViewProps {
	name?: string;
	cards: any;
	width: Breakpoint;
}

class DeckGrid extends Component<IDeckViewProps, {}> {
	render() {
		const getGridListCols = () => {
			if (isWidthUp("xl", this.props.width)) {
				return 6;
			}
			if (isWidthUp("lg", this.props.width)) {
				return 5;
			}
			if (isWidthUp("md", this.props.width)) {
				return 4;
			}
			if (isWidthUp("sm", this.props.width)) {
				return 3;
			}
			return 2;
		};

		return (
			<div style={{ overflow: "hidden" }}>
				<GridList cellHeight={"auto"} spacing={32} cols={getGridListCols()}>
					{this.props.cards?.map((card: any, index: number) => (
						<GridListTile key={index}>
							<CardView card={card}></CardView>
						</GridListTile>
					))}
				</GridList>
			</div>
		);
	}
}

export default withWidth()(DeckGrid);
