type Data = typeof import('data')

export type Skills = Data['skills']
export type Education = Data['education']
export type Experience = Data['experience']

export type Job = Experience[number]
export type Tech = Job['project']['technologies'][number]