const { mostrarRoles, crearRole, borrarRole } = require("../services/roles_services");

const mostrarRolesController = async (req, res) => {
  const resultados = await mostrarRoles();
  res.status(200).json({ resultados });
  console.log(resultados);
};

const crearRoleController = async (req, res) => {
  const { name } = req.body;
  try {
    const resultados = await crearRole(name);
    res.status(200).json({ msg: `se creo con exito, ${resultados}` });
    console.log(resultados);
  } catch (err) {
    console.log(err.message);
  }
};

const borrarRoleController = async (req, res) => {
  const resultados = await borrarRole(req.params.id);
  res.status(200).json({ resultados });
  console.log(resultados);
};

module.exports = {
  mostrarRolesController: mostrarRolesController,
  crearRoleController: crearRoleController,
  borrarRoleController: borrarRoleController,
};
