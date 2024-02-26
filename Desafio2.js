let vitorias = 100
let derrotas = 15

function ranking(vitorias,derrotas){
    let saldoVitorias = vitorias - derrotas;
    let msgFinal = "O herói tem saldo de "+ saldoVitorias + " esta no nível de ";
   
    if(saldoVitorias <= 10 ) {
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
}
let msg_retorno = ranking(vitorias,derrotas);
console.log(msg_retorno);
