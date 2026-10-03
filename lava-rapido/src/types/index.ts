export type TipoLavagem = 'Simples' | 'Completa' | 'Detalhada' | 'A seco'

export interface Agendamento {
  id: string
  cliente: string
  modelo: string
  placa: string
  tipo: TipoLavagem
}
