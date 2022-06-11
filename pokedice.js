Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "pokedice", name: "PokeDice"}, false);
	dice3d.addDicePreset({
	  type: "d20",
	  labels: "",
	  modelFile: "modules/pokedice/d20.glb",
	  system: "pokedice"
	});
});