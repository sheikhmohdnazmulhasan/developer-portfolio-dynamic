interface IProps {
  name: string;
  email: string;
  message: string;
}

export default function contactNotificationTemplate(payload: IProps) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .container {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
        }
        h1 {
            color: #2c3e50;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #34495e;
        }
        .value {
            margin-top: 5px;
            padding: 10px;
            background-color: #fff;
            border: 1px solid #eee;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New Contact Form Submission</h1>
        <p>You have received a new message from your portfolio contact form.</p>
        
        <div class="field">
            <div class="label">Name:</div>
            <div class="value">${payload.name}</div>
        </div>
        
        <div class="field">
            <div class="label">Email:</div>
            <div class="value">${payload.email}</div>
        </div>
        
        <div class="field">
            <div class="label">Message:</div>
            <div class="value">${payload.message}</div>
        </div>
        
        <p>Respond to this inquiry at your earliest convenience.</p>
    </div>
</body>
</html>`;
}
