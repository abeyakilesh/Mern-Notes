import express from "express";

const router = express.Router();

///fetch data
router.get("/", (req,res)=>{
    res.status(200).send("You created 102 Notes");
});

//create data
router.post("/02",(req,res)=>{
    res.status(201).json({message:"Created 1 note"})
});

//update data 201
router.put("/03",(req,res)=>{
    res.status(200).json({message:"note updated"})
});

//delete data 200
router.delete("/:id",(req,res)=>{
    res.status(200).json({message: "note deleted"})
});

export default router;