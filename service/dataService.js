export const removeDatasRepetidas = (datas) => {
  const datasUnicas = [];
  datas.forEach((data) => {
    if (datasUnicas.indexOf(data.data) === -1) {
      datasUnicas.push(data.data);
    }
  });
  return datasUnicas;
};

export const ordenaDatas = (datas) => {
  datas.sort((a, b) => {
    let primeiraData = a.split('/')
    primeiraData = primeiraData.reverse().join('-')
    primeiraData = new Date(primeiraData).getTime()

    let segundaData = b.split('/')
    segundaData = segundaData.reverse().join('-')
    segundaData = new Date(segundaData).getTime()

    return primeiraData - segundaData
  })
}