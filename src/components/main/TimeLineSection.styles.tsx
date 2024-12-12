// emotion
import styled from "@emotion/styled";
// constants
import { mediaQuery } from "@constants/mediaQuery";

export const TimeLine = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 12px;
    padding-bottom: 30px;
    :not(:last-child) {
        ::after {
            content: '';
            position: absolute;
            display: block;
            width: 2px;
            top: 2.8rem;
            left: 16px;
            bottom: 0px;
            background-color: #bebebe;
        }    
    }
`;

export const TimeLineIconBox = styled.div`
    position: relative;
    width: 36px;
    height: 36px;
`;

export const TimeLineIcon = styled.div<{
    color: string;
    bgColor: string;
}>`
    display: inline-flex;
    align-items: center;
    padding: 0.375rem;
    border-radius: 24px;
    color: ${({ color }) => color};
    background-color: ${({ bgColor }) => bgColor};
`;

export const TimeLineTitle = styled.span`
    font-size: 16.8px;
    letter-spacing: 0;
`;

export const TimeLineDate = styled.p`
    font-size: 14.8px;
    letter-spacing: 0;
    color: #4B5563;
    padding: 0px;
`;

export const TimeLineDetailList = styled.ul`
    width: 100%;
    margin-left: 1rem;
`;

export const TimeLineDetail = styled.li`
    padding: 10px 0px;
    ::marker {
        color: #d1d5db;
    }
`;

export const TimeLineDetailTitle = styled.p`
    color: #374151;
    font-size: 15.8px;
    padding: 0px;
`;

export const TimeLineDetailDate = styled.p`
    font-size: 13.8px;
    letter-spacing: 0;
    color: #4B5563;
    padding: 0px;
    ${mediaQuery.mobile} {
        order: -1;
    }
`;