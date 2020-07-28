
declare interface Parcours {
  "type" : ParcoursType
  "name" : string
  "place" : string
  "description" : string
  "duration" : [string,string] | [string]
}

declare enum ParcoursType {
  Internship = Color.Purple,
  Training = Color.Pink,
  Schooling = Color.Magenta,
  Working = Color.Red,
  Sabbath = Color.Orange
}