## Play music from your awesome command line

> [Jing.fm](http://jing.fm) 是一款开创性的音乐应用,它最大的特色就是首创地通过“描述”来找到自己喜欢的音乐。Jing.fm改变用户收听音乐的方式.例如你可以搜索 `吃饱了撑着`， `失恋了`, `我和小伙伴都惊呆了`，都是优秀的搜索条件。彻底解决不知道听啥的问题！

So you are a **geek** , and you just want to start listening music with your lovely command line.
然后你又是一个**极客**, 你偏偏想用命令行来解决听歌的问题。

But you do not know what to listen, since you are a such lazy guy.
但是你太懒了，你自己也不知道听什么歌。。

> "Can I just type in my mood(happy) or class(jazz) name of the music, and I want the code to do the rest thing?"
> “我可以根据我的心情或者音乐的种类来搜歌么？我很懒。。。”

Sure, try this: `$ ./jingfm play -u xvfeng -p xvfeng -k rock`
当然可以，打开你牛逼的命令行，输入： `$ ./jingfm play -u xvfeng -p xvfeng -k rock`

**小提示：** 使用双引号支持多个汉字空格搜索
**Hint:** use double quotes to include the keywords `"张楚"` or `"张楚 蚂蚁"`

``` js
trying to login to Jing.fm ...
success logged in to Jing.fm ...
trying to get play list...
trying to get song url...
trying to open it in the browser
enjoy the song!
```
#### 不知道怎么用？
#### Don't know how to use it?

试试这样 `$ ./jingfm --help`
Try `$ ./jingfm --help`

``` js
Usage: jingfm [options] [command]

Commands:

play [options]         Try to play a song from Jing.fm

Options:

-h, --help     output usage information
-V, --version  output the version number
```

听歌去吧，不用谢！
Ok, that's it. You are welcome!

对了，忘记强调使用时要加上 `npm install` Orz...
**Sorry, `npm install` is also needed. Orz.**

## 依赖
## Requirements

* [Jing.fm](http://jing.fm) 帐号用于登陆
* 暂时只支持在Mac下使用 `open` 命令开启浏览器，后面肯定会改。。。
* A [Jing.fm](http://jing.fm) account to login
* Mac to open a browser in command line (I promise to improve this soon)

## Liscense:

(WTFPL)
