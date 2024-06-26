export interface IBoothItem {
    boothName: string;
    host: string;
    likes: number;
    categori: string;
    boothnum: number;
    likable: boolean;
}

export interface IReadAllBoothResponse {
    count: number;
    boothDtoes: IBoothItem[];
}

export interface IReadBoothByIdResponse {
    id: number;
    boothName: string;
    host: string;
    likes: number;
    categori: string;
    boothnum: number;
    urls: string[];
    likable: boolean;
    boothDescription?: string;
    commentCount: number;
}

export interface IUpdateLike {
    likeNum: number;
    message?: string;
}
