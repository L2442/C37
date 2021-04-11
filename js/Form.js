class Form{
constructor(){
    this.input = createInput("Enter Name");
    this.button = createButton("PLAY");
    this.title = createElement("h2");
    this.greeting = createElement("h3");
}

display(){
    this.title.html("Car Racing");
    this.title.position(450, 25);
    this.button.position(650,175);
    this.input.position(400,175);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value(); // the text inside ur Input obj will n=be stored into particular prop or var
        playerCount++;
        player.index = playerCount;

        player.update();
        player.updateCount(playerCount);

        this.greeting.position(400,175);
        this.greeting.html("Hello "+ player.name);
    })
}

hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
}

}