var agora = new Date()
var diasem = agora.getDay()
/*
0 - DOMINGO
1 - SEG
2 - TER
3 - QUA
4 - QUI
5 - SEX
6 - SAB
*/

switch(diasem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log('[erro] Dia invalido')
}