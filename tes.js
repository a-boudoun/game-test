var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
element: document.body,
engine: engine
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(420, 50, 80, 80);
var boxD = Bodies.rectangle(430, 50, 80, 80);
var boxE = Bodies.rectangle(440, 60, 80, 80);
var boxF = Bodies.rectangle(410, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB,boxD, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);