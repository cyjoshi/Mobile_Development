const GameState = Object.freeze({
    START:   Symbol("start"),
    HUNGRY:  Symbol("hungry"),
    SICK: Symbol("sick"),
    SHORE: Symbol("shore"),
    SLEEP: Symbol("sleep"),
    FIND_SHELTER: Symbol("find_shelter"),
    MORNING: Symbol("morning"),
    DEAD: Symbol("dead")
});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.START;
    }

    surviveOnIsland(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.START:
                sReply = "You are alone on an island. You need to survive and escape from the island as soon as possible." +
                "The first thing to do is find some food. You see some eggs under a tree but can't tell whether they are fresh" +
                "Also, there is a chance you may find some fishes in the water. Go for fishes or have eggs?";
                this.stateCur = GameState.HUNGRY;
                break;   
            case GameState.HUNGRY:
                if (sInput.toLowerCase().includes("egg") && !sInput.toLowerCase().includes("no egg")){
                    sReply = "You just had eggs. Feels like they are not fresh and old. It looks like this was not a good choice " +
                    "because you just vomited. Need to find a source of water before you run out of fluids. What to do? Go into " +
                    " the jungle on the island to search for water or rest here until sunset?";
                    this.stateCur = GameState.SICK;
                } else if (sInput.toLowerCase().includes("fish") && !sInput.toLowerCase().includes("no fish")) {
                    sReply = "The fishes tasted very yummy although there was no salt or spice. Looks like you need to prepare for " +
                    "survival during the night. The island is full of wild animals - snakes, hyenas, monkeys and many more. What to " +
                    "do next? Stay on the shore or go into the jungle looking for shelter?";
                    this.stateCur = GameState.FIND_SHELTER
                } else {
                    sReply = "Looks like you do not get to eat now. This is not good but you could survive for a while.  What to " +
                    "do next? Stay on the shore or go into the jungle looking for shelter?"; 
                    this.stateCur = GameState.FIND_SHELTER;
                }
                break; 
            case GameState.SICK:
                if (sInput.toLowerCase().includes("jungle") && !sInput.toLowerCase().includes("no jungle")){
                    sReply = "The walk into the jungle seems exhausting now. You vomit one more time and feel dizzy. It looks like " +
                    " that the stale eggs really made your stomach upset. It's hard to go back ashore and you collapse on your way " +
                    " searching for the fresh water! Survival requires avoiding bad choices. Better luck next time!";
                    this.stateCur = GameState.DEAD;
                } else if (sInput.toLowerCase().includes("rest") && !sInput.toLowerCase().includes("no rest")){
                    sReply = "Resting seems to have helped. You felt much better and could catch some fishes too. They will be your " +
                    " dinner. Well done, but now you need to find shelter. What to do next? Stay on the shore or go into the jungle " +
                    " looking for shelter?";
                    this.stateCur = GameState.SHORE;
                } else {
                    sReply = "Looks like you are confused. You need to choose between jungle or rest. Otherwise you can not survive. What to " +
                    "do next? Rest or go to jungle?";
                }
                break; 
            case GameState.FIND_SHELTER:
                if (sInput.toLowerCase().includes("jungle") && !sInput.toLowerCase().includes("no jungle")){
                    sReply = "The walk into the jungle seems exhausting now. You vomit one more time and feel dizzy. It looks like " +
                    " that the stale eggs really made your stomach upset. It's hard to go back ashore and you collapse on your way " +
                    " searching for the fresh water! Survival requires avoiding bad choices. Better luck next time!";
                    this.stateCur = GameState.DEAD;
                } else if (sInput.toLowerCase().includes("rest") && !sInput.toLowerCase().includes("no rest")){
                    sReply = "Resting seems to have helped. You felt much better and could catch some fishes too. They will be your " +
                    " dinner. Well done, but now you need to find shelter. What to do next? Stay on the shore or go into the jungle " +
                    " looking for shelter?";
                    this.stateCur = GameState.SHORE;
                } else {
                    sReply = "Looks like you are confused. You need to choose between jungle or rest. Otherwise you can not survive. What to " +
                    "do next? Take rest or go into the jungle looking for shelter?";
                }
                break; 
            case GameState.SHORE:
                if (sInput.toLowerCase().includes("fire")){
                    sReply = "You made a good choice! Burning fire will keep animals away and give you heat during this cold night " +
                    " Now you need to decide to sleep? Do you want to climb a tree or sleep in the open? ";
                    this.stateCur = GameState.SLEEP;
                } else if (sInput.toLowerCase().includes("no fire")){
                    sReply = "Its hard to survive without fire. hyenas are attacking you in the dark. Survival requires avoiding bad choices. " +
                    "Better luck next time! You could not make it. Goodbye! ";
                    this.stateCur = GameState.DEAD;
                } else {
                    sReply = "Looks like you are confused. You need to choose between fire or no fire. Otherwise you can not survive. What to " +
                    "do next? Burn fire or no fire?";
                }
                break; 
            case GameState.SLEEP:
                if (sInput.toLowerCase().includes("tree")){
                    sReply = "You made a good choices so far! It's morning now and you need to decide what to do next. " +
                    "You want to keep burning fire or relax? ";
                    this.stateCur = GameState.MORNING;
                } else if (sInput.toLowerCase().includes("open")){
                    sReply = "Its hard to survive in the open at nights in this island which is surrounded by deadly animals. Survival requires " +
                    "avoiding bad choices. Better luck next time! You could not make it. Goodbye! ";
                    this.stateCur = GameState.DEAD;
                } else {
                    sReply = "Looks like you are confused. You need to choose between climb a tree or sleep in the open. " + 
                    "Otherwise you can not survive. What to do next? Climb a tree or sleep in the open?";
                }
                break; 
            case GameState.MORNING:
                if (sInput.toLowerCase().includes("keep fire")){
                    sReply = "You made a good choices so far! It's morning now and you must be hungry now. You need to decide what to do next. " +
                    "You want to eat eggs or fishes? ";
                    this.stateCur = GameState.START;
                } else if (sInput.toLowerCase().includes("relax")){
                    sReply = "Its hard to survive on this island if you relax. You got a snake bite. Survival requires " +
                    "avoiding bad choices. Better luck next time! You could not make it. Goodbye! ";
                    this.stateCur = GameState.DEAD;
                } else {
                    sReply = "Looks like you are confused. You need to choose between relaxing or keep burning the fire. " + 
                    "Otherwise you can not survive. What to do next? Relax or keep burning the fire?";
                }
            case GameState.MORNING:
            break;
        }
        return([sReply]);
    }
}