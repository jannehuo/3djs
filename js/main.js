import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  Color
} from "three"
import colors from './utils/colors'

const screen = {
  w: window.innerWidth,
  h: window.innerHeight
}

const scene = new Scene()
scene.background = new Color(colors.lightCrey)
const camera = new PerspectiveCamera(75, screen.w / screen.h, 0.1, 1000)
const renderer = new WebGLRenderer()

renderer.setSize(screen.w, screen.h)
document.body.appendChild(renderer.domElement)

const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial({ color: colors.black })
const cube = new Mesh(geometry, material)

scene.add(cube)
camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

animate()
