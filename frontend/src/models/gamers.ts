import { Card } from "./card";

export interface Player{
    id:string;
    name:string;
    //avatar:string;// 头像
    chips:number;//剩余筹码
    folded:boolean;// 是否弃牌
    cards:Card[];// 手中的牌
    bet:number;// 当前轮下注的筹码数量
}
