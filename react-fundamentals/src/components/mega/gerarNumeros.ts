const gerarNumeros = () => {
  const numeros: number[] = Array(7)
    .fill(0)
    .reduce((numeros: number[]) => {
      const novoNumero = gerarNumeroNaoContido(1, 60, numeros);

      return [...numeros, novoNumero];
    }, []);

  return numeros;
};

const gerarNumeroNaoContido = (min: number, max: number, arr: number[]) => {
  const aleatorio: number = parseInt(Math.random() * (max - min) + min);

  return arr.includes(aleatorio)
    ? gerarNumeroNaoContido(min, max, arr)
    : gerarNumeros(aleatorio);
};

console.log(gerarNumeroNaoContido(1, 5, [1, 2, 3]));
