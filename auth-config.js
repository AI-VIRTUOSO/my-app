// Firebase AuthenticationのWeb APIキーを設定してください。
// このAPIキー自体は公開情報です。Firebase側でEmail/Password認証と承認済みドメインを設定してください。
window.APP_AUTH_CONFIG = {
  firebaseApiKey: "AIzaSyDKfc4yZ8xNmlUxxpiF2cX65IkARGQqRbA",

  // 空配列の場合、Firebase Authenticationに登録された全ユーザーを許可します。
  // 特定ユーザーだけに限定する場合は、メールアドレスを列挙してください。
  allowedEmails: [
    // "hm2000n1jp@gmail.com"
  ]
};
