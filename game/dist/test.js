console.log(Matter);
var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;


// create an engine
var canvaa = document.getElementById("Lcanvas");
var engine = Engine.create({
	gravity:{
		x:0,
		y:0.002,
		scale:0.001,
	},
});
// create a renderer
var render = Render.create({
	engine: engine,
	canvas: canvaa,
	options: {
		// makes the pixels look a bit nicer by rendering them as
		pixelRatio: 5,
		// wireframeBackground: '#10c7c7',
		// background: 'transparent',
	}
});
const rectangle = Matter.Bodies.rectangle(400, 300, 100, 20, {
	restitution: 1,
	isStatic: true,
  });
  
  // Add the rectangular object to the world
  Matter.World.add(engine.world, rectangle);
  
  // Enable mouse interaction
  const mouse = Matter.Mouse.create(render.canvas);
  const mouseConstraint = Matter.MouseConstraint.create(engine, {
	mouse: mouse,
  });
  Matter.World.add(engine.world, mouseConstraint);
  
  // Update the rectangular object position with the mouse
  Matter.Events.on(mouseConstraint, 'mousemove', function (event) {
	Matter.Body.setPosition(rectangle, event.mouse.position);
  });
  
var boxA =  Bodies.circle(400, 20, 20, { inertia: Infinity,
    restitution: 5, // Make the ball fully elastic
    friction: 0, // Remove friction
    frictionAir: 0, // Remove air friction
    density: 0.001, // Adjust density to maintain a constant speed
    render: {
      fillStyle: 'red'
    }
});
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true, restitution: 1 });
var sqf = Bodies.rectangle(400, 0, 810, 60, { isStatic: true, restitution: 1 });
var wall1 = Bodies.rectangle(0, 300, 60, 810, { isStatic: true, restitution: 1 });
var wall2 = Bodies.rectangle(800, 300, 60, 810, { isStatic: true, restitution: 1 });
boxA.restitution = 1;
boxA.friction = 0;
boxA.frictionAir = 0;
// add all of the bodies to the world
Composite.add(engine.world, [boxA, ground, sqf, wall1, wall2]);
Matter.Body.setVelocity(boxA, { x: 10, y: 10 });

//clearing the canvas
// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
context.clearRect(0, 0, canvaa.width, canvaa.height);