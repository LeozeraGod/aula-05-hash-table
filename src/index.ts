/*/ Arrays, Listas e Tuplas

const tupla: [string, string, number, boolean][] = [
    ["Leonardo Souza", "leonardo@gmail.com", 28, true]

];

const tuplas: [string, string, number, boolean][] = [
    ["Tainara Souza", "tainara@gmail.com", 29, true]
]

// Nome, email, idade, ativo
const nome = tupla[1][0];

// Hash table - tabela de chave/valor

type Pessoa = {
    nome: string;
    email: string;
    idade: number;
    ativo: boolean;
    celular?: string;
};

const pessoas: Pessoa[] = [
    {
        nome: "Leonardo Souza",
        email: "leonardo@gmail.com",
        idade: 28,
        ativo: true
    },
    {
        nome: "Leonardo Souza",
        email: "leonardo@gmail.com",
        idade: 28,
        ativo: true
    }
];

for (const pessoa of pessoas) {
    console.log(pessoa["email"]);
}

// Criar uma lista de 10 produtos que contenha o seguinte layout:
// id do tipo number, nome do tipo texto, quantidade em estoque do tipo float,
// ativo do tipo boolean, data de criação do tipo texto,
// data da ultima atualização do tipo texto
*/
type produto = {
    id: number;
    nome: string;
    estoque: number;
    ativo: boolean;
    dtc: string;
    dta: string;
}

const sistema: produto[] = [
    {
        id:1,
        nome:"MacBook",
        estoque: 10,
        ativo: true,
        dtc: "20240101",
        dta: "20241118"
    },
    {
        id:2,
        nome:"Smart tv 55",
        estoque: 40,
        ativo: true,
        dtc: "20240205",
        dta: "20241118"
    },
    {
        id:3,
        nome:"Drone DJI Mini 3",
        estoque: 30,
        ativo: false,
        dtc: "202402058",
        dta: "20241118"
    },
    {
        id:4,
        nome:"Console PlayStation 5",
        estoque: 20,
        ativo: true,
        dtc: "20240215",
        dta: "20241118"
    },
    {
        id:5,
        nome:"Camera GoPro Hero 11",
        estoque: 15,
        ativo: true,
        dtc: "20240220",
        dta: "20241118"
    },
    {
        id:6,
        nome:"Fone de Ouvido",
        estoque: 20,
        ativo: false,
        dtc: "20241118",
        dta: "20241116"
    },
    {
        id:7,
        nome:"Notebook Dell",
        estoque: 8,
        ativo: true,
        dtc: "20240225",
        dta: "20241115"
    },
    {
        id:8,
        nome:"Amazon Echo",
        estoque: 18,
        ativo: true,
        dtc: "20240228",
        dta: "20241113"
    },
    {
        id:9,
        nome:"Carregador Solar",
        estoque: 5,
        ativo: false,
        dtc: "20240301",
        dta: "20241113"
    },
    {
        id:10,
        nome:"Monitor LG 34''",
        estoque: 35,
        ativo: true,
        dtc: "20240228",
        dta: "20241112"
    }


]

for (const sistemas of sistema){
    console.log(sistemas)
}





