// da 3 estrellas
// function createXmasTree(height: number, ornament: string): string {
//   let str = "";
//   const maxOrnaments = 2 * height - 1;

//   const getFiller = (ornaments: number) =>
//     "_".repeat((maxOrnaments - ornaments) / 2);

//   for (let i = 1; i <= height; i++) {
//     const ornaments = 2 * i - 1;
//     const padFill = getFiller(ornaments);
//     i;
//     str += `${padFill}${ornament.repeat(ornaments)}${padFill}\n`;
//   }

//   const padFill = getFiller(1);
//   str += `${padFill}#${padFill}\n${padFill}#${padFill}`;

//   return str;
// }

// da 5 estrellas, imagino que es por los .repeat()
function createXmasTree(height: number, ornament: string): string {
  let str = "";
  const maxOrnaments = 2 * height - 1;
  const base = "_".repeat(maxOrnaments);

  for (let i = 1; i <= height; i++) {
    const ornaments = 2 * i - 1;
    const index = (maxOrnaments - ornaments) / 2;
    const nBase = [...base];

    for (let j = 0; j < ornaments; j++) {
      nBase[index + j] = ornament;
    }

    str += nBase.join("") + "\n";
  }

  str += str
    .substring(0, maxOrnaments + 1)
    .replace(new RegExp(`\\${ornament}`, "g"), "#");
  str += str
    .substring(0, maxOrnaments)
    .replace(new RegExp(`\\${ornament}`, "g"), "#");

  return str;
}

// // tests
// const tree = createXmasTree(5, "*");
// console.log(tree);
// /*
// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____
// */

const tree2 = createXmasTree(3, "+");
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

// const tree3 = createXmasTree(6, "@");
// console.log(tree3);
// /*
// _____@_____
// ____@@@____
// ___@@@@@___
// __@@@@@@@__
// _@@@@@@@@@_
// @@@@@@@@@@@
// _____#_____
// _____#_____

// "__*__
// _***_
// *****
// __#__
// __#__"

// "--*--
// -***-
// *****
// --#--
// --#--"

// */
