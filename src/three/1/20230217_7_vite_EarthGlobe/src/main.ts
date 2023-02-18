import './style.scss'
import * as three from 'three'
import {
  BufferGeometry,
  Group,
  Mesh,
  PerspectiveCamera, Points, PointsMaterial,
  Scene, ShaderMaterial, SphereGeometry,
  WebGLRenderer,
} from "three";
import gsap from "gsap";
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

class Package {
  private container!: HTMLDivElement
  private scene!: Scene
  private camera!: PerspectiveCamera
  private renderer!: WebGLRenderer
  // private mesh!: Mesh<SphereGeometry, MeshBasicMaterial>;
  // private raycaster!: Raycaster;
  private mesh!: Mesh<SphereGeometry, ShaderMaterial>
  private atmosphere!: Mesh<SphereGeometry, ShaderMaterial>
  private stars!: Points<BufferGeometry, PointsMaterial>
  private mouse!: {x?: number, y?: number}
  private group!: Group

  init() {
    this.container = document.querySelector('.canvas-container')!
    this.scene = new three.Scene()
    this.camera = new three.PerspectiveCamera(75, this.container.offsetWidth / this.container.offsetHeight, 0.1, 1000)
    this.renderer = new three.WebGLRenderer({
      antialias: true,
      canvas: document.querySelector('.three') as HTMLCanvasElement
    })

    this.mouse = {x: undefined, y: undefined}

    this.renderer.setClearColor(new three.Color('#111'), 1)
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight)
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

    this.group = new three.Group()
    this.group.add(this.mesh)

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

    // this.scene.add(this.mesh, this.atmosphere)
    // this.scene.add(this.mesh)

    const starGeometry = new three.BufferGeometry()
    const starMaterial = new three.PointsMaterial({color: '#fff'})

    const startVertices = []
    for(let i=0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = - Math.random() * 2000

      startVertices.push(x, y, z)
    }

    starGeometry.setAttribute('position', new three.Float32BufferAttribute(startVertices, 3))

    this.stars = new three.Points(starGeometry, starMaterial)

    this.scene.add(this.atmosphere, this.group, this.stars)

    this.camera.position.z = 20

    // this.raycaster = new three.Raycaster()

    const animation = () => {
      this.renderer.render(this.scene, this.camera)

      this.mesh.rotation.y += 0.002

      gsap.to(this.group.rotation, {
        y: this.mouse?.x! * 0.5,
        x: this.mouse?.y! * - 0.5,
        duration: 2,
      })

      requestAnimationFrame(animation)
    }

    animation()

    window.addEventListener('resize', () => {
      this.updateRenderer()

      this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight
      this.camera.updateProjectionMatrix()
    })

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / innerWidth ) * 2 - 1
      this.mouse.y = - (e.clientY / innerHeight) * 2 + 1
    })

    new OrbitControls(this.camera, this.renderer.domElement)

    // document.body.appendChild(this.renderer.domElement)
  }

  private updateRenderer() {
    this.renderer.setSize(
      this.container.offsetWidth, this.container.offsetHeight
    )

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }
}

const world = new Package()
world.init()

