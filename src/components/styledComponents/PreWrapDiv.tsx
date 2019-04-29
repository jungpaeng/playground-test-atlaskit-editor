import styled from "styled-components";

const PreWrapDiv = styled.div`
  white-space: pre-wrap;

  &:empty:not(:focus)::before {
    content: attr(data-placeholder);
    font-size: 14px;
  }
`;

export default PreWrapDiv;
