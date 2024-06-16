export function getRandomNumber(min: number, max: number): number {
  // Math.random() gera um número entre 0 (inclusive) e 1 (exclusive)
  // Multiplicamos por (max - min + 1) para incluir o 'max' e usamos Math.floor para arredondar para baixo
  return Math.floor(Math.random() * (max - min + 1)) + min
}
