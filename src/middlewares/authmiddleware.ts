export function authMiddleware (req: any, res: any, next: any){
    if(req.session?.usuario) { // se o usuário estiver logado
        return next(); //continua o request
    }
    return res.redirect('/usuario/login'); //senão volta para o login
}