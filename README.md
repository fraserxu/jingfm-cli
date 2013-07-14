## Nodejs 命令行只能歌曲匹配播放[Jing.fm](http://jing.fm)歌曲

![jingfm-cli](https://f.cloud.github.com/assets/1183541/794455/f23b90be-ec9d-11e2-8af4-23ecd60478d6.png)


> [Jing.fm](http://jing.fm) 是一款开创性的音乐应用,它最大的特色就是首创地通过“描述”来找到自己喜欢的音乐。Jing.fm改变用户收听音乐的方式.例如你可以搜索 `吃饱了撑着`， `失恋了`, `我和小伙伴都惊呆了`，都是优秀的搜索条件。彻底解决不知道听啥的问题！

然后你又是一个 **极客** , 你偏偏想用命令行来解决听歌的问题。

但是你太懒了，你自己也不知道听什么歌。。


> “我可以根据我的心情或者音乐的种类来搜歌么？我很懒。。。”


#### 方法一：命令行可执行文件

当然可以，打开你牛逼的命令行，输入： `$ ./jingfm play -u xvfeng -p xvfeng -k rock`

又或者你使用npm安装

 ```
 npm install jingfm-cli -g
 ```
 执行：
 ```
 jingfm-cli play -u $username -p $password -k "keywords here"
 ```

**小提示：** 使用双引号支持多个汉字空格搜索

### 不知道怎么用？

##### 试试这样 `$ jingfm-cli --help`

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

```$ node jingfm.js xvfeng xvfeng "some rock music"```

听歌去吧，不用谢！


## 依赖

* [Jing.fm](http://jing.fm) 帐号用于登陆
* mplayer mac下可使用`brew install mplayer`安装，其他平台下同理

## Liscense:

(WTFPL)
