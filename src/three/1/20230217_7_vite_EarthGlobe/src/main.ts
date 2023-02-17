import './style.scss'
import * as three from 'three'
import {
  Mesh,
  PerspectiveCamera,
  Raycaster,
  Scene, ShaderMaterial, SphereGeometry,
  WebGLRenderer,
} from "three";
// @ts-ignore
import vertexShader from './shaders/vertex.glsl'
// @ts-ignore
import fragmentShader from './shaders/fragment.glsl'
// @ts-ignore
import atmosphereShader from './shaders/atmosphere.glsl'
// @ts-ignore
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

// @ts-ignore
type LengthArray<T, N extends number, R extends T[] = []>
  = number extends N ? T[] :
  R['length'] extends N ? R
    : LengthArray<T, N, [T, ...R]>;

type LightFactoryOption = {
  color: string;
  intensity: number;
  position: number[];
}

class Package {
  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private renderer!: WebGLRenderer;
  // private mesh!: Mesh<SphereGeometry, MeshBasicMaterial>;
  // private raycaster!: Raycaster;
  private mesh!: Mesh<SphereGeometry, ShaderMaterial>;
  private atmosphere!: Mesh<SphereGeometry, ShaderMaterial>;

  init() {
    this.scene = new three.Scene()
    this.camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.renderer = new three.WebGLRenderer({
      antialias: true,
    })

    this.renderer.setClearColor(new three.Color('#000'), 1)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio * 2)

    const geometry = new three.SphereGeometry(5, 50, 50)
    // const material = new three.MeshBasicMaterial({
    //   // color: '#FF0000'
    //   map: new three.TextureLoader().load('./src/globe.jpeg')
    // })
    const material = new three.ShaderMaterial({
      vertexShader, fragmentShader,
      uniforms: {
        globeTexture: {
          value: new three.TextureLoader().load('./src/globe.jpeg')
        }
      }
    })
    this.mesh = new three.Mesh(geometry, material)

    const atmosphereMaterial = new three.ShaderMaterial({
      vertexShader: atmosphereShader, fragmentShader: atmosphereFragmentShader,
      transparent: true,
      blending: three.AdditiveBlending,
      side: three.BackSide,
    })
    this.atmosphere = new three.Mesh(geometry, atmosphereMaterial)
    this.atmosphere.scale.set(1.1, 1.1, 1.1)
    // this.atmosphere.position.setZ(-8)

    // const light1 = this.lightFactory({
    //   color: '#FFFFFF',
    //   intensity: 1.8,
    //   position: [-0.5, 0.5, 0.1]
    // })

    this.scene.add(this.mesh, this.atmosphere)
    // this.scene.add(this.mesh)
    // this.scene.add(this.atmosphere)

    this.camera.position.z = 20

    // this.raycaster = new three.Raycaster()

    const animation = (t: number) => {
      this.renderer.render(this.scene, this.camera)

      this.mesh.rotation.y += 0.02

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

  // @ts-ignore
  private lightFactory(option: LightFactoryOption) {
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
