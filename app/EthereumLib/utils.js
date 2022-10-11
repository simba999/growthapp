const abi=require('./ethereumjs-abi');
const TX=require('./ethereumjs-tx');

const wallet=require('./ethereumjs-wallet')
import SInfo from 'react-native-sensitive-info';




function CreateTX(nonce,gasPrice,gasLimit,value,to,data,privateKey,contract){
  var tx = new Transaction(null, 1);
  tx.nonce = nonce
  tx.gasPrice = gasPrice
  tx.gasLimit = gasLimit
  tx.value = value
  console.log(tx.gasPrice.toString('hex') + 'gasprice')
  if(contract==false){
    tx.to=to
    console.log('notcontract')
  }
   if(contract==true){
    //tx.to= '0x0000000000000000000000000000000000000000'
    //console.log("contract creation")
  }

  tx.data = data
  //tx.chainID=3
  var feeCost = tx.getUpfrontCost()

//  tx.gas=500000;
  var pk= new Buffer(privateKey, 'hex')

  console.log(feeCost + " gas needed")
  tx.sign(pk)
  return tx.serialize().toString('hex')
}

export async function deploychannel(address,BalehuAddress,password, token,nonce){
  alert('top')
  var formatted_array=[];
  formatted_array[0]="0x608060405260405160608061138683398101806040528101908080519060200190929190805190602001909291908051906020019092919050505082600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426009819055506201518082024201600a8190555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050611262806101246000396000f3006080604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b97bc86146100f65780632ef2d55e14610121578063357291301461014c57806339658245146101995780634ab2e922146101b05780634cfe2ee81461021d57806376eacb4d146102745780637bb86379146102d35780637be8afe01461032a5780639ace38c214610389578063d78d610b146103f6578063d9fbdb9614610421578063e63b33a614610478578063e6c81ef3146104cf578063f4f8495b1461053d578063f8b2cb4f14610568578063f94310d4146105bf575b600080fd5b34801561010257600080fd5b5061010b610616565b6040518082815260200191505060405180910390f35b34801561012d57600080fd5b5061013661061c565b6040518082815260200191505060405180910390f35b34801561015857600080fd5b50610197600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610622565b005b3480156101a557600080fd5b506101ae610937565b005b3480156101bc57600080fd5b506101db6004803603810190808035906020019092919050505061094d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561022957600080fd5b5061025e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061098a565b6040518082815260200191505060405180910390f35b34801561028057600080fd5b506102b5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109a2565b60405180826000191660001916815260200191505060405180910390f35b3480156102df57600080fd5b50610314600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109ba565b6040518082815260200191505060405180910390f35b34801561033657600080fd5b5061036b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a02565b60405180826000191660001916815260200191505060405180910390f35b34801561039557600080fd5b506103b460048036038101908080359060200190929190505050610a4b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561040257600080fd5b5061040b610a7e565b6040518082815260200191505060405180910390f35b34801561042d57600080fd5b50610436610a88565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561048457600080fd5b506104b9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aae565b6040518082815260200191505060405180910390f35b3480156104db57600080fd5b5061053b6004803603810190808035600019169060200190929190803560ff169060200190929190803560001916906020019092919080356000191690602001909291908035906020019092919080359060200190929190505050610baf565b005b34801561054957600080fd5b506105526111cf565b6040518082815260200191505060405180910390f35b34801561057457600080fd5b506105a9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111d5565b6040518082815260200191505060405180910390f35b3480156105cb57600080fd5b50610600600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061121e565b6040518082815260200191505060405180910390f35b60095481565b600a5481565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561067e57600080fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610882576004546000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000600454815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016004600082825401925050819055504260045460405180838152602001828152602001925050506040518091039020600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081600019169055507f7c6a000d6581009ece38db2bf0a802db87c25d55bdf668f06a962b9c7188477382604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1610933565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507f7c6a000d6581009ece38db2bf0a802db87c25d55bdf668f06a962b9c7188477382604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b42600a546009540111151561094b57600080fd5b565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006020528060005260406000206000915090505481565b60036020528060005260406000206000915090505481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600454905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610b6d57600080fd5b505af1158015610b81573d6000803e3d6000fd5b505050506040513d6020811015610b9757600080fd5b81019080805190602001909291905050509050919050565b60008060606000806040805190810160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152509250828b6040518083805190602001908083835b602083101515610c265780518252602082019150602081019050602083039250610c01565b6001836020036101000a038019825116818451168082178552505050505050905001826000191660001916815260200192505050604051809103902091506001828b8b8b604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015610cdb573d6000803e3d6000fd5b5050506020604051035194506002600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015610da757508073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15610db157600080fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054871115610dfd57600080fd5b80600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205488604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140183600019166000191681526020018281526020019350505050604051809103902093508a600019168460001916141515610ebd57600080fd5b6000600b6000866000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f765784600b6000866000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506111c2565b8473ffffffffffffffffffffffffffffffffffffffff16600b6000866000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156111c157600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82896040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156110ab57600080fd5b505af11580156110bf573d6000803e3d6000fd5b505050506040513d60208110156110d557600080fd5b810190808051906020019092919050505015156110f157600080fd5b600260086000828254019250508190555086600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550426008546004546040518084815260200183815260200182815260200193505050506040518091039020600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081600019169055505b5b5050505050505050505050565b60045481565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600160205280600052604060002060009150905054815600a165627a7a7230582021c3d16345224925074c6ee6e9cc6afc90014366d9a609cd5e79c365db2c28fb0029"
  var buffer=abi.rawEncode(["address"],[address])
  alert('buffer')
  var buffer2=abi.rawEncode(["address"],[address2])
  formatted_array.push(buffer.toString('hex'))
  formatted_array.push(buffer2.toString('hex'))
  var encoded=formatted_array.join("")
  var pk=GetPrivateKey(password)
  //var nonce=getNonce(from,token)

  var TX=CreateTX(nonce,'0x4a817c800' ,4000000 ,0,BalehuAddress,encoded,pk,false)
  var hash=await SendRawTransaction(TX,token)
  return hash;
}

// export aync function deploychannel(address,BalehuAddress,password, token,nonce ){
// var formatted_array=[];
// formatted_array[0]="0x608060405260405160608061138683398101806040528101908080519060200190929190805190602001909291908051906020019092919050505082600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550426009819055506201518082024201600a8190555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050611262806101246000396000f3006080604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630b97bc86146100f65780632ef2d55e14610121578063357291301461014c57806339658245146101995780634ab2e922146101b05780634cfe2ee81461021d57806376eacb4d146102745780637bb86379146102d35780637be8afe01461032a5780639ace38c214610389578063d78d610b146103f6578063d9fbdb9614610421578063e63b33a614610478578063e6c81ef3146104cf578063f4f8495b1461053d578063f8b2cb4f14610568578063f94310d4146105bf575b600080fd5b34801561010257600080fd5b5061010b610616565b6040518082815260200191505060405180910390f35b34801561012d57600080fd5b5061013661061c565b6040518082815260200191505060405180910390f35b34801561015857600080fd5b50610197600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610622565b005b3480156101a557600080fd5b506101ae610937565b005b3480156101bc57600080fd5b506101db6004803603810190808035906020019092919050505061094d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561022957600080fd5b5061025e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061098a565b6040518082815260200191505060405180910390f35b34801561028057600080fd5b506102b5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109a2565b60405180826000191660001916815260200191505060405180910390f35b3480156102df57600080fd5b50610314600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109ba565b6040518082815260200191505060405180910390f35b34801561033657600080fd5b5061036b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a02565b60405180826000191660001916815260200191505060405180910390f35b34801561039557600080fd5b506103b460048036038101908080359060200190929190505050610a4b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561040257600080fd5b5061040b610a7e565b6040518082815260200191505060405180910390f35b34801561042d57600080fd5b50610436610a88565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561048457600080fd5b506104b9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aae565b6040518082815260200191505060405180910390f35b3480156104db57600080fd5b5061053b6004803603810190808035600019169060200190929190803560ff169060200190929190803560001916906020019092919080356000191690602001909291908035906020019092919080359060200190929190505050610baf565b005b34801561054957600080fd5b506105526111cf565b6040518082815260200191505060405180910390f35b34801561057457600080fd5b506105a9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111d5565b6040518082815260200191505060405180910390f35b3480156105cb57600080fd5b50610600600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061121e565b6040518082815260200191505060405180910390f35b60095481565b600a5481565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561067e57600080fd5b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610882576004546000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160026000600454815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016004600082825401925050819055504260045460405180838152602001828152602001925050506040518091039020600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081600019169055507f7c6a000d6581009ece38db2bf0a802db87c25d55bdf668f06a962b9c7188477382604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1610933565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507f7c6a000d6581009ece38db2bf0a802db87c25d55bdf668f06a962b9c7188477382604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b5050565b42600a546009540111151561094b57600080fd5b565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006020528060005260406000206000915090505481565b60036020528060005260406000206000915090505481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600454905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b158015610b6d57600080fd5b505af1158015610b81573d6000803e3d6000fd5b505050506040513d6020811015610b9757600080fd5b81019080805190602001909291905050509050919050565b60008060606000806040805190810160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152509250828b6040518083805190602001908083835b602083101515610c265780518252602082019150602081019050602083039250610c01565b6001836020036101000a038019825116818451168082178552505050505050905001826000191660001916815260200192505050604051809103902091506001828b8b8b604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015610cdb573d6000803e3d6000fd5b5050506020604051035194506002600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015610da757508073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15610db157600080fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054871115610dfd57600080fd5b80600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205488604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c0100000000000000000000000002815260140183600019166000191681526020018281526020019350505050604051809103902093508a600019168460001916141515610ebd57600080fd5b6000600b6000866000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f765784600b6000866000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506111c2565b8473ffffffffffffffffffffffffffffffffffffffff16600b6000866000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156111c157600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82896040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156110ab57600080fd5b505af11580156110bf573d6000803e3d6000fd5b505050506040513d60208110156110d557600080fd5b810190808051906020019092919050505015156110f157600080fd5b600260086000828254019250508190555086600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550426008546004546040518084815260200183815260200182815260200193505050506040518091039020600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081600019169055505b5b5050505050505050505050565b60045481565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600160205280600052604060002060009150905054815600a165627a7a7230582021c3d16345224925074c6ee6e9cc6afc90014366d9a609cd5e79c365db2c28fb0029"
// var buffer=abi.rawEncode(["address"],[address])
// var buffer2=abi.rawEncode(["address"],[address2])
// formatted_array.push(buffer.toString('hex'))
// formatted_array.push(buffer2.toString('hex'))
// var encoded=formatted_array.join("")
// var pk=GetPrivateKey(password)
// //var nonce=getNonce(from,token)
//
// var TX=CreateTX(nonce,'0x4a817c800' ,4000000 ,0,BalehuAddress,encoded,pk,false)
// var hash=await SendRawTransaction(TX,token)
// return hash;
// }

export function processCouponOutput(data){
  var outArray=[];
  var hash=data.slice(2,66)
  var buffer = new Buffer(hash,'hex')
  var hash= abi.rawDecode(["byte32"],buffer)
  var value=parseInt(data.slice(67,130))
  var quant=parseInt(data.slice(131,194))
  outArray[0]=hash
  outArray[1]=value
  outArray[2]=quant
}
export async function SendCoin(from,to,amount,token,password,BalehuAddress,nonce){

var address=getLocalAddress()
var encoded=abi.simpleEncode("transfer(address,uint256):(bool)",address,amount)
encoded="0x"+encoded.toString('hex')
var pk=GetPrivateKey(password)
//var nonce=getNonce(from,token)

var TX=CreateTX(nonce,'0x4a817c800' ,100000 ,0,BalehuAddress,encoded,pk,false)
SendRawTransaction(TX,token)
}

function getBalance(address){
 encoded=abi.simpleEncode("balanceOf(address):(uint256)",address)
return encoded;

}
async function SendRawTransaction(data,token){

	 try {
        let response= await fetch('	https://api.balehu.com/v1/app-auth/ethereum-send-raw-transaction', {
  		method: 'POST',
  		headers: {
    		Accept: 'application/json',
    		'Content-Type': 'application/json',
			 'Authorization':"Bearer "+ token
 		 },
  		body: JSON.stringify({
    		"data":data
 		 }),
		});
 		let responseJson = await response.json();
	    var transactionid=responseJson.text;



  }catch (error) {
    alert(error);
  }
}
async function Call(token,data,to,sender){
	 try {
        let response= await fetch('	https://api.balehu.com/v1/app-auth/ethereum-call', {
  		method: 'POST',
  		headers: {
    		Accept: 'application/json',
    		'Content-Type': 'application/json',
			 'Authorization':"Bearer "+ token
 		 },
  		body: JSON.stringify({
    		"data":data,
			"to":to,
			"from":"sender"
 		 }),
		});
 		let responseJson = await response.json();
	    var text=responseJson.text
		return text;


  }catch (error) {
    alert(error);
  }
}



async function getNonce(address,token){

    try {
        let response= await fetch('	https://api.balehu.com/v1/app-auth/ethereum-get-transaction-count', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization':"Bearer "+ token
            },
            body: JSON.stringify({
                "address":address,
                "quantity-tag":"pending"
            }),
        });
        let responseJson = await response.json();
        var text=responseJson.result;
        alert(text)
        return text;

    }catch (error) {
        alert(error);
    }




}







export async function getBalance(myAddress,token,BalehuAddress){
var encoded=abi.simpleEncode("balanceOf(address):(uint256)",myAddress)
var result=Call(token,encoded,BalehuAddress)
}
export function localDeposit(from,amount,token,nonce,password){
	var encoded=abi.simpleEncode("localDeposit(uint)",amount);
	var TX=CreateTX(nonce,'0x4a817c800' ,100000 ,0,BalehuAddress,encoded,pk,false)
	SendRawTransaction(data,token)
}
export function localwithDraw(from,amount,token,nonce,password){
	var encoded=abi.simpleEncode("localDeposit(uint)",amount);
	var TX=CreateTX(nonce,'0x4a817c800' ,100000 ,0,BalehuAddress,encoded,pk,false)
	SendRawTransaction(data,token)
}
export function CreatCoupon(from,amount,quantity,token,nonce){
	var encoded=abi.simpleEncode("CreateOffChainToken(uint,uint):(bytes32,uint,uint,uint)",quantity,amount);
}
export function SendToMerchantCash(amount,to){

	var encoded9=abi.simpleEncode("SendOffChain(uint,address,address)",BalehuLocal,100,to)




}
export function RedeemMerchantCash(amount){

}
export function CloseChannel(amount,sig,merchantnumber){

}
 function StoreKey(password,item){
    SInfo.setItem(password, item, {
        sharedPreferencesName: 'mySharedPrefs',
        kIeychainService: 'myKeychain'
    }).then((value) =>{}
        //alert(value + "storedKey") //value 1
    )


}
 export function GetPrivateKey(password){
    SInfo.getItem(password, {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain'}).then(value => {
        //alert(value + "retrieved")
        return value;
    });

}


export  async  function createWallet(password,token,BalehuAddress){
   try{
     var string= await getRandString(token);
     // alert(string + "this is a string")
     const w=wallet.generate(false,string);
     const priv=w.getPrivateKeyString();
     // alert(priv+ "this is a private key")
     const pub=w.getPublicKeyString();
     const address=w.getAddress();
     await StoreKey(password,priv)
	 var nonce=0
     var walletaddress=await deploychannel(address,BalehuAddress,password, token,nonce )
     console.warnd(walletaddress);
     return address;
   }catch (error) {
       alert(error+ "error");

   }
}


async function getRandString(token){
    try {
        let response=await fetch('https://api.balehu.com/v1/app-auth/crypto-random-32-byte-string', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':"Bearer "+ token
            },

        });
        let responseJson = await response.json();
        var string=responseJson.text;
        //alert(string +"this should be a random string")
        return string;
    }catch (error) {
        console.log(error+ "error");
    }

}