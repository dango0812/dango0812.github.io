// emotion
import styled from "@emotion/styled";

interface InfoListProps {
    title: string;
    list: Array<{
        text: string;
        date?: string;
        link?: string;
    }>;
    direction?: "row" | "column";
    alignItems?: "flex-start" | "center" | "flex-end" | "stretch";
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around";
    gap?: number;
}

interface RootStyleProps {
    direction: string;
    alignItems: string;
    justifyContent: string;
    gap: number;
}

const RootStyle = styled.div<RootStyleProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    gap: ${({ gap }) => `${gap}px`};
`;

const List = styled.ul`
    margin-left: 20px;
`;

const ListItem = styled.li`
    font-size: var(--font-size-p);
    padding: 4px 0px;
`;

const Link = styled.a`
    padding: 2px;
    text-decoration: underline;
    ::after {
        display: inline-flex;
        content: "";
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' focusable='false' aria-hidden='true' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z'%3E%3C/path%3E%3C/svg%3E");
        width: 16px;
        height: 16px;
        background-color: currentColor;
        transform: translate(0, 4px);
        transition: transform 0.3s cubic-bezier(0.1, 0.4, 0.3, 1);
    }
`;

const InfoList = ({
    title,
    list,
    direction = "column",
    alignItems = "flex-start",
    justifyContent = "flex-start",
    gap = 0,
    
}: InfoListProps) => (
    <RootStyle
        direction={direction}
        alignItems={alignItems}
        justifyContent={justifyContent}
        gap={gap}
    >
        <h2>
            {title}
        </h2>

        <List>
            {list.map(({ text, date, link }) => (
                <ListItem
                    key={text}
                >
                    {link ? (
                        <Link
                            href={link}
                        >
                            {text} {date && `(${date})`}
                        </Link>
                    ) : (
                        <>
                            {text} {date && `(${date})`}
                        </>
                    )}
                </ListItem>
            ))}
        </List>
    </RootStyle>
);

export default InfoList;

