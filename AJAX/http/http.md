#http协议

##请求报文
'''
行  GET(POST) /s?ie=utf-8 HTTP/1.1
头  HOST: activewaylon.com
    Cookie: name=waylon
    Content-type: application/x-www-form-urlencoded
    User-Agent: Chrome 83
空行
体  username=admin&password=admin
'''

##响应报文
'''
行  HTTP/1.1 200 OK
头  Content-Type: text/html;charset=utf-8
    Content-Length: 2048
    Content-Encoding: gzip
空行
体  <html>
        <head>
        </head>
        <body>
            <h1>activeWaylon</h1>
        </body>
    </html>
'''