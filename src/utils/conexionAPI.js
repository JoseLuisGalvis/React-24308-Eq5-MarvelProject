
export const getApi = async (path) => {

    const PUBLIC_KEY = '33a74932820d80196d0f04aac676fc0a'
    const TS = 1
    const hash = '12e4e79b0eba3ff5b651f80a71f1012e'

    const URL = `https://gateway.marvel.com/${path}?=${TS}&apikey=${PUBLIC_KEY}&hash=${hash}`
    try {
        const response = await fetch(URL)
        const {data} = await response.json()
        return data
    }
    catch (error) {
        console.error('Error fetching data:', error)
        return null
}

}