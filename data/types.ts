type Data = typeof import('data')

export type Skills = Data['skills']
export type Experience = Data['experience']

export type Tech = Experience[number]['project']['technologies'][number]