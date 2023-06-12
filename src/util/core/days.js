/**
 * An enum for days of the week.
 * @enum {object}
 * @readonly
 */
const DAY = {
  values: {
    SUN: {
      id: 'SUN',
      ordinal: 0,
      label: 'Sunday',
      labelAbbr: 'Sun',
    },
    MON: {
      id: 'MON',
      ordinal: 1,
      label: 'Monday',
      labelAbbr: 'Mon',
    },
    TUE: {
      id: 'TUE',
      ordinal: 2,
      label: 'Tuesday',
      labelAbbr: 'Tue',
    },
    WED: {
      id: 'WED',
      ordinal: 3,
      label: 'Wednesday',
      labelAbbr: 'Wed',
    },
    THU: {
      id: 'THU',
      ordinal: 4,
      label: 'Thursday',
      labelAbbr: 'Thu',
    },
    FRI: {
      id: 'FRI',
      ordinal: 5,
      label: 'Friday',
      labelAbbr: 'Fri',
    },
    SAT: {
      id: 'SAT',
      ordinal: 6,
      label: 'Saturday',
      labelAbbr: 'Sat',
    },
  },

  order: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
};
DAY.of = ordinal => Object.values(DAY.values).find(d => d.ordinal === ordinal);
DAY.find = abbr => Object.values(DAY.values).find(d => d.labelAbbr === abbr);

export default DAY;
