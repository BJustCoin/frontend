contract_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"Blacklisted","type":"error"},{"inputs":[],"name":"BurnICOToken","type":"error"},{"inputs":[],"name":"ICOCompleted","type":"error"},{"inputs":[],"name":"ICONotStarted","type":"error"},{"inputs":[],"name":"InsufficientFunds","type":"error"},{"inputs":[],"name":"MinSoldError","type":"error"},{"inputs":[],"name":"NotApprove","type":"error"},{"inputs":[],"name":"NotInWhitelisted","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"PausedTrading","type":"error"},{"inputs":[],"name":"SetDefaultRateByZero","type":"error"},{"inputs":[],"name":"TokenAlreadyExist","type":"error"},{"inputs":[],"name":"WithdrawError","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"bool","name":"isBlacklisting","type":"bool"}],"name":"Blacklist","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum TokenomicType","name":"tokenomic","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"count","type":"uint256"}],"name":"BurnTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"tokenSimvol","type":"string"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rate","type":"uint256"}],"name":"BuyToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"enum ICOStage","name":"initialStage","type":"uint8"},{"indexed":false,"internalType":"enum ICOStage","name":"newStage","type":"uint8"}],"name":"ICOStageChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPause","type":"bool"}],"name":"PauseTrading","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"tokenSimvol","type":"string"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"}],"name":"TransferToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"enum TokenomicType","name":"_tokenomicType","type":"uint8"},{"indexed":false,"internalType":"bool","name":"_isWhitelisting","type":"bool"}],"name":"WhiteList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"advisorsToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_isBlacklisting","type":"bool"}],"name":"blacklist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum TokenomicType","name":"tokenomicType","type":"uint8"}],"name":"burnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyAdvisorsToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyEcosystemToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyFutureTeamToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyICOToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyIncentivesToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyLiquidityToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyLoyaltyToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyStrategicToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyTeamToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"ecosystemToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"futureTeamToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBaseToken","outputs":[{"internalType":"contract Bjustcoin","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDefaultRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getICOStage","outputs":[{"internalType":"enum ICOStage","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPauseTraiding","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenomicType","outputs":[{"internalType":"enum TokenomicType","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"incentivesToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"loyaltyToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextICOStage","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"privateSaleToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setDefaultRate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"value","type":"bool"}],"name":"setPauseTraiding","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"strategicToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferAdvisorsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferEcosystemToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFutureTeamToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferICOToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferIncentivesToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferLiquidityToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferLoyaltyToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferStrategicToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferTeamToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"enum TokenomicType","name":"_tokenomicType","type":"uint8"},{"internalType":"bool","name":"_isWhitelisting","type":"bool"}],"name":"whitelist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"enum TokenomicType","name":"","type":"uint8"}],"name":"whitelists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];

function on(elSelector, eventName, selector, fn) {var element = document.querySelector(elSelector);element.addEventListener(eventName, function(event) {var possibleTargets = element.querySelectorAll(selector);var target = event.target;for (var i = 0, l = possibleTargets.length; i < l; i++) {var el = target;var p = possibleTargets[i];while (el && el !== element) {if (el === p) {return fn.call(p, event);}el = el.parentNode;}}});};

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
                    defaultAccount = accounts[0];
                });
                contract_address = "0x30C48aFA933737b04cE3BCc82fF51c3330F0461C";
				contract = new web3.eth.Contract(
                    contract_abi, 
                    contract_address,
                    {
                        defaultGasPrice: '20000000000',
                        defaultGas: 5000000,
                    }
                );
                owner = contract.methods.owner().call().then(function (a) {
                    console.log("icomanager owner", a);
                });
				tokenomic_type = contract.methods.getTokenomicType().call().then(function (a) {
                    console.log("icomanager tokenomic_type", a);
                });

                /// ico stage sections
				ico_stage = contract.methods.getICOStage().call().then(function (a) {
                    try {
                        buy_widget = document.body.querySelector(".buy_bjustcoin_section_active");
                        if (buy_widget.classList.contains("white" + a)) {
                            console.log("buy_bjustcoin_section_active showed");
                            buy_widget.classList.remove("hide");
                        }
                        else {
                            buy_widget.previousElementSibling.classList.remove("hide");
                        }

                        description = document.body.querySelector(".ico_stage");
                        next_stage_btn = description.nextElementSibling;
                        description.setAttribute("stage-type", a);

                        if (a == 0) {
                            description.innerHTML = "ICO has not started yet";
                            next_stage_btn.innerHTML = "Start ICO";
                        }
                        else if (a == 1) {
                            description.innerHTML = "The correct stage: Strategic";
                            next_stage_btn.innerHTML = "Start ICO Seed";
                        }
                        else if (a == 2) {
                            description.innerHTML = "The correct stage: Seed";
                            next_stage_btn.innerHTML = "Start ICO Private Sale";
                        }
                        else if (a == 3) {
                            description.innerHTML = "The correct stage: Private Sale";
                            next_stage_btn.innerHTML = "Start ICO IDO";
                        }
                        else if (a == 4) {
                            description.innerHTML = "The correct stage: IDO";
                            next_stage_btn.innerHTML = "Start ICO Public Sale";
                        }
                        else if (a == 5) {
                            description.innerHTML = "The correct stage: Public Sale";
                            next_stage_btn.innerHTML = "Start ICO Advisors";
                        }
                        else if (a == 6) {
                            description.innerHTML = "The correct stage: Advisors";
                            next_stage_btn.innerHTML = "Start ICO Team";
                        }
                        else if (a == 7) {
                            description.innerHTML = "The correct stage: Team";
                            next_stage_btn.innerHTML = "Start ICO Future Team";
                        }
                        else if (a == 8) {
                            description.innerHTML = "The correct stage: Future Team";
                            next_stage_btn.innerHTML = "Start ICO Incetives";
                        }
                        else if (a == 9) {
                            description.innerHTML = "The correct stage: Incetives";
                            next_stage_btn.innerHTML = "Start ICO Liquidity";
                        }
                        else if (a == 10) {
                            description.innerHTML = "The correct stage: Liquidity";
                            next_stage_btn.innerHTML = "Start ICO Ecosystem";
                        }
                        else if (a == 11) {
                            description.innerHTML = "The correct stage: Ecosystem";
                            next_stage_btn.innerHTML = "Start ICO Loyalty";
                        }
                        else if (a == 12) {
                            description.innerHTML = "The correct stage: Loyalty";
                            next_stage_btn.innerHTML = "Close ICO";
                        }
                        document.body.querySelector(".ico_stage").innerHTML = a;
                    } catch { null }
                    console.log("icomanager ico_stage", a);
                });
                // end ico stage sections 

				rate = contract.methods.getRate().call().then(function (a) {
                    console.log("icomanager rate", a);
                }); 

                on('body', 'click', '.transfer_bjustcoin', function() {
                    console.log("transfer_bjustcoin");
                    address = this.parentElement.querySelector(".address").value;
                    amount = this.parentElement.querySelector(".amount").value;
                    console.log("transfer value", value);
                    transfer_bjustcoin = contract.methods.transferICOToken(to=address, amount=amount).send({
                        from: defaultAccount,
                        gas: 1000000,
                        gasPrice: '10000000000',
                    });
                });
                on('body', 'click', '.buy_bjustcoin', function() {
                    console.log("buy_bjustcoin");
                    value = this.parentElement.querySelector(".number_of_tokens").value;
                    buy_bjustcoin = contract.methods.buyICOToken().send({
                        from: defaultAccount,
                        gas: 1000000,
                        gasPrice: '10000000000',
                    });
                    this.parentElement.querySelector(".number_of_tokens").value = "";
                }); 
                on('body', 'click', '.add_to_whitelist', function() {
                    console.log("add_to_whitelist");
                    address = this.parentElement.querySelector(".address").value;
                    user_id = this.parentElement.querySelector(".user_id").value;
                    ico_stage = this.parentElement.querySelector(".ico_stage").value;
                    add_to_wishlist = contract.methods.whitelist(_address=address, _tokenomicType=ico_stage).send({
                        from: defaultAccount,
                        gas: 1000000,
                        gasPrice: '10000000000',
                    });
                    ////////
                    object = {
                        "user_id": user_id*1, 
                        "link": address,
                        "ico_stage": ico_stage*1, 
                    };
                    json = JSON.stringify(object);
                    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' ); 
                    
                    link.open( 'POST', "/create_wallet/", true );
                    link.setRequestHeader('Content-Type', 'application/json');
                
                    link.onreadystatechange = function () {
                    if ( link.readyState == 4 && link.status == 200 ) {
                        console.log("add_to_whitelist send!!");
                    }}
                    link.send(json);
                    /////
                    this.parentElement.querySelector(".address").value = "";
                    this.parentElement.querySelector(".user_id").value = "";

                    alert("Added!");
                });
                on('body', 'click', '.start_ico', function() {
                    add_to_wishlist = contract.methods.nextICOStage().send({
                        from: defaultAccount,
                        gas: 1000000,
                        gasPrice: '10000000000',
                    });
                    alert("Start!");
                    this.remove();
                });
                on('body', 'change', '.option_ico_white_list', function() {
                    if (this.getAccounts("data-value") == "0") {
                        return;
                    }
                    _name = this.parentElement.parentElement.parentElement.querySelector("strong").innerHTML;
                    stage = this.getAttribute("data-stage");
                    text = _name + " can buy tokens " + stage;
                    alert(text);
                });
			} else {
				alert('Please install MetaMask to connect with the Ethereum network');
			}
});

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
    post_id(this, "/create_admin/");
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