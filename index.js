const API_KEY ='https://www.alibimenstyle.uz/api/products'
let main = document.querySelector('.main')



async function getApi() {
   const response = await fetch(API_KEY)
   const data = await response.json()
   console.log(data);
   Add(data)
}

getApi()

function Add(data) {
    let html = ''
    data.data.map((el) => {
        html += `
        <div>
           <img src=${el.image} />
           <h1>${el.name}</h1>
           <p>${el.price}</p>
        </div>
        `
        main.innerHTML = html;

    })
}