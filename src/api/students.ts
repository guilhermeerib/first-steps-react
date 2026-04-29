import { api } from '../libs/api'
import type { Student } from '../types/Student'

export const getStudents = () => api.get<Student[]>('/students')

export const getStudentById = (id: string) =>
  api.get<Student>(`/students/${id}`)

export const createStudent = (student: Omit<Student, 'id'>) =>
  api.post<Student>('/students', student)

export const updateStudent = (id: string, student: Partial<Student>) =>
  api.patch<Student>(`/students/${id}`, student)

export const deleteStudent = (id: string) => api.delete(`/students/${id}`)
