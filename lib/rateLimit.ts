const rateLimitMap = new Map<string, number[]>();

const INTERVAL = 60 * 60 * 1000;
const MAX_REQUESTS = 3;

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < INTERVAL);

  if (recent.length >= MAX_REQUESTS) return { allowed: false, remaining: 0 };

  recent.push(now);
  rateLimitMap.set(ip, recent);

  return { allowed: true, remaining: MAX_REQUESTS - recent.length };
}
