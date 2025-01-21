// emotion
import styled from "@emotion/styled";

export const RootStyle = styled.section`
    width: 100%;
    padding: 100px 0px 40px 0px;
`;

export const CompanyTitle = styled.h2`
    font-size: var(--font-size-large);
    margin: 0px;
`;

export const CompanyWorkDate = styled.p`
    font-size: var(--font-size-small);
    padding: 0px;
    color: #475569;
`;

export const ProjectTitle = styled.span`
    display: list-item;
    list-style-type: disc;
    padding: 0px 0px 10px 0px;
    font-size: var(--font-size-large);
`;

export const TaskList = styled.ul`
    margin-left: 20px;
`;

export const Task = styled.li`
    list-style: circle;
    color: var(--grey);
    padding: 4px 0px;
`;

export const Typography = styled.p`
    font-size: var(--font-size-medium);
    padding: 0px;
`;