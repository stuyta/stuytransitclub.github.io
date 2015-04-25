/**Add a new line for each new transit fact and it will still work. Duplicates will be deleted.*/
function facts(){
	var myArray = ["The New York City Subway was once three separate companies!", 
         "'#00add0', Guess what this is?", 
		 "The D service used to end at 34th Street-Herald Square!", 
		 "The 1990-1992 subway maps had the M running express on the BMT Fourth Avenue Line!", 
		 "Platform screen doors are commonplace in European and Asian subway systems, but cannot be installed in New York City due to the door placements of the cars.\n-Courtesy of Greg Huang", 
		 "The R142 and R142A were built to replace the Redbirds at the same time, look similar, but have dozens of differences such as:\n    Traction Motors,\n    Interior Speakers\n    Destination Signs\n    Windows\n    A/C units\n    Door Window Frames\n-Courtesy of Greg Huang", 
		 "JFK Airport has the second longest commercial runway in North America, at 14,572 feet long.\n\nDenver's runway is the longest, at 16000 feet long.\n-Courtesy of Greg Huang", 
		 "The only two remaining R40 Slants are in the New York City Transit Museum, and are famous for their 10 degree slant, with a wide angle storm door popular with many railfanners.",
		 "NICE(Nassau Inter-County Express)\n Runs a 100% CNG-powered bus fleet,  and is the only transit agency in the NYC area to do so, and is also one of the largest CNG transit agencies outside of California.\n-Courtesy of Greg Huang",
		 "The Atlanta-Hartsfield Airport is the busiest airport in the world, largely due to the Delta hub there.\n-Courtesy of Michael Xu",
		 "In the New York City Transit, IRT cars (A division and numbered trains) and BMT/IND (B division and lettered trains) cars are drastically different. Although they share the same track gauge (4 feet 8.5 inches), the A division cars are shorter and narrower, but also lighter. If an A division car were to pass through a B division station, the gap created between the platform and the train is large that there is a huge risk for falling. B division cars cannot physically enter an A division station because their width makes them unable to fit.",
		 "WMATA:\nThe Green Line is the only line to not enter Virginia AND passes through and terminates in Prince George's County, MD, twice on a single run!",
		 "WMATA:\nBetween Tysons Corner and Greensboro, there exists a short tunnel, but both stations are on street level or are on an embankment.",
		 "WMATA:\nThe Yellow Line is the only line to cross the Potomac River on the bridge, named the Fenwick Bridge.",
		 "WMATA:\nIt is perfectly possible for a Yellow Line train to originate from Franconia-Springfield and terminate at Greenbelt.",
		 "WMATA: There are two connections between the Red Line and the other lines. First, there is a connection between Metro Center and Farragut-North, and another connection at Fort Totten.",
		 "WMATA: The Red Line is the oldest and busiest line of the Washington Metro.",
		 "WMATA: There are two split platform stations: Rosslyn and Pentagon.\nBasically, a split platform station is an island platform split on two levels, normally at the point where two lines diverge. This is meant to prevent flying junctions between the lines.",
		 "The Acela Express of AMTRAK is an expensive train, each train costs approximately $25 million to build.",
		 "The Acela Express can reach speeds approximately 165 mph, but US laws require it to go under 150 mph.",
		 "SNFC-France:\nA modified 5-car version of the TGV reached speeds of approximately 357.16 miles per hour (574.8 km/h), setting the record for the fastest wheeled train.\n\nHowever, it is not the fastest train.\n\nThe record for the world's fastest train is a 3-car maglev, the SCMaglev, which reached speeds of 361 mph (581 km/h).",
		 "The Shinkansen of Japan, with its bullet train style, can reach speeds of approximately 220 miles per hour in commercial service.", 
		 "The 125 Street Station on the 1 train is unique, and is the only elevated station bridging the Manhattan Valley Viaduct.\nOn either end of the station, the 1 train enters a tunnel and is only elevated in this region of Manhattan for only about 13 blocks, from 135 Street to 122 Street.\nThis makes this geographically the southernmost elevated station in Manhattan.",
		 "The B train is the only train to serve two stations with the name '7th Avenue'.\nLikewise, the R train is the only train to serve two stations with the name '36th Street'.",
		 "The Franklin Avenue Shuttle runs as a two-car R68 (150 foot) from Prospect Park to Franklin Avenue.",
		 "The R44, R46, R68, and R68A cars all are 75 feet long IND/BMT cars instead of the normal 60 feet and run in 600-foot trains of 8 cars. This increases room on board, but since there are the same number of doors as the other B division cars earlier, boarding and unloading times are longer than on the smaller 60-foot cars.\nWith the advent of the R160, the subway has returned to the 60-foot standard.",
		 "The R44 is similar superficially to the R46, but there are major differences.\nThe traction motor of the R44 is a Westinghouse propulsion system, and the motor of the R46 is a General Electric propulsion system.\nThe lower part of the R44 is made of low-alloy high tensile steel, contrasting with the other stainless steel design and forming a gray bar. In the R46, this area is stainless steel.\nThe R44 is made by the St. Louis Car Company, and the R46 is made by the Pullman Standard Company.\nThe R44 features WABCO braking systems, and the R46 features SMEE braking systems. This prevents these two models from being interoperable.\nThe R44 can reach speeds of 87.75 miles per hour, and broke the world speed record for the fastest subway car. This was verified on the LIRR's Main Line test tracks. Like the other subway cars, the R46's maximum speed is 55 miles per hour. \nThe R46 has a smooth noise from its traction motor when accelerating and braking, but the R44 has an intense HOWLING sound, which is what railfans go absolutely crazy for!",
		 "The 9 service used to run a skip stop service with the 1 train, however, it proved to be unsuccessful and was terminated in June 2005.",
		 "The K service used to run from 168 Street to World Trade Center, but it merged with the C and ended on December 10, 1988.",
		 "The Myrtle Avenue station of the J, M, and Z trains contains an upper level, which still has the old trackbeds and architecture for the BMT Myrtle Avenue Line. Only part of this line is actually served by the M train. The steel beams continue for another block and end from the station. This carried the Myrtle Avenue El (elevated), which ran from Myrtle Avenue to Bridge-Jay Streets (now Jay Street-MetroTech) and then to Park Row in Manhattan over the Brooklyn Bridge.",
		 "The 1 train is the only train to have elevated stations in Manhattan."
		 ];
		 
		 
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    alert(rand + "\n\n\nIf you want to close this, press Enter or click 'OK'.")
}
