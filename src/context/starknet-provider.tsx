"use client";
import {ReactNode} from "react";

import { InjectedConnector } from "starknetkit/injected";
import { ArgentMobileConnector } from "starknetkit/argentMobile";
import { WebWalletConnector } from "starknetkit/webwallet";
import { sepolia, mainnet } from "@starknet-react/chains";
import {
	voyager,
	StarknetConfig,
	publicProvider,
} from "@starknet-react/core";

export function StarknetProvider({ children }: { children: ReactNode }) {
	
	const connectors = [
		new InjectedConnector({ options: { id: "braavos", name: "Braavos" } }),
		new InjectedConnector({ options: { id: "argentX", name: "Argent X" } }),
		new WebWalletConnector({ url: "https://web.argent.xyz" }),
		new ArgentMobileConnector(),
	];

	return (
		<StarknetConfig
			chains={[mainnet, sepolia]}
			provider={publicProvider()}
			connectors={connectors}
			explorer={voyager}
		>
			{children}
		</StarknetConfig>
	);
}
