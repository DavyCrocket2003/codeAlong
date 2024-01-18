let robot = {
    "health": 100,
    "attack": 15,
    "shield": 10,
    "laserAttack": 50
}
let bobert = {...robot}
bobert.health = 75
delete bobert.laserAttack
bobert.attack = 25
bobert.empAttack = 75
bobert.shield = 5


function attack(robo1, robo2) {
    robo2.health -= robo1.attack - robo2.shield
}

while (true) {
    attack(robot, bobert)
    if (bobert.health <= 0) {
        console.log("Robot was destroyed!")
        break
    }
    attack(bobert, robot)
    if (robot.health <= 0) {
        console.log("Robot was destroyed!")
        break
    }
    

}


console.log(robot, bobert)
