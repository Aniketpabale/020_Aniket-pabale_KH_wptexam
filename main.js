const express=require("express");
const app=express();
const{addmessage,selectmessage}=require("./user")
app.use(express.json());
const cors=require("cors");
app.use(cors());

app.get("/readmessage",async(req,res)=>{
    const list = await selectmessage();
    res.json(list);

}
);

app.post("/writemessage",async(req,res)=>{
    const user=req.body;
    await addmessage(user);
    res.json({message:"message written successfully"})
}
);

app.listen(4000,()=>console.log("server started"));

 
