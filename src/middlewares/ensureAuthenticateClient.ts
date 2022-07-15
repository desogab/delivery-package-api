import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) return response.status(401).json({ message: 'Token missing!' });

  // Bearer ${token}
  // [0] - Bearer
  // [1] - ${token}
  const [, token] = authHeader?.split(" ");

  try {
    // pega o sub para ter acesso ao id e enviar nos headers futuros
    const { sub } = verify(token, process.env.CLIENT_SECRET_TOKEN as string) as IPayload;

    request.id_client = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: 'Invalid Token!'
    });
  }

}