export interface Personagem {
    id: number,
    img: string,
    nome: string,
    idade: number,
    profissao: string,
    uniao: string,
    aparicao: {
        episodio: {
            nome: string,
            ano: number
        }
    },
    favorito: boolean
}