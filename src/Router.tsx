import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import { ReadRecipe, WriteRecipe } from "./page";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />

      <Route path="/writeRecipe" element={<WriteRecipe />} />
      <Route path="/readRecipe" element={<ReadRecipe />} />
    </Routes>
  );
};
export default Router;
