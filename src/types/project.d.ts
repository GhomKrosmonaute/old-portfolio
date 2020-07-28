
declare interface Project {
  type : ProjectType
  pro: boolean
  name : string
  description : string
  link : string
  used : string[]
  preview : string
}

declare enum ProjectType {
  Org = Color.Purple,
  Bot = Color.Pink,
  App = Color.Magenta,
  Lib = Color.Red,
  Game = Color.Orange,
  Site = Color.Yellow,
  API = Color.GreenApple
}