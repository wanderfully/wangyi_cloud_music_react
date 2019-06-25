import { compile } from 'path-to-regexp'
import axios from 'axios'


type IPath = {
    path:string
}

type IApi = | string | {
        'path': string
    }

type Iapis = {
    banner: IApi
    musicList: IApi
    recommendSong: IApi
    songDetail: IApi
    playlist: IApi
    songUrl: IApi
    songUrlBackUp: IApi
    list: IApi
    songUrls: IApi
}
const prox_host = process.env.NODE_ENV === 'production' ? 'http://118.24.21.99:4001' : '/api'

const cloud_api: Iapis = {
    banner:'/banner',//轮播图
    musicList: '/personalized',//推荐歌单
    recommendSong:'/personalized/newsong',//推荐歌曲
    //歌曲详情
    playlist:{
        path:'/playlist/detail?id=:id'
    },
    //歌曲url
    songUrl: {
        path: '/music/url?id=:id'
    },
    //音乐 url
    songUrls: {
        path: '/song/url?id=:id'
    },
    //歌曲详情
    songDetail: {
        path: '/song/detail?ids=:ids'
    },
    // 歌曲 URL 备胎
    songUrlBackUp:{
        path: 'http://music.163.com/song/media/outer/url?id=:id.mp3'
    },
    // 排行榜
    list:{
        path:'/top/list?idx=:idx'
    }
}

//给url添加hostPath
const addHost = (url:IApi,hostPath:string) => {
    return hostPath + url;
}

export default cloud_api
// 根据api和参数来拼接url

const getURL = (api:IApi, params?:any) => {
    if(!params){
        return addHost(api,prox_host)
    }
    // 拼接参数
    const url = compile(`${(api as IPath).path}`)(params);
    return addHost(url,prox_host)
}

export const aPost = (api:IApi, params?:any) => {
    return axios.post(getURL(api, params),params).then((res:any) => {

    }).catch((error:any) => {
        
      })
}
export const aGet = (api:IApi, params?:any) => {
    return new Promise((resolve,reject) => {
        axios.get(getURL(api, params)).then((res:any) => {
            resolve(res.data)
        }).catch((error:any) => {
          reject(error)
        })
    }) 
}


