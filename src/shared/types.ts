export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export interface  Pokemon {

}

export interface Login {
  email: string,
  password: string,
  
}


