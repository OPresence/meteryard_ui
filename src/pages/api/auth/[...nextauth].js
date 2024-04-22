import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: "393145496885428",
      clientSecret: "9ae4ccea9c02cd3a281358f2205ba534",
    }),
    GitHubProvider({
      clientId: "85946d9728d19d8a7316",
      clientSecret: "d646df75f834d7a965dcb58d6d6417cc82fe5f72",
    }),
    GoogleProvider({
      clientId:
        "483673057994-9d2ijm00d9dvli2llh2u398ji1l7o68q.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};
export default NextAuth(authOptions);
