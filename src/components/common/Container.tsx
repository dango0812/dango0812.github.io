// emotion
import styled from "@emotion/styled";
// constants
import { mediaQuery } from "@constants/mediaQuery";

const Container = styled.main`
    width: 100%;
    height: 100%;
    max-width: var(--container-size);
    flex-grow: 1;
    margin: 0px auto;
    padding: 0px 20px;
    ${mediaQuery.laptop} {
        padding: 0px;
    }
`;

export default Container;