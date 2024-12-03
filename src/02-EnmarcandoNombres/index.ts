/*
  Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
  pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a 
  generar este marco mágico.

  Reglas:
  Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
  Cada nombre debe estar en una línea, alineado a la izquierda.
  El marco está construido con * y tiene un borde de una línea de ancho.
  La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
*/

function createFrame(names: string[]): string {
  // Code here
  let maxNameLength = 0;
  let cols = 0;

  names.forEach((name) => {
    maxNameLength = Math.max(maxNameLength, name.length);
  });

  cols = maxNameLength + 4;

  let str = "*".repeat(cols);
  str += "\n";

  names.forEach((name) => {
    const nameStr = `* ${name}${" ".repeat(cols - name.length - 3)}*\n`;
    str += nameStr;
  });

  str += "*".repeat(cols);

  return str;
}

// tests
console.log(createFrame(["midu", "madeval", "educalvolpz"]));

/* Resultado esperado:
 ***************
 * midu        *
 * madeval     *
 * educalvolpz *
 ***************
 */

console.log(createFrame(["midu"]));

/* Resultado esperado:
 ********
 * midu *
 ********
 */

console.log(createFrame(["a", "bb", "ccc"]));

/* Resultado esperado:
 *******
 * a   *
 * bb  *
 * ccc *
 *******
 */

console.log(createFrame(["a", "bb", "ccc", "dddd"]));

// ***************
// * midu          *
// * madeval       *
// * educalvolpz   *

// * midu          *\n
