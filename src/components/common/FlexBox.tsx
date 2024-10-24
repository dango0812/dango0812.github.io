// emotion
import styled from "@emotion/styled";

interface FlexBoxProps {
    alignItems?: "flex-start" | "flex-end" | "stretch";
    justifyContent?: "flex-start" | "flex-end" | "space-between";
    gap?: number;
}

export const RowFlex = styled.div<FlexBoxProps>`
    display: flex;
    flex-flow: row wrap;
    align-items: ${({ alignItems }) => alignItems || 'center'};
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    gap: ${({ gap }) => `${gap}px`};
`;

export const ColumnFlex = styled.div<FlexBoxProps>`
    display: flex;
    flex-flow: column wrap;
    align-items: ${({ alignItems }) => alignItems || 'center'};
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    gap: ${({ gap }) => `${gap}px`};
`;