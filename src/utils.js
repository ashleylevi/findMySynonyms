export async function fetchSynonyms(word) {
  const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=2758e501-fe2e-4361-89ca-85144aa303b6
  `)
  const result = await response.json()
  const synonyms = result[0].meta.syns[0].map((synonym) => {
    return synonym
  })
  return synonyms
}

