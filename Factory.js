//1. What kind of creeps do we need?
//      harvester,upgrader,repairer,builder,spawnCollector,extensionCollector,containerCollector
//2. What level of creep do we need?
//3. What level of creep can we make?
//        how many extension do we have? | how much energy do we have?

exports.spawnWorker = function (spawnerName,task,level) {
    var spawner = Game.spawns[spawnerName];
    var role = {memory: {define: task}};
    var levelCreep = [];
    var name = '';
    if (level == 1) {
        switch (task) {
            case 'harvester':
                levelCreep = [WORK,WORK,MOVE,MOVE];
                name = 'H';
                break;
            case 'builder':
                levelCreep = [WORK,CARRY,CARRY,MOVE,MOVE];
                name = 'B';
                break;
            case 'upgrader':
                levelCreep = [WORK,CARRY,CARRY,MOVE,MOVE];
                name = 'U';
                break;
            case 'repairer':
                levelCreep = [WORK,CARRY,CARRY,MOVE,MOVE];
                name = 'R';
                break;
            case 'collector':
                levelCreep = [WORK,CARRY,CARRY,MOVE,MOVE];
                name = 'C';
                break;
            default:
                console.log('Something wrong with the function spawnWorker');
                break;
        }
    }
    if (spawner.spawnCreep(levelCreep,name,role) == ERR_NAME_EXISTS) {
        for (var i = 0; i < 10; i++) {
            name = name + i;

        }
    }
    return spawner.spawnCreep(levelCreep, name, role);
};
