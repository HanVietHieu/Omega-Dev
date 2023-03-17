import styled from "styled-components";
import { TYPE_MENU } from "../Constants/Type";

const menus = [
  { id: TYPE_MENU.Dashboard, title: "Dashboard", icon: "fa fa-dashcube" },
  { id: TYPE_MENU.Management, title: "Management", icon: "fa fa-maxcdn" },
  { id: TYPE_MENU.Settings, title: "Settings", icon: "fa fa-cogs" },
];
export default function SubMenu({ menuActive, setMenuActive }) {
  return (
    <SubMenuContainer>
      {menus.map((_menu, index) => (
        <li
          key={index}
          onClick={() => setMenuActive(_menu.id)}
          className={`cursor-pointer ${
            _menu.id === menuActive ? "active" : "no-active"
          }`}
        >
          <i className={_menu.icon} aria-hidden />
          {_menu.title}
        </li>
      ))}
    </SubMenuContainer>
  );
}

const SubMenuContainer = styled.ul`
  line-height: 1.8;
  background: var(--gray);
  border-radius: 12px;
  margin: 0;
  padding: 0;
  li {
    &:not(:last-child) {
      border-bottom: 1px solid var(--orangeCard);
    }
    padding: 24px 0 24px 10px;
    margin: 0;
    font-size: 24px;
    line-height: 24px;
    color: white;
  }
  i {
    padding-right: 15px;
  }
  .no-active:hover {
    color: var(--yellow);
    transition: 0.3s ease-in-out;
  }
`;
