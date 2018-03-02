
var harvester = require('role.Harvester');
var collector = require('role.Collector');
var repairer = require('role.Repairer');
var builder = require('role.Builder');
var upgrader = require('role.Upgrader');
var attacker = require('role.Attacker');

Game.spawns.HQ.spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE],'H1',{memory:{define: 'harvester'}});
Game.spawns.HQ.spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE],'H2',{memory:{define: 'harvester'}});
Game.spawns.HQ.spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE],'U1',{memory:{define: 'upgrader'}});
Game.spawns.HQ.spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE],'U2',{memory:{define: 'upgrader'}});
Game.spawns.HQ.spawnCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE],'U3',{memory:{define: 'upgrader'}});
Game.spawns.HQ.spawnCreep([WORK,CARRY,MOVE],'CS',{memory:{define: 'collectorSpawner'}});
Game.spawns.HQ.spawnCreep([WORK,CARRY,MOVE],'CE',{memory:{define: 'collectorExtension'}});
Game.spawns.HQ.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE],'C3',{memory:{define: 'collector'}});
Game.spawns.HQ.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE],'C4',{memory:{define: 'collector'}});
Game.spawns.HQ.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE],'C5',{memory:{define: 'collector'}});
Game.spawns.HQ.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE],'C6',{memory:{define: 'collector'}});
Game.spawns.HQ.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE],'C7',{memory:{define: 'collector'}});
Game.spawns.HQ.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE],'C8',{memory:{define: 'collector'}});
Game.spawns.HQ.spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],'B1',{memory:{define: 'builder'}});
Game.spawns.HQ.spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],'B2',{memory:{define: 'builder'}});
Game.spawns.HQ.spawnCreep([WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE],'B3',{memory:{define: 'builder'}});
Game.spawns.HQ.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE],'R1',{memory:{define: 'repairer'}});
Game.spawns.HQ.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE],'R2',{memory:{define: 'repairer'}});

harvester.harvestResource('H1');
harvester.harvestResource('H2');
collector.deliverSpawner('CS');
collector.deliverExtension('CE');
collector.deliverExtension('CS');
builder.buildSite('B1');
builder.buildSite('B2');
builder.buildSite('B3');
collector.deliverContainer('C3');
collector.deliverContainer('C4');
collector.deliverContainer('C5');
collector.deliverContainer('C6');
collector.deliverContainer('C7');
collector.deliverContainer('C8');
upgrader.deliverController('U1');
upgrader.deliverController('U2');
upgrader.deliverController('U3');
repairer.repairStructure('R1');
repairer.repairStructure('R2');
attacker.attackTarget();
//Game.creeps['H1'].moveTo(31,21)
//Game.creeps['H2'].moveTo(33,21)
