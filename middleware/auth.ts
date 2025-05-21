export default defineNuxtRouteMiddleware((to, from) => {
  const authCookie = useCookie("auth");

  if (to.path.startsWith("/admin") && !authCookie.value) {
    return navigateTo("/login");
  }
});
