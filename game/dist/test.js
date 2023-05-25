"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matter = __importStar(require("matter-js"));
var Engine = Matter.Engine, Render = Matter.Render, Runner = Matter.Runner, Bodies = Matter.Bodies, Composite = Matter.Composite;
// Get the canvas element
// create an engine
var engine = Engine.create();
// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
});
// create two boxes and a ground
// Create bodies
const boxA = Matter.Bodies.rectangle(40, 20, 80, 80);
const boxB = Matter.Bodies.rectangle(45, 50, 80, 80);
const ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
// Add bodies to the world
Matter.World.add(engine.world, [boxA, boxB, ground]);
// Start the engine
Matter.Engine.run(engine);
// Start the renderer
Matter.Render.run(render);
// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);
// run the renderer
Render.run(render);
// create runner
var runner = Runner.create();
// run the engine
Runner.run(runner, engine);
// Render on changes
