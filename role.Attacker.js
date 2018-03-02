module.exports = {
    attackTarget: function (){
        var tower = Game.rooms['W8N3'].find(FIND_MY_STRUCTURES, {filter: (tower) => {return tower.structureType == STRUCTURE_TOWER}});
        var target = Game.rooms['W8N3'].find(FIND_HOSTILE_CREEPS);
        if (target) {
            tower[0].attack(target);
        }
    }
};