if(me === undefined || me.username != "admin"){
    cancel("No authorizztion", 401);
}