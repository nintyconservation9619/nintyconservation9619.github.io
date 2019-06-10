/*
 * JavaScript 内で使用されている地域固有の文字列
 */
var LocaleString = function() {};

//
LocaleString.lcStrMessageNeedJQuery = "スクリプトの実行には jQuery が必要です。";
LocaleString.lcStrMessageNothingToc = "目次データファイル（" + TemplateSettings.templateTocFileName + "）の内容が正しくありません。";

// 
LocaleString.lcStrLabelModeAll  = "すべて";
LocaleString.lcStrLabelModeDesc = "解説書のみ";
LocaleString.lcStrLabelModeItem = "ガイドライン項目のみ";

// パッケージ選択
LocaleString.lcStrLabelExcludeByFramework = "{package} を使う開発者は、この項目を考慮する必要はありません。";
LocaleString.lcStrLabelExcludeByUnsupport = "{package} では、この機能は使えません。";
LocaleString.lcStrLabelExcludeByStandard = "{package} では、この項目を考慮する必要はありません。";

LocaleString.lcStrLabelExclude = {
    "F" : [LocaleString.lcStrLabelExcludeByFramework, false],
    "U" : [LocaleString.lcStrLabelExcludeByUnsupport, false],
    "S" : [LocaleString.lcStrLabelExcludeByStandard, false],
    "D" : ["この項目は将来的に削除される予定です。", false],
    "V" : ["", true]
};

// 印刷用ページ表示設定のタイトル
LocaleString.lcStrLabelPrintSetting = "印刷用ページ表示設定";
// 印刷用ページ表示設定のToolTip
LocaleString.lcStrLabelPrintSettingToolTip = "印刷する前に、印刷ダイアログのページ設定で背景色や背景画像を印刷対象に含めてください。";
// 印刷用ページの実行時の注意文
LocaleString.lcStrAlertGoPrintPage = "表示されるまでに時間がかかることがあります。";
// 印刷用ページのセレクタのデフォルト
LocaleString.lcStrLabelSelectChapter = "-- 選択した箇所を1ページで表示します --";
// 印刷用ページのセレクタの全ページ出力
LocaleString.lcStrLabelSelectAll     = "（すべて）";

// 図表番号のプレフィックス
LocaleString.lcStrLabelFigure = "図 ";
LocaleString.lcStrLabelTable = "表 ";
LocaleString.lcStrLabelCode = "コード ";

// 目次の自動生成で先頭に作成されるリンク
LocaleString.lcStrLabelAcTopLevel = "（ページの先頭）";

// 検索ページ
LocaleString.lcStrMessageSearching = "検索中です。しばらくお待ちください...";
LocaleString.lcStrLabelSearchResult = "検索結果： %r% 件";
LocaleString.lcStrLabelSearchView = "（%s% - %e% 件目を表示中）";
LocaleString.lcStrLabelSearchPrev = "前の%c%件を表示";
LocaleString.lcStrLabelSearchNext = "次の%c%件を表示";

// 検索ボタン
LocaleString.lcStrLabelStartSearch = "検索";

// ガイドライン項目の項目名
LocaleString.lcStrLabelDefinition = "定義内容";
LocaleString.lcStrLabelTestMethod = "テスト方法";
LocaleString.lcStrLabelCriterion = "合格基準";
LocaleString.lcStrLabelTestObject = "対象";
LocaleString.lcStrLabelExclusion = "除外ケース";
LocaleString.lcStrLabelRemarks = "備考";

LocaleString.lcStrOpenDescendants = "Ctrlキーを押しながらクリックですべて開くことができます";
LocaleString.lcStrOpenViewer = "クリックで拡大表示できます";
LocaleString.lcStrLinkJump = "クリックでリンク先を開きます";

LocaleString.lcStrTopPageName = "表紙";


// Chrome向け確認メッセージ
LocaleString.lcStrAlertPrintPageByChrome = "Google ChromeでローカルにあるHTMLファイルを開いている場合、印刷用ページが正しく表示されない可能性があります。";
LocaleString.lcStrConfirmDownloadByChrome = "Google ChromeでローカルにあるHTMLファイルを開いている場合、ダウンロードが行われない可能性があります。\nそれでもダウンロードを行いますか？";

// 関連リンク
LocaleString.lcStrRelatedLinks = "関連リンク";

// パーマリンク
LocaleString.lcStrPermalink = "この見出しへのリンク";

// ガイドライン用
LocaleString.lcStrTitlePicker = "クリックでタイトル文字列を選択状態にすることができます";

// すべて開く／すべて閉じる
LocaleString.lcStrTitleOpenAll = "すべて開く";
LocaleString.lcStrTitleCloseAll = "すべて閉じる";

