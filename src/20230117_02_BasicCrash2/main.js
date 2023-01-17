const config = {
  defaultBoxColor: '#000000',
  canvasHeight: window.innerHeight * 2,
  boxes: [],
}

function Back(renderColor)
{
  this.scene = new THREE.Scene()

  this.camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / config.canvasHeight, 0.1, 1000
  )

  this.camera.position.z = 10

  this.light = new THREE.PointLight(0xFFFFFF, 1, 500)
  this.light.position.set(10, 0, 25)
  this.scene.add(this.light)

  this.renderer = new THREE.WebGLRenderer({
    antialias: true,
  })
  this.renderer.setClearColor(renderColor)
  this.renderer.setSize(window.innerWidth, config.canvasHeight)

  this.raycaster = new THREE.Raycaster()
  this.mouse = new THREE.Vector2()
}

function Box({size, color})
{
  const {x, y, z} = size
  this.geometry = new THREE.BoxGeometry(x, y, z)
  this.material = new THREE.MeshLambertMaterial({color})
  this.defaultPosition = {
    x:0, y:0, z:0
  }
  return new THREE.Mesh(this.geometry, this.material)
}

function init ()
{
  const back = new Back(0xe5e5e5)
  document.getElementById('mainCanvas').appendChild(back.renderer.domElement)

  window.addEventListener('resize', () => {
    back.renderer.setSize(window.innerWidth, config.canvasHeight)
    back.camera.aspect = window.innerWidth / config.canvasHeight

    back.camera.updateProjectionMatrix()
  })

  this.render = () => {
    requestAnimationFrame(this.render)
    back.renderer.render(back.scene, back.camera)
  }

  this.render()

  return back
}

function core()
{
  const back = init()

  const green = Math.floor(Math.random() * 50 )
  const blue = Math.floor(Math.random() * 50 )

  config.defaultBoxColor = `#54${green < 10 ? (green + 10) : green}${blue < 10 ? (blue + 10) : blue}`

  for(let i=0; i<=80; i++){
    const x = Math.random() * 10 - 5
    const y = Math.random() * 20 - 10
    const z = Math.random() * - 5

    const size = {x: 1, y: 1, z: 2}

    const box = new Box({size, color: config.defaultBoxColor})
    box.position.set(x, y, z)
    box.defaultPosition = {x, y, z}
    config.boxes.push(box)

    back.scene.add(box)
  }

  const light = new THREE.PointLight(0xFFFFFF, 2, 600)
  light.position.set(0, 0, 10)
  back.scene.add(light)

  this.onMouseMove = (e) => hoverEvent(e, back)

  this.onscroll = () => scrollEvent()

  window.addEventListener('mousemove', this.onMouseMove)
  window.addEventListener('scroll', this.onscroll)
}

function hoverEvent(e, back)
{
  e.preventDefault()

  refreshBox(back)

  animate(getIntersectsBetweenMouseAndBox(e, back))
}

function scrollEvent() {
  for(let i=0; i< config.boxes.length; i++){
    let c = config.boxes[i]

    if(c.type !== 'Mesh') continue

    c.position.z = c.defaultPosition.z
      + (window.scrollY / config.canvasHeight)
      * 15
  }
}

core()

function refreshBox(back) {
  for(let i=0; i< back.scene.children.length; i++){
    let c = back.scene.children[i]

    if(c.type !== 'Mesh') continue

    c.material.color.set(config.defaultBoxColor)
  }
}

function getIntersectsBetweenMouseAndBox(e, back) {
  back.mouse.x = (e.clientX  / window.innerWidth) * 2 - 1;
  back.mouse.y = (- (e.clientY  / config.canvasHeight) * 2 + 1)
    + (- (window.scrollY / config.canvasHeight) * 2 + 1) - 1;

  back.raycaster.setFromCamera(back.mouse, back.camera)

  return back.raycaster.intersectObjects(back.scene.children, true)
}

function animate(intersects) {
  for(let i=0; i<intersects.length; i++){
    const o = intersects[i].object
    o.material.color.set(0xff0000)

    const tl = new TimelineMax()

    tl.to(o.scale, 1, {x: 2, ease: Expo.easeOut})
    tl.to(o.rotation, 1, {x: Math.PI * 0.5, ease: Expo.easeOut})
    tl.to(o.position, 1, {z: o.position.z + 1, ease: Expo.easeOut})
    tl.to(o.scale, 1, {x: 1, ease: Expo.easeOut})
    tl.to(o.rotation, 1, {y: Math.PI * 0.5, ease: Expo.easeOut})
    tl.to(o.position, 1, {z: o.position.z, ease: Expo.easeOut})
    tl.to(o.rotation, 1, {x: 0, y: 0, ease: Expo.easeOut})
  }
}
