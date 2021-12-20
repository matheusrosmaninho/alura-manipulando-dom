export const data = (data) => {
  return {
    languageDate: "pt-BR",

    optionsDate: {
      year: "numeric",
      month: 'numeric',
      day: 'numeric'
    },

    onlyDateBr() {
      return new Intl.DateTimeFormat(this.languageDate, this.optionsDate).format(data)
    },
  };
};