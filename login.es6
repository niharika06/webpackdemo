let login = (username, password)=> {
if(username!=='admin' || password!=='radical'){
console.log("incorrect login attempt");
}
else{
console.log("Successfully Logged in!!");}
};

login('admin', 'ttt'); 