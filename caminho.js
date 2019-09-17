function caminho(url){
	return url.replace('#','').split('/');
}
module.exports={
  caminho:caminho
}