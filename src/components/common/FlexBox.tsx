// emotion
import styled from "@emotion/styled";

interface FlexBoxProps {
    alignItems?: "center" | "flex-end" | "stretch";
    justifyContent?: "center" | "flex-end" | "space-between";
    gap?: number;
}

export const RowFlex = styled.div<FlexBoxProps>`
    display: flex;
    flex-direction: row;
    align-items: ${({ alignItems }) => alignItems || "flex-start"};
    justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
    gap: ${({ gap }) => `${gap || 0}px`};
`;

export const ColumnFlex = styled.div<FlexBoxProps>`
    display: flex;
    flex-direction: column;
    align-items: ${({ alignItems }) => alignItems || "flex-start"};
    justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
    gap: ${({ gap }) => `${gap || 0}px`};
`;