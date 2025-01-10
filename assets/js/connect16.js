contract_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"Blacklisted","type":"error"},{"inputs":[],"name":"BurnICOToken","type":"error"},{"inputs":[],"name":"ICOCompleted","type":"error"},{"inputs":[],"name":"ICONotStarted","type":"error"},{"inputs":[],"name":"InsufficientFunds","type":"error"},{"inputs":[],"name":"MinSoldError","type":"error"},{"inputs":[],"name":"NotApprove","type":"error"},{"inputs":[],"name":"NotInWhitelisted","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"PausedTrading","type":"error"},{"inputs":[],"name":"SetDefaultRateByZero","type":"error"},{"inputs":[],"name":"TokenAlreadyExist","type":"error"},{"inputs":[],"name":"WithdrawError","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"bool","name":"isBlacklisting","type":"bool"}],"name":"Blacklist","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum TokenomicType","name":"tokenomic","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"count","type":"uint256"}],"name":"BurnTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"tokenSimvol","type":"string"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rate","type":"uint256"}],"name":"BuyToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"enum ICOStage","name":"initialStage","type":"uint8"},{"indexed":false,"internalType":"enum ICOStage","name":"newStage","type":"uint8"}],"name":"ICOStageChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPause","type":"bool"}],"name":"PauseTrading","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"tokenSimvol","type":"string"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"}],"name":"TransferToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"enum TokenomicType","name":"_tokenomicType","type":"uint8"},{"indexed":false,"internalType":"bool","name":"_isWhitelisting","type":"bool"}],"name":"WhiteList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"advisorsToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_isBlacklisting","type":"bool"}],"name":"blacklist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum TokenomicType","name":"tokenomicType","type":"uint8"}],"name":"burnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyAdvisorsToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyEcosystemToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyFutureTeamToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyICOToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyIncentivesToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyLiquidityToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyLoyaltyToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyStrategicToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyTeamToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"ecosystemToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"futureTeamToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBaseToken","outputs":[{"internalType":"contract Bjustcoin","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDefaultRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getICOStage","outputs":[{"internalType":"enum ICOStage","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPauseTraiding","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenomicType","outputs":[{"internalType":"enum TokenomicType","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"incentivesToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"loyaltyToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextICOStage","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"privateSaleToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setDefaultRate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"value","type":"bool"}],"name":"setPauseTraiding","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"strategicToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferAdvisorsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferEcosystemToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFutureTeamToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferICOToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferIncentivesToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferLiquidityToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferLoyaltyToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferStrategicToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferTeamToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"enum TokenomicType","name":"_tokenomicType","type":"uint8"},{"internalType":"bool","name":"_isWhitelisting","type":"bool"}],"name":"whitelist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"enum TokenomicType","name":"","type":"uint8"}],"name":"whitelists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];

function on(elSelector, eventName, selector, fn) {var element = document.querySelector(elSelector);element.addEventListener(eventName, function(event) {var possibleTargets = element.querySelectorAll(selector);var target = event.target;for (var i = 0, l = possibleTargets.length; i < l; i++) {var el = target;var p = possibleTargets[i];while (el && el !== element) {if (el === p) {return fn.call(p, event);}el = el.parentNode;}}});};

window.addEventListener('load', function () {   
			if (typeof window.ethereum !== 'undefined') {
				web3 = new Web3(window.ethereum);
				window.ethereum.enable();
                my_account = "0x";

                user_perm = 0;

                try {
                    connect_page = document.body.querySelector(".connect_page");
                    user_perm = connect_page.getAttribute("data-val"); 
                } catch { null };
                user_perm = connect_page.getAttribute("data-val");
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
                    {}
                );
                owner = contract.methods.owner().call().then(function (a) {
                    console.log("icomanager owner", a);
                });
				tokenomic_type = contract.methods.getTokenomicType().call().then(function (a) {
                    console.log("icomanager tokenomic_type", a);
                });

                /// ico stage sections
                
                    ico_stage = contract.methods.getICOStage().call().then(function (a) {
                        if (user_perm == 60) {
                            try {
                                description = document.body.querySelector(".ico_stage_description");
                                next_stage_btn = document.body.querySelector(".start_ico");
                                description.setAttribute("stage-type", a);
                                console.log(a);

                                if (a == 0) {
                                    description.innerHTML = "ICO has not started yet";
                                    next_stage_btn.innerHTML = "Start ICO";
                                }
                                else if (a == 1) {
                                    description.innerHTML = "The correct stage: Seed";
                                    next_stage_btn.innerHTML = "Start ICO Private Sale";
                                }
                                else if (a == 2) {
                                    description.innerHTML = "The correct stage: Strategic";
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
                                
                            } catch { null } 
                        } 
                        
                        else if (user_perm == 2) {
                            try {
                                wallets_list = document.body.querySelector(".user_open_wallets").getAttribute("data-types");
                                stages_list = document.body.querySelector(".user_open_stages").getAttribute("data-types");
                                stages_for_checking_is_open = [1,2,4,5];
                                for (var i = 0; i < stages_list.length; i++){
                                    if (stages_list[i] == 1 && a == 1) {
                                        document.body.querySelector(".buy_seed_section_open").computedStyleMap.display = "unset";
                                    }
                                    else if (stages_list[i] == 2 && a == 2) {
                                        document.body.querySelector(".buy_strategic_section_open").computedStyleMap.display = "unset";
                                    }
                                    else if (stages_list[i] == 3) {
                                        document.body.querySelector(".buy_private_sale_section_open").computedStyleMap.display = "unset";
                                    }
                                    else if (stages_list[i] == 4 && a == 4) {
                                        document.body.querySelector(".buy_ido_section_open").computedStyleMap.display = "unset";
                                    }
                                    else if (stages_list[i] == 5 && a == 5) {
                                        document.body.querySelector(".buy_public_sale_section_open").computedStyleMap.display = "unset";
                                    }
                                    else if (stages_list[i] == 6) {
                                        document.body.querySelector(".buy_advisors_section_open").computedStyleMap.display = "unset";
                                    }
                                    else if (stages_list[i] == 7) {
                                        document.body.querySelector(".buy_team_section_open").computedStyleMap.display = "unset";
                                    }
                                    else if (stages_list[i] == 8) {
                                        document.body.querySelector(".buy_future_team_section_open").computedStyleMap.display = "unset";
                                    }
                                    else if (stages_list[i] == 9) {
                                        document.body.querySelector(".buy_incetives_section_open").computedStyleMap.display = "unset";
                                    }
                                    else if (stages_list[i] == 10) {
                                        document.body.querySelector(".buy_liquidity_section_open").computedStyleMap.display = "unset";
                                    }
                                    else if (stages_list[i] == 11) {
                                        document.body.querySelector(".buy_ecosystem_section_open").computedStyleMap.display = "unset";
                                    }
                                    else if (stages_list[i] == 12) {
                                        document.body.querySelector(".buy_loyalty_section_open").computedStyleMap.display = "unset";
                                    }

                                };
                            } catch { null } 
                        }
                    });
                
                // end ico stage sections 

				rate = contract.methods.getRate().call().then(function (a) {
                    console.log("icomanager rate", a);
                }); 

                on('body', 'click', '.transfer_bjustcoin', function() {
                    console.log("transfer_bjustcoin");
                    address = this.parentElement.querySelector(".address").value;
                    amount = this.parentElement.querySelector(".amount").value;
                    ico_stage = this.parentElement.querySelector(".ico_stage").value;
                    a = 10 ** 18;
                    final_value = amount * a;
                    console.log("transfer value", final_value);
                    if (ico_stage == 1) {
                        contract.methods.transferStrategicToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }
                    else if (ico_stage == 2) {
                        contract.methods.transferICOToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }
                    else if (ico_stage == 3) {
                        contract.methods.transferICOToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }
                    else if (ico_stage == 4) {
                        contract.methods.transferICOToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }
                    else if (ico_stage == 5) {
                        contract.methods.transferICOToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }
                    else if (ico_stage == 6) {
                        contract.methods.transferAdvisorsToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }
                    else if (ico_stage == 7) {
                        contract.methods.transferICOToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }
                    else if (ico_stage == 8) {
                        contract.methods.transferFutureTeamToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }
                    else if (ico_stage == 9) {
                        contract.methods.transferIncetivesToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }
                    else if (ico_stage == 10) {
                        contract.methods.transferLiquidityToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }
                    else if (ico_stage == 11) {
                        contract.methods.transferEcosystemToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }
                    else if (ico_stage == 12) {
                        contract.methods.transferLoyaltyToken(to=address, amount=final_value).send({from: defaultAccount,});
                    }

                        alert("Successfully!");
                });
                on('body', 'click', '.buy_bjustcoin', function() {
                    console.log("buy_bjustcoin");
                    type = this.getAttribute("data-type");
                    amount = this.parentElement.querySelector(".number_of_tokens").value;
                    a = 10 ** 18;
                    final_value = amount * a;
                    console.log("ico stage", type);
                    if (type == 1) {
                        contract.methods.buyStrategicToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }
                    else if (type == 2) {
                        contract.methods.buyICOToken().send({
                           from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }
                    else if (type == 3) {
                        contract.methods.buyICOToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }
                    else if (type == 4) {
                        contract.methods.buyICOToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }
                    else if (type == 5) {
                        contract.methods.buyICOToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }
                    else if (type == 6) {
                        contract.methods.buyAdvisorsToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }
                    else if (type == 7) {
                        contract.methods.buyTeamToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }
                    else if (type == 8) {
                        contract.methods.buyFutureTeamToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }
                    else if (type == 9) {
                        contract.methods.buyIncentivesToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }
                    else if (type == 10) {
                        contract.methods.buyLiquidityToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }
                    else if (type == 11) {
                        contract.methods.buyEcosystemToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }
                    else if (type == 12) {
                        contract.methods.buyLoyaltyToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                    }

                    this.parentElement.querySelector(".number_of_tokens").value = "";
                    //alert("Successfully!");
                }); 
                on('body', 'click', '.add_to_whitelist', function() {
                    console.log("add_to_whitelist");
                    address = this.parentElement.querySelector(".address").value;
                    user_id = this.parentElement.querySelector(".user_id").value;
                    ico_stage = this.parentElement.querySelector(".ico_stage").value*1;
                    val = ico_stage - 1;
                    console.log("current ico stage for white_list", val);
                    add_to_wishlist = contract.methods.whitelist(
                        _address=address,
                        _tokenomicType=val,
                        _isWhitelisting=true
                    ).send({
                        from: defaultAccount,
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
                    }); 
                    alert("Start!");
                    this.remove();
                });
                on('body', 'change', '.toggle_ico_white_list', function() {
                    if (this.getAttribute("data-value") == "0") {
                        return; 
                    }
                    _name = this.parentElement.parentElement.parentElement.querySelector("strong").innerHTML;
                    stage = this.options[this.selectedIndex].text;
                    text = _name + " can buy tokens: " + stage;
                    
                    add_to_wishlist = contract.methods.whitelist(_address=address, _tokenomicType=this.val).send({
                        from: defaultAccount,
                    });

                    alert(text);
                });
                on('body', 'click', '.set_bjustcoin_rate', function() {
                    console.log("set_bjustcoin_rate");
                    value = this.parentElement.querySelector(".value").value;
                    format_value = value*100;
                    buy_bjustcoin = contract.methods.setDefaultRate(value=format_value).send({
                        from: defaultAccount,
                    });
                    this.parentElement.querySelector(".value").value = "";
                    alert("Rate added!");
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

on('body', 'click', '.create_admin', function() {
    post_id(this, "/create_admin/");
});
on('body', 'click', '.create_block', function() {
    post_id(this, "/block_user/");
});
on('body', 'click', '.create_admin_block', function() {
    post_id(this, "/create_admin_block/");
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