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

const etherObj = eParse(contract_link); <br>
etherObj.contract.isTrue().then(result=>console.log(result)) //=> true <br>

etherObj contains:<br>
    - address : Address of contract<br>
    - abi : ABI of contract<br>
    - provider<br>
    - contract - UNSIGNED contract<br><br>
    - contractS -SIGNED contract (coming soon)<br>
