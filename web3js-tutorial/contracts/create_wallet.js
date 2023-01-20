Web3 = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.ankr.com/polygon_mumbai/e89b25e2725d93442fe46db640cfcda9582bf54c79f09313e1e4e2a5a94b9d56"));
let walletBase = web3.eth.accounts.wallet.create();
walletBase.add('0xe72ae5706df50a08a085216058aa43d51ec9eda11513f7abbbfe43b45cc9d229');
let encryptedWallet = walletBase.encrypt("Dovolena10");

// convert wallet object to json and send it to backend
let saveWalletJson = JSON.stringify(encryptedWallet);
// load json form backend
let loadedWallet = JSON.parse(saveWalletJson);

// decrypt wallet from loaded object
let decryptedWallet = walletBase.decrypt(loadedWallet,"Dovolena10");
console.log('My address :', '0xecB1e902611396F717F25cC438b51BA549102CA2');
console.log('Loaded address from wallet ', decryptedWallet[0].address);