// task 1  (node js)
//================================================================
const data10 = require("./data10")
const yargs = require("yargs")
yargs.command({
     command: "add",
     describe: "to add an aitem",
     builder: {
          fname: {
               describe: "this is first name des",
               demandOptian: true,
               type: "string"
          },
          lname: {
               describe: "this is second name des",
               demandOptian: true,
               type: "string"
          }

     },
     handler: (x) => {
          // console.log(x.fname, x.lname)
          data10.addPerson(x.id, x.fname, x.lname, x.city, x.age)
     }
})

yargs.command({
     command : "delete",
     discribe: "to delete an item ",
     handler : (x) =>{
          data10.deletePerson(x.id)
     }
})

// yargs.parse()


yargs.command({
     command : "read",
     discribe: "to catch an item ",
     builder : {
          id : {
               discribe : "this is dis for this command",
               demmandOption : true ,
               type : "string"
          }
     },
     handler : (x) =>{
          data10.catchData(x.id)
     }
})

// list Data 

yargs.command({
     command : "list",
     discribe: "to list Data ",
     handler : () =>{
          data10.listData()
     }
})

yargs.parse()



//==========================================================================================
//  node app.js add --id="1" --fname="abdo" --lname="mohammed" --city="asyut" --age="22" 
//  node app.js add --id="2" --fname="ahmed" --lname="khaled" --city="alex" --age="31" 
//  node app.js add --id="3" --fname="sayed" --lname="zaki" --city="cairo" --age="24" 
//  node app.js add --id="4" --fname="dina" --lname="Adel" --city="asyut" --age="21" 
//  node app.js add --id="5" --fname="Yara" --lname="Ahmed" --city="faioom" --age="29" 
//  node app.js add --id="6" --fname="Esraa" --lname="mohammed" --city="alex" --age="25" 
//  node app.js add --id="7" --fname="marawan" --lname="Metaep" --city="cairo" --age="28" 
//  node app.js delete  --id="2"
//  node app.js read  --id="2"
//  node app.js list  
//==========================================================================================






