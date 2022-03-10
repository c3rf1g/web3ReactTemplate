import Web3 from 'web3';

function App() {

  return (

        <div className="App">
          <button onClick={() => {
              console.log(Web3)
          }}>
              Join using MetaMask
          </button>
        </div>
  );
}

export default App;
