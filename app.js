// Require discord.js package
const Discord = require("discord.js");

// Create a new client using the new keyword
const client = new Discord.Client();

// Display a message once the bot has started
client.on("ready", () =>{
     console.log(`Logged in as ${client.user.tag}!`);
 });

// // Check messages for a specific command
 client.on("message", msg =>{
      const msgToLower = msg.content.toLowerCase();
      const gameArray = ["rock","paper","scissors"];
      const multiply = 3;
      const inputArray = ["!rock","!paper","!scissors"];
      if(msg.content === inputArray[0]){
          msg.reply("You've chosen rock");
          const random = Math.floor(Math.random() * 3);
          const pcselect = gameArray[random];
          //console.log(pcselect);

          msg.reply("Pc chose: " + pcselect );
          
          if( pcselect === "rock"){
              msg.reply("Draw ");

          }
          else if(pcselect === "paper"){
              msg.reply(" I won ");


          }
          else if(pcselect === "scissors"){
              msg.reply(" You Won ");


          }


      }
      else if(msg.content === inputArray[1]){
        msg.reply("You've chosen Paper");
        const random = Math.floor(Math.random() * 3);
        const pcselect = gameArray[random];
        //console.log(pcselect);

        msg.reply("Pc chose: " + pcselect );
        
        if( pcselect === "rock"){
            msg.reply("You lose ");

        }
        else if(pcselect === "paper"){
            msg.reply(" draw ");


        }
        else if(pcselect === "scissors"){
            msg.reply(" You Won ");


        }


      }
      else if(msg.content === inputArray[2]){
        msg.reply("You've chosen scissors");
        const random = Math.floor(Math.random() * 3);
        const pcselect = gameArray[random];
        //console.log(pcselect);

        msg.reply("Pc chose: " + pcselect );
        
        if( pcselect === "rock"){
            msg.reply("You won ");

        }
        else if(pcselect === "paper"){
            msg.reply(" You lose ");


        }
        else if(pcselect === "scissors"){
            msg.reply(" Draw ");


        }
      }

      
      
   });

// Log in the bot with the token
client.login("Token")
