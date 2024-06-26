import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PageButton, PageSkipButton, PaginationContainer } from "./Pagination.styled";
import { pageActions } from "@/store/page.slice";
import { RootState } from "@/store/store";
import { Dispatch } from "@reduxjs/toolkit";

export const Pagination: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
    const { currentPage, page, perPage, maxPage } = useSelector((state: RootState) => state.page);

    const handlePageBtnClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            dispatch(pageActions.setPage(parseInt(e.currentTarget.innerHTML)));
        },
        [dispatch],
    );

    const handlePrevBtnClick = useCallback(() => {
        dispatch(pageActions.prevPage());
    }, [dispatch]);

    const handleNextBtnClick = useCallback(() => {
        dispatch(pageActions.nextPage());
    }, [dispatch]);

    return (
        <PaginationContainer>
            <PageSkipButton onClick={handlePrevBtnClick}>{"<"}</PageSkipButton>
            {Array.from({ length: perPage }, (_, k) => page + k).map((page) => {
                if (page <= maxPage) {
                    return (
                        <PageButton active={page === currentPage} onClick={handlePageBtnClick}>
                            {page}
                        </PageButton>
                    );
                } else {
                    return <></>;
                }
            })}
            <PageSkipButton onClick={handleNextBtnClick}>{">"}</PageSkipButton>
        </PaginationContainer>
    );
};
