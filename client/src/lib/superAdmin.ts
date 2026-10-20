/** Single super-admin account allowed into the operations console. */
export const SUPER_ADMIN_EMAIL = "cebrailkara@gmail.com";

export function isSuperAdminEmail(email: string | null | undefined): boolean {
  return (email || "").trim().toLowerCase() === SUPER_ADMIN_EMAIL;
}
