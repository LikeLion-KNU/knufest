import React from "react";

import BoothInfo from "@/components/display/BoothInfo";
import { Comment } from "@/components/display/Comment";
import { CommentList } from "@/components/display/CommentInfo.styled";
import { CommentContainer } from "@/components/display/CommentInfo.styled";
import { Title } from "@/components/display/CommentInfo.styled";
import { Loader } from "@/components/feedback/Loader";
import { Paragraph } from "@/components/typography/Paragraph";
import { Text } from "@/components/typography/Text";

import { DetailPageWrapper, SubBtn, ContentContainer, SendImg, BottomBox } from "@/pages/BoothDetailPage.styled";

import { useBoothDetail } from "@/services/booth/booth.hooks";
import { useComment } from "@/services/comment/comment.hooks";

import sendImg from "@/assets/send.png";

import { parseCreatedDate } from "@/utils/parseCreatedDate";

export default function BoothDetailPage() {
    const { isPending, boothDetail } = useBoothDetail();
    const {
        isPending: isCommentFetchPending,
        comments,
        commentInputRef,
        handleCommentSubmit,
        handleCommentDelete,
    } = useComment();

    return (
        <DetailPageWrapper>
            {isPending ? <Loader /> : boothDetail && <BoothInfo boothDetail={boothDetail} />}

            <Paragraph size="m" weight="normal">
                {boothDetail?.boothDescription}
            </Paragraph>

            <Text size="20px" weight="bold">
                <Title>
                    댓글
                    <Text size="m" weight="bold" variant="#3F3A6C">
                        {0}
                    </Text>
                </Title>
            </Text>

            {isCommentFetchPending ? (
                <Loader />
            ) : (
                <CommentList>
                    {comments &&
                        comments.map((comment, index) => (
                            <div key={index}>
                                <CommentContainer>
                                    <Comment
                                        name={comment.name}
                                        created={parseCreatedDate(comment.created)}
                                        comment={comment.comment}
                                        deleteable={comment.deleteable}
                                        handleCommentDelete={() => {
                                            handleCommentDelete(comment.id as number);
                                        }}
                                    />
                                </CommentContainer>
                                <hr style={{ marginTop: "15px" }} />
                            </div>
                        ))}
                </CommentList>
            )}

            <BottomBox>
                <ContentContainer
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();

                        if (!commentInputRef.current) return;
                        if (commentInputRef.current.value === "") return;

                        console.log(commentInputRef.current.value);
                        handleCommentSubmit(commentInputRef.current.value);
                        commentInputRef.current.value = "";
                    }}
                >
                    <input ref={commentInputRef} placeholder="댓글을 입력해주세요." />
                    <SubBtn type="submit">
                        <SendImg src={sendImg} />
                    </SubBtn>
                </ContentContainer>
            </BottomBox>
        </DetailPageWrapper>
    );
}
