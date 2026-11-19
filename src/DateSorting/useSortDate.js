import { useMemo, useState } from "react";

const useSortDate = (expenses) => {
  const [sortDate, setSortDate] = useState("newest");

  const sortedExpenses = useMemo(() => {
    return [...expenses].sort((a, b) => {
      const firstTime = new Date(a.date).getTime();
      const secondTime = new Date(b.date).getTime();

      return sortDate === "newest"
        ? secondTime - firstTime
        : firstTime - secondTime;
    });
  }, [expenses, sortDate]);

  return { sortedExpenses, sortDate, setSortDate };
};
export default useSortDate;
