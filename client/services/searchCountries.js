export default function searchCountries(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['asdf', 'fdsa', 'qwer', 'rewq', 'zxcv', 'vczx']);
    }, 1000);
  });
}
