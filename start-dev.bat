cd %~dp0
start C:\"Program Files"\ConEmu\ConEmu64.exe -cmdlist npm run dev -cur_console:fn:t:"Next dev" ^|^|^| npm run tsc -cur_console:s1TVn:t:"tsc --watch" ^|^|^| npm run storybook -cur_console:s1THn:t:"Storybook" ^|^|^| cmd -cur_console:s2THn
start http://localhost:3000
start http://localhost:9001
