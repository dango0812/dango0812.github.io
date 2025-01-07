// emotion
import styled from "@emotion/styled";
// constants
import { mediaQuery } from "@/constants/mediaQuery";


interface GridProps {
    gap?: number;
    rowGap?: number;
    columnGap?: number;
}

interface GridItemProps { 
    column: number;
}

export const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    ${({ gap, rowGap, columnGap }) =>
        gap === undefined ?
        `
            row-gap: ${rowGap || 0}px;
            column-gap: ${columnGap || 0}px;
        ` : `
            gap: ${gap || 0}px;
    `}
`;

export const GridItem = styled.div<GridItemProps>`
    ${mediaQuery.mobile} {
        grid-column: span 12;
    }
    ${mediaQuery.tablet} {
        grid-column: span 6;
    }
    ${mediaQuery.laptop} {
        grid-column: ${({ column }) => `span ${column}`};
    }
`;