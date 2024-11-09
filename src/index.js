// Defina as variáveis para o nome e XP do herói
let nome = "Artemis"; // Substitua "Artemis" pelo nome desejado
let xp = 7500; // Substitua 7500 pela quantidade de XP do herói

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para determinar o nível do herói com base no XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe a mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
