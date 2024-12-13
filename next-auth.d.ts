declare module "next-auth" {
  interface Sesion {
    id: string;
  }

  interface JWT {
    id: string;
  }
}
