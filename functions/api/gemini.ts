export const onRequestPost: PagesFunction<{ GEMINI_API_KEY?: string }> = async ({ env }) => {
if (!env.GEMINI_API_KEY) {
return new Response(
JSON.stringify({ error: "Gemini is not configured yet." }),
{ status: 503, headers: { "Content-Type": "application/json" } }
);
}


// Later: call Gemini API here using env.GEMINI_API_KEY


return new Response(JSON.stringify({ ok: true }), {
headers: { "Content-Type": "application/json" },
});
};