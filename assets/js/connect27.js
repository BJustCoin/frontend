contract_abi = [{"inputs":[{"internalType":"uint256","name":"_basisPoints","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"CliffBeforeStartTime","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[],"name":"IncorrectSchedulePortions","type":"error"},{"inputs":[{"internalType":"uint256","name":"incorrectTime","type":"uint256"}],"name":"IncorrectScheduleTime","type":"error"},{"inputs":[],"name":"InvalidInitialization","type":"error"},{"inputs":[],"name":"MinterNotSet","type":"error"},{"inputs":[],"name":"MintingAfterCliffIsForbidden","type":"error"},{"inputs":[],"name":"NotEnoughTokensToClaim","type":"error"},{"inputs":[],"name":"NotInitializing","type":"error"},{"inputs":[],"name":"OnlyMinter","type":"error"},{"inputs":[],"name":"OnlyVestingManager","type":"error"},{"inputs":[],"name":"PercentError","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"inputs":[],"name":"StartTimeAlreadyElapsed","type":"error"},{"inputs":[],"name":"TransfersNotAllowed","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint64","name":"version","type":"uint64"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"}],"name":"MintTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"availableBalanceOf","outputs":[{"internalType":"uint256","name":"releasable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"basisPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getVestingSchedule","outputs":[{"components":[{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"cliff","type":"uint256"},{"internalType":"uint8","name":"initialUnlock","type":"uint8"},{"components":[{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"portion","type":"uint256"}],"internalType":"struct Schedule[]","name":"schedule","type":"tuple[]"}],"internalType":"struct Vesting","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"minter","type":"address"},{"internalType":"address","name":"baseToken","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"cliff","type":"uint256"},{"internalType":"uint8","name":"initialUnlock","type":"uint8"},{"components":[{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"portion","type":"uint256"}],"internalType":"struct Schedule[]","name":"schedule","type":"tuple[]"}],"name":"setVestingSchedule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlockedSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

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
                contract_address = "0x3A838115A6e8B31195940009de603Fd4ACA47bd3";
                //contract_address = "0x7e6A0Fe2376DBCde1f64cbe16C08682a74c1ab0e";
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
                        contract.methods.transferICOToken(to=address, amount=final_value).send({from: defaultAccount,});
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
                    amount = this.parentElement.querySelector(".number_of_tokens").value;
                    amount2 = this.parentElement.querySelector("._number_of_tokens").value;
                    a = 10 ** 18; 
                    final_value = amount * a;
                    console.log("ico stage", type);
                    stage_name = "";

                    if (type == 1) { 
                        contract.methods.buyStrategicToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Strategic";
                    }
                    else if (type == 2) {
                        contract.methods.buyICOToken().send({
                           from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Seed";
                    }
                    else if (type == 3) {
                        contract.methods.buyICOToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Private Sale";
                    }
                    else if (type == 4) {
                        contract.methods.buyICOToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "IDO";
                    }
                    else if (type == 5) {
                        contract.methods.buyICOToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Public Sale";
                    }
                    else if (type == 6) {
                        contract.methods.buyAdvisorsToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Advisors";
                    }
                    else if (type == 7) {
                        contract.methods.buyTeamToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Team";
                    }
                    else if (type == 8) {
                        contract.methods.buyFutureTeamToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "FutureTeam";
                    }
                    else if (type == 9) {
                        contract.methods.buyIncentivesToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Incentives";
                    }
                    else if (type == 10) {
                        contract.methods.buyLiquidityToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Liquidity";
                    }
                    else if (type == 11) {
                        contract.methods.buyEcosystemToken().send({
                            from: defaultAccount,
                            value: final_value,
                            gasLimit: 310000,
                        });
                        stage_name = "Ecosystem";
                    }
                    else if (type == 12) {
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

                on('body', 'change', '.toggle_ico_white_list', function() {
                    if (this.getAttribute("data-value") == "0") {
                        return; 
                    }
                    _name = this.parentElement.parentElement.parentElement.querySelector("strong").innerHTML;
                    stage = this.options[this.selectedIndex].text;

                    add_to_wishlist = contract.methods.whitelist(_address=address, _tokenomicType=this.val).send({
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
                                addresses_list.push(json[i]["address"]);
                                tokens_list.push("50000000000000000000");
                            }
                            //console.log("addresses_list", addresses_list);
                            //console.log("addresses_length", addresses_list.length);
                            //console.log("tokens_list", tokens_list);
                            //console.log("tokens_list", tokens_list.length);

                            contract.methods.batchTransfer(
                                tokenomic=11, 
                                recipients=addresses_list,
                                amount=tokens_list
                            ).send({from: defaultAccount,});
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
        eth_val.value = val * cost * 100 / rate;

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