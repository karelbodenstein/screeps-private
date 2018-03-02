
module.exports = {
    deliverController: function (worker) {
        worker = Game.creeps[worker];
        if (worker) {
            if (worker.carry.energy > 0) {
                var targets = Game.rooms['W8N3'].controller;
                if (targets) {
                    if (worker.upgradeController(targets) == ERR_NOT_IN_RANGE) {
                        worker.moveTo(targets);
                    }
                }
            } else {
                targets = worker.room.find(FIND_STRUCTURES, {filter: (storage) => {return storage.structureType == STRUCTURE_STORAGE}});
                for (var i in targets) {
                    if (worker.withdraw(targets[i], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        worker.moveTo(targets[i])
                    }
                }
            }
        }
    }
};
