document.querySelector('button').addEventListener('click',getWitcherName)

async function getWitcherName(){
    const witchName = document.querySelector('input').value
    try{
        const res = await fetch(`https://witcher-api.herokuapp.com/api/${witchName}`)
        const data = await res.json()
        console.log(data)
        document.querySelector('h2').innerText = data.name
    } catch(err){
        console.log(err)
    }
}