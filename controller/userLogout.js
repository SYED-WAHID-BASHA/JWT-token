const userLogout =async(req,res) =>{

    res.coolies('jwt', '',{ maxAge:1});
    res.redirect('/');
}