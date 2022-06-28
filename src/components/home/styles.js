import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  width: 80%;
  margin: auto;
  margin-bottom: 10px;
  height: 70px;
  box-shadow: 3px 7px 9px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 9px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 7px 9px -8px rgba(0, 0, 0, 0.75);
  background-color: #d3cce3;
  span {
    color: #1F59B7;
  }
`;
export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
