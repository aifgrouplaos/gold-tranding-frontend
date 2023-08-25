export interface IMenusidebar{
    id:number,
    name:string,
    icon:any,
    type:'link'|'subMenu',
    link:string,
    sort:number,
    role:[],
    children:[]
}