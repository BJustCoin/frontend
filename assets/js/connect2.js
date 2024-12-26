contract_abi = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [],
    "name": "Blacklisted",
    "type": "error"
}, {
    "inputs": [],
    "name": "ICOCompleted",
    "type": "error"
}, {
    "inputs": [],
    "name": "ICONotStarted",
    "type": "error"
}, {
    "inputs": [],
    "name": "InsufficientFunds",
    "type": "error"
}, {
    "inputs": [],
    "name": "MinSoldError",
    "type": "error"
}, {
    "inputs": [],
    "name": "NotApprove",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    }],
    "name": "OwnableInvalidOwner",
    "type": "error"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
}, {
    "inputs": [],
    "name": "TokenAlreadyExist",
    "type": "error"
}, {
    "inputs": [],
    "name": "WithdrawError",
    "type": "error"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "string",
        "name": "tokenSimvol",
        "type": "string"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenCount",
        "type": "uint256"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "rate",
        "type": "uint256"
    }],
    "name": "BuyToken",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "enum ICOStage",
        "name": "initialStage",
        "type": "uint8"
    }, {
        "indexed": false,
        "internalType": "enum ICOStage",
        "name": "newStage",
        "type": "uint8"
    }],
    "name": "ICOStageChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "Withdraw",
    "type": "event"
}, {
    "inputs": [],
    "name": "advisorsToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_address",
        "type": "address"
    }, {
        "internalType": "bool",
        "name": "_isBlacklisting",
        "type": "bool"
    }],
    "name": "blacklist",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "blacklists",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "buyAdvisorsToken",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "buyEcosystemToken",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "buyFutureTeamToken",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "buyICOToken",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "buyIncentivesToken",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "buyLiquidityToken",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "buyLoyaltyToken",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "buyTeamToken",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "ecosystemToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "futureTeamToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getBaseToken",
    "outputs": [{
        "internalType": "contract Bjustcoin",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getICOStage",
    "outputs": [{
        "internalType": "enum ICOStage",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getRate",
    "outputs": [{
        "internalType": "uint256",
        "name": "rate",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getTokenomicType",
    "outputs": [{
        "internalType": "enum TokenomicType",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "idoToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "incentivesToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "liquidityToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "loyaltyToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "nextICOStage",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "privateSaleToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "publicSaleToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "seedToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "strategicToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "teamToken",
    "outputs": [{
        "internalType": "contract VestingToken",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}];

window.addEventListener('load', function () {   
			if (typeof window.ethereum !== 'undefined') {
				web3 = new Web3(window.ethereum);
				window.ethereum.enable();
                my_account = "0x";
				/// 
				user_account = web3.eth.getAccounts().then(function (accounts) {
					console.log('Connected with MetaMask account: ' + accounts[0]);
                    address_span = document.body.querySelector(".get_metamask_address");
                    address_span.innerHTML = accounts[0];
				});
                contract_address = "0x30C48aFA933737b04cE3BCc82fF51c3330F0461C";
				contract = new web3.eth.Contract(contract_abi, contract_address);
                owner = contract.methods.owner().call().then(function (a) {
                    console.log("icomanager owner", a);
                });
				tokenomic_type = contract.methods.getTokenomicType().call().then(function (a) {
                    console.log("icomanager tokenomic_type", a);
                });
				ico_stage = contract.methods.getICOStage().call().then(function (a) {
                    console.log("icomanager ico_stage", a);
                });
				rate = contract.methods.getRate().call().then(function (a) {
                    console.log("icomanager rate", a);
                });
			} else {
				alert('Please install MetaMask to connect with the Ethereum network');
			}
});


function on(elSelector, eventName, selector, fn) {var element = document.querySelector(elSelector);element.addEventListener(eventName, function(event) {var possibleTargets = element.querySelectorAll(selector);var target = event.target;for (var i = 0, l = possibleTargets.length; i < l; i++) {var el = target;var p = possibleTargets[i];while (el && el !== element) {if (el === p) {return fn.call(p, event);}el = el.parentNode;}}});};

function post_id(_this, url) {
    id = _this.parentElement.getAttribute("data-pk");
    block = _this.parentElement.parentElement.parentElement;
    object = {"id": id*1};
    json = JSON.stringify(object);
    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' );
    
    link.open( 'POST', url, true );
    link.setRequestHeader('Content-Type', 'application/json');
  
    link.onreadystatechange = function () {
    if ( link.readyState == 4 && link.status == 200 ) {
      block.remove();
    }}
    link.send(json);
};

on('body', 'click', '.create_admin_block', function() {
    post_id(this, "/block_admin/");
});
on('body', 'click', '.create_block', function() {
    post_id(this, "/block_user/");
});
on('body', 'click', '.delete_block', function() {
    post_id(this, "/unblock_user/");
});
on('body', 'click', '.create_can_buy', function() {
    post_id(this, "/create_can_buy/");
});
on('body', 'click', '.delete_can_buy', function() {
    post_id(this, "/delete_can_buy/");
});
on('body', 'click', '.delete_admin', function() {
    post_id(this, "/drop_admin/");
});
on('body', 'click', '.delete_admin_block', function() {
    post_id(this, "/unblock_admin/");
});