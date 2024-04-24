export const prerender = false;

export async function GET(context) {
  return new Response("Hi, I'm an SSR API route.", {
    status: 200,
  });
}
