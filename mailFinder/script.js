let url = document.querySelector('.url');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
let sourceCode = '';

btn.addEventListener('click', async () => {
  result.textContent = 'Fetching...';

  try {
    // Attempt to fetch directly
    await fetchSource(url.value);
  } catch (error) {
    console.error('Direct fetch failed:', error);

    // Attempt to fetch through a proxy
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    try {
      await fetchSource(proxyUrl + encodeURIComponent(url.value), true);
    } catch (proxyError) {
      console.error('Proxy fetch failed:', proxyError);
      result.textContent = 'Error fetching or extracting emails.';
    }
  }
});

async function fetchSource(fetchUrl, isProxy = false) {
  const response = await axios.get(fetchUrl);
  sourceCode = isProxy ? response.data.contents : response.data;

  result.textContent = 'Extracting...';

  const emails = filter(sourceCode);
  result.textContent = emails.length ? emails.join(', ') : 'No emails found.';
}

function filter(sourceCode) {
  // Regular expression to match email addresses
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

  // Use the regular expression to find all email addresses
  const emailAddresses = sourceCode.match(emailRegex);

  // Return the array of email addresses, or an empty array if no matches were found
  return emailAddresses || [];
}