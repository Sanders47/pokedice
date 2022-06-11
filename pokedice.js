Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "pokedice", name: "PokeDice"}, false);
	dice3d.addDicePreset({
	  type: "d20",
	  labels: "",
	  modelFile: "modules/pokedice/d20.glb",
	  system: "pokedice"
	}),
	dice3d.addDicePreset({
	  type: "d12",
	  labels: "",
	  modelFile: "modules/pokedice/d12.glb",
	  system: "pokedice"
	}),
	dice3d.addDicePreset({
	  type: "d8",
	  labels: "",
	  modelFile: "modules/pokedice/d8.glb",
	  system: "pokedice"
	}),
	dice3d.addDicePreset({
	  type: "d6",
	  labels: "",
	  modelFile: "modules/pokedice/d6.glb",
	  system: "pokedice"
	});
});