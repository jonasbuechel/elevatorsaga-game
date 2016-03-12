{
    init: function(elevators, floors) {

        var getElevatorWithSmallestLoad = function(){

            var smallestLoad = {
                elevatorId: 0,
                load: 1
            };

            for(var i = 0; i < elevators.length; i++){
                var currentElevator = elevators[i];
                var currentElevatorLoadFactor = currentElevator.loadFactor();

                if(currentElevatorLoadFactor < smallestLoad.load){
                    smallestLoad.elevatorId = i;
                    smallestLoad.load = currentElevatorLoadFactor;
                }
            }

            return smallestLoad.elevatorId;

        };

        // Whenever the elevator is idle (has no more queued destinations) ...
        var elevatorRegisterIdle = function(elevator){
            elevator.on("idle", function() {
                elevator.goToFloor(Math.floor(floors.length/2));
            });
        };

        var elevatorRegisterButtons = function(elevator){
            elevator.on("floor_button_pressed", function(floorNum) { 
                elevator.goToFloor(floorNum);
            } );

        };

        var  floorRegisterButtons = function(floor){
            floor.on("up_button_pressed down_button_pressed", function(){

                //find elevator with smallest load
                var elevatorToSendId    = getElevatorWithSmallestLoad();
                var elevatorToSend      = elevators[elevatorToSendId];

                //send elevator to requested floor
                elevatorToSend.goToFloor(this.level);

            });
        };


        //AWAKE ELEVATORS
        for(var elelvatorCounter = 0; elelvatorCounter < elevators.length ; elelvatorCounter ++){
            var currentElevator = elevators[elelvatorCounter];

            elevatorRegisterIdle(currentElevator);
            elevatorRegisterButtons(currentElevator);

        }

        //AWAKE FLOOR BUTTONS
        for(var i = 0 ; i < floors.length ; i++){
            var currentFloor = floors[i];
            floorRegisterButtons(currentFloor);
        }

    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}