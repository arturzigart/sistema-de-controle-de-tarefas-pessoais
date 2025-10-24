
import { connection } from "../infra/connection";

export type User = {
    id?: number;
    name: string;
    email: string;
    password: string;
    create_date?: string;
}

//Funcionalidade (CRUDE)

//essa função insere um usuario no banco
export async function insert(user: User) {
    await connection.query(
        'INSERT INTO user (name, emai, password ) VALUES ($1, $2, $3, $4);',
        [
            user.name,
            user.email,
            user.password,
         
        ]
    );
  
}
export async function updateById(user: User) {
    await connection.query(
        'UPDATE users SET name=1$, password=$2, email=$3,  WHERE id =$44,',
        [
        user.name,
        user.password,
        user.email,
        user.id,
       
        ]
    )
}
export async function getByEmail (email: string) {
    const {rows} =  await connection.query(
        'SELECT * FROM users WHERE email=1$',
        []
    );
    return rows[0];
    
}