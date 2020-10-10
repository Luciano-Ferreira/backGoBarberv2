import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    const sendForgotPassworEmail = container.resolve(
      SendForgotPasswordEmailService,
    );

    await sendForgotPassworEmail.execute({
      email,
    });

    return res.status(204).json();
  }
}
