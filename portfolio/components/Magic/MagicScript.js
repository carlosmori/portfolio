/* eslint-disable no-unused-vars */
export class V2 {
  constructor(x, y) {
    this.x = x || 0
    this.y = y || 0
  }
  add(vector) {
    this.x += vector.x
    this.y += vector.y
  }
  reset(x, y) {
    this.x = x
    this.y = y
  }
  lerp(vector, n) {
    this.x += (vector.x - this.x) * n
    this.y += (vector.y - this.y) * n
  }
}

export class Particle {
  constructor() {
    this.position = new V2(-100, -100)
    this.velocity = new V2()
    this.acceleration = new V2()
    this.alpha = 0
    this.color = '#000000'
    this.points = [
      new V2(-10 + Math.random() * 20, -10 + Math.random() * 20),
      new V2(-10 + Math.random() * 20, -10 + Math.random() * 20),
      new V2(-10 + Math.random() * 20, -10 + Math.random() * 20),
    ]
  }

  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.reset(0, 0)
    this.alpha -= 0.008
    if (this.alpha < 0) this.alpha = 0
  }

  follow() {
    var x = Math.floor(this.position.x / 20)
    var y = Math.floor(this.position.y / 20)
    var index = x * Math.floor(height / 20) + y
    var force = forces[index]
    if (force) this.applyForce(force)
  }

  applyForce(force) {
    this.acceleration.add(force)
  }

  draw() {
    ctx.globalAlpha = this.alpha
    ctx.beginPath()
    ctx.moveTo(
      this.position.x + this.points[0].x,
      this.position.y + this.points[0].y
    )
    ctx.lineTo(
      this.position.x + this.points[1].x,
      this.position.y + this.points[1].y
    )
    ctx.lineTo(
      this.position.x + this.points[2].x,
      this.position.y + this.points[2].y
    )
    ctx.closePath()
    ctx.fillStyle = this.color
    ctx.fill()
  }
}
