import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    
    const emailAlredyUsed = this.usersRepository.findByEmail(email);

    console.log(1111, emailAlredyUsed)
    if(emailAlredyUsed)
      throw new Error("Email em uso")
    
    console.log('passndo quando esse é o resultado da busca', emailAlredyUsed)
    console.log("oq vou add", email, name)
      
    return this.usersRepository.create({name, email})
  }
}

export { CreateUserUseCase };
