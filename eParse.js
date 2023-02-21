import { ethers, Contract, InfuraProvider } from "ethers";
import axios from 'axios';
//https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462

export class GeneratedContract {
    constructor(address, abi, provider, contract, contractS) {
        this.address = address;
        this.abi = abi;
        this.provider = provider;
        this.contract = contract;
        this.contractS = contractS;
    }
}
export const eParse = async (link) => {
    let chain = link.split("://")[1].split(".e")[1]
    if (chain) {
        chain = link.split("://")[1].split(".e")[0]
    }
    else {
        chain = "homestead";
    }
    let address = "0x" + link.split("0x")[1];
    const response = await axios.get("https://api-goerli.etherscan.io/api?module=contract&action=getabi&address=" + address);
    let abi = await response.data.result;
    let provider = new ethers.InfuraProvider(chain);
    let contract = new ethers.Contract(address, abi, provider);
    let contractS = "";
    try { //SIGNED PROVDIER ??
        walletProvider = new BrowserProvider(window.ethereum)
        if (walletProvider) {
            let signer = await walletProvider.getSinger();
        }
        if (signer) {
            let contractS = contract.connect(signer);
        }
    }
    catch {
        console.log("no wallet provider, cant add signer!");
    }

    let GC = new GeneratedContract(address, abi, provider, contract, contractS);
    return (GC);
}


