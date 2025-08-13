import { Test, TestingModule } from "@nestjs/testing";  
import { UserService } from "../users/users.service";
import { PrismaService } from "../prisma/prisma.service";
import { NotFoundException } from "@nestjs/common";

// criando uma simulação de Banco de Dados
const mockPrisma = {
    user: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn()
    }
}
// Testes para o UsersService
// Aqui estamos criando uma suite de testes para o UsersService, que é responsável por gerenciar usuários
// Usamos o Jest para criar mocks e verificar se as funções estão sendo chamadas corretamente
describe("UsersService", () => {
    let service: UserService;

// Antes de cada teste, criamos uma instância do UsersService com o PrismaService mockado

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {provide: PrismaService, useValue: mockPrisma}
            ],
        }).compile();
        service = module.get<UserService>(UserService);
    })
 // Testes individuais
// Aqui definimos os testes individuais para cada funcionalidade do UsersService
  it("deve criar um usuário", async () => {
    const dto = { name: "Jonas", email: "jonas@example.com", password: "123" };
    mockPrisma.user.create.mockResolvedValue(dto);

    const result = await service.create(dto as any);
    expect(result).toEqual(dto);
    expect(mockPrisma.user.create).toHaveBeenCalledWith({ data: dto });
  });
})
