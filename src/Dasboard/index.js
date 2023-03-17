import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as PATH from "../Constants/Path";

const linkDashBoard = [
  {
    route: PATH.ROUTE_PATH_SUBSCRIPTION,
    title: "Subcription",
    class: "subcription",
  },
  { route: PATH.ROUTE_PATH_REVENUE, title: "Revenue", class: "revenue" },
];
export default function Dasboard() {
  return (
    <DasboardContainer>
      <h1 className="title color-orange mb-5">Dasboard</h1>
      {linkDashBoard.map((_link, index) => (
        <Link to={_link.route} className={_link.class} key={index}>
          {_link.title}
        </Link>
      ))}
    </DasboardContainer>
  );
}

const DasboardContainer = styled.div`
  margin-bottom: 30px;
  a {
    color: gray;
    border: 1px solid #141414;
    margin-right: 20px;
    padding: 10px 20px 10px 20px;
    border-radius: 6px;
  }
  .subcription {
    background-color: var(--orange);
    color: white;
  }
`;
