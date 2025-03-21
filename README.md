# 株式会社cultivate コーポレートサイト

## 概要

株式会社cultivateのコーポレートサイトです。再生可能エネルギー、英語教育、営農事業の3つの事業についての情報や会社概要、ブログなどを掲載しています。

## サイト構成

- **トップページ（index.html）**: 会社概要と各事業の紹介
- **再エネコンサルページ（renewable.html）**: 再生可能エネルギー事業の詳細
- **ブログページ（blog.html）**: 企業ブログ

## 技術スタック

- HTML5
- CSS3（モダンCSSプロパティ、Flexbox、Grid Layoutを活用）
- JavaScript（ES6+）
- 外部ライブラリ
  - GSAP（GreenSock Animation Platform）アニメーション用
  - ScrollTrigger（スクロールベースのアニメーション用）

## ローカルでの実行方法

このプロジェクトは静的なHTMLサイトです。以下の方法で簡単にローカル環境で実行できます：

1. リポジトリをクローン：
   ```
   git clone https://github.com/your-username/cultivate-website.git
   ```

2. Visual Studio Codeなどのエディタで開く場合は、Live Serverなどの拡張機能を使用することで簡単にプレビューできます。

3. あるいは、任意のWebサーバーでホスティングすることも可能です。

## デプロイ方法

### GitHub Pagesを使用する場合

1. リポジトリの「Settings」タブを開きます
2. 左側のメニューから「Pages」を選択します
3. 「Source」セクションで「main」ブランチを選択し、保存します

### その他のホスティングサービス

- Netlify、Vercel、Firebase Hostingなど、静的サイトホスティングサービスを利用できます
- サービスの指示に従ってデプロイしてください

## 開発ガイドライン

- CSSはスタイルシート（css/styles.css）に集約しています
- JavaScriptはjs/main.jsに集約しています
- 画像やメディアファイルは将来的にimagesディレクトリに配置する予定です

## 今後の開発予定

- レスポンシブデザインの最適化
- アクセシビリティの向上
- パフォーマンス最適化
- 実際の画像素材への差し替え
- お問い合わせフォームのバックエンド連携

## ライセンス

社内利用専用。無断での複製・転載・再配布は禁止されています。

## 連絡先

開発に関するお問い合わせは以下にお願いします：
dev-team@example.com
