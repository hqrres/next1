import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method === "POST") {
    try {
      const { message, email } = req.body;

      // Check if the required fields are present
      if (!message || !email) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Resend declaration with API key
      const resend = new Resend(process.env.RESEND_API_KEY);

      // Sending the email
      const { data, error } = await resend.emails.send({
        from: `Imam - Portfolio <hanski@tuta.io>`,
        to: "hanski@tuta.io", // You can replace this with a dynamic email for real-world usage
        subject: "Message from Portfolio",
        react: EmailTemplate({ email, message }), // Using your custom React component for the email template
      });

      if (error) {
        return res.status(400).json({ message: "Email sending failed", error });
      }

      return res.status(200).json({ message: "Email sent successfully", data });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    // If the request method is not POST, return 405 Method Not Allowed
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}



// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";
// import { EmailTemplate } from "@/components/EmailTemplate";

// export default async function POST(req: NextRequest) {
//   const body = await req.json();
//   // body of our request - to be sent from the Client-side in our form above
//   const { message, email } = body;

//   // Check if the required fields are present
//   if (!message || !email) {
//     return NextResponse.json(
//       { error: "Missing required fields" },
//       { status: 400 }
//     );
//   }

//   // resend declaration with API key as parameter
//   const resend = new Resend(process.env.RESEND_API_KEY);

//   try {
//     // resend function handler for executing email sending
//     // returning data and error state to indicate success and failure respecfully
//     const { data, error } = await resend.emails.send({
//       from: `Imam - Porfolio <hanski@tuta.io>`, //Title of our Email, here, our email will indicate Imam - Portfolio and the <info@eimaam.dev> will be the sending address. NB: `eimaam.dev` replace with your registered domain
//       to: "hanski@tuta.io", // email receiver, // in case where you are sending onboarding emails, this field will be dynamic, it will be the email of the User
//       subject: "Message from Portfolio",
//       react: EmailTemplate({ email, message}), //using our custom react component to render email content/body
//     });

//     if (error) {
//       return NextResponse.json(
//         { message: "Email sending failed", error },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json(
//       { message: "Email sent successfully", data },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { message: "Failed to send email", error },
//       { status: 500 }
//     );
//   }
// }