export function authMiddleware (req: any, res: any, next: any){
    if(req.session?.user) { // se o usuário estiver logado
        return next(); //continua o request
    }
    return res.redirect('/usuario/login'); //senão volta para o login
}