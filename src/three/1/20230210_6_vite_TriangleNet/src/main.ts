import './style.scss'
import * as three from 'three'

class Package {
  init() {
    const scene = new three.Scene()
    const camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new three.WebGLRenderer()

    renderer.setClearColor(new three.Color('#333333'))
    renderer.setSize(window.innerWidth, window.innerHeight)

    renderer.render(scene, camera)

    document.body.appendChild(renderer.domElement)
  }
}

(new Package()).init()