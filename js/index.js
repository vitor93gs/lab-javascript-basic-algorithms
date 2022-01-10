// Iteration 1: Names and Input
let hacker1 = 'Clodoaldo'
console.log('The drivers name is ', hacker1 )
let hacker2 = 'Bartolomeu'
console.log('The navigators name is ', hacker2)
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`nome do driver maior que o do navigator, ele tem ${hacker1.length} caracteres`)
}
else if(hacker1.length<hacker2.length){
  let num = hacker2.lenght
    console.log(`nome do navigator maior que o do driver, ele tem ${hacker2.length} caracteres`)
}
else{
  let num = hacker1.lenght
  console.log(`os dois tem o nome do mesmo tamanho, com ${hacker1.length} caracteres`)
}
// Iteration 3: Loops
let alfa = hacker1[0].toUpperCase()
for(let i=1;i<hacker1.length;i++)
{
  alfa = alfa + ` ` + hacker1[i].toUpperCase()
}
console.log(alfa)
let beta = hacker2[hacker2.length-1]
for(let i=hacker2.length-2;i>=0;i--)
{
  beta = beta + hacker2[i]
}
console.log(beta)
if(hacker1<hacker2){
    console.log(`o nome do driver vem antes`)
}
else if(hacker2<hacker1){
    console.log(`o nome do navigator vem antes`)
}
else{
    console.log(`os dois nomes sao iguais`)
}
// BONUUUUUS
let para =`The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? 1914 translation by H. Rackham But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"`
let totalDePalavras = 0
let totalEt=0
for(let i=0;i<=para.length;i++){
  if(para[i]===' '){
    totalDePalavras++
  }
  if(para[i]+para[i+1]===`et`){
    totalEt++
  }
}
console.log(totalDePalavras)
console.log(totalEt)
let phraseToCheck = `step on no pets`
let contrario = phraseToCheck[phraseToCheck.length-1]
for(let i =phraseToCheck.length-2;i>=0;i--){
  contrario= contrario + phraseToCheck[i]
}
if(contrario===phraseToCheck){
  console.log(`a variavel eh um palindrome`)
}
else{
  console.log(`a variavel eh uma variavel normal`)
}


