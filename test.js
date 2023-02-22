import { eParse } from "./eParse.js"

async function test() {
    const etherObj = await eParse("https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462");
    let k = await etherObj.contract.smallUint();
    console.log(k.toString())
}

//const etherObj = eParse("https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462").then(a => { a.contract.isTrue().then(bool => { console.log(bool) }) });

test();