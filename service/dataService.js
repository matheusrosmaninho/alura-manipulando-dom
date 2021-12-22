export const removeDatasRepetidas = (datas) => {
  const datasUnicas = [];
  datas.forEach((data) => {
    if (datasUnicas.indexOf(data.data) === -1) {
      datasUnicas.push(data.data);
    }
  });
  return datasUnicas;
};
