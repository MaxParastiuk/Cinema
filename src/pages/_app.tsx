import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store, { persistor } from "../redux/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Layout></Layout>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</>
	);
}
