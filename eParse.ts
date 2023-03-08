import {BrowserProvider, Contract, ethers, Provider} from "ethers"
import axios from "axios"
//const link:string = "https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462"
interface smObj{
    network:string;
    address:string;
    abi:[];
    provider:Provider;
    contract:Contract;
    contractS:Contract;
}
async function getNetwork(link:string) {
    let chain = link.split("://")[1].split(".e")[1]
    if (chain) {
        chain = link.split("://")[1].split(".e")[0]
    }
    else {
        chain = "homestead";
    }
    return (chain)
}
async function getAddress(link:string) {
    let address = "0x" + link.split("0x")[1];
    return address;
}
async function getAbi(address:string) {
    const response = await axios.get("https://api-goerli.etherscan.io/api?module=contract&action=getabi&address=" + address);
    let abi = response.data.result

    return abi;
}
async function getProvider(network:string) {
    
    return new ethers.InfuraProvider(network);
}
async function getContract(address:string,abi:[],provider:Provider) {
 return new ethers.Contract(address,abi,provider);   
}
async function getContractS(contract:Contract) {
    let window:any;
    let contractS:any;
    try{
        let walletProvider = new BrowserProvider(window.ethereum);
        if (walletProvider){
            let signer = await walletProvider.getSigner();
            contractS = await contract.connect(signer);
        }
    }
    catch{
        console.log("browser provider is not installed")
    }
    return contractS;
}

async function eParse(link:string,arg?:string):Promise<smObj>{
    let network:string = await getNetwork(link)
    let address:string = await getAddress(link)
    let abi:[] = await getAbi(address)
    let provider:Provider = await getProvider(network)
    let contract:Contract = await getContract(address,abi,provider);
    let contractS:any = await getContractS(contract);
    let obj:smObj = {network,address,abi,provider,contract,contractS}
    if (arg=="-l"){
        console.log(network)
        console.log(address)
        console.log(abi)
        console.log(provider)
        console.log(contract)
        console.log(contractS)
    }
    return obj;

}

export default eParse;