import axios from 'axios';

const API_URL = "https://api.exchangeratesapi.io/latest";

export const convertCurrency = (amount, fromCurrency, toCurrency) => {
  return axios.get(`${API_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
    .then(response => {
      const rate = response.data.rates[toCurrency];
      return amount * rate;
    });
};
