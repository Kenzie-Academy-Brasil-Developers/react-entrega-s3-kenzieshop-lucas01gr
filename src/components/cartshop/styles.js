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
    color: #1f59b7;
  }
`;
export const DivProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const ContainerProductAndCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;


  #cart {
    background-color: #fff;
    border: 1px solid grey;
    height: 200px;
    width: 300px;
    button{
      background-color:#3F51B3 ;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-weight: 700;
      margin-top: 10px;
      margin-left: 30px;
      width: 80%;
      height: 40px;
    }
  }
  #total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 80px;
    margin-left: 15px;
    margin-right: 15px;
    font-weight: 200;
  }
  h3 {
    display: flex;
    margin-left: 50px;
    margin-top: 20px;
  }
  h4 {
    font-weight: 100;
  }
`;
