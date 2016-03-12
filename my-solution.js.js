{
    init: function(elevators, floors) {
        
       var elevatorRegisterIdle = function(elevator){
           elevator.on("idle", function() {
               elevator.goToFloor(Math.ceil(floors.lenght/2));
            });
       };
       
        
        //AWAKE ELEVATORS
        for(var elelvatorCounter = 0; elelvatorCounter < elevators.length ; elelvatorCounter ++){
            var currentElevator = elevators[elelvatorCounter];

            console.log(elelvatorCounter);

        }

        
        // Whenever the elevator is idle (has no more queued destinations) ...
        
        
        /*elevator1.on("floor_button_pressed", function(floorNum) { 
            elevator1.goToFloor(floorNum);
        } );
        
        for(var i = 0 ; i < floors.length ; i++){
            var currentFloor = floors[i];
                        
            currentFloor.on("up_button_pressed down_button_pressed", function(){
                elevator1.goToFloor(this.level);
            });
      
        }*/
                
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}