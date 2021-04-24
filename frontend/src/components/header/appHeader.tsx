import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";

export default class AppHeader extends Component {
	render() {
		return (
			<div>
				<AppBar position="fixed">
					<Toolbar>
						<IconButton edge="start" color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6">Unnamed App</Typography>
					</Toolbar>
				</AppBar>
				<Toolbar />
			</div>
		);
	}
}
