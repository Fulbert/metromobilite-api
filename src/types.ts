export interface MAPIParams {
  API_END: string
}

export interface MAPIFeature {
  type: string
  properties: MAPIProperties
  geometry: MAPIGeometry
}

export interface MAPIGeometry {
  type: string
  coordinates: number[]
}

export interface MAPIProperties {
  NOM?: string
  RUE?: string
  LIBELLE?: string
  CODEPOSTAL?: number
  COMMUNE?: string
  TYPE?: string
  CODE?: string
  TOTAL?: number
  type?: string
  LaMetro?: boolean
  LeGresivausan?: boolean
  PaysVoironnais?: boolean
  id?: string
}

export interface MAPIURLParams {
  [key: string]: string
}

export interface MAPIAPIEnd {
  [key: string]: string
}
