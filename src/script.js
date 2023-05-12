//importing libraries
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import { trees } from './trees';
import { road } from './road';
import { cars } from './cars';
import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls'

//creating a scene
const scene = new THREE.Scene();
scene.background
    //creating a camera
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

//creating a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

//IMPLEMENTING CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
//adding the first person movement controls
const movement = new PointerLockControls(camera, renderer.domElement);
const clock = new THREE.Clock();
scene.add(movement);

//Log a courser as soon as it has been clicked
document.addEventListener('click', () => {
    movement.lock();
})
const movement_layout = [];
addEventListener('keydown', (e) => {
    movement_layout[e.key] = true;
});
addEventListener('keyup', (e) => {
    movement_layout[e.key] = false;
})

//Configuring the keyboard
function configureKeyboard(delta){
    const speed = 5;

    if(movement_layout["w"] || movement_layout["W"]){
        movement.moveForward(delta * speed);
    }
    if(movement_layout["s"] || movement_layout["S"]){
        movement.moveForward(-(delta * speed));
    }
    if(movement_layout["d"] || movement_layout["D"]){
        movement.moveRight(delta * speed);
    }
    if(movement_layout["a"] || movement_layout["A"]){
        movement.moveRight(-(delta * speed));
    }
}

//creating a geometry along with its material
const ground =  new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({color: '#009900', side: THREE.DoubleSide}),

)
//ground implemantation
ground.rotation.x = Math.PI / 2;
ground.position.set( 0, 0, 0 );
ground.receiveShadow = true;

//ADDING LIGHTING//

//creating ambient light
const ambient_light = new THREE.AmbientLight(0xffffff, 0.6);
ambient_light.castShadow = true;
//creating a directional light
const directional_light = new THREE.DirectionalLight(0xffffff, 0.6);
directional_light.position.set( 15, 15, -20 );
directional_light.target.position.set(0, 0 , 0);
directional_light.castShadow = true;

//adding light source to the scene
scene.add(ambient_light, directional_light);

//adding objects to scene
scene.add( ground, trees(), road(), cars() );

//camera position
camera.position.set(-1, 5, 10)

//creating the animate function
function animate(){
    requestAnimationFrame(animate);
    const delta =  clock.getDelta();
    renderer.render( scene, camera );
    configureKeyboard(delta);
}

controls.update();
animate();