interface TurtleState {
  x: number
  y: number
  rot: number
}

const deg = (n: number) => {
  return n * Math.PI / 180
}

export function createTurtle(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
  if(ctx === null) {
    throw new Error('Failed to get canvas context')
  }

  const drawLine = (fx: number, fy: number, tx: number, ty: number) => {
    ctx.beginPath()
    ctx.moveTo(fx, fy)
    ctx.lineTo(tx, ty)
    ctx.closePath()
    ctx.stroke()
  }

  const initialState: TurtleState = {
    x: Math.floor(canvas.width / 2),
    y: canvas.height - 10,
    rot: -90
  }
  let stack = [ initialState ]
  ctx.fillStyle = 'white'
  ctx.fillRect(0,0,canvas.width,canvas.height)

  return (instr: string, angle: number, step: number, color: string) => {
    ctx.strokeStyle = color
    ctx.lineWidth = 2

    for(const letter of instr) {
      const current = stack.pop()!
      const {x, y, rot} = current
      switch(letter) {
        case '+':
          stack.push({
            ...current,
            rot: rot + angle
          })
          break
        case '-':
          stack.push({
            ...current,
            rot: rot - angle
          })
          break
        case '[':
          stack = [...stack, {...current}, {...current}]
          break
        case ']': 
          break
        default:
          const dx = x + step * Math.cos(deg(rot))
          const dy = y + step * Math.sin(deg(rot))
          drawLine(x, y, dx, dy)
          stack.push({
            ...current,
            x: dx,
            y: dy
          })
          break
      }
    } 
  }
}