const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors())
app.use(express.json())

//create user 
app.post("/feedback",async (req,res)=>{
    try {
        console.log(req.body);
        const newUser= await pool.query("INSERT INTO feedback (Building, Floor, Toilet,Feedback) VALUES($1, $2, $3, $4) RETURNING *",[req.body.building,req.body.floor, req.body.toilet, req.body.feedback]);
        res.json(newUser)
        // res.json(newDept)
        
    } catch (error) {
        console.error(error);
    }
})

//get all users
app.get("/feedback",async(req,res)=>{
    try {
        const allUsers = await pool.query("SELECT * FROM feedback");
        res.json(allUsers.rows)
        // res.send(allUsers);
    } catch (error) {
        console.error(error);
    }
})

//get all departments
// app.get("/department",async(req,res)=>{
//     try {
//         const allUsers = await pool.query("SELECT * FROM department");
//         res.json(allUsers.rows)
//         // res.send(allUsers);
//     } catch (error) {
//         console.error(error);
//     }
// })

//get specific users
app.get("/feedback/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const SpecificUser = await pool.query("SELECT * FROM feedback WHERE ID = $1",[id]);
        res.json(SpecificUser.rows)
        // res.send(allUsers);
    } catch (error) {
        console.error(error);
    }
})

//update a user department
app.put("/feedback/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const {Department}=req.body;
        const update= await pool.query("UPDATE feedback SET Feedback = $1 WHERE ID = $2",[Department,id])
        res.json("Feedback Updated Successfully")

        
    } catch (error) {
        console.error(error);
    }
})


//delete a user 
app.delete("/feedback/:id",async(req,res)=>{
    const {id}=req.params;
    const deleteUser= await pool.query("DELETE FROM feedback where ID = $1",[id]);
    res.json("Feedback Deleted")
})

app.listen(5000, ()=>{
    console.log("server on http://localhost:5000");
})