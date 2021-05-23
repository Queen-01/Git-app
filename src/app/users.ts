export class Users {
  constructor(
    public login: string,
    public avatar_url: string,
    public public_repos: number,
    public following: number,
    public followers: number,
    public created_On: Date
  ){};
}
