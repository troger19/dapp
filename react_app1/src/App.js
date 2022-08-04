import React from 'react';
import Web3 from 'web3';
import Auction from "./static/Auction.json"
import Watch from './static/watch.jpg'

var myContractAuction
var bidAmount = 0;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            bidAmount: 0
        }
    }

    async componentDidMount() {
        const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))
        console.log(await web3.eth.getAccounts());

        // var myContract = await new web3.eth.Contract(HelloWorld.abi, HelloWorld.networks["5777"].address);
        // console.log(await myContract.methods.getMessage().call());


        myContractAuction = await new web3.eth.Contract(Auction.abi, Auction.networks["5777"].address);
        console.log(await myContractAuction.methods);
        console.log(await myContractAuction.methods.HighestBid().call());
        console.log(await myContractAuction.methods.HighestBidder().call());
    }

    async putBidFuc(e) {
        e.preventDefault()
        if (typeof window.ethereum !== 'undefined') {
            if (window.ethereum.selectedAddress) {
                console.log('vypisujem')
                console.log(Web3.utils.toWei(this.state.bidAmount, 'ether'))
                console.log(await myContractAuction.methods.putBid().send({
                    from: window.ethereum.selectedAddress,
                    value: Web3.utils.toWei(this.state.bidAmount, 'ether')
                }));
                console.log(await myContractAuction.methods.HighestBid().call());
                console.log(await myContractAuction.methods.HighestBidder().call());
            } else {
                console.log(await window.ethereum.request({method: 'eth_requestAccounts'}));
            }
        } else {
            console.log("Metamask is not installed")
        }
    }

    changeBidAmount(e) {
        e.preventDefault()
        this.setState({bidAmount: e.target.value})
    }

    render() {
        return (
            <div>
                <h1> JHM DAPP</h1>
                <img width={100} height={100} src={Watch}/>
                <input type='number' placeholder='Eth' value={this.state.bidAmount}
                       onChange={(e) => this.changeBidAmount(e)}/>
                <button onClick={(e) => this.putBidFuc(e)}>Put Bid</button>
            </div>
        )
            ;
    }
}


export default App;
