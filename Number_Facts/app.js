let baseURL='http://numbersapi.com'

function favNumber() {
    const num = $('#fav')[0].value
    const list = $('#factList')
    list.empty()
    axios
    .get(`${baseURL}/${num}?json`)
    .then(f1 => {
        const fact1 = f1.data.text
        list.append(`<li>${fact1}</li>`)
        return axios.get(`${baseURL}/${num}?json`)
    })
    .then(f2 => {
        const fact2 = f2.data.text
        list.append(`<li>${fact2}</li>`)
        return axios.get(`${baseURL}/${num}?json`)
    })
    .then(f3 => {
        const fact3 = f3.data.text
        list.append(`<li>${fact3}</li>`)
        return axios.get(`${baseURL}/${num}?json`)
    })
    .then(f4 => {
        const fact4 = f4.data.text
        list.append(`<li>${fact4}</li>`)
    })
}

function fav4Numbers() {
    const num1 = $('#fav1')[0].value
    const num2 = $('#fav2')[0].value
    const num3 = $('#fav3')[0].value
    const num4 = $('#fav4')[0].value
    const list = $('#factList4')
    list.empty()
    axios
    .get(`${baseURL}/${num1}?json`)
    .then(f1 => {
        const fact1 = f1.data.text
        list.append(`<li>${fact1}</li>`)
        return axios.get(`${baseURL}/${num2}?json`)
    })
    .then(f2 => {
        const fact2 = f2.data.text
        list.append(`<li>${fact2}</li>`)
        return axios.get(`${baseURL}/${num3}?json`)
    })
    .then(f3 => {
        const fact3 = f3.data.text
        list.append(`<li>${fact3}</li>`)
        return axios.get(`${baseURL}/${num4}?json`)
    })
    .then(f4 => {
        const fact4 = f4.data.text
        list.append(`<li>${fact4}</li>`)
    })
}