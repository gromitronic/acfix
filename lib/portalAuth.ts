export function isPortalAuthorized(request: Request) {
  const configuredToken = process.env.ACFIX_PORTAL_TOKEN;
  const providedToken = request.headers.get("x-acfix-portal-token");

  if (!configuredToken && process.env.NODE_ENV !== "production") {
    return providedToken === "local-acfix";
  }

  return Boolean(configuredToken && providedToken && providedToken === configuredToken);
}
