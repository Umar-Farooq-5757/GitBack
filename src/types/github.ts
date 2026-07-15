export interface GitHubResponse {
  repository: {
    name: string;
    description: string;
    stargazerCount: number;
    forkCount: number;
    owner: {
      login: string;
    };
    primaryLanguage: {
      name: string;
      color: string;
    } | null;
  };
}

export interface GraphQLVariables {
  owner: string;
  name: string;
}
