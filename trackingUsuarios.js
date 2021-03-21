let apiUrl = "https://www.clarin.com/"
let data = {
    userAgent: 'Mozila',
    id: '1'
}
fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-type': 'text/json'
    },
    body: JSON.stringify(data)
})
    .then(response =>
        response.json()
    )
    .then(data => {
        console.log('ver que trae data')
        console.log(data)
    })