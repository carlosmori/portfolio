export function MouseTrailMagic(canvas, ctx, noise, isMounted) {
  let nParticles = 250
  let p = 0
  let forces = []
  let particles = []
  let width, height
  const resize = () => {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height * 2
    initForces()
  }
  const initForces = () => {
    var i = 0
    for (var x = 0; x < width; x += 20) {
      for (var y = 0; y < height; y += 20) {
        if (!forces[i]) forces[i] = new V2()
        i++
      }
    }

    if (i < forces.length) {
      forces.splice(i + 1)
    }
  }
  const initParticles = () => {
    particles = []
    for (var i = 0; i < nParticles; i++) {
      particles.push(
        new Particle(Math.random() * width, Math.random() * height)
      )
      particles[i].velocity.y = 0.1
    }
  }
  const updateForces = (t) => {
    var i = 0
    var xOff = 0,
      yOff = 0
    for (var x = 0; x < width; x += 20) {
      xOff += 0.1
      for (var y = 0; y < height; y += 20) {
        yOff += 0.1
        let a = noise(xOff, yOff, t * 0.00005) * Math.PI * 4
        if (forces[i]) forces[i].reset(Math.cos(a) * 0.1, Math.sin(a) * 0.1)
        i++
      }
    }
  }

  const drawParticles = () => {
    for (var i = 0; i < nParticles; i++) {
      particles[i].update()
      particles[i].follow(height, forces)
      particles[i].draw(ctx)
    }
  }

  const launchParticle = () => {
    particles[p].position.reset(emitter.x, emitter.y)
    particles[p].velocity.reset(-1 + Math.random() * 2, -1 + Math.random() * 2)
    particles[p].color = `hsl(${Math.floor((emitter.x / width) * 256)},40%,${
      60 + Math.random() * 20
    }%)`
    particles[p].alpha = 1
    p++
    if (p === nParticles) p = 0
  }

  const updateEmitter = () => {
    emitter.lerp(mouse, 0.2)
  }

  const animate = (t) => {
    ctx.clearRect(0, 0, width, height * 2)
    updateEmitter()
    launchParticle()
    launchParticle()
    updateForces(t)
    drawParticles()
    requestAnimationFrame(animate)
  }

  const pointerMove = (e) => {
    mouse.x = e.offsetX ? e.offsetX : e.offsetX
    mouse.y = e.offsetY ? e.offsetY : e.offsetY
  }

  if (!isMounted) {
    // TODO check this memory leak isMounted flag not working always
    window.removeEventListener('resize', resize)
    window.removeEventListener('mousemove', pointerMove)
    window.removeEventListener('touchmove', pointerMove)
    window.removeEventListener('wheel', pointerMove)
    cancelAnimationFrame(animate)
  }
  let mouse = new V2(window.innerWidth / 2, window.innerHeight / 2)
  let emitter = new V2(window.innerWidth / 2, window.innerHeight / 2)
  resize()
  initParticles()
  requestAnimationFrame(animate)
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', pointerMove)
  window.addEventListener('touchmove', pointerMove)
  window.addEventListener('wheel', pointerMove)
}

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

  follow(height, forces) {
    var x = Math.floor(this.position.x / 20)
    var y = Math.floor(this.position.y / 20)
    var index = x * Math.floor(height / 20) + y
    var force = forces[index]
    if (force) this.applyForce(force)
  }

  applyForce(force) {
    this.acceleration.add(force)
  }

  draw(ctx) {
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
