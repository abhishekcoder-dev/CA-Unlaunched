import https from 'https';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email' });
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're on the list!</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:'Inter',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:48px 20px;">
        <tr>
            <td align="center">
                <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

                    <!-- Logo Header -->
                    <tr>
                        <td align="center" style="padding-bottom:28px;">
                            <table cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="background:#ffffff;border-radius:50%;width:44px;height:44px;text-align:center;vertical-align:middle;border:1px solid #e4e4e7;">
                                        <img src="https://ca-unlaunched.vercel.app/CA logo without bg.png" alt="CA" width="30" height="30" style="display:block;margin:7px auto;" />
                                    </td>
                                    <td style="padding-left:10px;font-size:14px;font-weight:700;color:#18181b;vertical-align:middle;letter-spacing:-0.2px;">
                                        Code Allrounders
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Main Card -->
                    <tr>
                        <td style="background:#ffffff;border-radius:16px;border:1px solid #e4e4e7;overflow:hidden;">

                            <!-- Top accent bar -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td style="background:#18181b;height:4px;"></td>
                                </tr>
                            </table>

                            <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 40px 0 40px;">
                                <tr>
                                    <td>
                                        <!-- Check icon -->
                                        <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                                            <tr>
                                                <td style="background:#18181b;border-radius:50%;width:44px;height:44px;text-align:center;vertical-align:middle;">
                                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/checkmark--v1.png" width="20" height="20" style="display:block;margin:12px auto;" alt="check" />
                                                </td>
                                            </tr>
                                        </table>

                                        <h1 style="margin:0 0 12px 0;font-size:24px;font-weight:700;color:#18181b;letter-spacing:-0.5px;line-height:1.2;">
                                            You're officially on the list.
                                        </h1>
                                        <p style="margin:0 0 28px 0;font-size:15px;color:#71717a;line-height:1.75;">
                                            Thank you for signing up for early access to <strong style="color:#18181b;">Code Allrounders</strong> — the smarter freelance marketplace built for people who mean business. When we launch, you'll be the <strong style="color:#18181b;">first to know</strong> and the first to get in.
                                        </p>

                                        <!-- Divider -->
                                        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                                            <tr><td style="border-top:1px solid #f4f4f5;"></td></tr>
                                        </table>

                                        <!-- What to expect label -->
                                        <p style="margin:0 0 16px 0;font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:1.5px;">What to expect</p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Feature rows -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="padding:0 40px;">
                                <tr>
                                    <td style="padding:14px 0;border-bottom:1px solid #f4f4f5;">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="width:32px;vertical-align:top;padding-top:2px;">
                                                    <span style="display:inline-block;width:16px;height:16px;background:#18181b;border-radius:3px;text-align:center;line-height:16px;font-size:10px;color:#fff;font-weight:700;">C</span>
                                                </td>
                                                <td>
                                                    <p style="margin:0;font-size:13px;font-weight:600;color:#18181b;">For Clients</p>
                                                    <p style="margin:3px 0 0 0;font-size:13px;color:#71717a;">Access a curated network of vetted freelancers ready to deliver.</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 0;border-bottom:1px solid #f4f4f5;">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="width:32px;vertical-align:top;padding-top:2px;">
                                                    <span style="display:inline-block;width:16px;height:16px;background:#18181b;border-radius:3px;text-align:center;line-height:16px;font-size:10px;color:#fff;font-weight:700;">F</span>
                                                </td>
                                                <td>
                                                    <p style="margin:0;font-size:13px;font-weight:600;color:#18181b;">For Freelancers</p>
                                                    <p style="margin:3px 0 0 0;font-size:13px;color:#71717a;">Find quality projects and build your career on your own terms.</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:14px 0;">
                                        <table cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="width:32px;vertical-align:top;padding-top:2px;">
                                                    <span style="display:inline-block;width:16px;height:16px;background:#18181b;border-radius:3px;text-align:center;line-height:16px;font-size:10px;color:#fff;font-weight:700;">S</span>
                                                </td>
                                                <td>
                                                    <p style="margin:0;font-size:13px;font-weight:600;color:#18181b;">Secure & Trusted</p>
                                                    <p style="margin:3px 0 0 0;font-size:13px;color:#71717a;">Built-in contracts, verified profiles, and protected payments.</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Bottom sign-off -->
                            <table width="100%" cellpadding="0" cellspacing="0" style="padding:28px 40px 40px 40px;">
                                <tr>
                                    <td style="border-top:1px solid #f4f4f5;padding-top:28px;">
                                        <p style="margin:0;font-size:14px;color:#71717a;line-height:1.7;">
                                            Stay tuned — something big is coming.<br>
                                            <strong style="color:#18181b;">Code Allrounders</strong>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding:24px 0 0 0;text-align:center;">
                            <p style="margin:0;font-size:12px;color:#a1a1aa;">© 2026 Code Allrounders. All rights reserved.</p>
                            <p style="margin:6px 0 0 0;font-size:12px;color:#d4d4d8;">You received this because you signed up at codeallrounders.com</p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

    const payload = JSON.stringify({
        from: 'Code Allrounders <hello@codeallrounders.com>',
        to: email,
        subject: "You're on the list! Early access confirmed.",
        html
    });

    return new Promise((resolve) => {
        const options = {
            hostname: 'api.resend.com',
            path: '/emails',
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(payload)
            }
        };

        const request = https.request(options, (response) => {
            let data = '';
            response.on('data', chunk => data += chunk);
            response.on('end', () => {
                if (response.statusCode === 200 || response.statusCode === 201) {
                    res.status(200).json({ success: true });
                } else {
                    res.status(500).json({ error: data });
                }
                resolve();
            });
        });

        request.on('error', (err) => {
            res.status(500).json({ error: err.message });
            resolve();
        });

        request.write(payload);
        request.end();
    });
}
