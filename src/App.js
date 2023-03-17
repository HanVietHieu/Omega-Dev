import { useState } from "react";
import { TYPE_MENU } from "./Constants/Type";
import SubMenu from "./SubMenu";
import Dasboard from "./Dasboard";
import PostsManagement from "./PostsManagement";
import Setting from "./Setting.js";

function App() {
  const [menuActive, setMenuActive] = useState(TYPE_MENU.Dashboard);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-3">
          <SubMenu menuActive={menuActive} setMenuActive={setMenuActive} />
        </div>
        <div className="col-9">{getDataActive(menuActive)}</div>
      </div>
    </div>
  );
}

const getDataActive = (menuActive) => {
  switch (menuActive) {
    case TYPE_MENU.Management:
      return <PostsManagement />;
    case TYPE_MENU.Settings:
      return <Setting />;
    default:
      return <Dasboard />;
  }
};

export default App;
