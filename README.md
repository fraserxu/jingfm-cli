## Nodejs 命令行播放[Jing.fm](http://jing.fm)歌曲

![jingfm-cli](https://f.cloud.github.com/assets/1183541/749676/cdf5cc76-e4b2-11e2-839c-84a24d8c99f7.png)

> [Jing.fm](http://jing.fm) 是一款开创性的音乐应用,它最大的特色就是首创地通过“描述”来找到自己喜欢的音乐。Jing.fm改变用户收听音乐的方式.例如你可以搜索 `吃饱了撑着`， `失恋了`, `我和小伙伴都惊呆了`，都是优秀的搜索条件。彻底解决不知道听啥的问题！

然后你又是一个 **极客** , 你偏偏想用命令行来解决听歌的问题。

但是你太懒了，你自己也不知道听什么歌。。

> “我可以根据我的心情或者音乐的种类来搜歌么？我很懒。。。”

当然可以，打开你牛逼的命令行，输入： `$ ./jingfm play -u xvfeng -p xvfeng -k rock`

**小提示：** 使用双引号支持多个汉字空格搜索

``` js
尝试登录到 Jing.fm ...
成功登录到 Jing.fm ...
获取歌曲列表中 ...
尝试获取歌曲播放地址 ...
尝试打开浏览器...
享受音乐吧!
```
### 安装方法

``` bash
npm install jingfm-cli
```
#### 不知道怎么用？

试试这样 `$ jingfm-cli --help`

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

听歌去吧，不用谢！

对了，忘记强调使用时要加上 `npm install` Orz...

## 依赖

* [Jing.fm](http://jing.fm) 帐号用于登陆

## Liscense:

(WTFPL)
