import React from "react";
import styled from "styled-components";
import Select from "react-select";

const obtionShowItem = [
  { label: 10, value: 10 },
  { label: 15, value: 15 },
  { label: 20, value: 20 },
  { label: 25, value: 25 },
  { label: 30, value: 30 },
  { label: 35, value: 35 },
  { label: 40, value: 40 },
  { label: 45, value: 45 },
  { label: 50, value: 50 },
];

export default function Filter({ onChangeItem }) {
  return (
    <SelectContainer>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={obtionShowItem[0]}
        maxMenuHeight={200}
        placeholder="Vui lòng chọn số lượng phần tử trong 1 trang"
        menuPortalTarget={document.body}
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 5 }),
        }}
        name="select"
        options={obtionShowItem}
        onChange={onChangeItem}
      />
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  max-width: 300px;
`;
