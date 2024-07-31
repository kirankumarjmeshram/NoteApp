const Task = require('../models/Task');

exports.createTask = async (req, res)=>{
    const {title, description, dueDate} = req.body;
    try {
        const task = new Task({title, description, dueDate, owner: req.user._id});
        await task.save();
        res.status(201).json({message: 'Task created successfully'});

    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

exports.getTasks = async (req, res) => {
    try {
      const tasks = await Task.find({ owner: req.user._id });
      res.json(tasks);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status, dueDate } = req.body;
    try {
      const task = await Task.findByIdAndUpdate(id, { title, description, status, dueDate }, { new: true });
      res.json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

  exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
      await Task.findByIdAndDelete(id);
      res.json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };