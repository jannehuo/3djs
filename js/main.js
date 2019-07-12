import { Color, Geometry, Points, PointsMaterial, Vector3, Math } from "three"
import { times } from 'lodash'
import { scene, camera, renderer, light, screen } from "./init"
import colors from "./utils/colors"

const points = 10000

scene.background = new Color(colors.white)
renderer.setSize(screen.w, screen.h)
document.body.appendChild(renderer.domElement)
light.position.set(0, 1, 1).normalize()
camera.position.z = 5

const pointsGeometry = new Geometry()
const pointsMaterial = new PointsMaterial({color: colors.purple})

times(points, () => {
 let p = new Vector3()
 p.x = Math.randFloatSpread(1000)
 p.y = Math.randFloatSpread(1000)
 p.z = Math.randFloatSpread(1000)
 pointsGeometry.vertices.push(p)
})

pointsGeometry.morphAttributes = {};

const particles = new Points(pointsGeometry, pointsMaterial)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

function addToScene(array) {
  array.forEach(item => scene.add(item))
}

addToScene([light, particles])
animate()
