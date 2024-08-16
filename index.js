import express from 'express';


const app = express();
//in postman json format data store 
app.use(express.json());
const PORT = 4500;



// 1st
app.get('/query', (req, res) => {
    const { name, age, std } = req.query
    res.send("hiii")
    console.log(name, age, std)
})

// 2nd using id
app.get("/info/:id", (req, res) => {
    const { student, collage } = req.query;
    const { id } = req.params;
    res.json({
        student: student,
        collage: collage,
        id: id

    })
    console.log(student, collage, id)
})

// 3rd
const student = [{
    Name: "Suraj",
    Add: "Shrigonda",
    No: 9657757731

},
{
    Name: "Kiran",
    Add: "Shirur",
    No: 8668413096
},
{
    Name: "Dhanu",
    Add: "Sangvi",
    No: 8010124327
},
{
    Name: "Pradny",
    Add: "Deulgaon",
    No: 9022655449
},
{
    Name: "Shital",
    Add: "Kuldharan",
    No: 9767568864
}
]
app.get('/stud', (req, res) => {
    res.json({ student })
})

// call info on port by using listen function
app.listen(PORT, () => {
    console.log("server is running", PORT)
})



app.get('/', (req, res) => {
    // res.send("Server is werking")
    res.json({ "mesege": "Server is werking" })
})

app.get('/color', (req, res) => {
    res.json({ colour: "pink,red,blue,black,yellow" })
})


app.get('/game', (req, res) => {
    res.json({ game: "Horse Riding,Shooting,Car Racing,Judo,Running,Swiming,Dancing" })
})








// fist create amty array
const infoarray = []

app.post('/data', (req, res) => {
    const { name, age, roal, education, hobby, favorite_food } = req.body
    
// we have random id
    const id = Math.round(Math.random() * 1000)
    if (!name) {

        res.json({ Msg: "name is required", success: false });
    }

    if (!age) {

        return res.json({ Msg: "age is required", success: false });
    }

    if (!roal) {

        return res.json({ Msg: "roal is required", success: false });
    }

    if (!education) {

        return res.json({ Msg: "education is required", success: false });
    }

    if (!hobby) {

        return res.json({ Msg: "hobby is required", success: false });
    }




    // create object of infoarray
    const allinfo = {
        success: true,
        id: id,
        name: name,
        age: age,
        roal: roal,
        education: education,
        hobby: hobby,
        favorite_food: favorite_food
    }

    // using push methode allinfo data stored in infoarray
    infoarray.push(allinfo)



    res.json({
        success: true,
        data: allinfo,
        msg: "data is fatching successfully"
        // age: age,
        // roal: roal,
        // education: education,
        // hobby:hobby,
        // favorite_food :favorite_food
    })

})

// show allinfo in get methode
app.get('/datas', (req, res) => {
    res.json({ infoarray })
})




// specific data get

app.get('/data', (req, res) => {
    const { name } = req.query;

    let newstd = null;

    // using foreach function std data is return
    infoarray.forEach(
        (std) => {
            if (std.name == name) {
                newstd = std;
            }
        }


    )

    res.json(
        { data: newstd })

})












// import express from "express"

// const app = express();
// const PORT=5000;


// app.get('/hi',(req,res)=>{
// res.send('hallo')
// })

// app.listen(PORT)