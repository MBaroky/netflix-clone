// src/utils/formatTime.ts
export function formatTime(sec: number): string {
  if (isNaN(sec) || sec < 0) sec = 0;
  const date = new Date(sec * 1000);
  return date.toISOString().substr(11, 8);
}
