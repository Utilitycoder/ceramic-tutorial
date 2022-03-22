import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Web3Provider } from '@ethersproject/providers'
import { useEffect, useRef, useState } from "react"
import Web3Modal from "web3modal"

const web3ModalRef = useRef();

const getProvider = async () => {
    const provider = await web3ModalRef.current.connect();
    const wrappedProvider = new Web3Provider(provider);
    return wrappedProvider;
}

export default function Home() {
}
