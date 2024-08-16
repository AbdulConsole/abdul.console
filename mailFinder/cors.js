const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = url.value;
const fetchUrl = proxyUrl + targetUrl;

try {
  const response = await axios.get(fetchUrl);
  sourceCode = response.data;

  result.textContent = 'Extracting...';

  const emails = filter(sourceCode);
  result.textContent = emails.length ? emails.join(', ') : 'No emails found.';
} catch (error) {
  result.textContent = 'Error fetching or extracting emails.';
  console.error(error);
}