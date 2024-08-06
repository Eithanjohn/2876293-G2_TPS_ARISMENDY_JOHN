const controller = {}; //objeto
controller.lis = (req, res) =>{//metodo que hace parte del objeto
 //se pueden crear los metodos que necesitemos guardar, eliminar, crear
 // se crea un metodo nuevo (getConnection) para la conexion con mysql apartir
 // del expressConnection
 reg.getConnection ((err, conn) =>{
    //hacemos una consulta (query)
 conn.query("SELECT * FROM clientes", (err,clientes)=>{
    //tratamos un posible error
  if (err){
    res.jason(err);
  }
console.log (clientes);
data: clientes
})
})
};
module.exports = controller;