import { Layout } from '../components/Layout'
import { Button } from '../components/Button'

export function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-primary mb-2 text-3xl font-bold">
            Bem-vindo ao Desafio!
          </h1>
          <p className="text-on-surface-variant text-lg">
            Este é o contêiner principal. Aqui é onde você construirá as telas
            do sistema utilizando os componentes base e o Tailwind CSS.
          </p>
        </div>

        <div className="border-outline-variant space-y-4 rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">
            Exemplos de Componentes
          </h2>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Botão Primário</Button>
            <Button variant="secondary">Botão Secundário</Button>
            <Button variant="danger">Botão de Risco</Button>
            <Button variant="ghost">Botão Fantasma</Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
