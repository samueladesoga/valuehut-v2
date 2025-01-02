import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { parseMultipartFormData } from './multipartParser';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const { fields, files } = await parseMultipartFormData(formData);

    const uploadedFile = files.file?.[0];
    const toEmail = fields.toEmail?.[0];
    const subject = fields.subject?.[0];
    const customerName = fields.customerName?.[0];
    const courseName = fields.courseName?.[0];

    if (
      !uploadedFile ||
      typeof toEmail !== 'string' ||
      typeof subject !== 'string' ||
      typeof customerName !== 'string' ||
      typeof courseName !== 'string'
    ) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'email-smtp.us-east-1.amazonaws.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const fileArrayBuffer = await uploadedFile.arrayBuffer();
    const fileBuffer = Buffer.from(fileArrayBuffer);

    const mailOptions = {
      from: '"ValueHut" <info@valuehut.co>',
      to: toEmail,
      bcc: 'info@valuehut.co',
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    color: #333333;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #f7f7f7;
                    border: 1px solid #dddddd;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .header {
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                .content {
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 20px;
                }
                .footer {
                    font-size: 14px;
                    text-align: center;
                    color: #999999;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    ValueHut Consulting Invoice for <b>${courseName}</b>
                </div>
                <div class="content">
                    Hello ${customerName},<br><br>

                    Thank you for requesting an invoice for the workshop. Please find attached an invoice for the class requested<br><br>

                    Should you have any questions or require further assistance including the Bank Details for your preferred currency, feel free to contact us.<br><br>

                    Thank you for your trust in ValueHut Consulting.

                    Regards, <br>
                    Temitope <br>
                    info@valuehut.co
                </div>
                <div class="footer">
                    © ValueHut Consulting - All rights reserved
                </div>
            </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: uploadedFile.name,
          content: fileBuffer,
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent: ' + info.response }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

