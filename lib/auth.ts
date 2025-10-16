import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Usuario hardcoded
        const adminEmail = 'admin@marbelladiscoclub.com';
        const adminPasswordHash = await bcrypt.hash('&C$l3+J);206', 10);

        if (credentials.email === adminEmail) {
          const isValid = await bcrypt.compare(credentials.password, adminPasswordHash);

          if (isValid) {
            return {
              id: '1',
              email: adminEmail,
              name: 'Admin Marbella'
            };
          }
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/m-login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET || 'marbella-secret-key-2025',
};
