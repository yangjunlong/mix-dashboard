:: fis compile script
::
:: @author  Yang,junlong at 2016-05-19 16:31:01 build.
:: @version $Id$

@echo off
::start cmd  /c fis release -wcr ../common -f ../common/fis-conf.js
::start cmd  /c fis release -cwL

set Flag=LISTENING
for /F "tokens=4" %%A IN ('netstat -ano 2^>^&1 ^| %WINDIR%\system32\find.exe /I "8080"') DO (
    
    if %%A EQU %Flag% (
        set Flag=1
    )
    
)

if 1 EQU %Flag% (
    ping localhost -n 1 > nul
    fis release -wcL
) else (
    echo start fis server ...
    fis server start

    ping localhost -n 1 > nul
    fis release -wcL
)

pause: 