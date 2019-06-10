/*
 * ガイドラインの表示処理をまとめた擬似的な名前空間 PrintPage の宣言
 */
var PrintPage = function() {};

PrintPage.templateRootPath = "/" + TemplateSettings.documentRootPath;

// IFRAMEの内容をコピー
PrintPage.copybody = function(dstId, srcId)
{
  var sobj = document.getElementById(srcId);
  var dobj = document.getElementById(dstId);
  if ((sobj == null) || (dobj == null)) return;
  var owin = sobj.contentWindow;
  if (owin == null) return;
  dobj.innerHTML = owin.document.body.innerHTML;
  owin.document.body.innerHTML = "";
  // IMGタグとAタグの参照先を修正する
  var regSrc = new RegExp("src=\"(\\.\\.\\/)+");
  var regHref = new RegExp("href=\"(\\.\\.\\/)+");
  var imgObjs = dobj.getElementsByTagName("IMG");
  if (imgObjs.length)
  {
    for (var n = 0; n < imgObjs.length; n++)
    {
      var imgObj = imgObjs[n];
      imgObj.outerHTML = imgObj.outerHTML.replace(regSrc, "src=\"");
      //if (imgObj.src.match(/\/Attachments\//)) imgObj.src = imgObj.src.replace(/\/Attachments\//, PrintPage.templateRootPath + "Attachments/");
    }
  }
  var anchorObjs = dobj.getElementsByTagName("A");
  if (anchorObjs.length)
  {
    for (var n = 0; n < anchorObjs.length; n++)
    {
      var anchorObj = anchorObjs[n];
      anchorObj.outerHTML = anchorObj.outerHTML.replace(regHref, "href=\"");
      //if (anchorObj.href.match(/^(\.\.\/)+/)) anchorObj.href = anchorObj.href.replace(/^(\.\.\/)+/, "");
      //if (anchorObj.href.match(/\/Attachments\//)) anchorObj.href = anchorObj.href.replace(/\/Attachments\//, PrintPage.templateRootPath +"Attachments/");
      //if (anchorObj.href.match(/\.\.\/Pages\//)) anchorObj.href = anchorObj.href.replace(/\.\.\/Pages\//, "Pages/");
/*
      // FlashMovieのリンクを書き換えるが、動画再生はできない
      if (anchorObj.href.match(/\/player\.html/)) anchorObj.href = anchorObj.href.replace(/\/player\.html/, PrintPage.templateRootPath + "player.html");
      // とりあえずviewPageのリンクも書き換えるが、viewPageは使えないので無意味になる
      if (anchorObj.href.match(/\/Heads\//)) anchorObj.href = anchorObj.href.replace(/\/Heads\//, PrintPage.templateRootPath + "Heads/");
      if (anchorObj.href.match(/\/Descs\//)) anchorObj.href = anchorObj.href.replace(/\/Descs\//, PrintPage.templateRootPath + "Descs/");
      if (anchorObj.href.match(/\/Items\//)) anchorObj.href = anchorObj.href.replace(/\/Items\//, PrintPage.templateRootPath + "Items/");
*/
    }
  }
  if (typeof(MathJax) == "object")
  {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
  }
}

// 見えないIFRAMEを挿入し、内容だけをコピーする
PrintPage.insertIFRAME = function(dwin, data, mode)
{
  if ((dwin == null) || (dwin.document == null)) return;
  if (data == null) return;
  var srcName = "iwin_" + data.getExpandLabel();
  var srcId = "ifrm_" + data.getExpandLabel();
  var dstId = "view_" + data.getExpandLabel();

//  alert("srcId=" + srcId + " dstId=" + dstId + " url=" + data.getURL());

  var url = data.getURL() + "?level=" + data.getQuery() + "&figure=" + data.getFigureNo() + "&table=" + data.getTableNo() + "&code=" + data.getCodeNo() + "&mode=" + mode + "&noindex=yes";

  var html = '<div id="' + dstId + '"></div>';
  html += '<iframe name="' + srcName + '" id="' + srcId + '" src="' + url + '" style="display: none;" onLoad="PrintPage.copybody(\'' + dstId + '\', \'' + srcId + '\');"></iframe>';
  return html;
}

// 印刷用ページを生成
PrintPage.createPrintPage = function(dwin, tocObj)
{
  if ((dwin == null) || (dwin.document == null)) return;
  if (tocObj == null) return;

  tocObj.processTreeData();

  // title.htmlの表示
  var html = "";
  if (tocObj.getWindowTitle() != "") {
    document.title += (" - " + tocObj.getWindowTitle());
  } else if (document.title == "") {
    document.title = tocObj.getTitle();
  }
  if (tocObj.isEnableInsertTitlePage()) {
    html += '<div class="body_content" id="view_title"></div>';
    html += '<iframe name="iwin_title" id="ifrm_title" src="' + tocObj.getTitleFile() + '?noIndex=yes" style="display: none;" onLoad="PrintPage.copybody(\'view_title\', \'ifrm_title\');"></iframe>';
  }

  var dataCount = tocObj.getDataCount();
  if (dataCount <= 0) return;

  // 単一カテゴリ指定（catrgory）のみ対応？
  var query = location.search;
  if (query.lastIndexOf("?") != -1) query = query.slice(query.lastIndexOf("?") + 1);

  var params = query.split("&");
  var category = "";
  var mode = "0";

  for (i = 0; i < params.length; i++)
  {
    var param = params[i];
    var ind = param.indexOf("=");
    if (ind < 0) continue;
    var key = param.substring(0, ind);
    key = decodeURIComponent(key);
    var data = param.slice(ind + 1);
    if (key.match(/^category$/i))
    {
      category = decodeURIComponent(data);
    }
    else if (key.match(/^mode$/i))
    {
      mode = decodeURIComponent(data);
    }
  }

  var nMode = parseInt(mode);
  if (isNaN(nMode)) nMode = 0;
  if ((nMode < 0) || (nMode > 2)) nMode = 0;

//  alert("category=" + category + " mode=" + nMode);

  // ツリーのデータを取得
  var prevURL = "";
  for (i = 0; i < dataCount; i++)
  {
    var dataObj = tocObj.getData(i);
    if (dataObj == null) continue;
    var dataCategory = dataObj.getCategory();
    if ((category == "*") || (category == "") || (category == dataCategory))
    {
      var currentURL = dataObj.getURL();
      if (currentURL == "") continue;
      // 2015/09/04 印刷表示には出力しないページのフラグ
      if (dataObj.disablePrintPage) continue;

      if (currentURL != prevURL) html += PrintPage.insertIFRAME(dwin, dataObj, nMode);
      prevURL = dataObj.getURL();
    }
  }
  $("body").html(html);
}

