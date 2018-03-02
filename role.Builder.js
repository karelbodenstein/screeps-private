
module.exports = {
    buildSite: function (worker) {
        worker = Game.creeps[worker];
        if (worker) {
            if (worker.carry.energy == 0) {
                var targets = worker.room.find(FIND_STRUCTURES, {filter: (container) => {return container.structureType == STRUCTURE_CONTAINER}});
                targets.sort((a, b) => b.energy - a.energy);
                if (targets) {
                    if (worker.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        worker.moveTo(targets[0]);
                    }
                }
            }
            if (!(worker.room.find(FIND_CONSTRUCTION_SITES))){
                targets = worker.room.find(FIND_CONSTRUCTION_SITES);
                targets.sort((a, b) => b.progress - a.progress);
                if (worker.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    worker.moveTo(targets[0]);
                }
            } else {
                targets = worker.room.find(FIND_STRUCTURES, {filter: (storage) => {return storage.structureType == STRUCTURE_STORAGE}});
                targets.sort((a, b) => a.store.energy - b.store.energy);
                if (targets.length > 0) {
                    if (worker.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        worker.moveTo(targets[0]);
                    }
                }
            }
        }
    }
};