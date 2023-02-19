# Web 制作用テンプレート（Next.js - Micro CMS）

参考

https://blog.microcms.io/microcms-next-jamstack-blog/

## 新サイトの立ち上げ方

1. クローンする

```
git clone git@github.com:YNotLLC/website-template.git
```

2. GitHub にて、新リポジトリを作成

3. ミラープッシュする

```
git push --mirror git@github.com:YNotLLC/[new-project].git
```

4. 新リポジトリからクローンする

5. .env.example を、.env.local に変更する

6. Micro CMS から、サービスドメインと、API キーを取得（API キーの扱いは気を付ける）

7. .env.local に 3 で取得したデータを貼り付ける

8. .devcontainer/devcontainer.json を編集

```
"name": "website-template" ←プロジェクト名に変更
```

9. docker-compose.yml を編集

```
container_name: website-template  ←プロジェクト名に変更
```

10. vscode 左下の、><マークをクリック、Reopen in Container を選択

11. VSCode 上のターミナルでコマンド実行

```
npm i
```

```
npm run dev
```

12. ブラウザでアクセス

http://localhost:3000
