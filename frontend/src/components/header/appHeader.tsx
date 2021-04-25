import {
	AppBar,
	IconButton,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useMst } from "src/mobx";

const useStyles = makeStyles({
	deckName: {
		textTransform: "capitalize",
	},
});

export default function AppHeader() {
	const { editor } = useMst();
	const classes = useStyles();

	return (
		<div>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.deckName}>
						{editor.deckName}
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
}
