import { ethers, Contract, InfuraProvider, BrowserProvider } from "ethers";
import axios from 'axios';
//const link = "https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462"

class GeneratedContract {
    constructor(address, abi, provider, contract, contractS) {
        this.address = address;
        this.abi = abi;
        this.provider = provider;
        this.contract = contract;
        this.contractS = contractS;
    }
}
function getChain(link) {
    let chain = link.split("://")[1].split(".e")[1]
    if (chain) {
        chain = link.split("://")[1].split(".e")[0]
    }
    else {
        chain = "homestead";
    }
    return (chain)
}
function getAddress(link) {
    let address = "0x" + link.split("0x")[1];
    return address;
}
async function getAbi(address) {
    const response = await axios.get("https://api-goerli.etherscan.io/api?module=contract&action=getabi&address=" + address);
    let abi = response.data.result

    return abi;
}

export const eParse = async (link) => {
    console.log("getting chain")
    let chain = getChain(link);
    console.log("getting address")
    let address = getAddress(link);
    console.log("getting abi")
    let abi = await getAbi(address);
    console.log("getting provider")
    let provider = new InfuraProvider(chain);
    let contract = new ethers.Contract(address, abi, provider);
    let contractS;
    try {
        const walletProvider = new BrowserProvider(window.ethereum);
        const signer = await walletProvider.getSigner();
        contractS = new Contract(address, abi, signer);
        console.log("signed contract created!")
    }
    catch (err) {
        console.log(err);
    }
    let GC = new GeneratedContract(address, abi, provider, contract, contractS);
    return (GC);
}
