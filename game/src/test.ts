// import * as Matter from 'matter-js';

// var Engine = Matter.Engine,
// Render = Matter.Render,
// Runner = Matter.Runner,
// Bodies = Matter.Bodies,
// Composite = Matter.Composite;
// // Get the canvas element

// // create an engine
// var engine = Engine.create();

// // create a renderer
// var render = Render.create({
// element: document.body,
// engine: engine,
// });

//TODO: fix this
// // create two boxes and a ground
// // Create bodies
// const boxA = Matter.Bodies.rectangle(40, 20, 80, 80);
// const boxB = Matter.Bodies.rectangle(45, 50, 80, 80);
// const ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// // Add bodies to the world
// Matter.World.add(engine.world, [boxA, boxB, ground]);

// // Start the engine
// Matter.Engine.run(engine);

// // Start the renderer
// Matter.Render.run(render);


// // add all of the bodies to the world
// Composite.add(engine.world, [boxA, boxB, ground]);

// // run the renderer
// Render.run(render);

// // create runner
// var runner = Runner.create();

// // run the engine
// Runner.run(runner, engine);
// // Render on changes