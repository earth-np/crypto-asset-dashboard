import { useWeb3React } from "@web3-react/core";
import { injected } from "../utils/connectors";

const ConnectButton = () => {
  const { activate } = useWeb3React();
  const onClick = async () => {
    await activate(injected);
  };
  return <button onClick={onClick}>connect</button>;
};

export const HomePage: React.FC = () => {
  const { active, account } = useWeb3React();

  return <div>{active ? account : <ConnectButton />}</div>;
};
