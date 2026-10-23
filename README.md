# Pistas de Color

Juego de pistas y colores para jugar en familia, inspirado en los juegos de adivinar colores con pistas.

Hay tres formas de jugar:

- **Un solo iPad:** se pasan el iPad de mano en mano.
- **iPad + celulares:** el iPad muestra el tablero y la sala. Cada persona escanea el código QR con su celular y juega desde ahí, sin crear cuentas.
- **Solo celulares:** un celular abre la sala y también juega; los demás entran con el código QR. El celular que abre la sala debe mantener la pantalla encendida.

Opciones: tiempo límite para colocar cada ficha (30, 60 o 90 segundos) y un botón **Apurar** para presionar, con sonido, a quien está tardando. Toca tu nombre durante la partida para ver cómo van los puntos.

## Publicarlo con GitHub Pages

1. En GitHub, abre **Settings → Pages**.
2. En *Build and deployment*, elige **Deploy from a branch**, la rama `master` y la carpeta `/ (root)`.
3. Tras un minuto, el juego queda en `https://<tu-usuario>.github.io/Huesandcues/`.

GitHub Pages en un repositorio privado requiere un plan de pago. Con una cuenta gratuita, el repositorio tiene que ser público.

## Cómo se conectan los celulares

Los celulares se conectan directamente con el iPad (WebRTC, con [PeerJS](https://peerjs.com/)). El servidor público gratuito de PeerJS solo sirve para que los dispositivos se encuentren. Funciona mejor si todos están en la misma red Wi-Fi.

Las librerías están incluidas en `vendor/` (ver `vendor/LICENSES.md`).
