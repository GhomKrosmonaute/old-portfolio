
declare interface Skill {
  type : SkillType
  name : string
  icon : string
  color : string
}

declare enum SkillType {
  Language = Color.Purple,
  Database = Color.Pink,
  Framework = Color.Magenta,
  Library = Color.Red,
  Server = Color.Orange,
  Application = Color.Yellow
}