const { response, request } = require('express');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  
//Buscar pares

  return resp.json('values ' + req.params.name);//regresar el nombre de los jugadores.
};

module.exports = { getPairsOfPlayers };
