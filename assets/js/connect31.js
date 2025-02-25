contract_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"BalanceNotNull","type":"error"},{"inputs":[],"name":"Blacklisted","type":"error"},{"inputs":[],"name":"BurnICOToken","type":"error"},{"inputs":[],"name":"ICOCompleted","type":"error"},{"inputs":[],"name":"ICONotStarted","type":"error"},{"inputs":[],"name":"IncorrectParameters","type":"error"},{"inputs":[],"name":"InsufficientFunds","type":"error"},{"inputs":[],"name":"MinSoldError","type":"error"},{"inputs":[],"name":"NotApprove","type":"error"},{"inputs":[],"name":"NotInWhitelisted","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"PausedTrading","type":"error"},{"inputs":[],"name":"SetDefaultRateByZero","type":"error"},{"inputs":[],"name":"TokenAlreadyExist","type":"error"},{"inputs":[],"name":"WhiteListTokenCount","type":"error"},{"inputs":[],"name":"WithdrawError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum TokenomicType","name":"tokenomicType","type":"uint8"},{"indexed":false,"internalType":"address[]","name":"recipients","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"numberToken","type":"uint256[]"}],"name":"BatchTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"blockedAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"isBlacklisting","type":"bool"}],"name":"Blacklist","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum TokenomicType","name":"tokenomicType","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"numberToken","type":"uint256"}],"name":"BurnTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"tokenSimvol","type":"string"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"priceUSD","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sumUSD","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rate","type":"uint256"}],"name":"BuyToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"enum ICOStage","name":"initialStage","type":"uint8"},{"indexed":false,"internalType":"enum ICOStage","name":"newStage","type":"uint8"}],"name":"ICOStageChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPause","type":"bool"}],"name":"PauseTrading","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"tokenSimvol","type":"string"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"priceUSD","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"sumUSD","type":"uint256"}],"name":"TransferToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oracle","type":"address"}],"name":"UpdateOracleAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"allowedAddress","type":"address"},{"indexed":false,"internalType":"enum TokenomicType","name":"tokenomicType","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"numberToken","type":"uint256"}],"name":"WhiteList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"advisorsToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum TokenomicType","name":"tokenomic","type":"uint8"},{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"uint256[]","name":"amount","type":"uint256[]"}],"name":"batchTransfer","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"bjustCoinTransferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_isBlacklisting","type":"bool"}],"name":"blacklist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum TokenomicType","name":"tokenomicType","type":"uint8"}],"name":"burnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyAdvisorsToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyEcosystemToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyFutureTeamToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyICOToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyIncentivesToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyLiquidityToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyLoyaltyToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyStrategicToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyTeamToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"ecosystemToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"futureTeamToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBaseToken","outputs":[{"internalType":"contract Bjustcoin","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDefaultRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getICOStage","outputs":[{"internalType":"enum ICOStage","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOracleAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPauseTraiding","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"enum TokenomicType","name":"tokenomicType","type":"uint8"}],"name":"getTokenomicSettings","outputs":[{"components":[{"internalType":"address","name":"stageToken","type":"address"},{"internalType":"string","name":"nameToken","type":"string"},{"internalType":"string","name":"symbolToken","type":"string"},{"internalType":"uint256","name":"maxTokenCount","type":"uint256"},{"internalType":"uint256","name":"soldTokenCount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint8","name":"cliffMonth","type":"uint8"},{"internalType":"uint8","name":"vestingMonth","type":"uint8"},{"internalType":"uint8","name":"unlockTokensPercent","type":"uint8"}],"internalType":"struct TokenomicSetting","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenomicType","outputs":[{"internalType":"enum TokenomicType","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"incentivesToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"loyaltyToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextICOStage","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"privateSaleToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setDefaultRate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"aggrigator","type":"address"}],"name":"setOracle","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"value","type":"bool"}],"name":"setPauseTraiding","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"strategicToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferAdvisorsToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferEcosystemToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFutureTeamToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferICOToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferIncentivesToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferLiquidityToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferLoyaltyToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferStrategicToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferTeamToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"enum TokenomicType","name":"_tokenomicType","type":"uint8"},{"internalType":"uint256","name":"_count","type":"uint256"}],"name":"whitelist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"enum TokenomicType","name":"","type":"uint8"}],"name":"whitelists","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}];

function on(elSelector, eventName, selector, fn) {var element = document.querySelector(elSelector);element.addEventListener(eventName, function(event) {var possibleTargets = element.querySelectorAll(selector);var target = event.target;for (var i = 0, l = possibleTargets.length; i < l; i++) {var el = target;var p = possibleTargets[i];while (el && el !== element) {if (el === p) {return fn.call(p, event);}el = el.parentNode;}}});};
function toBigInt(n) {
  return n.toString().includes("e") ? BigInt(n)
                                    : BigInt(n+"");
}
get_user_info = document.body.querySelector(".get_user_info");
const FIRSTNAME = get_user_info.getAttribute("first-name");
const LASTNAME = get_user_info.getAttribute("last-name");
const EMAIL = get_user_info.getAttribute("email");
const ID = get_user_info.getAttribute("id");
current_stage = 0;
tokenomic_type = 0;
current_rate = 0;

function send_mail (first_name, last_name, email, subtitle, text) {
    object = {
        "subtitle": subtitle, 
        "text": text,
        "first_name": first_name,
        "last_name": last_name, 
        "email": email, 
    };
    json = JSON.stringify(object);
    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' ); 
                    
    link.open( 'POST', "/send_mail/", true );
    link.setRequestHeader('Content-Type', 'application/json');
                
    link.onreadystatechange = function () {
    if ( link.readyState == 4 && link.status == 200 ) {
        console.log("email send!!");
    }}
    link.send(json);
}

window.addEventListener('load', function () {
			if (typeof window.ethereum !== 'undefined') {
				web3 = new Web3(window.ethereum);
				window.ethereum.enable();
                user_perm = 0;
                try {
                    connect_page = document.body.querySelector(".connect_page");
                    user_perm = connect_page.getAttribute("data-val"); 
                } catch { null };
                user_perm = connect_page.getAttribute("data-val");
				/// 
				user_account = web3.eth.getAccounts().then(function (accounts) {
                    console.log('Connected with MetaMask account: ' + accounts[0]);
                    try {
                    address_span = document.body.querySelector(".get_metamask_address");
                    address_span.innerHTML = accounts[0];
                    } catch { null };
                    defaultAccount = accounts[0];
                });
                console.log('Connected with MetaMask account: ' + user_account);
                defaultAccount = user_account;

                contract_address = "0xf86082F6bf8BD9FFC02755f65FC3d7eC7d1A0ffc";
				contract = new web3.eth.Contract(
                    contract_abi,
                    contract_address,
                    {}
                );

				tokenomic_type = contract.methods.getTokenomicType().call().then(function (a) {
                    console.log("icomanager tokenomic_type", a);
                    current_stage = Number(a);
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
                                    description.innerHTML = "Stage: Seed";
                                    next_stage_btn.innerHTML = "Start ICO Private Sale";
                                }
                                else if (a == 2) {
                                    description.innerHTML = "Stage: Strategic";
                                    next_stage_btn.innerHTML = "Start ICO Private Sale";
                                }
                                else if (a == 3) {
                                    description.innerHTML = "Stage: Private Sale";
                                    next_stage_btn.innerHTML = "Start ICO IDO";
                                }
                                else if (a == 4) {
                                    description.innerHTML = "Stage: IDO";
                                    next_stage_btn.innerHTML = "Start ICO Public Sale";
                                }
                                else if (a == 5) {
                                    description.innerHTML = "Stage: Public Sale";
                                    next_stage_btn.innerHTML = "Start ICO Advisors";
                                }
                                else if (a == 6) {
                                    description.innerHTML = "Stage: Advisors";
                                    next_stage_btn.innerHTML = "Start ICO Team";
                                }
                                else if (a == 7) {
                                    description.innerHTML = "Stage: Team";
                                    next_stage_btn.innerHTML = "Start ICO Future Team";
                                }
                                else if (a == 8) {
                                    description.innerHTML = "Stage: Future Team";
                                    next_stage_btn.innerHTML = "Start ICO Incetives";
                                }
                                else if (a == 9) {
                                    description.innerHTML = "Stage: Incetives";
                                    next_stage_btn.innerHTML = "Start ICO Liquidity";
                                }
                                else if (a == 10) {
                                    description.innerHTML = "Stage: Liquidity";
                                    next_stage_btn.innerHTML = "Start ICO Ecosystem";
                                }
                                else if (a == 11) {
                                    description.innerHTML = "Stage: Ecosystem";
                                    next_stage_btn.innerHTML = "Start ICO Loyalty";
                                }
                                else if (a == 12) {
                                    description.innerHTML = "Stage: Loyalty";
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
                    current_rate = Number(a);
                });

                on('body', 'click', '.transfer_bjustcoin', function() {
                    console.log("transfer_bjustcoin");
                    address = this.parentElement.querySelector(".address").value;
                    amount = this.parentElement.querySelector(".amount").value;
                    amount2 = this.parentElement.querySelector(".amount").value;
                    ico_stage = this.parentElement.querySelector(".ico_stage").value;
                    first_name = this.parentElement.querySelector(".first_name").value;
                    last_name = this.parentElement.querySelector(".last_name").value;
                    email = this.parentElement.querySelector(".email").value;
                    
                    tokenCount = BigInt((+amount.trim()).toFixed(0));
                    digit = BigInt(1e18);
                    final_value = tokenCount * digit;
                    console.log("transfer value:", final_value + '');

                    stage_name = "";
                    if (ico_stage == 1) {
                        contract.methods.transferStrategicToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "Strategic";
                    } 
                    else if (ico_stage == 2) {
                        contract.methods.transferICOToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "Seed"; 
                    }
                    else if (ico_stage == 3) {
                        contract.methods.transferICOToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "Private Sale";
                    }
                    else if (ico_stage == 4) {
                        contract.methods.transferICOToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "IDO";
                    }
                    else if (ico_stage == 5) {
                        contract.methods.transferICOToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "Public Sale";
                    }
                    else if (ico_stage == 6) {
                        contract.methods.transferAdvisorsToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "Advisors";
                    }
                    else if (ico_stage == 7) {
                        contract.methods.transferTeamToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "Team";
                    }
                    else if (ico_stage == 8) {
                        contract.methods.transferFutureTeamToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "Future Team";
                    }
                    else if (ico_stage == 9) {
                        contract.methods.transferIncetivesToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "Incetives";
                    }
                    else if (ico_stage == 10) {
                        contract.methods.transferLiquidityToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "Liquidity";
                    }
                    else if (ico_stage == 11) {
                        contract.methods.transferEcosystemToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "Ecosystem";
                    }
                    else if (ico_stage == 12) {
                        contract.methods.transferLoyaltyToken(to=address, amount=final_value).send({from: defaultAccount,});
                        stage_name = "Loyalty";
                    }

                    object = {
                        "subtitle": "The transfer has been successfully completed", 
                        "text": "Thank you for your purchase of " + amount2 + " BJustCoin [Round " + stage_name + "] Tokens. This confirms that the transfer has been successfully completed",
                        "first_name": first_name,
                        "last_name": last_name, 
                        "email": email, 
                    };
                    json = JSON.stringify(object);
                    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' ); 
                    
                    link.open( 'POST', "/send_mail/", true );
                    link.setRequestHeader('Content-Type', 'application/json');
                
                    link.onreadystatechange = function () {
                    if ( link.readyState == 4 && link.status == 200 ) {
                        console.log("email send!!");
                    }}
                    link.send(json);

                    ///
                    object = {
                        "subtitle": "You have been transferrred " + amount2  + " tokens of Round: " + stage_name, 
                        "text": "Beatrice O'Brien of BJustCoin has transferred " + amount2  + " tokens of {Round: " + stage_name + "} to {" + address + " } " + first_name + " " + last_name,
                        "first_name": "Beatrice",
                        "last_name": "O'Brien", 
                        "email": "beatrice.obrien@justlaw.com", 
                    }; 
                    json = JSON.stringify(object);
                    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' ); 
                    
                    link.open( 'POST', "/send_mail/", true );
                    link.setRequestHeader('Content-Type', 'application/json');
                
                    link.onreadystatechange = function () {
                    if ( link.readyState == 4 && link.status == 200 ) {
                        console.log("email send!!");
                    }}
                    link.send(json);
                    ///
                    this.parentElement.querySelector(".address").value = "";
                    this.parentElement.querySelector(".amount").value = "";
                    this.parentElement.querySelector(".ico_stage").value = "0";
                    this.parentElement.querySelector(".first_name").value = "";
                    this.parentElement.querySelector(".last_name").value = "";
                    this.parentElement.querySelector(".email").value = "";
                });

                on('body', 'click', '.buy_bjustcoin', function() {
                    console.log("buy_bjustcoin");

                    type = this.getAttribute("data-type");
                    tokens = this.getAttribute("data-tokens");
                    wallet = this.getAttribute("data-wallet");

                    amount = this.parentElement.querySelector(".number_of_tokens").value;
                    amount2 = this.parentElement.querySelector("._number_of_tokens").value;
                    a = 10 ** 18;
                    final_value1 = amount*a + "";
                    final_value = final_value1.split(".")[0];
                    console.log("final_value", final_value);
                    //tokens_int = BigInt(tokens);
                    //value_int = BigInt(amount);

                    //if (value_int > tokens_int) {
                    //    alert("Sorry, you can't buy such a large number of tokens.");
                    //}

                    console.log("ico stage", type);
                    stage_name = "";

                    if (type == 0) { 
                        contract.methods.buyICOToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Strategic";
                    }
                    else if (type == 1) {
                        contract.methods.buyICOToken().send({
                           from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Seed";
                    }
                    else if (type == 2) {
                        contract.methods.buyICOToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Private Sale";
                    }
                    else if (type == 3) {
                        contract.methods.buyICOToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "IDO";
                    }
                    else if (type == 4) {
                        contract.methods.buyICOToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Public Sale";
                    }
                    else if (type == 5) {
                        contract.methods.buyAdvisorsToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Advisors";
                    }
                    else if (type == 6) {
                        contract.methods.buyTeamToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Team";
                    }
                    else if (type == 7) {
                        contract.methods.buyFutureTeamToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "FutureTeam";
                    }
                    else if (type == 8) {
                        contract.methods.buyIncentivesToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Incentives";
                    }
                    else if (type == 9) {
                        contract.methods.buyLiquidityToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Liquidity";
                    }
                    else if (type == 10) {
                        contract.methods.buyEcosystemToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Ecosystem";
                    }
                    else if (type == 11) {
                        contract.methods.buyLoyaltyToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Loyalty";
                    }
                    
                    ///
                    object = {
                        "subtitle": "Welcome to the BJustCoin community!", 
                        "text": "Thank you for joining us on this exciting journey! By purchasing " + stage_name + " BJustCoin, you’re not just investing in a cryptocurrency — you’re becoming part of a growing movement. Our mission is to create a secure, transparent, and empowering digital ecosystem for all users. Whether you're a seasoned crypto enthusiast or just getting started, we're here to support you every step of the way. Stay tuned for updates, tips, and news about BJustCoin, and feel free to connect with us if you have any questions. Let’s build a brighter, decentralized future together! Welcome aboard!",
                        "first_name": FIRSTNAME,
                        "last_name": LASTNAME, 
                        "email": EMAIL,
                    };
                    console.log(object);
                    json = JSON.stringify(object);
                    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' ); 
                    
                    link.open( 'POST', "/send_mail/", true );
                    link.setRequestHeader('Content-Type', 'application/json');
                
                    link.onreadystatechange = function () {
                    if ( link.readyState == 4 && link.status == 200 ) {
                        console.log("email send!!");
                    }}
                    link.send(json);

                    object = {
                        "subtitle": FIRSTNAME + " " + LASTNAME + " purchased " + amount2 + " tokens to " + stage_name, 
                        "text": FIRSTNAME + " " + LASTNAME + " purchased " + amount2 + " tokens to " + stage_name,
                        "first_name": "Beatrice",
                        "last_name": "O'Brien", 
                        "email": "beatrice.obrien@justlaw.com", 
                    }; 
                    json = JSON.stringify(object);
                    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' ); 
                    
                    link.open( 'POST', "/send_mail/", true );
                    link.setRequestHeader('Content-Type', 'application/json');
                
                    link.onreadystatechange = function () {
                    if ( link.readyState == 4 && link.status == 200 ) {
                        console.log("email send!!");
                    }}
                    link.send(json);
                    ////

                    this.parentElement.querySelector(".number_of_tokens").value = "";
                    //alert("Successfully!");
                });
                
                on('body', 'click', '.add_to_whitelist', function() {
                    _this = this;
                    console.log("add_to_whitelist");
                    id = this.getAttribute("id");
                    parent = _this.parentElement.parentElement;
                    tokens = parent.querySelector("#id_tokens").value; 
                    ico_stage = parent.querySelector(".ico_stage").value*1;
                    address = parent.parentElement.querySelector(".address").innerHTML;

                    ////////
                    tokens_val = tokens + "000000000000000000";
                    object = {
                        "id":        id*1,
                        "tokens":    tokens_val,
                        "ico_stage": ico_stage,
                    }; 
                    json = JSON.stringify(object);
                    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' ); 
                    
                    link.open( 'POST', "/agree_application/", true ); 
                    link.setRequestHeader('Content-Type', 'application/json');
                
                    link.onreadystatechange = function () {
                    if ( link.readyState == 4 && link.status == 200 ) {
                        console.log("add_to_whitelist send!!");
                        _this.parentElement.parentElement.parentElement.classList.add("hide");
                        document.body.querySelector('[id=' + '"' + id + '"' + ']').remove();
                    }}
                    link.send(json);
                    
                    add_to_wishlist = contract.methods.whitelist(
                        _address=address,
                        _tokenomicType=ico_stage,
                        _count=tokens_val
                    ).send({ 
                        from: defaultAccount,
                    }); 
                    /////

                    object = {
                        "subtitle": "Your application for the purchase of BJustCoin has been approved", 
                        "text": "Your application for the purchase of BJustCoin has been approved",
                        "first_name": "",
                        "last_name": "", 
                        "email": "", 
                    };
                    json = JSON.stringify(object);
                    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' ); 
                    
                    link.open( 'POST', "/send_mail/", true );
                    link.setRequestHeader('Content-Type', 'application/json');
                
                    link.onreadystatechange = function () {
                    if ( link.readyState == 4 && link.status == 200 ) {
                        console.log("email send!!");
                    }}
                    link.send(json);
                    
                    ////

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

                on('body', 'click', '.withdraw_money', function() {
                    contract.methods.withdraw().send({
                        from: defaultAccount,
                    }); 
                });

                on('body', 'click', '.set_bjustcoin_rate', function() {
                    console.log("set_bjustcoin_rate");
                    value = this.parentElement.querySelector(".value").value;
                    a = 10 ** 8;
                    format_value = value*a; 
                    console.log("format_value ", format_value);

                    buy_bjustcoin = contract.methods.setDefaultRate(value=format_value).send({
                        from: defaultAccount,
                    });
                    this.parentElement.querySelector(".value").value = "";
                });

                var ExcelToJSON = function() {
                    this.parseExcel = function(file) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                            var data = e.target.result;
                            var workbook = XLSX.read(data, {
                            type: 'binary'
                        });
                        workbook.SheetNames.forEach(function(sheetName) {
                            // Here is your object
                            var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                            var json_object = JSON.stringify(XL_row_object);
                            json = JSON.parse(json_object);
                            addresses_list = [];
                            tokens_list = [];
                            for (var i = 0; i < json.length; i++){
                                val = json[i]["address"];
                                console.log("json[i]", json[i]);
                                addresses_list.push(json[i]["address"]);
                                tokens_list.push("50000000000000000000");
                            }
                            console.log("addresses_list", addresses_list);
                            //console.log("addresses_length", addresses_list.length);
                            console.log("tokens_list", tokens_list);

                            //console.log("tokens_list", tokens_list.length);
                            console.log('defaultAccount: ' + defaultAccount);
                            contract.methods.batchTransfer(
                                tokenomic=11, 
                                recipients=addresses_list,
                                amount=tokens_list,
                            ).send({
                                from: defaultAccount,
                                //gasLimit: ,
                            });
                        })
                    };

                    reader.onerror = function(ex) {
                        console.log(ex);
                    };

                    reader.readAsBinaryString(file);
                    };
                };
                function handleFileSelect(evt) {
                    var files = evt.files; // FileList object
                    var xl2json = new ExcelToJSON();
                    xl2json.parseExcel(files[0]);
                };

                on('body', 'click', '.batch_token_transfer', function() {
                    upload_field = this.parentElement.querySelector("#upload");
                    console.log(upload_field);
                    handleFileSelect(upload_field);
                })
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
on('body', 'click', '.delete_admin', function() {
    post_id(this, "/drop_admin/");
});
on('body', 'click', '.delete_admin_block', function() {
    post_id(this, "/unblock_admin/");
});

on('body', 'input', '._number_of_tokens', function() {
    //try {
        if (current_stage == 0) {
            cost = 0.35;
        }
        else if (current_stage == 1) {
            cost = 0.45;
        }
        else if (current_stage == 2) {
            cost = 0.55;
        }
        else if (current_stage == 3) {
            cost = 0.65;
        }
        else {
            cost = 0.75;
        }
        rate = current_rate;
        val = this.value;
        eth_val = document.body.querySelector(".number_of_tokens");
        eth_val.value = val * cost * 100000000 / rate;

        value = this.value*1;
        btn = this.parentElement.parentElement.parentElement.querySelector("button");
        if (value*cost > 1000000) {
            btn.setAttribute("disabled", "disabled");
        }
        else {
            btn.removeAttribute("disabled");
        }
    //} catch { null };
}); 


on('body', 'click', '.action_tr', function() {
    _this = this;
    form = document.body.querySelector(".new_white_list_form");
    full_name = _this.querySelector(".full_name").innerHTML;
    walett = _this.querySelector(".addresss").innerHTML;
    form.querySelector(".add_to_whitelist").setAttribute("id", _this.getAttribute("id"));
    _title = "<span style='font-size:25px'>" + full_name + " (<span class='address'>" + walett + "</span>)</span>";
    _close = "<a style='font-size:18px; cursor: pointer; float: right;' class='close_white_list_window'>Close window</a>";
    form.querySelector(".info_check").innerHTML = _title + _close;
    form.classList.remove("hide");
});

on('body', 'click', '.close_white_list_window', function() {
    this.parentElement.parentElement.classList.add("hide");
});