import { Scene, PerspectiveCamera, WebGLRenderer, DirectionalLight } from "three"
import colors from './utils/colors'

export const screen = {
  w: window.innerWidth,
  h: window.innerHeight
}
export const scene = new Scene()
export const camera = new PerspectiveCamera(90, screen.w / screen.h, 0.1, 1000)
export const renderer = new WebGLRenderer()
export const light = new DirectionalLight(colors.white)
