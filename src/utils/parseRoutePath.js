export function parseRoutePath(path){
  const routParameterRegex = /:([a-zA-Z]+)/g

  const params = path.replaceAll(routParameterRegex, "(?<$1>[a-z0-9-_]+)")

  const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

  return pathRegex;
}