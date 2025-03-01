// //exercice 1
// function calculsum( a , b){
//     let somme = a + b
//     return somme
// }
// let a=3
// let b= 6
// console.log( "la somme des deux nombres est : ",calculsum(a,b))
//exercice 2
// function CalaculAverage( tab = [nbr1, nbr2 ,nbr3]){
//     let moy = (nbr1+nbr2+nbr3)/3
//     return moy
// }
// let nbr1=1
// let nbr2 =2
// let nbr3 =3
// console.log(CalaculAverage(tab = [nbr1,nbr2,nbr3]))
//exercice 3
// function converttoUppercase(str) {
//     return str
    
// }
// let chaine = "hello world"
// console.log(converttoUppercase(chaine).toUpperCase())
//exercice 
// function calculAireRectangle(L,l){
//     let aire = L*l
//     return aire 
// }
// let L= 8
// let l = 6
// console.log( "l'aire du rectangle est :" , calculAireRectangle(L,l))
//exercice 5 nbre pair 
let nbre = 9
function isEven(nbre){
    if( nbre%2 == 0){
        return true
    }
    else{
        console.log("ce nombre est impair")
        return false
    }
}
console.log(isEven(nbre))
//exercice 6
let elt = 6
function findElement( tab =[1,2,5,7,8] ,elt){
    if (tab.includes(elt)){
        return true
    }
    else {
        return false
    }
}
console.log(findElement(tab = [1,2,5,7,8] , elt))
//exercice 7
function fact(n){
    let facto= 1

    for ( let i=1 ; i<=n ;i++){
        facto = facto*i
    }
    return facto

}   
let n =6
console.log(fact(n))
