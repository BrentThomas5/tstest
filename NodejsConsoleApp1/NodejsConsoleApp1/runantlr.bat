set ANTLR="D:\antlr-4.8-complete.jar"
set JAVA="C:\Program Files\AdoptOpenJDK\jdk-11.0.6.10-hotspot\bin\java.exe"
%JAVA% -cp %ANTLR% org.antlr.v4.Tool -Dlanguage=JavaScript "%1"
