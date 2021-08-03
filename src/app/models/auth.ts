export interface Perfil {  
    uid?: string;
    name: string;
    surname: string;
    permissao: string; //Administrador, Funcionario
    whatsapp: number;
    email: string;
    cpf: string;
    rg: number;
    emailVerified: boolean;
    cidade: string
    endereco: string;
    numero: string;
    cep:number;
}