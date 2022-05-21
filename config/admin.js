module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'SecretFallback'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'SaltFallback'),
  },
});
