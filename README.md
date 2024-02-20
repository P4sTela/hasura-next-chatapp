## 起動方法

```bash
docker compose up -d
cd chat-app
yarn
yarn dev
```

で、できるようにしたかったのですが、どうしてもDBのmigrationがうまくいかなかったので、手動でMessageという名前のテーブルを作成しその後に、`yarn dev`を実行してください。
