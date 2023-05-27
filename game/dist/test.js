var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;

// create an engine
var engine = Engine.create(
);
engine.gravity.y = 1;
engine.gravity.x = 0;
engine.gravity.scale = 0.001;
console.log(engine);
// create a renderer
var render = Render.create({
element: document.body,
engine: engine
});

// create two boxes and a ground

var boxF = Bodies.circle(450, 10, 15, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
var sqf = Bodies.rectangle(400, 0, 810, 60, { isStatic: true });
boxF.restitution = 1.5;
// add all of the bodies to the world
Composite.add(engine.world, [boxF, ground, sqf]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);