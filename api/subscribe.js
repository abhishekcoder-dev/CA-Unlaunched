export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email' });
    }

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're on the list!</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Inter',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

                    <!-- Header -->
                    <tr>
                        <td style="padding:0 0 32px 0;">
                            <table cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="background:#ffffff;border-radius:50%;width:48px;height:48px;text-align:center;vertical-align:middle;">
                                        <img src="https://codeallrounders.com/CA logo without bg.png" alt="CA" width="36" height="36" style="display:block;margin:6px auto;border-radius:50%;" />
                                    </td>
                                    <td style="padding-left:12px;color:#ffffff;font-size:15px;font-weight:600;vertical-align:middle;">
                                        Code Allrounders
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Card -->
                    <tr>
                        <td style="background:#111111;border:1px solid #222222;border-radius:16px;padding:48px 40px;">

                            <!-- Emoji -->
                            <p style="margin:0 0 24px 0;font-size:2.5rem;line-height:1;">🎉</p>

                            <!-- Heading -->
                            <h1 style="margin:0 0 16px 0;font-size:28px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">
                                You're officially on the list.
                            </h1>

                            <!-- Body -->
                            <p style="margin:0 0 12px 0;font-size:15px;color:#888888;line-height:1.7;">
                                Hey there 👋
                            </p>
                            <p style="margin:0 0 12px 0;font-size:15px;color:#888888;line-height:1.7;">
                                Thank you for signing up for early access to <strong style="color:#cccccc;">Code Allrounders</strong> — the smarter freelance marketplace built for people who mean business.
                            </p>
                            <p style="margin:0 0 32px 0;font-size:15px;color:#888888;line-height:1.7;">
                                We're working hard behind the scenes and getting very close. When we launch, you'll be the <strong style="color:#cccccc;">first to know</strong> — and the first to get in.
                            </p>

                            <!-- Divider -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                                <tr>
                                    <td style="border-top:1px solid #222222;"></td>
                                </tr>
                            </table>

                            <!-- What to expect -->
                            <p style="margin:0 0 16px 0;font-size:11px;font-weight:600;color:#444444;text-transform:uppercase;letter-spacing:1.5px;">What to expect</p>

                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="padding:12px 0;border-bottom:1px solid #1a1a1a;">
                                        <p style="margin:0;font-size:13px;font-weight:600;color:#cccccc;">🌐 For Clients</p>
                                        <p style="margin:4px 0 0 0;font-size:13px;color:#555555;">Access a curated network of vetted freelancers ready to deliver.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:12px 0;border-bottom:1px solid #1a1a1a;">
                                        <p style="margin:0;font-size:13px;font-weight:600;color:#cccccc;">💻 For Freelancers</p>
                                        <p style="margin:4px 0 0 0;font-size:13px;color:#555555;">Find quality projects and build your career on your own terms.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:12px 0;">
                                        <p style="margin:0;font-size:13px;font-weight:600;color:#cccccc;">🛡️ Secure & Trusted</p>
                                        <p style="margin:4px 0 0 0;font-size:13px;color:#555555;">Built-in contracts, verified profiles, and protected payments.</p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Divider -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="margin:32px 0;">
                                <tr>
                                    <td style="border-top:1px solid #222222;"></td>
                                </tr>
                            </table>

                            <p style="margin:0;font-size:14px;color:#555555;line-height:1.7;">
                                Stay tuned. Something big is coming. 🔥<br>
                                <strong style="color:#888888;">— The Code Allrounders Team</strong>
                            </p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding:28px 0 0 0;text-align:center;">
                            <p style="margin:0;font-size:12px;color:#333333;">
                                © 2026 Code Allrounders. All rights reserved.
                            </p>
                            <p style="margin:6px 0 0 0;font-size:12px;color:#2a2a2a;">
                                You received this because you signed up at codeallrounders.com
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Code Allrounders <hello@codeallrounders.com>',
                to: email,
                subject: "You're on the list! 🎉 Early access confirmed.",
                html
            })
        });

        if (!response.ok) {
            const err = await response.json();
            return res.status(500).json({ error: err.message || 'Failed to send email' });
        }

        return res.status(200).json({ success: true });

    } catch (err) {
        return res.status(500).json({ error: 'Server error' });
    }
}
