//Vant组件导入
import { Swipe, SwipeItem,Button,Popup  } from 'vant';
//放入数组
let plugins =[
    Swipe, SwipeItem,Button,Popup 
]
export default function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}