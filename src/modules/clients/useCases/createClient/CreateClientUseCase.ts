import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {

  async execute({ password, username }: ICreateClient) {
    // verifico a existencia de um usuário no banco
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
        },
      },
    });

    if (clientExists) throw new Error('Client Already Exists!');
    // caso não existe eu sigo na criação criptografando a senha dele
    const hashPassword = await hash(password, 10);
    // salvo o novo client no banco de dados e retorno no fim
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}