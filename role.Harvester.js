
module.exports = {
    harvestResource: function (worker) {
        worker = Game.creeps[worker];
        if (worker) {
            var targets = worker.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (targets) {
                if (worker.harvest(targets) == ERR_NOT_IN_RANGE) {
                    worker.moveTo(targets);
                    if (worker.name == 'H1') {
                        worker.moveTo(31,21);
                    }
                    if (worker.name == 'H2') {
                        worker.moveTo(33,21)
                    }
                }
            }
        }
    }
};