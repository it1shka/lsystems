export type Rules = {[toReplace: string]: string}
export const parseRules = (raw: string): Rules => {
  const rules: Rules = {}
  raw.split(';').forEach(piece => {
    try {
      const [toReplace, replacer] = piece
        .split('')
        .filter(l => !/\s/.test(l))
        .join('')
        .split('->')
      rules[toReplace] = replacer
    } catch {
      console.warn('Cannot parse a rule properly: ' + piece)
    }
  })
  return rules
}

export const generateInstructions = (
  axiom: string, rules: Rules, iterations: number
) => {
  let current: string = axiom
  for(let i = 0; i < iterations; i++) {
    current = current
      .split('')
      .map(e => e in rules ? rules[e] : e)
      .join('')
  }
  return current
}