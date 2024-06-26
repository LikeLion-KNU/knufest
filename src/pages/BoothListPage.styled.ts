import { motion } from "framer-motion";
import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    position: relative;
`;

export const VisibleList = styled(motion.ul)`
    /* padding: 40px; */
    width: 90%;
    list-style: none;
    margin-inline: 0px;
    padding-inline: 0px;
    margin-block: 0px;
`;

export const CommentHeader = styled.div`
    width: 90%;
    margin: 10px 0px;
    margin-bottom: 30px;
    padding: 10px 0px;
    padding-top: 30px;
    border-top: 2px solid #ddd;

    display: flex;
    justify-content: center;
`;

export const BoothSearchInput = styled.input`
    box-sizing: border-box;

    display: block;
    margin: 15px 0px;

    border-radius: 15px;
    border: 1px solid #9874ff;
    padding: 0px 10px;

    width: 90%;
    height: 50px;

    color: #9874ff;

    &::placeholder {
        color: #9874ff;
    }

    &:focus {
        outline: 1.5px solid #9874ff;
    }
`;
