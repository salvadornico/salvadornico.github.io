export const getJson = (url: string) => fetch(url).then(data => data.json())
