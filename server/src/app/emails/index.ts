import { Request, Response } from "express";
import catchAsync from "../../utils/catch-async";
import transporter from "./transporter";
import { StatusCodes } from "http-status-codes";
import contactNotificationTemplate from "./contact-notification-template";

export const sendContactEmail = catchAsync(async function (
  req: Request,
  res: Response
) {
  const sendMail = await transporter.sendMail({
    subject: `New Contact Form Submission by ${req.body.name}`,
    to: "nazmulofficial@outlook.com",
    replyTo: req.body.email,
    html: contactNotificationTemplate(req.body),
  });

  if (!sendMail.accepted.length) {
    res.status(StatusCodes.BAD_REQUEST).json({
      status: StatusCodes.BAD_REQUEST,
      success: false,
      message: "Failed to send Email",
      data: null,
    });
  }

  res.status(StatusCodes.OK).json({
    status: StatusCodes.OK,
    success: true,
    message: "Message send",
    data: req.body,
  });
});
