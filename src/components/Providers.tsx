import { Web3ReactProvider } from "@web3-react/core";
import ethers from "ethers";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 15000;
  return library;
}

export const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  );
};
