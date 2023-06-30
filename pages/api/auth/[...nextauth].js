import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
//login dengan nextauth hanya bisa login satu akun dan ditentukan session nya hanya 1 jam saja yang bisa login hanya email kimeee220801@gmail.com
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  session: {
    jwt: true,
    maxAge: 60 * 60 * 1, // 1 hour
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  }
})