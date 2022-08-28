/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react/macro";

const childCss = css`
  width: 50px;
  height: 50px;
  background: blue;
`;

function Child({ className }) {
  return <div className={className} css={childCss}></div>;
}

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
