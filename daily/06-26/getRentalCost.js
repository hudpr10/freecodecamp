/*
Rental Cost

Given a rental timestamp, a return timestamp, and a rental tier, return the total cost of the rental including any late fees.

  - Given timestamps are UTC ISO strings, for example: "2026-06-18T18:30:00Z".
  - The rental tier is the number of days before the rental is due back: 1, 3, or 7.
  - Rentals are due back by 12:00 PM UTC or earlier on the last day of the rental period. For example, a 1-day rental checked out at any time on March 15 is due back by 12:00 PM UTC on March 16.
  - Each day past the due date and time incurs a late fee.
*/

const pricing = {
  1: { base: 4.99, fee: 3.99 },
  3: { base: 3.99, fee: 2.99 },
  7: { base: 2.99, fee: 0.99 },
};

function getRentalCost(rented, returned, tier) {
  const totalDays = getChargedDays(rented, returned);

  let feeTax = 0;
  if (Number(tier) < totalDays) feeTax = totalDays - Number(tier);

  const price = pricing[tier].base + pricing[tier].fee * feeTax;
  return `$${price.toFixed(2)}`;
}

function getChargedDays(startDay, finalDay) {
  const d1 = new Date(startDay);
  const d2 = new Date(finalDay);

  const deadline = Date.UTC(
    d2.getUTCFullYear(),
    d2.getUTCMonth(),
    d2.getUTCDate(),
    12,
    0,
    0,
  );

  const utc1 = Date.UTC(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate());
  const utc2 = Date.UTC(d2.getUTCFullYear(), d2.getUTCMonth(), d2.getUTCDate());

  const msDay = 24 * 60 * 60 * 1000;
  let totalDays = Math.floor(Math.abs(utc2 - utc1) / msDay);

  if (d2.getTime() > deadline) totalDays++;

  return totalDays;
}

// --- TESTES DE CENÁRIOS ---

// Cenário 1: 12:00 em ponto (Limite exato -> NÃO cobra a mais)
// 18/06 a 19/06 às 12:00 -> Deve dar 1 dia
console.log(
  "Cenário 12:00:",
  getRentalCost("2026-06-18T08:00:00Z", "2026-06-19T12:00:00Z", 1),
);

// Cenário 2: 12:01 (Passou 1 minuto -> COBRA 1 dia a mais)
// 18/06 a 19/06 às 12:01 -> Deve dar 2 dias
console.log(
  "Cenário 12:01:",
  getRentalCost("2026-06-18T08:00:00Z", "2026-06-19T12:01:00Z", 1),
);

// Cenário 3: Seu teste de 1 ano às 14:00 (Passou do meio-dia -> cobra 366 dias)
console.log(
  "Cenário 1 ano:",
  getRentalCost("2026-06-18T08:00:00Z", "2027-06-18T14:00:00Z", 7),
);
