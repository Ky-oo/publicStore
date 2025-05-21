export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  if (!body.password) {
    return createError({
      statusCode: 400,
      statusMessage: "Missing password",
    });
  }

  if (body.password === config.password) {
    setCookie(event, "auth", "true");
    return {
      authenticated: true,
    };
  }

  return {
    authenticated: false,
  };
});
