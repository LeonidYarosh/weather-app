const TOKEN_NAME = 'CD_SESSION_TOKEN'

export const SessionToken = {
  get: () => sessionStorage.getItem(TOKEN_NAME),
  set: token => sessionStorage.setItem(TOKEN_NAME, token),
  remove: () => sessionStorage.removeItem(TOKEN_NAME),
}
