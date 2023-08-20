function getComputerChoise(){
    a=Math.floor(Math.random()*(3-1+1)+1)
    switch(a){
        case 1:
            return("rock");
            break;
        case 2 :
            return("scissors");
            break;
        case 3 :
            return("paper");
            break
    

    }
    

}






function play(computerSelection){

    playerSelection=prompt("rock or paper or scissors")
    
    round=0
    while(round!=5){
        if(playerSelection=="rock" && computerSelection=="rock"){
            return("draw ")
            
        }

        if(playerSelection=="rock" && computerSelection=="paper"){
            return("loser ")
            
        }
        if(playerSelection=="rock" && computerSelection=="scissors"){
            return("winner ")
            
        }

        if(playerSelection=="paper" && computerSelection=="rock"){
            
        }

        if(playerSelection=="paper" && computerSelection=="paper"){
            
        }
        if(playerSelection=="paper" && computerSelection=="scissors"){
            
        }

        if(playerSelection=="scissors" && computerSelection=="rock"){
            
        }

        if(playerSelection=="scissors" && computerSelection=="paper"){
            
        }
        if(playerSelection=="scissors" && computerSelection=="scissors"){
            
        }

        

    }
}


computerSelection=getComputerChoise()
play(computerSelection)
