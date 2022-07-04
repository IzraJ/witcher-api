const express = require('express')
const app = express()
const PORT = 8000

// api data
const witcherChars = {
    'geralt':{
        'name':'Geralt of Rivia',
        'race':'Human(witcher)',
        'profession':'Witcher',
        'affiliation':'Wolf School'
    },
    'triss':{
        'name':'Triss Merigold',
        'race':'Human',
        'profession':'Advisor,Mage',
        'affiliation':'King Foltest of Temeria,Lodge of Sorceresses,Temerian Royal Council'
    },
    'dandelion':{
        'name':'Julian Alfred Pankratz',
        'race':'Human',
        'profession':'Bard',
        'affiliation':"Geralt's company,Redanian Secret Service, University of Oxenfurt"
    },
    'unknown':{
        'name':'unknown',
        'race':'unknown',
        'profession':'unknown',
        'affiliation':'unknown'
    }

}

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:witcherName', (req,res)=>{
    const witchName = req.params.witcherName.toLowerCase()
    if(witcherChars[witchName]){
        res.json(witcherChars[witchName])
    }else{
       res.json(witcherChars['unknown']) 
    }
    // res.json(witcherChars)
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`)
})