import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';





// SCENE

const scene = new THREE.Scene()

// HELPERS
const axesHelper = new THREE.AxesHelper( 1 );
scene.add( axesHelper );


//SIZES
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// CAMERA

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)

camera.position.z = 7
scene.add(camera)



//CURSOR
const cursor = {
  x: 0,
  y: 0
}

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = - (event.clientY / sizes.height - 0.5)

})



// CANVAS

const canvas = document.querySelector('canvas.webgl')


// CONTROLS
const controls = new OrbitControls( camera, canvas);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize( sizes.width, sizes.height )


// OBJECT

const buildingsGroupX = new THREE.Group()
const buildingsGroupZ = new THREE.Group()
const XYbuildingsGroup = new THREE.Group()

/**
 * Materials
 */
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

/**
 * Geometries
 */
const cube = new THREE.BoxGeometry(1, 1, 1)


const longBuildingGeometry = cube
const tallBuildingGeometry = cube
const cubeBuildingGeometry = cube

/**
 * Mesh
 */

//Buildings group X
const standardBuilding = new THREE.Mesh(cubeBuildingGeometry, material)
const longBuilding = new THREE.Mesh(longBuildingGeometry, material)
const tallBuilding = new THREE.Mesh(tallBuildingGeometry, material)
tallBuilding.position.x = -2
tallBuilding.position.y = 0.5
standardBuilding.position.x = 2

longBuilding.scale.x = 2
tallBuilding.scale.y = 2



//Buildings group Z
const standardBuildingZ = new THREE.Mesh(cubeBuildingGeometry, material)
const longBuildingZ = new THREE.Mesh(longBuildingGeometry, material)
const tallBuildingZ = new THREE.Mesh(tallBuildingGeometry, material)

tallBuildingZ.position.x = -2
tallBuildingZ.position.y = 0.5

standardBuildingZ.position.x = -2
standardBuildingZ.position.z = -4

longBuildingZ.position.z = - 2
longBuildingZ.position.x = -2
longBuildingZ.rotation.y = Math.PI * 0.5

longBuildingZ.scale.x = 2
tallBuildingZ.scale.y = 2

buildingsGroupX.add(standardBuilding, longBuilding, tallBuilding)
buildingsGroupZ.add(standardBuildingZ, longBuildingZ, tallBuildingZ)

XYbuildingsGroup.add(buildingsGroupX, buildingsGroupZ)

buildingsGroupX.position.y = 0.5
buildingsGroupX.position.x = -3
buildingsGroupX.position.z = -1

buildingsGroupZ.position.z = -1
buildingsGroupZ.position.x = 2.5
buildingsGroupZ.position.y = 0.5

XYbuildingsGroup.position.x = -1

scene.add(XYbuildingsGroup)



function tick() {

  //Renderer
renderer.render(scene, camera)

  // Update camera
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
  // camera.position.y = cursor.y * 3


  // CONTROLS
  controls.update()



  // Call tick again on the next frame
  window.requestAnimationFrame(tick)

}

tick()







