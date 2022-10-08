import server from "..";
//获取歌单详情页的数据
export function getMusicItemList(data){
    return server({
        method: "GET",
        url: `/playlist/detail?id=${data}`
    })
}
//获取歌单所有歌曲
export function getItemList(data){
    return server({
        method: "GET",
        url: `/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}
//获取歌词
export function getMusicLyric(data){
    return server({
        method: "GET",
        url: `/lyric?id=${data}`
    })
}
