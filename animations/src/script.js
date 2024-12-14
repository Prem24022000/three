import * as THREE from "three";

const canvas = document.querySelector(".webgl");

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

const scene = new THREE.Scene();

scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

// let time = Date.now();

const clock = new THREE.Clock();

const tick = () => {
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // console.log(0.001 * deltaTime);

  // Update objects
  // mesh.position.x += 0.01;
  // mesh.position.y += 0.01;
  // mesh.rotation.y += 0.001 * deltaTime;
  const elapsedTime = clock.getElapsedTime();
  mesh.rotation.y = elapsedTime * Math.PI;
  mesh.position.y = Math.sin(elapsedTime);
  mesh.position.x = Math.cos(elapsedTime);
  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
