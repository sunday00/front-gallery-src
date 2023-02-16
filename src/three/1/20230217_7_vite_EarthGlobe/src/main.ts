import './style.scss'
import * as three from 'three'
import {
  Mesh, MeshBasicMaterial,
  PerspectiveCamera,
  Raycaster,
  Scene, SphereGeometry,
  WebGLRenderer
} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

type LengthArray<T, N extends number, R extends T[] = []>
  = number extends N ? T[] :
  R['length'] extends N ? R
    : LengthArray<T, N, [T, ...R]>;

class Package {
  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private renderer!: WebGLRenderer;
  private mesh!: Mesh<SphereGeometry, MeshBasicMaterial>;
  // private raycaster!: Raycaster;

  init() {
    this.scene = new three.Scene()
    this.camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.renderer = new three.WebGLRenderer({
      antialias: true,
    })

    this.renderer.setClearColor(new three.Color('#333333'), 0.5)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio * 2)

    const geometry = new three.SphereGeometry(5, 50, 50)
    const material = new three.MeshBasicMaterial({
      // color: '#FF0000'
      map: new three.TextureLoader().load('./src/globe.jpeg')
    })
    this.mesh = new three.Mesh(geometry, material)

    const light1 = this.lightFactory({
      color: '#FFFFFF',
      intensity: 1,
      position: [0, 0, 1]
    })

    this.scene.add(this.mesh, light1)

    this.camera.position.z = 20

    // this.raycaster = new three.Raycaster()

    const animation = (t: number) => {
      this.renderer.render(this.scene, this.camera)

      this.mesh.rotation.y += 0.01

      requestAnimationFrame(animation)
    }

    animation(0.1)

    window.addEventListener('resize', () => {
      this.updateRenderer()

      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
    })

    new OrbitControls(this.camera, this.renderer.domElement)

    document.body.appendChild(this.renderer.domElement)
  }

  private updateRenderer() {
    this.renderer.setSize(
      window.innerWidth, window.innerHeight
    )

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  private lightFactory(
    option: {
      color: string, intensity: number, position: number[]
    }
  ) {
    const {color, intensity, position} = option
    const [x,y,z] = position

    const light = new three.DirectionalLight(color, intensity)
    light.position.set(x, y, z)

    return light
  }

  gui() {

  }
}

const world = new Package()
world.init()
// world.gui()
// world.clickEvent()
