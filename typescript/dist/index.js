"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var character_1 = require("./character");
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.prototype.moving = function (character, locNew) {
        console.log("".concat(character.name, " moving from ").concat(character.location, " to ").concat(locNew));
    };
    return Tracker;
}());
var jean = new character_1.Character("Jean NEIGE", 1997);
var tracker = new Tracker();
jean.trackedBy(tracker);
jean.location = "Hivetchut";
jean.move(400, 300);
console.log(jean.getX(), jean.getY());
