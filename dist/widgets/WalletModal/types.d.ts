import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
export declare enum ConnectorNames {
    Injected = "injected",
    WalletConnect = "walletconnect",
    BSC = "bsc"
}
export declare type ConnectorId = "authereum" | "fortmatic" | "frame" | "injected" | "portis" | "squarelink" | "torus" | "walletconnect" | "walletlink" | "bsc" | any;
export declare type Login = (connectorId: ConnectorNames | ConnectorId) => void;
export interface Config {
    title: string;
    icon: FC<SvgProps>;
    connectorId: ConnectorNames | ConnectorId;
}
