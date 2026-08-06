/**
 * CORE BACKEND LOGIC: DISTRIBUSI DELINEASI (FLOAT-TO-INTEGER)
 * Largest Remainder Method (Hare-Niemeyer Algorithm)
 * 
 * Membagikan target nasional (DJKP 50k, DJPKT 120k, DJPDS 200k = 370k)
 * ke seluruh 514 Kab/Kota menjadi bilangan bulat murni tanpa selisih.
 */

export function distributeUnits(kabKotaList, targets) {
  const delineasiKeys = ['DJKP', 'DJPKT', 'DJPDS'];
  const targetMap = {
    DJKP: targets.djkp,
    DJPKT: targets.djpkt,
    DJPDS: targets.djpds
  };

  const resultMap = new Map();

  delineasiKeys.forEach(delKey => {
    const targetForDel = targetMap[delKey] || 0;
    const itemsForDel = kabKotaList.filter(item => item.delineasi === delKey);
    const sumIndikasiAwal = itemsForDel.reduce((acc, curr) => acc + (curr.indikasiAwal || 0), 0);

    if (sumIndikasiAwal === 0 || itemsForDel.length === 0) {
      itemsForDel.forEach(item => {
        resultMap.set(item.id, {
          targetUnit: 0,
          floatAlloc: 0,
          remainder: 0,
          integerPart: 0
        });
      });
      return;
    }

    // Step 2 & 3: Calculate float allocation, integer part, and remainder
    const evaluated = itemsForDel.map(item => {
      const floatAlloc = (item.indikasiAwal / sumIndikasiAwal) * targetForDel;
      const integerPart = Math.floor(floatAlloc);
      const remainder = floatAlloc - integerPart;
      return {
        id: item.id,
        floatAlloc,
        integerPart,
        remainder,
        targetUnit: integerPart
      };
    });

    // Step 4: Calculate difference (Selisih Kekurangan)
    const sumInteger = evaluated.reduce((acc, curr) => acc + curr.integerPart, 0);
    const difference = targetForDel - sumInteger;

    // Step 5: Sort descending by remainder
    evaluated.sort((a, b) => b.remainder - a.remainder);

    // Step 6: Add +1 to top N items
    for (let i = 0; i < difference; i++) {
      if (evaluated[i]) {
        evaluated[i].targetUnit += 1;
      }
    }

    // Store in result map
    evaluated.forEach(res => {
      resultMap.set(res.id, res);
    });
  });

  // Attach allocated units to all kabKota items
  return kabKotaList.map(item => {
    const alloc = resultMap.get(item.id) || { targetUnit: 0, floatAlloc: 0, remainder: 0 };
    return {
      ...item,
      targetUnitFinal: alloc.targetUnit,
      floatAlloc: alloc.floatAlloc,
      remainder: alloc.remainder
    };
  });
}
