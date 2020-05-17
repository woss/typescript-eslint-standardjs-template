export async function main (params: {
  v: string
  msg: string
  ts: Number
}): Promise<string> {
  const { v, msg, ts } = params
  return [v, msg, ts].join(' ')
}
