import { Route, Routes } from "react-router-dom";

import Day1 from "../pages/Day1";

import Day2 from "../pages/Day2";

import Day3 from "../pages/Day3";
import NoPage from "../pages/NoPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" index element={<Day1 />} />

      <Route path="day2" element={<Day2 />} />

      <Route path="day3" element={<Day3 />} />
      <Route path="day3/:pageNumber" element={<Day3 />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
