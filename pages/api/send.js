import SibApiV3Sdk from 'sib-api-v3-sdk';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set up Brevo (Sendinblue) client
    const client = SibApiV3Sdk.ApiClient.instance;
    const apiKey = client.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY; // Your Brevo API key from .env.local

    const transactionalEmailsApi = new SibApiV3Sdk.TransactionalEmailsApi();

    const emailData = {
      sender: { email, name },
      to: [{ email: 'haider.alee171@gmail.com', name: 'Haider Ali' }],
      subject: `New message from ${name}`,
      htmlContent: `<p>Message: ${message}</p> <p>Email: ${email}</p>`,
    };

    try {
      await transactionalEmailsApi.sendTransacEmail(emailData);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
