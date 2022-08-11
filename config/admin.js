module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a4b876b48f16416a6756f74fb45ebd52'),
  },
});
