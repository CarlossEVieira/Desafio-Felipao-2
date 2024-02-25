let vitorias = 100
let derrotas = 15

function ranking(vitorias,derrotas){
    let saldoVitorias = vitorias - derrotas;
    let msgFinal = "O herói tem saldo de"+ saldoVitorias + "esta no nível de";
}if(saldoVitorias <= 10 ) {
    return(msgFinal + "Ferro");
}else if(saldoVitorias >= 11 && saldoVitorias <= 20) {
    return(msgFinal + "Bronze");
}else if(saldoVitorias >= 21 && saldoVitorias <= 50) {
    return(msgFinal + "Prata");
}else if(saldoVitorias >= 51 && saldoVitorias <= 80) {
    return(msgFinal + "Ouro");
}else if(saldoVitorias >= 81 && saldoVitorias <= 90) {
    return(msgFinal + "Diamante");
}else if(saldoVitorias >= 91 && saldoVitorias <= 100) {
    return(msgFinal + "Lendário");
}else if(saldoVitorias >= 101) {
    return(msgFinal + "Imortal");
}
    
/*
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */