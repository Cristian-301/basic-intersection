import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';





// SCENE

const scene = new THREE.Scene()

// OBJECT

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

//SIZES
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// CAMERA

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height , 0.1, 1000 )
camera.position.z = 3
scene.add(camera)

// CANVAS

const canvas = document.querySelector('canvas.webgl')

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize( sizes.width, sizes.height )


renderer.render(scene, camera)

scene.add(cube)







