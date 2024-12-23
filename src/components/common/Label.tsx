// emotion
import styled from "@emotion/styled";

interface LabelStyledProps {
    color: string;
    backgroundColor: string;
};

const LabelStylesMap: Record<string, { color: string, backgroundColor: string }> = {
    default: { color: "#475569", backgroundColor: "#E2E8F0" },
    dark: { color: "#FFFFFF", backgroundColor: "#171717" },
    red: { color: "#B91C1C", backgroundColor: "#FEE2E2" },
    blue: { color: "#0284C7", backgroundColor: "#BAE6FD" },
    green: { color: "#15803D", backgroundColor: "#DCFCE7" },
    yellow: { color: "#EA580C", backgroundColor: "#fde4c4" },
    indigo: { color: "#3730A3", backgroundColor: "#E0E7FF" },
    purple: { color: "#6B21A8", backgroundColor: "#F3E8FF" },
    pink: { color: "#BE185D", backgroundColor: "#FCE7F3" }
};

const LabelStyled = styled.span<LabelStyledProps>`
    display: flex;
    align-items: center;
    border-radius: var(--border-radius-md);
    line-height: 1;
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: 4px 6px;
    font-size: 12.8px;
`;

export default function Label({ label, color, ...props }: { label: string, color: string }) {
    const styles = LabelStylesMap[color] || LabelStylesMap.default; 

    return (
        <LabelStyled
            color={styles.color}
            backgroundColor={styles.backgroundColor}
            {...props}
        >
            {label}
        </LabelStyled>
    )
}