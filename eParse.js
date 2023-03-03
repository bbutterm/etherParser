import { ethers, Contract, InfuraProvider, BrowserProvider } from "ethers";
import axios from 'axios';
//https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462

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
async function getSingedContract() {
    let contractS;
    try {
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
    return contractS;
}

const eParse = async (link) => {
    let chain = getChain(link);
    let address = getAddress(link);
    let abi = await getAbi(address);
    let provider = new ethers.InfuraProvider(chain);
    let contract = new ethers.Contract(address, abi, provider);
    let contractS = "";
    contractS = getSingedContract();
    let GC = new GeneratedContract(address, abi, provider, contract, contractS);
    return (GC);
}


export default eParse;