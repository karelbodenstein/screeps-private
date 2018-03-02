
module.exports = {
    repairStructure: function (worker) {
        worker = Game.creeps[worker];
        if (worker) {
            if (worker.carry.energy == 0) {
                var targets = Game.spawns['HQ'];
                if (targets) {
                    if (worker.withdraw(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        worker.moveTo(targets);
                    }
                }
            } else {
                targets = worker.room.find(FIND_STRUCTURES, {filter: (structure) => structure.hits < structure.hitsMax});
                targets.sort((a,b) => a.hits - b.hits);
                if(targets.length > 0) {
                    if(worker.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                        worker.moveTo(targets[0]);
                    }
                }
            }
        }
    }
};