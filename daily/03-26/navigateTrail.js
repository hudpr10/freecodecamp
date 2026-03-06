function navigateTrail(map) {
  // 1. Converter para matriz de caracteres (mutável)
  let table = map.map(row => row.split(''));
  const moveSet = [];
  let found = true;

  // Rastrear a posição do "C"
  while (found) {
    let curX = -1, curY = -1;

    // Acha a posição atual do "C"
    for (let i = 0; i < table.length; i++) {
      let j = table[i].indexOf('C');
      if (j !== -1) { 
        curX = i; 
        curY = j; 
        break; 
      }
    }

    if (curX === -1) break; // C não encontrado ou chegou ao fim

    // Tenta mover (Prioridade: Direita, Baixo, Cima)
    if (tryMove(table, curX, curY, 0, 1, moveSet, "R")) continue;
    if (tryMove(table, curX, curY, 1, 0, moveSet, "D")) continue;
    if (tryMove(table, curX, curY, -1, 0, moveSet, "U")) continue;
    if (tryMove(table, curX, curY, 0, -1, moveSet, "L")) continue;

    break; // Se não conseguiu mover para lugar nenhum, para.
  }

  return moveSet.join("");
}

function tryMove(map, x, y, dx, dy, moveSet, label) {
  const newX = x + dx;
  const newY = y + dy;

  // VERIFICAÇÃO DE LIMITES
  if (newX >= 0 && newX < map.length && newY >= 0 && newY < map[0].length) {
    const target = map[newX][newY];
    
    if (target === "T" || target === "G") {
      map[x][y] = "-";     // "C" -> "-"
      map[newX][newY] = "C"; // Nova posição do C
      moveSet.push(label);
      return true;
    }
  }
  return false;
}

navigateTrail(["-----", "--TTG", "--T--", "--T--", "CTT--"]);
// Return: 'RRUUURR'
