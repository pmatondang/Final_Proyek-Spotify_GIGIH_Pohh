import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import store from "./Store/store";
import App from "./App";

test("check the login page", () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const linkElement = screen.getByText(/welcome/i);
	expect(linkElement).toBeInTheDocument();
});
