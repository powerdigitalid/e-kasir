import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const validEmail = process.env.GOOGLE_USER;
const devUser = process.env.DEV_USER; // Email yang diizinkan untuk login

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      // Memeriksa apakah email yang masuk sesuai dengan email yang diizinkan
      const email = user.profile?.email || user.profile?.emails?.[0]?.value;
      if (email === validEmail || email === devUser) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    },
    async redirect(url, baseUrl) {
      return Promise.resolve("/admin/dashboard");
    },
  },
  session: {
    jwt: true,
    maxAge: 60 * 60, // 1 jam
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
