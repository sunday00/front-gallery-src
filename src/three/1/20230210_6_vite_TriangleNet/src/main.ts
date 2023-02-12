import './style.scss'
import * as three from 'three'
import {Pane} from "tweakpane";
import {Mesh, MeshPhongMaterial, PerspectiveCamera, PlaneGeometry, Scene, WebGLRenderer} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

class Package {
  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private renderer!: WebGLRenderer;
  private mesh!: Mesh<PlaneGeometry, MeshPhongMaterial>;

  init() {
    this.scene = new three.Scene()
    this.camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.renderer = new three.WebGLRenderer()

    this.renderer.setClearColor(new three.Color('#333333'))
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)

    const geometry = new three.PlaneGeometry(5, 5, 10, 10)
    const material = new three.MeshPhongMaterial({
      color: '#0000FF',
      side: three.DoubleSide,
      flatShading: true
    })
    this.mesh = new three.Mesh(geometry, material)

    this.makePlaneSegmentsUnFlatten()

    const light1 = this.lightFactory({
      color: '#FFFFFF',
      intensity: 1,
      position: [0, 0, 1]
    })

    const light2 = this.lightFactory({
      color: '#FFFFFF',
      intensity: 1,
      position: [0, 0, -1]
    })

    this.scene.add(this.mesh, light1, light2)

    this.camera.position.z = 7

    this.gui()

    const animation = () => {
      requestAnimationFrame(animation)
      this.renderer.render(this.scene, this.camera)
    }

    animation()

    this.mouseEvent()

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
    const polygons = this.mesh.geometry.attributes.position.array

    for (let i=0; i<polygons.length;i+=3){
      // const x = polygons[i]
      // const y = polygons[i + 1]
      const z = polygons[i + 2]

      // @ts-ignore
      polygons[i + 2] = z + Math.random()
    }
  }

  private planeSegmentsSetBumpy(bumpySize = 1) {
    const polygons = this.mesh.geometry.attributes.position.array

    for (let i=2; i<polygons.length;i+=3){
      // @ts-ignore
      polygons[i] = Math.random() * bumpySize
    }
  }

  private mouseEvent() {
    const mouse = { x: undefined,  y: undefined}

  }

  private gui() {
    new OrbitControls(this.camera, this.renderer.domElement)
    const gui = new Pane({
      expanded: true,
    })

    const plane = gui.addFolder({title: 'plane'})
    const planePositionSetting = {
      min: -5,
      max: 5,
      step: 0.01,
    }

    const planePosition = plane.addFolder({title:"position"})
    planePosition.addInput(this.mesh.position, 'x', planePositionSetting)
    planePosition.addInput(this.mesh.position, 'y', planePositionSetting)
    planePosition.addInput(this.mesh.position, 'z', planePositionSetting)

    const planeSizeSetting = {
      min: 0,
      max: 10,
      step: 0.01,
    }
    const planeSegmentsSetting = {
      min: 1,
      max: 20,
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

    const planeBumpySize = { value: 1 }
    const planeBumpySizeSetting = {
      min: 0,
      max: 3,
      step: 0.1,
    }
    plane.addInput(planeBumpySize, 'value', planeBumpySizeSetting)
      .on('change', (e) => {
        this.mesh.geometry.dispose()
        this.planeSegmentsSetBumpy(e.value)
      })
  }
}

(new Package()).init()