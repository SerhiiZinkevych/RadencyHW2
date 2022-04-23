export interface INote {
  id: number;
  name: string;
  created: string;
  categoryId: number;
  content: string;
  isActive: boolean;
}

export interface ICategory {
  id: number;
  name: string;
  icon: string;
}

export interface StateType {
  notes: Array<INote>;
  categories: Array<ICategory>;
}
