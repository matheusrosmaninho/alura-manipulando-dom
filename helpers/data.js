export const data = (data) => {
  return {
    languageDate: "pt-BR",

    optionsDate: {
      year: "numeric",
      month: 'numeric',
      day: 'numeric'
    },
    optionsHour: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    },

    onlyDateBr() {
      return new Intl.DateTimeFormat(this.languageDate, this.optionsDate).format(data)
    },

    getFullHour() {
      return new Intl.DateTimeFormat(this.languageDate, this.optionsHour).format(data)
    },
  };
};