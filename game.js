function game(){
	var choose = prompt("Which game would you like to play?\nA: Transit Trivia Game 1\nB: Transit Trivia Game 2\nC: Play other games")
	if(choose ==  "A"){
		//Make a transit trivia game.
		var name = prompt("What is your name?")
		alert("WELCOME\nTo the 1st Edition of\nThe Transit Trivia Game!");
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
							alert("Oh man! " + name + ", you were so close!\nYou got 4/5.\nTry again next time!");
						}
					}
					else{
						alert("Oops, try again! You got 3/5.");
					}
				}
				else{
					alert("Oops, try again!\nYou got 2/5.");
				}
			}
			else{
				alert("Oops, try again!\nYou got 1/5.");
			}
		}
		else{
			alert("Oops, try again!\nYou got 0/5.");
		}
	}
	/*Replace it with an else if statement*/
	else if(choose == "B"){
		var name = prompt("What is your name?")
		alert("WELCOME " + name + ",\nTo the second edition of\nThe Transit Trivia Game!\n\nThe questions themselves can be significantly harder than the first game, so watch your back!")
		var pa = prompt("What country assembles the R160 parts and ships them to the United States?\nHint: The factories in this country are owned by Alstom.")
		if(pa == "Brazil"){
			alert("Good job! That was fairly easy.")
			var b = prompt("Which country was the first foreign country to make train parts for the MTA?")
			if(b == "Japan"){
				alert("Nice! You know your stuff! Okay, try this one.")
				var c = prompt("Which company made the parts for the R160B Seimens set?")
				if(c == "Kawasaki Heavy Industries"){
					alert("Correct. I thought that was pretty easy, though... Here is the next question.")
					var d = prompt("What line of the WMATA ends along Interstate 66?\nOmit 'Line' from your answer and leave it capitalized.")
					if(d == "Orange"){
						alert("4/5 already. All right, here is the last question.")
						var e = prompt("In the 1992 subway map, which route travels over the Hammels Wye?")
						if(e == "H"){
							alert("How good are you, " + name + "?\nThis is great! You got a 5/5.?\nCongratulations, " + name + "!!!")
						}
						else{
							alert("You did well. 4/5 isn't so bad. You did much better than I expected :)")
						}
					}
					else{
						alert("That's not the correct answer! Try again. You got 3/5.")
					}
				}
				else if(c == "Kawasaki"){
					alert("Full name please. You got 2/5.")
				}
				else{
					alert("Try again. You got 2/5")
				}
			}
			else if(b == "Kawasaki Heavy Industries"){
				alert("I asked for the country, not the company. You got 1/5.")
			}
			else{
				alert("Oops, try again! You got 1/5.")
			}
		}
		else{
			alert("Told you these questions are hard!\nYou got 0/5.")
		}
	}
	/*Put an else if or else statement*/
	else if(choose == "C"){
		window.open("http://stuytransitclub.github.io/games/")
	}
	else{
		alert("Put your choice in capital letters. Try again.")
	}
}