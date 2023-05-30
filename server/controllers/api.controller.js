const { default: axios } = require("axios");
const { req , res } = require("express");

module.exports.api = async (req, res) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const users = response.data;
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ocurrio un error' });
    }
  };

module.exports.getbyId = async (req , res ) =>{
  try {
    const userId = req.params.id;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = response.data;
    res.json(user);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrio un error al obtener por ID' });
  }
}

module.exports.create = async (req, res) =>{
  try {
    const newUser = {
      name: 'Milena Isasi',
      email: 'isasimilena28@gmail.com',
      username: 'mileisasi',
    };
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
    const createdUser = response.data;
    res.json(createdUser);
  } catch (error){
    console.log(error);
    res.status(500).json({ error: 'Ocurrio un error al crear' });

  }
};

module.exports.delete = async (req, res) =>{
  try{
    const response = await axios.delete('https://jsonplaceholder.typicode.com/users/1');
    
    if (response.status ===200){
      res.json({msg: 'Eliminado Exitosamente'});
    } else {
      throw new Error('Error al eliminar');
    }
  } catch(error){
    console.log(error);
    res.status(500).json({error: 'Ocurrio un error al crear'})
  }
};

