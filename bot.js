const Discord = require("discord.js");
const client = new Discord.Client();

users = [15];

playerList = "";

roles = ["Jailor", "TI", "TI", "TK", "TP", "TS", "T", "T", "T", "Godfather", "Mafioso", "M", "M", "NK", "NE"];
userRoles = shuffle(roles);
counter = 0;
client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on("message", (message) => {
	if (message.channel.name != undefined) {
		if (message.content == "!play") {
			if (itemInArrayChecker(users, message.member.user.tag)) {
				if (counter < 15) {
					message.author.send("You are queued for the next game!");

					if (userRoles[counter] == "Jailor") {
						userRoles[counter] = "Jailor";
					}
					if (userRoles[counter] == "Godfather") {
						userRoles[counter] = "Godfather";
					}
					if (userRoles[counter] == "Mafioso") {
						userRoles[counter] = "Mafioso";
					}
					if (userRoles[counter] == "TI") {
						switch (Math.floor(Math.random() * 2)) {
							case 0:
								userRoles[counter] = "Lookout";
							case 1:
								userRoles[counter] = "Sheriff";
							case 2:
								userRoles[counter] = "Spy";
						}
					}
					if (userRoles[counter] == "TK") {
						switch (Math.floor(Math.random() * 2)) {
							case 0:
								userRoles[counter] = "Veteran";
							case 1:
								userRoles[counter] = "Jailor";
							case 2:
								userRoles[counter] = "Vigilante";
						}
					}
					if (userRoles[counter] == "TP") {
						switch (Math.floor(Math.random())) {
							case 0:
								userRoles[counter] = "Bodyguard";
							case 1:
								userRoles[counter] = "Doctor";
						}
					}
					if (userRoles[counter] == "TS") {
						switch (Math.floor(Math.random() * 3)) {
							case 0:
								userRoles[counter] = "Escort";
							case 1:
								userRoles[counter] = "Mayor";
							case 2:
								userRoles[counter] = "Retributionist";
							case 3:
								userRoles[counter] = "Transporter";
						}
					}
					if (userRoles[counter] == "T") {
						switch (Math.floor(Math.random() * 12)) {
							case 0:
								userRoles[counter] = "Escort";
							case 1:
								userRoles[counter] = "Mayor";
							case 2:
								userRoles[counter] = "Retributionist";
							case 3:
								userRoles[counter] = "Transporter";
							case 4:
								userRoles[counter] = "Bodyguard";
							case 5:
								userRoles[counter] = "Doctor";
							case 6:
								userRoles[counter] = "Veteran";
							case 7:
								userRoles[counter] = "Jailor";
							case 8:
								userRoles[counter] = "Vigilante";
							case 9:
								userRoles[counter] = "Lookout";
							case 10:
								userRoles[counter] = "Sheriff";
							case 11:
								userRoles[counter] = "Spy";
						}
					}
					if (userRoles[counter] == "M") {
						switch (Math.floor(Math.random() * 6)) {
							case 0:
								userRoles[counter] = "Disguiser";
							case 1:
								userRoles[counter] = "Forger";
							case 2:
								userRoles[counter] = "Framer";
							case 3:
								userRoles[counter] = "Janitor";
							case 4:
								userRoles[counter] = "Consigliere";
							case 5:
								userRoles[counter] = "Consort";
							case 6:
								userRoles[counter] = "Blackmailer";
						}
					}
					if (userRoles[counter] == "NK") {
						switch (Math.floor(Math.random() * 2)) {
							case 0:
								userRoles[counter] = "Serial Killer";
							case 1:
								userRoles[counter] = "Werewolf";
							case 2:
								userRoles[counter] = "Arsonist";
						}
					}
					if (userRoles[counter] == "NE") {
						switch (Math.floor(Math.random() * 2)) {
							case 0:
								userRoles[counter] = "Executioner";
							case 1:
								userRoles[counter] = "Jester";
							case 2:
								userRoles[counter] = "Witch";
						}
					}
					message.author.send("Your role is " + userRoles[counter]);
					users[counter] = message.member.user.tag;
					console.log(counter + ". " + users[counter] + " - " + userRoles[counter]);
					counter++;
				} else {
					message.channel.send("Sorry, the maximum amount of players is already in the game");
				}
			} else {
				message.channel.send("You are already in this game <@" + message.member.user.id + ">");
			}
		}
		else if (message.content == "!players") {
			for (var i = 0; i < 15; i++) {
				if (users[i] != undefined) {
					placement = i + 1;
					playerList = playerList + placement + ". "+ users[i] + " - " + userRoles[i] + "\n";
				}
			}
			memberid = message.member.id;
			if (memberid == "265779892187037697") {
				message.author.send(playerList);
				playerList = "";
			}
		}
		else if (message.content == "!reset") {
			userRoles = [];
			userRoles = shuffle(roles);
			users = [];
			console.log("Reset Detected");
		}
	} else {
		message.author.send("DMs don't work yet");
	}
});

client.login("your_api_key_here");

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function itemInArrayChecker (array, string) {
	counter = 0;
    for (var i = 0; i < array.length; i++) {
    	if (array[i] == string) {
    		counter++;
    	}
	}	
	if (counter != 0) {
		return false;
	}
	return true;
}