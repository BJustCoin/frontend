window.addEventListener('load', function () {
			// check if web3 is available
			if (typeof window.ethereum !== 'undefined') {
				// use the browser injected Ethereum provider
				web3 = new Web3(window.ethereum);

				// request access to the user's MetaMask account
				window.ethereum.enable();

				address = "0xAA4a64D4c1Bb5836F91E4e433226b8A9f8a01Faf";
                abi = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"Blacklisted","type":"error"},{"inputs":[],"name":"ICOCompleted","type":"error"},{"inputs":[],"name":"ICONotStarted","type":"error"},{"inputs":[],"name":"InsufficientFunds","type":"error"},{"inputs":[],"name":"MinSoldError","type":"error"},{"inputs":[],"name":"NotApprove","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"TokenAlreadyExist","type":"error"},{"inputs":[],"name":"WithdrawError","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"string","name":"tokenSimvol","type":"string"},{"indexed":false,"internalType":"uint256","name":"tokenCount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rate","type":"uint256"}],"name":"BuyToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"enum ICOStage","name":"initialStage","type":"uint8"},{"indexed":false,"internalType":"enum ICOStage","name":"newStage","type":"uint8"}],"name":"ICOStageChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"advisorsToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"bool","name":"_isBlacklisting","type":"bool"}],"name":"blacklist","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyAdvisorsToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyEcosystemToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyFutureTeamToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyICOToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyIncentivesToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyLiquidityToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyLoyaltyToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyTeamToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"ecosystemToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"futureTeamToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBaseToken","outputs":[{"internalType":"contract Bjustcoin","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getICOStage","outputs":[{"internalType":"enum ICOStage","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRate","outputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTokenomicType","outputs":[{"internalType":"enum TokenomicType","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"incentivesToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"loyaltyToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextICOStage","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"privateSaleToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSaleToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategicToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamToken","outputs":[{"internalType":"contract VestingToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]';
                contract = new web3.eth.Contract(address, abi);
                contract.methods.balanceOf(ethaddress).call().then(function (balance) {
                    console.log(balance);
                });

				// get the user's accounts
				web3.eth.getAccounts().then(function (accounts) {
					console.log('Connected with MetaMask account: ' + accounts[0]);
				});
			} else {
				alert('Please install MetaMask to connect with the Ethereum network');
			}
		});