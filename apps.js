alert("Let's play a game. This game is to see who gets closer to the number 20 without going over 20. \n\n You will draw numbers 1-10, and the computer will stop drawing at 16. \n\n Pay attention to your number, if you need more numbers, press y.");

var h = 0;
var c= 0;
var comp = 0;
var hum =0;


/*
computer: get a random number inside the do/while loop. loop until total is 16 or above. close loop
user: inside a do/while loop, get random numbers to user, and after every number, ask if they want more... until counter is greater than 20. close loop
then... use if/else statements to see who wins: computer > user, user > computer, computer == user
var usercounter = 0
usercounter = usercounter + randomnumber
*/



do {

    alert("The computer will start")
    alert(`Incase you are playing again, the score is Human ${h}, Computer ${c}.`) ;

    do {

        var ran = Math.floor(Math.random() * 10) +1

        console.log(ran);

        comp = comp + ran

        console.log(comp)
    

    } while (comp <= 16) {

        alert(`My number is ${comp}`)

    }

    if (comp > 20) {

        alert ("I went over 20. You win.")
        

    } else {

        alert ("its your turn")


        do {
            var ran2 = Math.floor(Math.random() * 10) +1

            console.log(ran2);

            hum = hum + ran2

            console.log(hum);

            var humnum = prompt(`Your current number is ${hum}. \n Would you like another number? (y or n)  \n The computers number was ${comp}. \n If you go over 20, you will lose`); 

            if (hum >= 21){
                humnum = "n";
            }

        } while (humnum != "n") 
    

        if (hum > 20) {
            alert ("You went over 20. I win")
            
            
        } else {

        alert (`Your final number is ${hum}`);
        }

    }
    
    if (comp > 20) {
        
        alert(`My number was ${comp}. Since I went over 20, you win. `);
        h++


    }else if (hum > 20){

        alert(`Your number was ${hum}. Since you went over 20, I win. `);
        c++
    

    }else if (20 >= hum > comp) {

        alert(`The score was Human: ${hum} to Computer: ${comp}. You win. `);
        h++

    } else if (hum < comp <= 20) {

        alert(`The score was Human: ${hum} to Computer: ${comp}. I win. `);
        c++

    } else if (hum == comp) {

        alert(`The score was Human: ${hum} to Computer: ${comp}. We tied. Both get points. `);
        c++
        h++

    }



    var leave = prompt("Would you like to keep playing? (yes or no)");

} while (leave != "no") 

    alert(`Have a good day. Final score was Human ${h}, Computer ${c}.`) ;

