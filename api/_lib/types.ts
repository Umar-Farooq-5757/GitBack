export interface GitHubRepoParams {
    owner: string;
    repo: string;
}

export interface CompareParams {
    owner: string;
    repo: string;
    base: string;
    head: string;
}

export interface ApiError {

    message: string;

    status: number;

}