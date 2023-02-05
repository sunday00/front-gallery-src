import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.PlaneGeometry(3, 3, 64, 64)

// Materials
const loader = new THREE.TextureLoader()
const mountain = loader.load('./mountain.jpg')

const material = new THREE.MeshStandardMaterial({
    color: 'gray',
    map: mountain,
    // displacementMap: loader.load('./heightTest.png'),
    displacementMap: loader.load('./height.png'),
    displacementScale: 2.2,
    alphaMap: loader.load('./alpha.png'),
    transparent: true,
    depthTest: false,
})

// Mesh
const plane = new THREE.Mesh(geometry, material)
scene.add(plane)
plane.rotation.x = 5.2

// gui
// const gui = new dat.GUI()
// gui.add(plane.rotation, 'x').min(0).max(70).step(0.1)
//
// gui.add(material, 'displacementScale').min(-3).max(3).step(0.1)

// Lights
const lightDefaultColor = {lightColor: '#2dc0ff'}

const pointLight = new THREE.PointLight(lightDefaultColor.lightColor, 2)
pointLight.position.x = 2.8
pointLight.position.y = 10
pointLight.position.z = 2
scene.add(pointLight)

// gui.add(pointLight.position, 'x')
// gui.add(pointLight.position, 'y')
// gui.add(pointLight.position, 'z')
// gui.add(pointLight, 'intensity').min(0).max(5).step(0.01)
//
// gui.addColor(lightDefaultColor, 'lightColor').onChange(() => {
//     pointLight.color.set(lightDefaultColor.lightColor)
// })

const pointLight2 = new THREE.PointLight('#ffffff', 0.5)
pointLight2.position.x = -2.8
pointLight2.position.y = 10
pointLight2.position.z = 2
scene.add(pointLight2)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth * 0.7,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth * 0.7
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0.5
camera.position.z = 3
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
document.addEventListener('mousemove', (e) => {
    plane.material.displacementScale = 2.2 + e.clientY * 0.0015
})

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    plane.rotation.z = 0.5 + elapsedTime
    // plane.rotation.x = 0.5 + elapsedTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()