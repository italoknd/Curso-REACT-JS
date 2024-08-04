export const gerarNumeros = (qtd: number): number[] => {
  const numeros: number[] = Array(qtd)
    .fill(0)
    .reduce((numeros: number[]) => {
      const novoNumero = gerarNumeroNaoContido(1, 60, numeros);

      return [...numeros, novoNumero];
    }, [])
    .sort((n1: number, n2: number) => n2 - n1);

  return numeros;
};

const gerarNumeroNaoContido = (
  min: number,
  max: number,
  arr: number[]
): number => {
  const aleatorio: string = parseInt((Math.random()) * (max - min) + min);

  return arr.includes(aleatorio)
    ? gerarNumeroNaoContido(min, max, arr)
    : aleatorio;
};
