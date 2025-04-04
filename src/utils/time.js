export function getRelativeTime(date) {
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    const now = new Date();
    const then = new Date(date);
    const diff = (then - now) / 1000; // in seconds
  
    const divisions = [
      { amount: 60, name: "seconds" },
      { amount: 60, name: "minutes" },
      { amount: 24, name: "hours" },
      { amount: 7, name: "days" },
      { amount: 4.34524, name: "weeks" },
      { amount: 12, name: "months" },
      { amount: Number.POSITIVE_INFINITY, name: "years" },
    ];
  
    let duration = diff;
    for (let i = 0; i <= divisions.length; i++) {
      if (Math.abs(duration) < divisions[i].amount) {
        return rtf.format(Math.round(duration), divisions[i].name);
      }
      duration /= divisions[i].amount;
    }
  }
  