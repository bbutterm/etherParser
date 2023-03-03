import useEthers from "./useEther.js"


function App() {
  const [objContract, objSContract] = useEthers("https://goerli.etherscan.io/address/0xE3c438a87c3d3aBE58316fF7c3D345eFD9dE0462");
  const handleTest = async () => {
    console.log(objContract)
    console.log(await objContract.isTrue())
    //console.log(await objSContract.setTrue("false"))
  }
  const handleTestSet = async () => {
    console.log(objSContract);
    console.log(await objSContract.setTrue(false))
    //console.log(await objSContract.setTrue("false"))
  }
  return (<>
    <div>
      Hello
    </div>
    <button onClick={handleTest} >TEST</button>
    <button onClick={handleTestSet} >TEST_SET</button>
  </>
  );
}

export default App;
