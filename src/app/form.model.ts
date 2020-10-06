export interface Form{
  name: string;
  image:string;
  desc:string;
  ingredient:{
    foodname:string;
    quanity:number;
  }[]
}
