"use strict";

var _ = require("lodash");
var position = require("../../position.js");

// Change botNames and teamName to your choice.
var botNames = [
  "Zero",
  "One",
  "Two"
];

var dangerLevel = [0, 0, 0, 0, 0, 0, 0]
var hitPoints = [0, 0, 0, 0, 0, 0, 0]

module.exports = function Ai() {
    function makeDecisions(roundId, events, bots, config) {
	readEvents(events);
	var freeBots = [];
	bots.forEach(function(bot) {
		if (dangerLevel[bot.botId] > 0) escape(bot, bots, config);
		else freeBots.push(bot)
    	});

	// Different strategy if only 1 bot available
	if (freeBots.length == 1) moveLoneStar(freeBots[0]);
	else			  moveTeam(freebots);

    	_.each(events, function(event) {
      		if (event.event === "noaction") {
        	console.log("Bot did not respond in required time", event.data);
     	 }
    });
  }

  function readEvents(events) {
	//TODO
  }

  function strategy

  function randInt(min, max) {
    var range = max - min;
    var rand = Math.floor(Math.random() * (range + 1));
    return min + rand;
  }

  return {
    // The AI must return these three attributes
    botNames: botNames,
    makeDecisions: makeDecisions
  };
};
