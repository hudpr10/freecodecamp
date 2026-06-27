/* 
Periodic Spelling

Given a word, determine if it can be spelled using element symbols from the periodic table.
  - Ignore casing when spelling a word. "neon" can be spelled with the symbols "Ne", "O", and "N".

Return an array of the elements used to spell the word, in their original casing and in the order to spell the word. Or, an empty array if it can't be spelled.
*/

// prettier-ignore
let elementSymbols = [
  "H","He","Li","Be","B","C","N","O","F","Ne",
  "Na","Mg","Al","Si","P","S","Cl","Ar","K",
  "Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni",
  "Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb",
  "Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd",
  "Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs",
  "Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd",
  "Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta",
  "W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb",
  "Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa",
  "U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm",
  "Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt",
  "Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"
];

const capitalize = (symbol) => {
  if (!symbol) return "";
  return symbol.charAt(0).toUpperCase() + symbol.slice(1).toLowerCase();
};

function getPeriodicSpelling(word) {
  const target = word.toLowerCase();

  function search(remainingStr) {
    // Caso base: se não resta nenhuma letra, encontramos um caminho válido!
    if (remainingStr === "") return [];

    // 1ª Tentativa: Pegar as próximas 2 letras (se houver)
    if (remainingStr.length >= 2) {
      const candidate2 = capitalize(remainingStr.substring(0, 2));
      if (elementSymbols.includes(candidate2)) {
        // Tenta resolver o RESTO da string depois dessas 2 letras
        const result = search(remainingStr.substring(2));
        if (result !== null) {
          return [candidate2, ...result];
        }
      }
    }

    // 2ª Tentativa: Se a de 2 letras falhou, tenta pegar apenas 1 letra
    const candidate1 = capitalize(remainingStr.substring(0, 1));
    if (elementSymbols.includes(candidate1)) {
      const result = search(remainingStr.substring(1));
      if (result !== null) {
        return [candidate1, ...result];
      }
    }

    // Se nenhuma tentativa (2 ou 1 letra) deu certo, este caminho é inválido
    return null;
  }

  const finalResult = search(target);

  // Retorna o array se encontrou a palavra inteira, ou um aviso se for impossível
  return finalResult ? finalResult : [];
}

console.log(getPeriodicSpelling("carbon"));
// return: [ 'Ca', 'Rb', 'O', 'N' ]
