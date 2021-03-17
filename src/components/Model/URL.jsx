export async function requisicao() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    const resJSON = await response.json()

    return resJSON.drinks[0]
}