import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

const textureLoader = new THREE.TextureLoader()

const normalTexture = textureLoader.load('./textures/NormalMap.png')

// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.SphereGeometry(.5, 64, 64);

// Materials

const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0x292929),
    metalness: 0.7,
    roughness: 0.2,
    normalMap: normalTexture
})

// Mesh
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

// Lights

const PointLightFactory = ({name, color, intensity, positions, enableGui, helper}) => {
    const pointLight = new THREE.PointLight(color, intensity)
    let pointLightHelper = null

    const {x, y, z} = positions
    pointLight.position.set(x, y, z)
    scene.add(pointLight)

    if(enableGui) {
        const guiFolder = gui.addFolder(name)

        guiFolder.add(pointLight.position, 'y').min(-3).max(3).step(0.01)
        guiFolder.add(pointLight.position, 'x').min(-6).max(6).step(0.01)
        guiFolder.add(pointLight.position, 'z').min(-3).max(3).step(0.01)
        guiFolder.add(pointLight, 'intensity' ).min(0).max(10)

        guiFolder.addColor({color}, 'color').onChange((ten) => {
            pointLight.color.set(`#${parseInt(ten, 10).toString(16)}`)
            pointLightHelper?.update()
        })
    }

    if(helper) {
        pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5)
        scene.add(pointLightHelper)
    }

    return pointLight
}

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.set(2, 3, 4)
scene.add(pointLight)

const pointLight2 = PointLightFactory({
    name: 'pointLight2',
    color: 0xff0000,
    intensity: 2,
    positions: { x: -1.85, y: 1, z: -1.65},
    enableGui: false,
    helper: false,
})

const pointLight3 = PointLightFactory({
    name: 'pointLight3',
    color: 0xe1ff,
    intensity: 6,
    positions: { x: 2.15, y: -3, z: -2},
    enableGui: false,
    helper: false,
})

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
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
camera.position.y = 0
camera.position.z = 2
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
// renderer.setClearColor(0x292929)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

let rotateX = 0
let rotateY = 0

function onDocumentMouseMove(e) {
    rotateX = ((e.clientY - window.innerHeight / 2) * 0.001 - sphere.rotation.x) * 0.05
    rotateY = ((e.clientX - window.innerWidth / 2) * 0.01 - sphere.rotation.y) * 0.5
}

document.addEventListener('mousemove', onDocumentMouseMove)

function onDocumentScroll(e) {
    sphere.position.y = window.scrollY * 0.01
}

document.addEventListener('scroll', onDocumentScroll)

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime

    sphere.rotation.y += rotateY
    sphere.rotation.x += rotateX
    // sphere.position.z -= rotateX

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()