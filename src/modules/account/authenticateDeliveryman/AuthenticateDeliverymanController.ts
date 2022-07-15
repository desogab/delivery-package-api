import { Request, Response } from "express";
import { AuthenticateDelivemanUseCase } from "./AuthenticateDeliverymanUseCase";


export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliverymanUseCase = new AuthenticateDelivemanUseCase();

    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}