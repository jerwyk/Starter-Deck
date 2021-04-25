import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import "./styles.scss";
import { identifier } from "../../types";

interface IBulkImporterProps {
	open: boolean;
	onClose: () => void;
	onImport: (ids: identifier[]) => void;
}

function BulkImporter({ open, onClose, onImport }: IBulkImporterProps) {
	const createIdentifiers = () => {
		const identifiers: identifier[] = [];
		cardNames.split("\n").forEach((card) => {
			// eslint-disable-next-line
			const [msg, num, name, set] =
				card.match(/([0-9]*)x?([^()\n]*)(\(.*\))?/) || [];
			console.log(num, name, set);

			for (var i = 0; i < Number(num || "1"); ++i)
				identifiers.push(
					Object.assign(
						{
							name: name,
						},
						set ? { set: set?.toLowerCase().substring(1, set.length - 1) } : {}
					)
				);
		});
		return identifiers;
	};

	const handleClose = () => {
		onClose();
	};

	const handleImport = () => {
		onImport(createIdentifiers());
		onClose();
	};

	const [cardNames, setCardNames] = useState("");

	return (
		<Dialog
			className="import-dialog"
			open={open}
			onClose={handleClose}
			maxWidth="sm"
			fullWidth={true}
		>
			<DialogTitle>
				<Box display="flex" alignItems="center">
					<Box flexGrow={1}>Bulk Import</Box>
					<Box>
						<IconButton onClick={onClose}>
							<CloseIcon />
						</IconButton>
					</Box>
				</Box>
			</DialogTitle>
			<DialogContent>
				<TextField
					className="import-text-field"
					multiline
					variant="outlined"
					rows="18"
					fullWidth
					label="Card Names"
					onChange={(e) => setCardNames(e.target.value)}
				></TextField>
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={handleImport} color="primary">
					import
				</Button>
			</DialogActions>
		</Dialog>
	);
}

interface INameChangerProps {
	name?: string;
	open: boolean;
	onClose: () => void;
	onConfirm: (name: string) => void;
}

function NameChanger({ name, open, onClose, onConfirm }: INameChangerProps) {
	const [newName, setnewName] = useState(name || "");

	const handleClose = () => {
		onClose();
	};

	const handleImport = () => {
		onConfirm(newName);
		onClose();
	};

	return (
		<Dialog
			className="import-dialog"
			open={open}
			onClose={handleClose}
			maxWidth="sm"
			fullWidth={true}
		>
			<DialogTitle>
				<Box display="flex" alignItems="center">
					<Box flexGrow={1}>Change Name</Box>
					<Box>
						<IconButton onClick={onClose}>
							<CloseIcon />
						</IconButton>
					</Box>
				</Box>
			</DialogTitle>
			<DialogContent>
				<TextField fullWidth onChange={(e) => setnewName(e.target.value)}>
					{name || ""}
				</TextField>
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={handleImport} color="primary">
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export { BulkImporter, NameChanger };
