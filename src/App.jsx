import "./index.css";

import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import DesignWithTailwindCSS from "./telwind";
import {
  Navbar,
  Footer,
  Loader,
  Services,
  Transections,
  Welcome
} from "./components";
const App = () => {
  const [hasProvider, setHasProvider] = useState(null);
  const initialState = { accounts: [] };
  const [wallet, setWallet] = useState(initialState);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });
      setHasProvider(Boolean(provider));
    };

    getProvider();
  }, []);

  const updateWallet = async accounts => {
    setWallet({ accounts });
  };

  const handleConnect = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      console.log(accounts);
      updateWallet(accounts);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transections />
      <Footer />
    </div>
  );
};

export default App;
