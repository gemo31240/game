//era
export const ANCIENT = 'ancient'
export const MEDIEVAL = 'medieval'
export const MODERN = 'modern'
//type
export const CULTURE = 'culture'
export const MILITARY = 'military'
export const SCIENCE = 'science'
export const ECONOMY = 'economy'

export const WONDERS = [
  {
    era: ANCIENT,
    type: MILITARY,
    name: 'STONEHENGE',
    text: 'After you place a control '
+'token on a hill space, you may place a control token '
+'on 1 or more hill spaces '
+'adjacent to that space (which '
+'can trigger this effect again).',
    jName: 'ストーンヘンジ',
    jText: '丘陵に支配トークンを置いた後、そこに隣接する全ての丘陵に任意に支配トークン1つを置く(この効果は再帰的に効果が発動する)'
  },
  {
    era: ANCIENT,
    type: SCIENCE,
    name: 'HANGING GARDENS',
    text: 'At the start of your turn, you may place 1 control token on a space of terrain difﬁculty 4 or less that is adjacent to a friendly city.',
    jName: 'バビロン空中庭園',
    jText: 'あなたのターン開始時、友好都市に隣接する地形難易度4以下のスペースに支配トークンを1つ置くことができる'
  }
]
