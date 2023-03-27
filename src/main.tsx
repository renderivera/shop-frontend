import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { buildStore } from "./store";

const store = buildStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App store={store} />
	</React.StrictMode>
);
