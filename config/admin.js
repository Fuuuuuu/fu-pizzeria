module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3bd6cd128e23e6d6cb4f7d80e34fc330'),
  },
});
