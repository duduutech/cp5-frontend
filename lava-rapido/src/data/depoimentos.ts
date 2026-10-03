export interface Depoimento {
  id: number
  cliente: string
  carro: string
  foto: string
  texto: string
}

export const depoimentos: Depoimento[] = [
  {
    id: 1,
    cliente: 'Mariana Alves',
    carro: 'Honda Civic 2019',
    foto: '/carros/car.jpeg',
    texto: 'Deixei o carro na hora do almoço e voltei para ele impecável. O interior ficou com cheiro de novo.',
  },
  {
    id: 2,
    cliente: 'Rafael Nogueira',
    carro: 'Jeep Renegade 2021',
    foto: '/carros/car2.jpeg',
    texto: 'Agendei pelo site, cheguei e já tinha meu tíquete esperando. Sem fila e sem enrolação.',
  },
  {
    id: 3,
    cliente: 'Camila Duarte',
    carro: 'Fiat Mobi 2022',
    foto: '/carros/car3.jpeg',
    texto: 'Fiz a lavagem detalhada antes de uma viagem longa. A pintura voltou a brilhar como no primeiro dia.',
  },
]
