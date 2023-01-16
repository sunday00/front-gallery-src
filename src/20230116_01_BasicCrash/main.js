const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.z = 5

const renderer = new THREE.WebGLRenderer({
  antialias: true,
})

renderer.setClearColor(0xe5e5e5)

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight

  camera.updateProjectionMatrix()
})

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

// const geometry = new THREE.SphereGeometry(1, 10, 10)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshLambertMaterial({color: 0xFFCC00})

const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 2
mesh.position.set(2, 2, -2)
mesh.rotation.set(45, 0, -2)
mesh.scale.set(1, 2, 1)

scene.add(mesh)

const geometry2 = new THREE.BoxGeometry(1, 1, 1)
const material2 = new THREE.MeshLambertMaterial({color: 0xFFCC00})

const mesh2 = new THREE.Mesh(geometry2, material2)
mesh2.scale.set(1, 2, 1)
mesh2.position.set(-1, -1, -1)

scene.add(mesh2)

const light = new THREE.PointLight(0xFFFFFF, 1, 500)
light.position.set(10, 0, 25)

scene.add(light)

function render() {
  requestAnimationFrame(render)

  mesh.rotation.x += 0.05
  mesh2.rotation.y += 0.05

  renderer.render(scene, camera)
}

function onMouseMove(e) {
  e.preventDefault()
  for(let i=0; i<scene.children.length; i++){
    let c = scene.children[i]

    if(c.type !== 'Mesh') continue

    c.material.color.set(0xffff00)
  }

  mouse.x = (e.clientX  / window.innerWidth) * 2 - 1;
  mouse.y = - (e.clientY  / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera)

  const intersects = raycaster.intersectObjects(scene.children, true)

  for(let i=0; i<intersects.length; i++){
    intersects[i].object.material.color.set(0xff0000)

    // const tl = new TimelineMax().delay(.3)
    const tl = new TimelineMax({paused: true})

    tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut})
    // mesh x scale to 2 transform during 1s,
    tl.to(intersects[i].object.scale, 0.5, {x: 0.5, ease: Expo.easeOut})
    tl.to(intersects[i].object.position, 3, {x: -1 * intersects[i].object.position.x, ease: Expo.easeOut})
    tl.to(intersects[i].object.rotation, 5, {x: Math.PI * -0.5, ease: Expo.easeOut}, "=-1.5")
    tl.to(intersects[i].object.rotation, 5, {y: Math.PI * 0.5, ease: Expo.easeOut}, "=-1.5")
    // Last param =-1.5 means, slow down speed more and more...
    tl.play()
  }
}

render()

window.addEventListener('mousemove', onMouseMove)