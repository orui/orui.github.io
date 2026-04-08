export type Verdict = 'APPROVED' | 'REJECTED' | 'PENDING' | 'ERROR'

export interface MagiUnit {
  unit: 'MELCHIOR' | 'BALTHASAR' | 'CASPER'
  number: 1 | 2 | 3
  ai: 'Claude' | 'ChatGPT' | 'Gemini'
  color: string
  role: string
  deliberation: string
  verdict: Verdict
  loading: boolean
}

export interface ApiKeys {
  anthropic: string
  openai: string
  gemini: string
}
