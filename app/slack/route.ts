export const dynamic = 'force-dynamic'

export function GET() {
  const url = process.env.SLACK_INVITE_URL
  if (!url) {
    return new Response('Slack invite is not configured.', { status: 503 })
  }
  return Response.redirect(url, 307)
}
