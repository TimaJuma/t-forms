import SecureLS from "secure-ls";

const ls = new SecureLS({
  encodingType: "des",
  encryptionSecret: `${process.env.REACT_APP_ENCRYPTION_SECRET}`,
});
export function getAuthHeader() {
  let token = null;
  try {
    token = ls.get(`${process.env.REACT_APP_AUTH_HEADER_KEY}`);
  } catch (error) {
    console.log({ error });
    logout();
  }

  if (!!token && token.length !== 0) {
    return { auth: false, headers: { Authorization: `Token ${token}` } };
  } else {
    return null;
  }
}

export function setToken(newToken: string, expireDate: Date = new Date()) {
  ls.set(`${process.env.REACT_APP_AUTH_HEADER_KEY}`, newToken);
  ls.set(`${process.env.REACT_APP_AUTH_TOKEN_EXPIRE_KEY}`, expireDate);
}

export function getToken() {
  return ls.get(`${process.env.REACT_APP_AUTH_HEADER_KEY}`);
}

export function setAuthHeader(
  newToken: string,
  expireDate = new Date(),
  role: string
) {
  ls.set(`${process.env.REACT_APP_AUTH_HEADER_KEY}`, newToken);
  ls.set(`${process.env.REACT_APP_AUTH_ROLE_KEY}`, role);
  ls.set(`${process.env.REACT_APP_AUTH_TOKEN_EXPIRE_KEY}`, expireDate);
}

export function removeAuth() {
  ls.remove(`${process.env.REACT_APP_AUTH_HEADER_KEY}`);
  ls.remove(`${process.env.REACT_APP_AUTH_TOKEN_EXPIRE_KEY}`);
  ls.remove(`${process.env.REACT_APP_AUTH_ROLE_KEY}`);
}

interface RoleTypes {
  role: string;
}

export function getRolePermissions(): RoleTypes | void {
  try {
    const role_permission = ls.get(`${process.env.REACT_APP_AUTH_ROLE_KEY}`);
    if (!role_permission) logout();
    return role_permission;
  } catch (error) {
    console.log(error);
    logout();
  }
}

export function getExpireDate() {
  return ls.get(`${process.env.REACT_APP_AUTH_TOKEN_EXPIRE_KEY}`);
}

export function hasRoleAccess(moduleName: string) {
  const role_permission = getRolePermissions();
  // return !!role_permission ? role_permission[moduleName] : false;
  return role_permission;
}

export function logout() {
  removeAuth();
  window.location.href = "/";
  return null;
}
