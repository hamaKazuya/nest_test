# ベースイメージを指定
FROM node:12-alpine3.10

# node.js の環境変数を定義する
# 本番環境では production
# ENV NODE_ENV=development
CMD ls
# 雛形を生成するのに必要なパッケージのインストール
## 下記が意味不明
# RUN npm install -g create-nuxt-app

RUN apk update && apk add \
    python\
    make\
    g++

# ディレクトリを移動する
WORKDIR /app

# 下記なくてもhelloworldいける。app.listenしてればいいっぽい
# EXPOSE 8080
