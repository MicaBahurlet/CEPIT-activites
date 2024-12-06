import { Mago } from './Mago';
import { Luchador } from './Luchador';
import { Arquera } from './Arquera';
import { Hechicera } from './Hechicera';

const gandalf = new Mago('Gandalf');
const hercules = new Luchador('Hércules');
const Artemisa = new Arquera('Artemisa');
const hechicera = new Hechicera('Hechicera');


gandalf.atacar();
gandalf.lanzarHechizo();

hercules.atacar();
hercules.golpeFuerte();

Artemisa.atacar();
Artemisa.dispararFlecha();

hechicera.atacarA(Artemisa);
Artemisa.ganarContra(hechicera);
