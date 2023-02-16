const frases=[
    "«Sé el cambio que quieres ver en el mundo» —Mahatma Gandhi",
    "«No se trata de si van a derribarte, se trata de si vas a levantarte cuando lo hagan» —Vince Lombardi, entrenador de fúbol americano",
    "«Nadie puede hacerte sentir inferior sin tu consentimiento» —Eleanor Roosevelt",
    "«Qué maravilloso es que nadie tenga que esperar ni un segundo para empezar a mejorar el mundo» —Ana Frank",
    "«El pesimista ve dificultades en cada oportunidad. El optimista ve oportunidades en cada dificultad» —Winston Churchill",
    "«Muchos piensan en cambiar el mundo, pero casi nadie piensa en cambiarse a sí mismo» —Leon Tolstoi",
    "«Si estás trabajando en algo que te importa de verdad, nadie tiene que empujarte: tu visión te empuja» —Steve Jobs"
]
function obtenerFrase(){
    let indice=Math.floor(Math.random()*7)
    return frases[indice]
}
console.log(obtenerFrase());
console.log(obtenerFrase());

module.exports.obtenerFrase=obtenerFrase();