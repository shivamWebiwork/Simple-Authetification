export interface IUser {
  firstname: string;
  lastname:string;
  email: string;
  password: string
}

export interface ILogin {  
  token?: string;
  refreshToken? : string;
}

  