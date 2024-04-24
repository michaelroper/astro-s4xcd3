export const prerender = false;

export async function GET(context) {
  return new Response("Hi, I'm an SSR API GET route.", {
    status: 200
  });
}

export async function POST(context) {
  return new Response("Hi, I'm an SSR API POST route.", {
    status: 200
  });
}
