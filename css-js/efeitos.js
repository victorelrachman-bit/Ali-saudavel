//Para a introdução

//texto na introdução
let texto1 = "A alimentação saudável não precisa ser cara, e isso é algo que muita gente ainda não entende. Pois, existe a ideia de que comer bem é apenas para quem tem muito dinheiro, e isso não é verdade. Com um pouco de organização e boas escolhas, é possível manter uma alimentação equilibrada sem gastar muito. Alimentar-se bem não significa comprar produtos caros ou seguir modismos, mas sim escolher alimentos simples, ricos em nutrientes e fáceis de encontrar no dia a dia. \n\nA alimentação saudável é essencial para o bom funcionamento do nosso corpo, pois é dela que obtemos os nutrientes necessários para viver. Comer bem no dia a dia traz vários benefícios, como a melhora da imunidade, do humor, da qualidade do sono e mais disposição. Além disso, ajuda no funcionamento do intestino e na manutenção de um peso saudável. Por isso, cuidar da alimentação é um hábito importante para garantir mais saúde e qualidade de vida.";
let i = 0;
let pi = document.getElementById("texto1");

//verifica se já rodou a animação de intro
if(!sessionStorage.getItem("rodou"))
{
    //escreve sozinho na tela
    let intervalo = setInterval(function(){
        if(i < texto1.length)
        {
            pi.textContent += texto1.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, 7); //escreve introdução

    sessionStorage.setItem("rodou", "true"); //avisa que rodou a intro
}else{
    pi.innerText = texto1; //coloca texto sem animação
}


