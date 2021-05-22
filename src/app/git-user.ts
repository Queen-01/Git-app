import { Url } from 'url';

export class GitUser {
  constructor(
    public following: number,
    public followers: number,
    public login: string,
    public avatar_url: string,

  ) {}
}
