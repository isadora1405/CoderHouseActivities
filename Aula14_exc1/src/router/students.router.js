const router = require('express').Router()
const studentModel = require('../models/students.model')

router.get('/', async(req, res)=>{
    try{
        let students = await studentModel.find()
        res.send({result:'success', payload:students})
    }
    catch(error) {
        console.log("Cannot get students: " +error)
    }
});

router.post('/', async(req,res)=>{
    let {nome, nota, curso} = req.body;
    if(!nome || !nota || !curso) return res.send({status:"error", error:"Incomplete values"})

    let result = await studentModel.create({
        nome,
        nota,
        curso
    });
    
    res.send({status:"success", payload: result});
});

router.put('/:sid', async(req,res)=>{
    let {sid} = req.params;
    let studentToReplace = req.body;

    if(!studentToReplace.nome || !studentToReplace.nota || !studentToReplace.curso) return res.send({status:"error", erro: "Incomplete values"})

    let result = await studentModel.updateOne({_id:sid}, studentToReplace)
    res.send({status:"success", payload: result})
});

router.delete('/:sid', async(req,res)=>{
    let {sid} = req.params;
    let result = await studentModel.deleteOne({_id:sid});
    res.send({status:"success", payload:result})
})



module.exports = router