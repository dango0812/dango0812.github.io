// emotion
import styled from "@emotion/styled";

interface FlexBoxProps {
    alignItems?: "flex-start" | "flex-end" | "stretch";
    justifyContent?: "flex-start" | "flex-end" | "space-between";
    gap?: number;
}

export const RowFlex = styled.div<FlexBoxProps>`
    display: flex;
    flex-direction: row;
    align-items: ${({ alignItems }) => alignItems || 'center'};
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    gap: ${({ gap }) => `${gap || 0}px`};
`;

export const ColumnFlex = styled.div<FlexBoxProps>`
    display: flex;
    flex-direction: column;
    align-items: ${({ alignItems }) => alignItems || 'center'};
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    gap: ${({ gap }) => `${gap || 0}px`};
`;