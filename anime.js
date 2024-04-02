const primary_url = "https://anime-db.p.rapidapi.com/anime"
const animeMovies = async() => {
try {
    const response = await fetch(`${primary_url}/by-ranking/1`,{
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            'X-RapidAPI-Key': '72c2ac9d47mshc9a46104c4d44cfp11f852jsn8f0bed7e3a6c',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
        }
    })
  const data = await response.json()
  console.log(data.result?.results)
} catch (error) {
    console.log(error)
}
}