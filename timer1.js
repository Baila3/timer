for (let items of process.argv.slice(2)){
 if(items => items === - items || typeof(items) !== Number){
   break;
 }
 setTimeout(() => {
  process.stdout.write('.\n');
 }, items * 1000)
}





