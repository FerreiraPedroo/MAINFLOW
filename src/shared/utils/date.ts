export type GetMonthWeeks = {
  startWeekDay: number;
  lastWeekDay: number;
}[];

/**
 * Obter todas as semanas com o primeiro e ultimo dia da semana.
 * @param year
 * @param month
 * @returns
 */
export function getMonthWeeks(year: number, month: number): GetMonthWeeks {
  // MÊS SELECIONADO.
  const monthSelected = month;

  // PRIMEIRO DIA DO MÊS.
  const firstMonthDay = new Date(year, monthSelected, 1);

  // ULTIMO DIA DO MÊS.
  const lastMonthDay = new Date(year, monthSelected + 1, -0);

  // DIA DA SEMANA DO PRIMEIRO DIA DO MÊS.
  const weekDay = firstMonthDay.getDay();

  // ULTIMO DIA DA PRIMEIRA SEMANA.
  const lastWeekDay = 1 + (6 - weekDay);

  // TODAS AS SEMANAS
  const weeks: any[] = [{ startWeekDay: firstMonthDay.getDate(), lastWeekDay }];

  // LIMITE DE SEMANAS
  let limit = 6;

  // CALCULA TODAS AS SEMANAS
  while (limit > 0) {
    // PRIMEIRO DIA DA PROXIMA SEMANA
    const nextStartWeekDay = weeks.at(-1).lastWeekDay + 1;

    // ULTIMO DIA DA PROXIMA SEMANA
    let nextLastWeekDay = nextStartWeekDay + 6;

    // SE O ULTIMO DIA DA SEMANA É O ULTIMO DIA DO MÊS
    // SETA O ULTIMO DIA DO MÊS E TERMINA O LOOP WHILE
    if (nextLastWeekDay >= lastMonthDay.getDate()) {
      nextLastWeekDay = lastMonthDay.getDate();
      limit = 0;
    }

    weeks.push({
      startWeekDay: nextStartWeekDay,
      lastWeekDay: nextLastWeekDay,
    });

    limit--;
  }

  return weeks;
}

/**
 * Obter a semana apartir do dia.
 * @param year
 * @param month
 * @param day
 * @returns
 */
export function getWeek(year: number, month: number, day: number): number {
  const weeks = getMonthWeeks(year, month);

  return weeks?.reduce((prev, cur, idx): number => {
    if (cur.startWeekDay <= day && cur.lastWeekDay >= day) {
      return idx;
    }
    return prev;
  }, 1);
}
