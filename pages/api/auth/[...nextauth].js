import NextAuth from "next-auth";
import { Providers } from "next-auth/providers/google";
import { Google } from "next-auth/providers/google";

const validateCredentials = async (username, password) => {
  // Implement your own logic to validate the credentials
  // For example, check if the username and password match a user in your database
  const validUsername = "kimeee220801@gmail.com";
  const validPassword = "password123";

  return username === validUsername && password === validPassword;
};

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Email and Password",
      credentials: {
        username: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { username, password } = credentials;

        if (username.endsWith("@gmail.com")) {
          // Only allow login with Google email
          const isValid = await validateCredentials(username, password);

          if (isValid) {
            return Promise.resolve({ email: username });
          } else {
            throw new Error("Invalid credentials");
          }
        } else {
          throw new Error("Invalid email domain");
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    jwt: true,
    maxAge: 60 * 60, // 1 hour
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    redirect: async (url, baseUrl) => {
      return Promise.resolve(baseUrl);
    },
  },
});
