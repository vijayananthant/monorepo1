import styled from 'styled-components';
const inp = require("input12");
const Button = styled.button`
    background: red;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    padding: 9px 36px;
`;

export default Button;


export function showButton() {
    inp.showInput();
    console.log("showbutton12");
}