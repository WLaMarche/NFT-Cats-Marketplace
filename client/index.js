alert('Welcome to hell, mother fucker');

//create a variable that represents a web3 library
//Web3(takes an argument that is a URL to whatever ETH node you hvae)
//with metamask, you can just write web3.givenProvider
  //takes whatever you provider we get from MetaMask (local node, testnet or mainnet)
var web3 = new Web3(Web3.givenProvider);

//variables we will use later

var instance; //contract instance
var user; //defines our user
var contractAddress = '0xcAD4aedF32E17B362B22cb74F5DEe17dd8d7666E'; //defines our contract Address here

//whenever the page is done loading...
$(document).ready(function(){
//get to work on web3 Application
//this is true for all web3 applications (where we want to use MetaMask)
//we need to call MetaMask's enable function (like a login Prompt)
  //--> prompts the user to allow our website to use the user's MetaMask account
  window.ethereum.enable().then(function(accounts){
    //in almost every case, our account in MetaMask will always have one single Address
    //accounts is an array, but the account being used is the first one in the array..

    //instance represents the contract being called
    //'abi' is a specification of what our contract does
    instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
    user = accounts[0];

    console.log(instance);
  });

});

//dev -->
//*
//'methods' is part of what is in console.log() from ^... contains contract's functions to call
  //.send() contains callBack, which is an unused options object{} &
    //a function that is the callback.. arg1 is always an error, arg2 is txnHash for successful txn
//*
//THIS IS NOT the proper place to put this function...
//*
//this needs to be implemented so that the button works in our actual application
  //needs to go into some other function --> need to create a clickHandler() on the submit kitty button
    //so that this function is executed & sends the transaction
      //--> have a 'confirmation' that tells the user it's been submitted
//use getDNA function in catSettings
//we need to call MetaMask's enable function (like a login Prompt)

function customKittyClicked(){

  window.ethereum.enable().then(function(accounts){

  var dnaStr = getDna();
  var toString = dnaStr.toString();
  //getAccount();

  instance = new web3.eth.Contract(abi, contractAddress, {
    from: accounts[0]
  });

  instance.methods.createKittyGen0(toString).send({}, function(err, txHash){
    if(err){
      console.log('error');
      alert('Oops. There was an error sending your NFT to the blockchain.');
    }
    else{
      var event = instance.events.Birth;
      var receipt = 'New NFT event log encountered an error.';

      console.log(txHash);
      alert('Congratulations! Your NFT successfully created!');

      instance.events.Birth({
        fromBlock: 'latest'
        }, function(error, event){ })
        .on('data', function(event){
            console.log(event);
            alert(instance.events.Birth); // same results as the optional callback above
        })
        .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
            console.log(receipt);
        });
    }
  });
}

);
}


  //listen for birth event, if event listener fires, alert info across screen
