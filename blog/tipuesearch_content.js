var tipuesearch = {"pages":[{"title":"About","url":"./pages/about/","text":"2016Fall 計算機程式課程網誌 本課程主要教導機械設計工程系大一學生下列內容: 如何利用 Github 管理電腦檔案. 如何利用 Python3 與 Brython 程式處理檔案資料. 如何利用 Brython 程式進行網際靜態與動態繪製. 課程倉儲: http://github.com/mdecourse/2016fallcp 課程投影片: http://mdecourse.github.io/2016fallcp 課程網誌: http://mdecourse.github.io/2016fallcp/blog","tags":"misc"},{"title":"W14 上課範例","url":"./w14-shang-ke-fan-li.html","text":"創造按鈕 window.onload=function(){ brython(1); } from browser import document from browser import alert def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) s40523120 from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 try: if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() except: c <= \"所輸入的整數:\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) compa 自取 from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) compa","tags":"Course"},{"title":"W13 Brython練習","url":"./w13-brythonlian-xi.html","text":"將 https://mde.tw/2016fallcp/course/Python3Programs.txt 整理成 brython window.onload=function(){ brython(1); } from browser import document as doc from browser import html container = doc['container'] mystring = \"\" num = input(\"請輸入重複執行次數:\") #for i in range(1, 11): for i in range(1, int(num)+1): mystring += str(i) + \"你重複那麼多次，想幹嘛? \" + html.BR() container <= mystring 溫度 from browser import document as doc from browser import html container = doc['temperature'] mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏 \" + str(cdegree) + \"度=華氏 \" + str(fdegree) + \"度\" container <= output_string","tags":"Course"},{"title":"W12 Brython 吉他和弦範例","url":"./w12-brython-ji-ta-he-xian-fan-li.html","text":"Brython 繪圖和弦 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖. 以下利用函式定義進行和弦底稿繪圖: window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx) mylist = [\"E\",\"A\",\"D\",\"G\",\"B\",\"E\"] num = 0 for s in mylist: #canvasText(100, 80, 20, \"A\", \"b\", \"\", \"black\", ctx) canvasText(100+num*w, 80, 20, s, \"\", \"\", \"black\", ctx) num = num + 1","tags":"Course"},{"title":"W10 Brython 繪圖範例","url":"./w10-brython-hui-tu-fan-li.html","text":"Brython 繪圖 繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 inc = 5 for i in range(100): ctx.moveTo(100+i*inc, 100) ctx.lineTo(100+i*inc, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 inc = 5 for i in range(100): ctx.moveTo(100+i*inc, 100) ctx.lineTo(100+i*inc, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath()","tags":"Course"}]};