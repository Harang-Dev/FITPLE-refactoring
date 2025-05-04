import { NextRequest, NextResponse } from "next/server";
import { CreateUserUseCase } from "@/back/users/application/usecases/create-user";
import { SbUserRepository } from "@/back/users/infra/repositories/SbUserRepository";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userRepository = new SbUserRepository();
    const createUser = new CreateUserUseCase(userRepository);

    const user = await createUser.execute(body);

    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
