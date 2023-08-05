export default {
  meEndpoint: 'http://localhost:3333/auth/me',
  loginEndpoint: 'http://localhost:3333/auth/login',
  sessionEndpoint: 'http://localhost:3333/user/session',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}
