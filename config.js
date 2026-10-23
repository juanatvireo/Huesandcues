// Configuración opcional de Pistas de Color / Optional settings for Color Clues.
//
// Para jugar por internet entre casas o países distintos de forma confiable, el juego
// necesita un servidor TURN que retransmita la conexión cuando no se puede conectar directo.
//
// 1. Crea una cuenta gratuita en https://dashboard.metered.ca/signup
// 2. En el panel, crea una credencial TURN y copia la dirección de la API, algo como:
//    https://tuapp.metered.live/api/v1/turn/credentials?apiKey=XXXXXXXX
// 3. Pégala abajo, entre las comillas, y sube el cambio.
//
// To play reliably over the internet between different homes or countries, paste the
// TURN credentials URL from a free Metered account (https://dashboard.metered.ca/signup) below.

window.PISTAS_CONFIG = {
  turnCredentialsUrl: '',

  // Alternativa: servidores ICE fijos de otro proveedor / Alternative: static ICE servers.
  // iceServers: [{ urls: 'turn:example.com:3478', username: 'user', credential: 'pass' }],
};
