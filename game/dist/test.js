console.log(Matter);
var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;


// create an engine
var canvaa = document.getElementById("Lcanvas");
var engine = Engine.create();
console.log(engine);
// create a renderer
var render = Render.create({
	engine: engine,
	canvas: canvaa,
	options: {
		// makes the pixels look a bit nicer by rendering them as
		pixelRatio: 2,
		// wireframeBackground: '#10c7c7',
		// background: 'transparent',
	}
});
// create two boxes and a ground

var boxA =  Bodies.circle(400, 20, 20, { inertia: Infinity });
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
var sqf = Bodies.rectangle(400, 0, 810, 60, { isStatic: true });
var wall1 = Bodies.rectangle(0, 300, 60, 810, { isStatic: true });
boxA.restitution = 1;
boxA.friction = 0;
boxA.frictionAir = 0;
// add all of the bodies to the world
Composite.add(engine.world, [boxA, ground, sqf]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
console.log("done");