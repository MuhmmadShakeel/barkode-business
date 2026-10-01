/** Set these to the two published Cal.com event-type URLs. */
function calEventUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && (url.hostname === "cal.com" || url.hostname.endsWith(".cal.com"))
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

export const SCHEDULING = {
  discovery: calEventUrl(process.env.CAL_COM_30_MIN_URL),
  consultation: calEventUrl(process.env.CAL_COM_60_MIN_URL),
} as const;
