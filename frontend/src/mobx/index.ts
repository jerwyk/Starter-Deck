import { Instance, onSnapshot, types as t } from "mobx-state-tree";
import { createContext, useContext } from "react";
import EditorModel from "./editorModel";

const RootModel = t.model("Root", {
	editor: EditorModel,
});

let initialState = RootModel.create({
	editor: {
		deckName: "",
		bulkImportDialog: false,
	},
});

if (localStorage.getItem("rootState")) {
	initialState = RootModel.create(
		JSON.parse(localStorage.getItem("rootState") || "{}")
	);
}

export default RootModel;

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
	localStorage.setItem("rootState", JSON.stringify(snapshot));
});

export type Root = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | Root>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
	const store = useContext(RootStoreContext);
	if (store === null) {
		throw new Error("Store cannot be null, please add a context provider");
	}
	return store;
}
