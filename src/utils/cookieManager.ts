interface CookieOptions {
  days?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
}

/**
 * @name cookieManager
 * @description Cookie manager service to handle cookie operations
 * @param {string} name - Cookie name to set in the browser
 * @param {string} value - Cookie value to set in the browser
 * @param {CookieOptions} options - Cookie options like days, path, domain, secure, sameSite
 * @returns {void} - No return
 * @example
 * cookieManager.set("name", "value", { days: 1, path: "/", domain: "example.com", secure: true, sameSite: "Strict" });
 * @example
 * cookieManager.get("name");
 * @example
 * cookieManager.delete("name");
 */

export const cookieManager = {
  set(name: string, value: string, options: CookieOptions = {}) {
    const { days, path, domain, secure, sameSite } = options;

    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      cookie += `; expires=${date.toUTCString()}`;
    }

    cookie += `; path=${path || "/"}`;
    if (domain) cookie += `; domain=${domain}`;
    if (secure) cookie += "; secure";
    if (sameSite) cookie += `; samesite=${sameSite}`;

    document.cookie = cookie;
  },

  get(name: string): string | null {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split("=");
      if (decodeURIComponent(cookieName) === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  },

  delete(name: string, options: CookieOptions = {}) {
    this.set(name, "", {
      ...options,
      days: -1,
      path: options.path || "/",
    });
  },
};
