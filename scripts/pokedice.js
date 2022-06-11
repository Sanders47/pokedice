Hooks.on('diceSoNiceReady', (dice3d) => {

	dice3d.addDicePreset({
	  type: "d20",
	  modelFile: "modules/pokedice/models/d20.glb",
	  system: "dnd5e"
	});
});