Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/polygon_mumbai/e89b25e2725d93442fe46db640cfcda9582bf54c79f09313e1e4e2a5a94b9d56"));
let myAddress = '0xecB1e902611396F717F25cC438b51BA549102CA2';
let balance = web3.eth.getBalance(myAddress).then(function (result) {
    console.log(web3.utils.fromWei(result, "ether"));
});
console.log(balance)
let superappTestAccountAddress = '0x9FE7B745a8dEb5b71e8F0C0B1E07cA516eaC9b96';

const privateKey = '0xe72ae5706df50a08a085216058aa43d51ec9eda11513f7abbbfe43b45cc9d229';
// 10000000000000000 wei = 0.01 eth
const tx = {
    'from': superappTestAccountAddress,
    'to': myAddress,
    'gas': 500000,
    'value': 30000000000000000
}

const send = async()=>{
    const response =  await   web3.eth.accounts.signTransaction(tx, privateKey);
    web3.eth.sendSignedTransaction(response.rawTransaction)
        .on("receipt", (receipt) => {
                console.log(receipt)
            }
        )
}
send();
