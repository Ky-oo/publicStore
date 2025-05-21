export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.password) {
    return createError({
      statusCode: 400,
      statusMessage: "Missing password",
    });
  }

  if (body.password === "123soleil") {
    setCookie(event, "auth", "true");
    return {
      authenticated: true,
    };
  }

  return {
    authenticated: false,
  };
});
