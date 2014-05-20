## Nodejs 命令行智能歌曲匹配播放[Jing.fm](http://jing.fm)歌曲
[![NPM](https://nodei.co/npm/jingfm-cli.png)](https://nodei.co/npm/jingfm-cli/)

![jingfm-cli](https://f.cloud.github.com/assets/1183541/794455/f23b90be-ec9d-11e2-8af4-23ecd60478d6.png)


> [Jing.fm](http://jing.fm) 是一款开创性的音乐应用,它最大的特色就是首创地通过“描述”来找到自己喜欢的音乐。Jing.fm改变用户收听音乐的方式.例如你可以搜索 `吃饱了撑着`， `失恋了`, `我和小伙伴都惊呆了`，都是优秀的搜索条件。彻底解决不知道听啥的问题！

然后你又是一个 **极客** , 你偏偏想用命令行来解决听歌的问题。

但是你太懒了，你自己也不知道听什么歌。。


> “我可以根据我的心情或者音乐的种类来搜歌么？我很懒。。。”


当然可以，**打开你牛逼的命令行** ，输入：

```
$ ./jingfm play -u xvfeng -p xvfeng -k rock
```

又或者你使用npm安装

 ```
 npm install jingfm-cli -g
 ```

 执行如何命令即可播放：

 ```
 jingfm-cli play -u $username -p $password -k "keywords here"
 ```

**小提示：** 使用双引号支持多个汉字空格搜索

#### mplayer控制台

**因为操作是在命令行下,输入相应指令后需要按`Enter键`,例如暂停时,`空格键 + Enter回车`**

基本操作: (可以通过`mplayer --help`查看帮助)
```
p or SPACE       暂停 (press any key to continue)
q or ESC         停止 stop playing and quit program
* or /           调整音量increase or decrease PCM volume
```

#### 不知道怎么用？

试试这样:
 ```
 $ jingfm-cli --help
 ```

``` js
Usage: jingfm [options] [command]

Commands:

  play                   Try to play a song from Jing.fm

Options:

  -h, --help                 output usage information
  -V, --version              output the version number
  -u, --username <username>  Email
  -p, --password <password>  Password
  -k, --keywords <keywords>  Keywords
```

#### 还可以这样: Nodejs 进程参数

如果你比较喜欢使用node打开：

```
$ node jingfm.js xvfeng xvfeng "some rock music"
```

听歌去吧，不用谢！


## 依赖

* [Jing.fm](http://jing.fm) 帐号用于登陆
* mplayer mac下可使用`brew install mplayer`安装，其他平台下同理

## Liscense:

(WTFPL)
