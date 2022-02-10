import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";
import styles from "../styles/Home.module.css";

import { injected } from "../src/utils/connectors";
import { HomePage } from "../src/features/HomePage";

const Home: NextPage = () => {
  return <HomePage />;
};

export default Home;
