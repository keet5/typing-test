export default async function() {
  const parameters = {
    type: 'meat-and-filler',
    paras: 1,
    sentences: 5,
    format: 'text',
  }
  const address = 'https://baconipsum.com/api/'
  const url = `${address}?${Object.keys(parameters)
    .map(key => `${key}=${parameters[key]}`)
    .join('&')}`

  const response = await fetch(url)
  if (response.ok) {
    const text = await response.text()
    return text
  } else {
    console.error('some error')
  }
}
