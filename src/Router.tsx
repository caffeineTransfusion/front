import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
    </Routes>
  );
};
export default Router;
