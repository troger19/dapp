npm init -v

install web3js :  `npm install --save web3` 

## Interact with blockchain using browser
Open index.html in Chrome browser and write commands to Chrome developer console

`Web3`

`let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));`

`web3.eth.getAccounts().then(console.log);`

`web3.eth.getBalance("0xecB1e902611396F717F25cC438b51BA549102CA2").then(function(result){console.log(web3.utils.fromWei(result,"ether"));})`

## Interact with Blockchain from Node terminal

run Node:  `node` 

Import Web3:  `let Web3 = require("web3");` 

Connect to Ganache :  `let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));`

Get balance account :  `web3.eth.getBalance("0xecB1e902611396F717F25cC438b51BA549102CA2").then(console.log);`

Convert wei into ether :  `web3.eth.getBalance("0xecB1e902611396F717F25cC438b51BA549102CA2")
.then(function(result){console.log(web3.utils.fromWei(result,"ether"));})`

Transfer ether from one account to another: 
`web3.eth.sendTransaction({from:"0xF2443019A773C23B9e51F94ed15C747753f9C731",to:"0xdA78D6469808cDE86020DDcAD297b3233C7E68eB",value:web3.utils.toWei("5","ether")});`

## Get and set value in contract
Compile contract (.sol) file and deploy to Ganache. 
ABI and contractAddress copy from REMIX IDE

creating contract (ABI,contractAddress) :  `let contract = new web3.eth.Contract([
{
"inputs": [
{
"internalType": "uint256",
"name": "_x",
"type": "uint256"
}
],
"name": "set",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [],
"name": "x",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"stateMutability": "view",
"type": "function"
}
],"0xD7C35b5c4D9E71C82F8cBEa535a9653E6b4950b2");`

Get the value from smart contract :  `contract.methods.x().call().then(console.log);`

Set the value from smart contract :  `contract.methods.set(90).send({from:"0xF2443019A773C23B9e51F94ed15C747753f9C731"});`


## Using browser to interact with smart contract
package for interact browser with smart contract `npm install web3.js-browser`

use the same command in index.html in Chrome console
`let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));`

list Ganache accounts `web3.eth.getAccounts().then(console.log);`

## ABI
Install dependencies for
`npm install solc web3`

# Creating wallet
address: `0xecB1e902611396F717F25cC438b51BA549102CA2`

privateKey: `0xe72ae5706df50a08a085216058aa43d51ec9eda11513f7abbbfe43b45cc9d229`

superapp test account: `0x9FE7B745a8dEb5b71e8F0C0B1E07cA516eaC9b96`



Send transaction
web3.eth.accounts.signTransaction({to: '0x9FE7B745a8dEb5b71e8F0C0B1E07cA516eaC9b96',value: '1',gas: 2000000}, '0xe72ae5706df50a08a085216058aa43d51ec9eda11513f7abbbfe43b45cc9d229').then(console.log);
1.4585
MATIC

mali sme 0.73