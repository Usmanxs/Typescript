            //  Encapsulation

//   Encapsulation is built on the idea of hiding data. This is where we restrict access to specific properties or methods.

// In our example, the property _name is private. This means we can’t access this property from outside the class. To get access to this private property, we use the so-called getter and setter methods.
  class Player {
    private health :number;
    private speed :number;
     setHealth(health :number){
        if (health<0){
            console.log (" you can not set the health to less then 0 ")
               return;
        }
        else if (health>10){
            console.log (" you are not allow to increace the healt more then 10")
            return ;
        }
        return this.health;
     }
     gethealth(){
        return this.health;
     }
     setSpeed(speed :number){
        return this.speed
     }
     getspeed(){
        return this.speed
     }

  }
     let hero =new Player
      hero.setHealth(7)
      hero.gethealth();
