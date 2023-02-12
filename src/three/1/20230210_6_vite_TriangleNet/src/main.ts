import './style.scss'
import * as three from 'three'
import {Pane} from "tweakpane";
import {Mesh, MeshPhongMaterial, PlaneGeometry} from "three";

class Package {
  private mesh!: Mesh<PlaneGeometry, MeshPhongMaterial>;

  init() {
    const scene = new three.Scene()
    const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new three.WebGLRenderer()

    renderer.setClearColor(new three.Color('#333333'))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    const geometry = new three.PlaneGeometry(5, 5, 10, 10)
    const material = new three.MeshPhongMaterial({
      color: '#0000FF',
      side: three.DoubleSide,
      flatShading: true
    })
    this.mesh = new three.Mesh(geometry, material)

    this.makePlaneSegmentsUnFlatten()

    const light = new three.DirectionalLight('#FFFFFF', 1)
    light.position.set(0, 0, 1)

    scene.add(this.mesh, light)

    camera.position.z = 7

    this.gui()

    function animation() {
      requestAnimationFrame(animation)
      renderer.render(scene, camera)
    }

    animation()

    document.body.appendChild(renderer.domElement)
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

  private gui() {
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
  }
}

(new Package()).init()