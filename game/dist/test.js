console.log(Matter);
var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;


// create an engine
//todo: how to make the ball keep floating without losing speed
var canvaa = document.getElementById("Lcanvas");
var engine = Engine.create({
	gravity:{
		x:0,
		y:0,
		scale:0.001,
	},
});
//todo: make the canvas size dynamic
// create a renderer
var render = Render.create({
	engine: engine,
	canvas: canvaa,
	options: {
		// makes the pixels look a bit nicer by rendering them as
		pixelRatio: 5,
		wireframeBackground: '#222',
		// background: 'transparent',
	}
});
const rectangle = Matter.Bodies.rectangle(400, 300, 100, 300, {
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
  
var Ball =  Bodies.circle(400, 20, 20, { inertia: Infinity,
    restitution: 1, // Make the ball fully elastic
    friction: 0, // Remove friction
    frictionAir: 0, // Remove air friction
    density: 1, // Adjust density to maintain a constant speed
    render: {
		wireframeBackground: 'red',
		fillStyle: 'red'
    }
});
var Ball3 =  Bodies.circle(400, 20, 20, { inertia: Infinity,
    restitution: 1, // Make the ball fully elastic
    friction: 0, // Remove friction
    frictionAir: 0, // Remove air friction
    density: 1, // Adjust density to maintain a constant speed
    render: {
		wireframeBackground: 'red',
		fillStyle: 'red'
    }
});
var Ball4 =  Bodies.circle(400, 20, 20, { inertia: Infinity,
    restitution: 1, // Make the ball fully elastic
    friction: 0, // Remove friction
    frictionAir: 0, // Remove air friction
    density: 1, // Adjust density to maintain a constant speed
    render: {
		wireframeBackground: 'red',
		fillStyle: 'red'
    }
});
var Ball2 =  Bodies.circle(400, 20, 20, { inertia: Infinity,
    restitution: 1, // Make the ball fully elastic
    friction: 0, // Remove friction
    frictionAir: 0, // Remove air friction
    density: 1, // Adjust density to maintain a constant speed
    render: {
		wireframeBackground: 'red',
		fillStyle: 'red'
    }
});
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true, restitution: 1 });
var sqf = Bodies.rectangle(400, 0, 810, 60, { isStatic: true, restitution: 1 });
var wall1 = Bodies.rectangle(0, 300, 20, 810, { isStatic: true, restitution: 1 });
var wall2 = Bodies.rectangle(800, 300, 20, 810, { isStatic: true, restitution: 1 });
Ball.restitution = 1;
Ball.friction = 0;
Ball.frictionAir = 0;
// add all of the bodies to the world
Composite.add(engine.world, [Ball, Ball2,Ball3,Ball4, ground, sqf, wall1, wall2]);
Matter.Body.setVelocity(Ball, { x: 10, y: 10 });
Matter.Body.setVelocity(Ball2, { x: 13, y: 13 });
Matter.Body.setVelocity(Ball3, { x: 11, y: 11 });
Matter.Body.setVelocity(Ball4, { x: 9, y: 9 });
// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();
// run the engine
Runner.run(runner, engine);
//todo: how to clear the canvas after a bounce
