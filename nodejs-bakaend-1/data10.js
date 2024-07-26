const fs = require("fs")

const addPerson = (id , fname, lname, city, age) => {
    const allData = loadeinfo()
    const DuoplicatedData = allData.filter((item) => {
        return item.id === id
    })
    if (DuoplicatedData.length === 0) {

        allData.push({
            id,
            fname,
            lname,
            city,
            age
        }),
            saveAlldata(allData)

    } else {
        console.log("ERORR DUOBLICATED DATA")
    }
}

const loadeinfo = () => {
    try {
        const dataJson = fs.readFileSync("data10.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}

const saveAlldata = (allData) => {
    const saveAlldataJson = JSON.stringify(allData)
    fs.writeFileSync("data10.json", saveAlldataJson)
}

// delete data=======

const deletePerson = (id) =>{
    const allData = loadeinfo()
    const deleteItem = allData.filter((item) => {
        return item.id !== id
    })
    saveAlldata(deleteItem)
    console.log(deleteItem)
    console.lo("you have already deleted an item ")
}

// read Data========

const catchData = (id) =>{
    const allData = loadeinfo()
    const searchedItem = allData.find((obj) =>{
        return obj.id == id
    })

    if(searchedItem){
        console.log(searchedItem)
    }else{
        console.log("Id not found")
    }
}

// list 

const listData = (id) =>{
    const allData = loadeinfo()
          allData.forEach(obj => {
            console.log(obj.fname, obj.lname)
          });
    
  
}

module.exports = {
    addPerson,
    deletePerson,
    catchData,
    listData
}