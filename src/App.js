/** @jsx jsx */

import { css, jsx } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";

const childCss = css`
  width: 50px;
  height: 50px;
  background: blue;
`;

function ChildCore({ className }) {
  return <div className={className} css={childCss}></div>;
}

const Child = styled(ChildCore)(childCss);

const parentCss = css`
  width: 100px;
  height: 100px;
  background: red;

  :hover ${Child} {
    background: green;
  }
`;

export default function App() {
  return (
    <div css={parentCss}>
      <Child />
    </div>
  );
}
