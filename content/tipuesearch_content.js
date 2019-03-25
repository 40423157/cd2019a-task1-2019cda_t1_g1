var tipuesearch = {"pages": [{'title': '簡介', 'text': '產品協同設計課程第一組 \n 部落格 \n', 'tags': '', 'url': '簡介.html'}, {'title': '組員', 'text': '40623101  王馨慧 \n 40623108 \xa0林郁涵 \n 40623116 \xa0楊子毅 \n 40623117 \xa0楊智傑 \n 40623119 \xa0歐宗韋 \n 40623122 \xa0蔡柄澤 \n 40623129 \xa0陳威誠 \n 40623140 \xa0韓希然 \n 40423157 李昀霖 \n 40623158 \n', 'tags': '', 'url': '組員.html'}, {'title': '課程內容', 'text': '使用可攜程式系統, 以及\xa0 CMSimfly \xa0 與 \xa0 portable Git \xa0 管理各學員與分組的動態與靜態網際內容管理系統, 同時利用 \xa0 Onshape \xa0 與 \xa0 V-rep \xa0 執行機電資整合產品開發, 當面臨各協同設計階段所遭遇問題時, 各學員可利用客製化程式加以解決. \n \n \n from\xa0 2019 Spring 協同產品設計實習 \n \n', 'tags': '', 'url': '課程內容.html'}, {'title': '建立可攜系統', 'text': '課程影片 \n \xa0 \n 操作影片 \n \n', 'tags': '', 'url': '建立可攜系統.html'}, {'title': 'ungit-建立', 'text': '1.進入網址 :  http://mde.tw/wcm2019/content/實習項目二.html  ，下載\xa0 nodejs_with_ungit.7z \xa0。 \n \n 2.將解壓縮完的整個\xa0 nodejs 資料夾放入可攜 data 資料夾中。 \n 3.以\xa0 SciTE 編輯器編輯 start_cadlab.bat。 \n \n *並且要在path那行增加一個路徑，如下圖 \n \n 4.在\xa0 SciTE 編輯器上輸入指令，指令如下 : \n ungit --launchBrowser=0 --launchCommand "C:\\PROGRA~2\\Google\\Chrome\\Application\\chrome.exe\xa0 %%U" \n 如下圖 \n 5.將上述指令存入 Y:\\kungit.bat 批次檔案中。 \n \n 6. 進入倉儲的資料夾後， 只要輸入 kungit 即可呼叫此一 ungit 指令執行。如下圖 \n \n', 'tags': '', 'url': 'ungit-建立.html'}, {'title': '更改帳號', 'text': '進入 \xa0home_cadlab 找到 .gitconfig 這個檔案 \n \n 以\xa0 SciTE 編輯器編輯 .gitconfig 更改裡面的 name 與 email 並儲存 \n \n \n', 'tags': '', 'url': '更改帳號.html'}, {'title': 'ungit上推問題與解決', 'text': 'ungit無法確認身分，導致無法推送 \n \n 以\xa0 SciTE 編輯器編輯 start_cadlab.bat 把最後的 home 更改成 home_cadlab ，因為帳號在 home_cadlab 這個資料夾裡面 \n \n 更改並儲存之後點擊 stop.bat 關閉，並重新打開，就可以正常上推資料了 \n \n', 'tags': '', 'url': 'ungit上推問題與解決.html'}, {'title': 'ungit上傳資料', 'text': '點擊上方create an empty commit 即可創立新的commit \n \n 輸入標題及內容即可上傳 \n \n commit完成後點擊白色的gh-pages再點擊push就上推完成 \n \n 若要刪除commit，點擊藍色圓圈，點擊uncommit即可 \n \n \n', 'tags': '', 'url': 'ungit上傳資料.html'}, {'title': 'SSH Public Key', 'text': '(一)關閉操作系統儲存 Github 帳號密碼設定 \n 1.使用指令「 git config --edit --system」， 帶出 vi 編輯器。 \n 2.編輯 git 指令所使用的系統設定(按鍵H,J,K,L對應控制左下上右)。 \n 3.按a進入編輯模式， 編輯模式最底下會顯示「-- INSERT -- 」。 \n \n 4.按BACKSPACE刪除最後一行如下圖。 \n \n 5.刪除完按ESC鍵離開編輯模式。 \n 6.輸入「:wq」存檔並關閉。 \n \n (二)建立 OpenSSH 格式的 Private 與 Public Keys \n 1.在 可攜系統的命令列視窗輸入「sh_yen」，執行 Git 的 shell。 \n 2. 使用「 ssh-keygen -t rsa -b 4096 -C "This is my key"」。 \n \n 3.會在y:\\home\\.ssh\\id_rsa與id_rsa.pub建立Private 與 Public 金鑰。 \n 4.將 id_rsa.pub 的內容轉貼到 Github 帳號 settings 中 SSH and GPG keys 項目內的 SSH Public Key 區。', 'tags': '', 'url': 'SSH Public Key.html'}, {'title': 'V-rep', 'text': '持續更新中 \n \n \n', 'tags': '', 'url': 'V-rep.html'}, {'title': '模擬影片', 'text': '40423157 \n \n', 'tags': '', 'url': '模擬影片.html'}, {'title': '個人操作影片', 'text': '40623119 \n \n 40623122 \n', 'tags': '', 'url': '個人操作影片.html'}, {'title': 'git 手冊', 'text': '幾乎每一種版本控制系統（Version Control System，以下簡稱 VCS）都支援某種形式的分支（branch）功能， 使用分支意味著你可以從開發主線上分離開來，然後在不影響主線的情況下繼續工作。 有人把 Git 的分支模型視為它的「殺手級功能」， 它有何特別之處呢？新建分支的操作幾乎可以在瞬間完成，並且一般來說切換不同分支也很快； 跟其它的 VCS 不一樣的地方是 Git 鼓勵在工作流程中頻繁地使用分支與合併（merge），即使一天之內進行許多次都沒問題。 \n git branch  :建立一個新的分支這會在目前提交上新建一個指標，它並不會切換到這個分支。 \n git checkout + 分支名稱 :切換到一個已經存在的分支。 \n *切換分支會修改工作目錄裡的檔案 當你在 Git 中切換分支時，工作目錄內的檔案將會被修改； 如果切換到舊分支，你的工作目錄會回復到看起來就像當初你最後一次在這個分支提交時的樣子。 如果 Git 無法很乾淨地切換過去，它就不會讓你切換過去。 \n git merge  :緊急修正分支進行合併。 \n git add . \n git commit -m "檔案名" \n git push \n mkdir 名稱 ：創建資料夾 \n github版本回推 \n 1.git\xa0 reflog \n 2.git reset\xa0 --hard 版本名稱(下圖) \n \n 3.git\xa0 push\xa0 -f\xa0', 'tags': '', 'url': 'git 手冊.html'}]};