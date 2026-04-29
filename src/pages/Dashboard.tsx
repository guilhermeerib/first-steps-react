import { useEffect, useState } from 'react'
import type { Student } from '../api/students'
import { getStudents } from '../api/students'
import type { Stats } from '../types/Stats'
import { getStats } from '../api/stats'

export function Dashboard() {
  const [students, setStudents] = useState<Student[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    Promise.all([getStudents(), getStats()])
      .then(([studentsRes, statsRes]) => {
        setStudents(studentsRes)
        setStats(statsRes)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Stats Grid */}
      {loading && <p>Carregando estatísticas...</p>}
      {error && <p>Erro: {error}</p>}

      {stats && (
        <div>
          <div>
            <p>Total de Alunos</p>
            <p>{stats.totalStudents}</p>
          </div>
          <div>
            <p>Alunos Ativos</p>
            <p>{stats.activeStudents}</p>
          </div>
          <div>
            <p>Novas Matrículas</p>
            <p>{stats.newRegistrations}</p>
          </div>
        </div>
      )}

      {/* Listagem de alunos */}
      <div>
        <h2 className="mb-2 text-lg font-semibold">Listagem de Alunos</h2>
        <ul className="list-inside list-disc">
          {loading && <li>Carregando...</li>}
          {!loading && students.length > 0
            ? students.map((student) => (
                <li key={student.id}>{student.name}</li>
              ))
            : !loading && <li>Nenhum aluno encontrado</li>}
        </ul>
      </div>
    </div>
  )
}
