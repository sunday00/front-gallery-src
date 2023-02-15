import './style.scss'
import * as three from 'three'
import {Pane} from "tweakpane";
import {
  BufferAttribute, Intersection,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Raycaster,
  Scene,
  WebGLRenderer
} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import gsap from 'gsap'

type LengthArray<T, N extends number, R extends T[] = []>
  = number extends N ? T[] :
    R['length'] extends N ? R
    : LengthArray<T, N, [T, ...R]>;

class Package {
  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private renderer!: WebGLRenderer;
  private mesh!: Mesh<PlaneGeometry, MeshPhongMaterial>;
  private originalPosition!: number[];
  private segmentsMoveSizes!: number[];
  private raycaster!: Raycaster;
  private mouse: {x: undefined|number, y: undefined|number} = {x: undefined, y: undefined};
  public clickButton = false

  init() {
    this.scene = new three.Scene()
    this.camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.renderer = new three.WebGLRenderer()

    this.renderer.setClearColor(new three.Color('#333333'), 0.5)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)

    const geometry = new three.PlaneGeometry(850, 480, 150, 100)
    const material = new three.MeshPhongMaterial({
      // color: '#0000FF',
      side: three.DoubleSide,
      flatShading: true,
      vertexColors: true,
    })
    this.mesh = new three.Mesh(geometry, material)
    this.mesh.position.set(0, 75, 24)
    this.mesh.rotateX(-0.8)

    this.makePlaneSegmentsUnFlatten()

    const light1 = this.lightFactory({
      color: '#FFFFFF',
      intensity: 1.5,
      position: [0, 1, 1]
    })

    const light2 = this.lightFactory({
      color: '#FFFFFF',
      intensity: 1,
      position: [0, 0, -1]
    })

    this.scene.add(this.mesh, light1, light2)

    this.camera.position.z = 140

    this.raycaster = new three.Raycaster()

    const animation = (t: number) => {
      this.renderer.render(this.scene, this.camera)

      this.raycaster.setFromCamera(
        this.mouse as {x: number, y:number},
        this.camera
      )
      const intersects = this.raycaster.intersectObject(this.mesh)

      if(intersects.length) {
        // @ts-ignore
        const geometry = intersects[0].object.geometry as PlaneGeometry
        const {color} = geometry.attributes

        const initialColors = {
          r: color.array[0],
          g: color.array[1],
          b: color.array[2],
        }

        const hoverColors = {
          r: this.safelyBrighter(initialColors.r),
          g: this.safelyBrighter(initialColors.g),
          b: this.safelyBrighter(initialColors.b),
        }

        this.updateColor(color as BufferAttribute, intersects, hoverColors)

        gsap.to(hoverColors, {
          r: initialColors.r,
          g: initialColors.g,
          b: initialColors.b,
          "onUpdate": () => {
            this.updateColor(color as BufferAttribute, intersects, hoverColors)
          }
        })
      }

      this.makePlaneSegmentsWave(t * 0.005)

      // this.mesh.rotation.x -= 0.01
      // this.mesh.updateWorldMatrix(true, true)

      requestAnimationFrame(animation)
    }

    animation(0.1)

    this.mouseEvent()

    const updateRenderer = () => {
      this.renderer.setSize(
        window.innerWidth, window.innerHeight
      )

      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    window.addEventListener('resize', () => {
      updateRenderer()

      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
    })

    new OrbitControls(this.camera, this.renderer.domElement)

    document.body.appendChild(this.renderer.domElement)
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

  private makePlaneSegmentsUnFlatten() {
    const polygons = this.mesh.geometry.attributes.position.array as number[]
    this.originalPosition = polygons
    this.segmentsMoveSizes = polygons.map((_) => Math.random() - 0.5)

    const colors = []

    for (let i=0; i<polygons.length;i+=3){
      const x = polygons[i]
      const y = polygons[i + 1]
      const z = polygons[i + 2]

      // @ts-ignore
      polygons[i] = x + (Math.random() - 0.5)
      // @ts-ignore
      polygons[i + 1] = y + (Math.random() - 0.5)
      // @ts-ignore
      polygons[i + 2] = z + Math.random() * 6

      colors.push(...this.convert255ArrayTo1Array([10, 65, 105]))
    }

    this.mesh.geometry.setAttribute(
      'color',
      new three.BufferAttribute(new Float32Array(colors), 3)
    )
  }

  private makePlaneSegmentsWave(t: number) {
    const {array} = this.mesh.geometry.attributes.position

    for (let i=0; i<array.length;i+=3){
      // @ts-ignore
      array[i] = this.originalPosition[i]
        + Math.cos(t + this.segmentsMoveSizes[i]) * 0.02
      // @ts-ignore
      array[i + 1] = this.originalPosition[i + 1]
        + Math.sin(t + this.segmentsMoveSizes[i + 1]) * 0.02
      // @ts-ignore
      array[i + 2] = this.originalPosition[i + 2]
        + Math.cos(t + this.segmentsMoveSizes[i + 2]) * 0.02
    }

    this.mesh.geometry.attributes.position.needsUpdate = true
  }

  private planeSegmentsSetBumpy(bumpySize = 1) {
    const polygons = this.mesh.geometry.attributes.position.array

    for (let i=2; i<polygons.length;i+=3){
      // @ts-ignore
      polygons[i] = Math.random() * bumpySize
    }
  }

  private mouseEvent() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      this.mouse.y = - (e.clientY / window.innerHeight) * 2 + 1
    })
  }

  private convert255to1(ten: number): number {
    return Math.floor(ten / 255 * 10000) / 10000
  }

  private convert255ArrayTo1Array(tens: LengthArray<number, 3>): LengthArray<number, 3> {
    return [
      this.convert255to1(tens[0]),
      this.convert255to1(tens[1]),
      this.convert255to1(tens[2]),
    ]
  }

  private safelyBrighter(r: number): number {
    let v = r * 1.8
    if(v > 1) v = 1

    return v
  }

  private updateColor(
    color: BufferAttribute,
    intersects: Array<Intersection>,
    hoverColors: { r: number; b: number; g: number }
  ) {
    const {r, g, b} = hoverColors

    color.setXYZ(intersects[0].face!.a, r, g, b)
    color.setXYZ(intersects[0].face!.b, r, g, b)
    color.setXYZ(intersects[0].face!.c, r, g, b)
    color.needsUpdate = true
  }

  gui() {
    const gui = new Pane({
      expanded: true,
    })

    const plane = gui.addFolder({title: 'plane'})
    const planePositionSetting = {
      min: -100,
      max: 100,
      step: 0.1,
    }

    const planePosition = plane.addFolder({title:"position"})
    planePosition.addInput(this.mesh.position, 'x', planePositionSetting)
    planePosition.addInput(this.mesh.position, 'y', planePositionSetting)
    planePosition.addInput(this.mesh.position, 'z', planePositionSetting)

    const planeSizeSetting = {
      min: 0,
      max: 600,
      step: 1,
    }
    const planeSegmentsSetting = {
      min: 1,
      max: 600,
      step: 1,
    }
    const planeSize = plane.addFolder({title:"size"})
      .on('change', (e) => {

        if(!e.presetKey) return

        const size = {
          width: this.mesh.geometry.parameters.width,
          height: this.mesh.geometry.parameters.height,
          widthSegments: this.mesh.geometry.parameters.widthSegments,
          heightSegments: this.mesh.geometry.parameters.heightSegments,
        }

        size[e.presetKey as 'width'|'height'|'widthSegments'|'heightSegments']
          = e.value as number

        this.mesh.geometry.dispose()

        this.mesh.geometry = new three.PlaneGeometry(
          size.width, size.height, size.widthSegments, size.heightSegments
        )

        this.makePlaneSegmentsUnFlatten()
      })

    planeSize.addInput(this.mesh.geometry.parameters, 'width', planeSizeSetting)
    planeSize.addInput(this.mesh.geometry.parameters, 'height', planeSizeSetting)
    planeSize.addInput(this.mesh.geometry.parameters, 'widthSegments', planeSegmentsSetting)
    planeSize.addInput(this.mesh.geometry.parameters, 'heightSegments', planeSegmentsSetting)

    const planeBumpySize = { value: 6 }
    const planeBumpySizeSetting = {
      label: 'bumpSize',
      min: 0,
      max: 20,
      step: 1,
    }
    plane.addInput(planeBumpySize, 'value', planeBumpySizeSetting)
      .on('change', (e) => {
        this.mesh.geometry.dispose()
        this.planeSegmentsSetBumpy(e.value)
      })
  }

  clickEvent() {
    gsap.to(this.mesh.position, {y: 0.5})
    gsap.to(this.mesh.rotation, {x: -1.3})
  }

  restore() {
    gsap.to(this.mesh.position, {y: 75})
    gsap.to(this.mesh.rotation, {x: -0.8})
  }
}

const world = new Package()
world.init()
// world.gui()
// world.clickEvent()
document.querySelector('button')?.addEventListener('click', () => {
  world.clickButton = !world.clickButton
  world.clickButton ? world.clickEvent() : world.restore()
})