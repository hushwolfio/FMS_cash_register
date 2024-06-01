import type { FC } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Page } from "./components/Page/Page";

const App: FC = () => {
	return (
		<MantineProvider defaultColorScheme="dark" forceColorScheme="dark">
			<Page />
		</MantineProvider>
	);
};

export default App;
