const Document = require('../models/User');

exports.createDocument = async (req, res) =>{
    const {title, content} = req.body;
    try {
        const document = new Document({title, content, owner: req.user._id});
        await document.save();
        res.status(201).json(document);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

exports.getDocuments = async (req, res) => {
    try {
        const documents = await Document.find({owner: req.user._id});
        res.json(documents);
    }catch(error){
        res.status(400).json({error: error.message});
    }
};

exports.updateDocument = async (req, res) => {
    const {id} = req.params;
    const {title, content} = req.body;
    try {
        const document = await Document.findByIdAndUpdate(id, {title, content});
        res.json(document);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

exports.deleteDocument = async (req, res) =>{
    const {id} = req.params;
    try {
        await Document.findByIdAndDelete(id);
        res.json({message: 'Document Deleted Successfully'});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};