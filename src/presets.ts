export interface Preset {
  name: string
  axiom: string
  angle: string
  iterations: string
  rules: string
  step: string
}

const presets: Preset[] = [
  {
    name: 'Pine',
    axiom: 'F',
    angle: '45',
    iterations: '5',
    rules: 'F -> F[+F]F[-F]F',
    step: '2'
  },
  {
    name: 'Juniper',
    axiom: 'F',
    angle: '25',
    iterations: '5',
    rules: 'F -> F[+F]F[-F][F]',
    step: '8'
  },
  {
    name: 'Bush',
    axiom: 'F',
    angle: '26',
    iterations: '4',
    rules: 'F -> FF-[-F+F+F]+[+F-F-F]',
    step: '11'
  },
  {
    name: 'Woodruff',
    axiom: 'X',
    angle: '30',
    iterations: '4',
    rules: 'X -> F[+X]F[-X]+X; F -> FF',
    step: '12'
  },
  {
    name: 'Maple',
    axiom: 'X',
    angle: '35',
    iterations: '6',
    rules: 'X -> F[+X][-X]FX; F -> FF',
    step: '4'
  },
  {
    name: 'Young tree',
    axiom: 'X',
    angle: '24',
    iterations: '6',
    rules: 'X -> F-[[X]+X]+F[+FX]-X; F -> FF',
    step: '4'
  }
]

export default presets