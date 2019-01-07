const TOKEN_NAME = 'CD_SESSION_TOKEN'

export interface ISessionToken {
  get():string,
  set(token:string): void,
  remove(): void,
}

export const SessionToken:ISessionToken = {
  get: () => sessionStorage.getItem(TOKEN_NAME),
  set: token => sessionStorage.setItem(TOKEN_NAME, token),
  remove: () => sessionStorage.removeItem(TOKEN_NAME),
}
