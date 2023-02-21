# etherParser
Parse contract details by etherscan link.

import { eParse } from "./eParse.js"
const contract_link = "https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462";
//CONTRACT SHOULD BE VERIFIED!

const etherObj = eParse(contract_link);


etherObj contains:
    - address : Address of contract
    - abi : ABI of contract
    - provider
    - contract - UNSIGNED contract
    - contractS -SIGNED contract (coming soon)
