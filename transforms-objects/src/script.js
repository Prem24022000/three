import * as THREE from "three";
import { Group } from "three/examples/jsm/libs/tween.module.js";

const canvas = document.querySelector(".webgl");

const scene = new THREE.Scene();

const group = new THREE.Group();

scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);

group.add(cube1);

const axesHelper = new THREE.AxesHelper();

scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.x = 1;
// camera.position.y = 1;
// camera.lookAt(mesh.position);

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
