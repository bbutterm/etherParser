# etherParser
Parse contract details by etherscan link.
<br>
<br>
import { eParse } from "./eParse.js"
<br>
<br>
const contract_link = "https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462";<br>
<br>
//CONTRACT SHOULD BE VERIFIED!

const etherObj = eParse(contract_link)<br>.then(a => { a.contract.isTrue()<br>.then(bool => { console.log(bool) }) }); // "true"

etherObj contains:<br>
    - address : Address of contract<br>
    - abi : ABI of contract<br>
    - provider<br>
    - contract - UNSIGNED contract<br><br>
    - contractS -SIGNED contract (coming soon)<br>
    
<br>
You also can use react hook "useEthers"
<br>
import {useEthers} from "./useEthers";<br>
const contract_link = "https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462";<br>
const [contract,signedContract] = useEthers(link);<br>
Now your contract have all methods, and signed contract also have you sign, that allows to store blockain operations
