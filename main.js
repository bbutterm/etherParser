const standart_abi = [{ "inputs": [], "name": "bigBytes", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "bigInt", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "bigUint", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "isTrue", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "_bigBytes", "type": "bytes32" }], "name": "setBigBytes", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "int256", "name": "_bigInt", "type": "int256" }], "name": "setBiglInt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_bigUint", "type": "uint256" }], "name": "setBiglUint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }], "name": "setName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes1", "name": "_smallBytes", "type": "bytes1" }], "name": "setSmallBytes", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "int8", "name": "_smallInt", "type": "int8" }], "name": "setSmallInt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_smallUint", "type": "uint8" }], "name": "setSmallUint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_isTrue", "type": "bool" }], "name": "setTrue", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_wallet", "type": "address" }], "name": "setWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "smallBytes", "outputs": [{ "internalType": "bytes1", "name": "", "type": "bytes1" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "smallInt", "outputs": [{ "internalType": "int8", "name": "", "type": "int8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "smallUint", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "wallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }]
const { ethers, Contract, InfuraProvider } = require('ethers');
const axios = require('axios').default;
//https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462



class EP {
    constructor(link) {
        this.link = link;
        this.chain = this.getChain(link);
        this.address = "0x" + link.split("0x")[1];
        this.abi = this._getABI();
        this.provider = new ethers.InfuraProvider(this.chain);
    };
    getChain(link) {
        let chain = link.split("://")[1].split(".e")[1]
        if (chain) {
            return (link.split("://")[1].split(".e")[0])
        }
        else {
            return ("homestead");
        }
    }
    async getContract() {
        try {
            let abi = await this._abi();
            let c = new ethers.Contract(this.address, abi, this.provider)
            console.log(await c.name())
            this.contract = c;
        }
        catch {
            console.log("err")
        }
    }
    async _getABI() {
        let address = this.address;
        const response = await axios.get("https://api-goerli.etherscan.io/api?module=contract&action=getabi&address=" + address);
        return (response.data.result);
    }
    async _abi() {
        return (await this.abi);
    }
    async info() {
        console.log(this.address)
    }
}

let p = new EP("https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462");
p.info();
//console.log(p.getABI());

async function getVar() {
    await p.getContract()
    console.log(await p.contract.isTrue())
    console.log(await p._abi())
}
getVar()
