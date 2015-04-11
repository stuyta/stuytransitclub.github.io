/**Add a new line for each new transit fact and it will still work. Duplicates will be deleted.*/
function facts(){
	var myArray = ["The New York City Subway was once three separate companies!", 
         "'#00add0', Guess what this is?", 
		 "The D service used to end at 34th Street-Herald Square!", 
		 "The 1990-1992 subway maps had the M running express on the BMT Fourth Avenue Line!", 
		 "Platform screen doors are commonplace in European and Asian subway systems, but cannot be installed in New York City due to the door placements of the cars.\n-Courtesy of Greg Huang", 
		 "The R142 and R142A were built to replace the Redbirds at the same time, look similar, but have dozens of differences such as:\n    Traction Motors,\n    Interior Speakers\n    Destination Signs\n    Windows\n    A/C units\n    Door Window Frames\n-Courtesy of Greg Huang", 
		 "JFK Airport has the second longest commercial runway in North America, at 14,572 feet long.\n\nDenver's runway is the longest, at 16000 feet long.", 
		 "The only two remaining R40 Slants are in the New York City Transit Museum, and are famous for their 10 degree slant, with a wide angle storm door popular with many railfanners.\n-Courtesy of Greg Huang"
		 ];
		 
		 
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    alert(rand)
}
