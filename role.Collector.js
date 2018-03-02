
module.exports = {
    deliverSpawner: function (worker) {
        worker = Game.creeps[worker];
        if (worker) {
            if (Game.spawns.HQ.energy < Game.spawns.HQ.energyCapacity) {
                if (worker.carry.energy > 0) {
                    var targets = Game.spawns.HQ;
                    if (worker.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        worker.moveTo(targets);
                    }
                } else {
                    var targets = worker.room.find(FIND_STRUCTURES, {filter: (container) => {return container.structureType == STRUCTURE_CONTAINER}});
                    targets.sort((a, b) => b.energy - a.energy);
                    if (targets) {
                        if (worker.withdraw(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            worker.moveTo(targets[0]);
                        }
                    } else {
                        targets = worker.room.find(FIND_STRUCTURES, {filter: (container) => {return container.structureType == STRUCTURE_CONTAINER}});
                        targets.sort((a, b) => a.store.energy - b.store.energy);
                        if (targets.length > 0) {
                            if (worker.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                worker.moveTo(targets[0]);
                            }
                        }
                    }
                }
            }
        }
    },
    deliverExtension: function (worker) {
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
            } else {
                targets = worker.room.find(FIND_STRUCTURES, {filter: (structure) => {return structure.structureType == STRUCTURE_EXTENSION}});
                targets.sort((a, b) => a.energy - b.energy);
                if (targets[0]) {
                    if (worker.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        worker.moveTo(targets[0]);
                    }
                }
            }
        }
    },
    deliverContainer: function (worker) {
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
    },
    deliverTower: function (worker) {
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
            } else {
                targets = worker.room.find(FIND_STRUCTURES, {filter: (tower) => {return tower.structureType == STRUCTURE_TOWER}});
                if (targets.length > 0) {
                    if (worker.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        worker.moveTo(targets[0]);
                    }
                }
            }
        }
    }
};
