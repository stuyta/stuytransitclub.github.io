function game(){
	//Make a transit trivia game.
	alert("WELCOME\nTo the 1st Edition of\nThe Transit Trivia Game!");
	var name = prompt("What is your name?")
	var pa = prompt("Let us start playing:\nClick 'Cancel' to stop.\nWhat was the company that built the R160A?");
	if(pa == "Alstom"){
		alert("CORRECT!\nThat was an easy one.");
		var b = prompt("MULTIPLE CHOICE:\nWhat degree slant did the R40 slant contain?\nA) 8 degree\nB) 10 degree\nC) 12 degree\nYour answer is either A, B, or C.\nPut one of them, capitalized.")
		if(b == "B"){
			alert("CORRECT!\nTry this one:");
			var c = prompt("What did the IRT stand for?\nTake out 'Company' in your answer.");
			if(c == "Interborough Rapid Transit"){
				alert("CORRECT!\nYou are good, but you still have a ways to go before you win!");
				var d = prompt("What model is similar to the R46 but cannot operate with it?");
				if(d == "R44"){
					alert("CORRECT!\nAmazing! Here is the final question!");
					var e = prompt("What caused V trains to be extended to Euclid Avenue in 2005?\nYour answer should be one word and lowercase.");
					if(e == "fire"){
						alert("OH MY GOSH!!!!");
						alert("You have won, " + name + "!\nCongratulations, and wait for my next game coming soon!\n-Made with simple JavaScript.");
					}
					else{
						alert("Oh man! " + name + ", you were so close! Try again next time!");
					}
				}
				else{
					alert("Oops, try again!");
				}
			}
			else{
				alert("Oops, try again!");
			}
		}
		else{
			alert("Oops, try again!");
		}
	}
	else{
		alert("Oops, try again!");
	}
}