## Play music from your awesome command line

So you are a **geek** , and you just want to start listening music with your lovely command line.

But you do not know what to listen, since you are a such lazy guy.


> "Can I just type in my mood(happy) or class(jazz) name of the music, and I want the code to do the rest thing?"


Sure, try this: `$ ./jingfm play -u xvfeng -p xvfeng -k rock`

**Hint:** use double quotes to include the keywords `"蚂蚁"`

``` js
trying to login to Jing.fm ...
success logged in to Jing.fm ...
trying to get play list...
trying to get song url...
trying to open it in the browser
enjoy the song!
```

#### Don't know how to use it?

Try `$ ./jingfm --help`

``` js
Usage: jingfm [options] [command]

Commands:

play [options]         Try to play a song from Jing.fm

Options:

-h, --help     output usage information
-V, --version  output the version number
```

Ok, that's it. You are welcome!

**Sorry, `npm install` is also needed. Orz.**

## Requirements

* A [Jing.fm](http://jing.fm) account to login
* Mac to open a browser in command line (I promise to improve this soon)

## Liscense:

(WTFPL)
