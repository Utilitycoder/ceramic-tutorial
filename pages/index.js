import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Web3Provider } from '@ethersproject/providers'
import { useEffect, useRef, useState } from "react"
import Web3Modal from "web3modal"
import { useViewerConnection } from "@self.id/react";

const web3ModalRef = useRef();

const getProvider = async () => {
    const provider = await web3ModalRef.current.connect();
    const wrappedProvider = new Web3Provider(provider);
    return wrappedProvider;
}

export default function Home() {
  const [connection, connect, disconnect] = useViewerConnection();

  useEffect(() => {
    if (connection.status !== "connected") {
      web3ModalRef.current = new Web3Modal({
        network: "rinkeby",
        providerOptions: {},
        disableInjectedProvider: false,
      });
    }
}, [connection.status]);
}
