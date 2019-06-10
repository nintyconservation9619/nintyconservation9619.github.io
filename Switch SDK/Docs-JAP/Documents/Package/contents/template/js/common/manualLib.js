var TemplateSettings = function(){};
TemplateSettings.javaScriptPath = "template/js/common/";
TemplateSettings.templateLibFileName = "manualLib.js";
TemplateSettings.templateTocFileName = "tocData.js";
TemplateSettings.templateTitleFileName = "title.html";
TemplateSettings.settingAttrId = "data-reassemble";
TemplateSettings.selectorTocFile = "script[src$=\"" + TemplateSettings.templateTocFileName + "\"]";
TemplateSettings.documentRootPath = "contents/";
TemplateSettings.selectorLibFile = "script[src$=\"" + TemplateSettings.templateLibFileName + "\"]";
TemplateSettings.divTreePaneId = "contents_tree";
TemplateSettings.styleTreePane = "treeitem_root";
TemplateSettings.openIconPath = "template/img/icon_folder_open.png";
TemplateSettings.closeIconPath = "template/img/icon_folder_close.png";
TemplateSettings.fileIconPath = "template/img/icon_file.png";
TemplateSettings.styleOpenTreeItemDiv = "treeitem_open";
TemplateSettings.styleCloseTreeItemDiv = "treeitem_close";
TemplateSettings.styleIconLineDiv = "listline";
TemplateSettings.styleNoIconLineDiv = "listline_file";
TemplateSettings.styleOpenTreeItemImg = "openfolder";
TemplateSettings.styleCloseTreeItemImg = "closefolder";
TemplateSettings.styleFileTreeItemImg = "file";
TemplateSettings.styleHeaderLineSpan = "header";
TemplateSettings.styleItemLineSpan = "item";
TemplateSettings.styleSeparatorLine = "separator";
TemplateSettings.foldedTreeItemAttrId = "data-folded";
TemplateSettings.globalindexContentWidth = 400;
TemplateSettings.globalindexToggleWidth = 15;
TemplateSettings.globalindexPanePadH = 40;
TemplateSettings.autoindexContentWidth = 250;
TemplateSettings.autoindexToggleWidth = 15;
TemplateSettings.autoindexFocusOffset = 15;
TemplateSettings.autoindexContentPadW = 0;
TemplateSettings.autoindexContentId = "autoindex_content";
TemplateSettings.autoindexWrapperId = "autoindex_wrapper";
TemplateSettings.autoindexTabId = "autoindex_tab";
TemplateSettings.autoindexToggleId = "autoindex_toggle";
TemplateSettings.autoindexToggleAttrId = "data-toggle";
TemplateSettings.globalindexWrapperId = "globalindex_wrapper";
TemplateSettings.globalindexTabId = "globalindex_tab";
TemplateSettings.globalindexToggleId = "globalindex_toggle";
TemplateSettings.globalindexToggleAttrId = "data-toggle";
TemplateSettings.globalindexRootPaneId = "rootPane";
TemplateSettings.globalindexEdgeId = "globalindex_edge";
TemplateSettings.titleLogoDivId = "logo";
TemplateSettings.titleTocDivId = "toc_title";
TemplateSettings.selectCategoryId = "selectCategory";
TemplateSettings.printControllerId = "printController";
TemplateSettings.treeControllerId = "treeController";
TemplateSettings.changeViewModeIdPrefix = "changeViewMode_";
TemplateSettings.expandDivIdPrefix = "Label_";
TemplateSettings.expandImgIdPrefix = "Img_";
TemplateSettings.styleAutoindexContent = "autoindex_content";
TemplateSettings.styleAutoindexWrapper = "autoindex_wrapper";
TemplateSettings.styleAutoindexTab = "autoindex_index";
TemplateSettings.styleAutoindexToggle = "autoindex_toggle";
TemplateSettings.styleAutoindexContent = "autoindex_content";
TemplateSettings.styleTitleLogoDiv = "logo";
TemplateSettings.styleTitleTocDiv = "toc_title";
TemplateSettings.styleSelectCategory = "selectCategory";
TemplateSettings.searchFileName = "search.html";
TemplateSettings.searchBoxMiniFormName = "form_searchbox_mini";
TemplateSettings.searchBoxMiniDivId = "searchbox_mini";
TemplateSettings.searchBoxMiniDivStyle = "searchbox_mini_div";
TemplateSettings.searchBoxMiniTextStyle = "searchbox_mini_text";
TemplateSettings.searchBoxMiniButtonStyle = "searchbox_mini_button";
TemplateSettings.searchMessageLineStyle = "search_message_line";
TemplateSettings.searchResultDigestLength = 100;
TemplateSettings.searchResultCountPerPage = 20;
TemplateSettings.cookieKeyAutoindexToggle = "autoindexToggle";
TemplateSettings.cookieKeyGlobalindexToggle = "globalindexToggle";
TemplateSettings.cookieKeyViewmode = "reassembleViewMode";
TemplateSettings.cookieKeyPackageName = "reassemblePackage";
TemplateSettings.cookieKeyGlobalindexWidth = "globalindexWidth";
TemplateSettings.cookieKeyViewPrintController = "viewPrintController";
TemplateSettings.cookieKeyUseTermTip = "useTermTip";
TemplateSettings.apiIframeId = "iframe_api";
TemplateSettings.apiIframePadW = 4;
TemplateSettings.apiIframePadH = 4;
TemplateSettings.guidelineDescIdPrefix = "description_";
TemplateSettings.guidelineDescLabelPrefix = "GuidelineDescLabel_";
TemplateSettings.guidelineDescAnchorPrefix = "Desc_";
TemplateSettings.guidelineItemIdPrefix = "itemDesc_";
TemplateSettings.guidelineItemLabelPrefix = "GuidelineItemLabel_";
TemplateSettings.guidelineItemAnchorPrefix = "guidelineitem_";
TemplateSettings.selectPackageId = "selectPackage";
TemplateSettings.printControllerBaseId = "printControllerBase";
TemplateSettings.printControllerTitleId = "printControllerTitle";
TemplateSettings.printControllerIconId = "printControllerIcon";
TemplateSettings.printControllerButtonId = "printControllerButton";
TemplateSettings.printControllerPaneId = "printControllerPane";
TemplateSettings.printControllerOpenedStyle = "printControllerOpened";
if ((typeof jQuery) == "function")
{
  var url = (($(TemplateSettings.selectorLibFile).attr("src")) ? ($(TemplateSettings.selectorLibFile).attr("src").replace((TemplateSettings.templateLibFileName), "") + "localeString.js") : "");
  if (url != "")
  {
    var obj = document.createElement("script");
    if (obj != null)
    {
      obj.type = "text/javascript";
      obj.src = url;
      var heads = document.getElementsByTagName("head");
      if (heads.length > 0)
        heads[0].appendChild(obj)
    }
  }
}
TemplateSettings.getLibraryPath = function()
{
  if ((typeof jQuery) == "function")
    return (($(TemplateSettings.selectorLibFile).attr("src")) ? ($(TemplateSettings.selectorLibFile).attr("src").replace((TemplateSettings.templateLibFileName), "")) : "");
  return ""
};
TemplateSettings.getRootPath = function()
{
  if ((typeof jQuery) == "function")
    return (($(TemplateSettings.selectorLibFile).attr("src")) ? ($(TemplateSettings.selectorLibFile).attr("src").replace((TemplateSettings.javaScriptPath + TemplateSettings.templateLibFileName), "")) : "");
  return ""
};
TemplateSettings.addJavaScript = function(url, readyCB, loadCB, errorCB)
{
  if (url != "")
  {
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0)
    {
      var scripts = heads[0].getElementsByTagName("script");
      for (var i = 0; i < scripts.length; i++)
      {
        if ((scripts[i].src != null) && (scripts[i].src.indexOf(url) != -1))
          return null
      }
      var obj = document.createElement("script");
      if (obj != null)
      {
        obj.type = "text/javascript";
        obj.src = url;
        if (readyCB != null)
          obj.onreadystatechange = readyCB;
        if (loadCB != null)
          obj.onload = loadCB;
        if (errorCB != null)
          obj.onerror = errorCB;
        heads[0].appendChild(obj);
        return obj
      }
    }
  }
  return null
};
TemplateSettings.getNowDateString = function()
{
  var sdate = new Date;
  var yy = sdate.getYear();
  var mm = sdate.getMonth() + 1;
  var dd = sdate.getDate();
  if (yy < 2000)
    yy += 1900;
  if (mm < 10)
    mm = "0" + mm;
  if (dd < 10)
    dd = "0" + dd;
  return (yy + mm + dd)
};
var ExpandFolder = function(){};
if ((typeof jQuery) != "function")
{
  alert(LocaleString.lcStrMessageNeedJQuery);
  ExpandFolder.rootURL = ""
}
else
{
  ExpandFolder.rootURL = (($("script[src$=\"" + TemplateSettings.templateLibFileName + "\"]").attr("src")) ? $("script[src$=\"" + TemplateSettings.templateLibFileName + "\"]").attr("src").replace((TemplateSettings.javaScriptPath + TemplateSettings.templateLibFileName), "") : "")
}
ExpandFolder.openIconPath = ExpandFolder.rootURL + TemplateSettings.openIconPath;
ExpandFolder.closeIconPath = ExpandFolder.rootURL + TemplateSettings.closeIconPath;
ExpandFolder.fileIconPath = ExpandFolder.rootURL + TemplateSettings.fileIconPath;
ExpandFolder.styleOpenDiv = TemplateSettings.styleOpenTreeItemDiv;
ExpandFolder.styleCloseDiv = TemplateSettings.styleCloseTreeItemDiv;
ExpandFolder.styleLineIconDiv = TemplateSettings.styleIconLineDiv;
ExpandFolder.styleLineNoIconDiv = TemplateSettings.styleNoIconLineDiv;
ExpandFolder.styleOpenImg = TemplateSettings.styleOpenTreeItemImg;
ExpandFolder.styleCloseImg = TemplateSettings.styleCloseTreeItemImg;
ExpandFolder.styleFileImg = TemplateSettings.styleFileTreeItemImg;
ExpandFolder.attributeFolded = TemplateSettings.foldedTreeItemAttrId;
ExpandFolder.selectorTreePaneDiv = "#" + TemplateSettings.divTreePaneId;
ExpandFolder.selectorOpenItemDiv = ExpandFolder.selectorTreePaneDiv + " div[class=" + TemplateSettings.styleOpenTreeItemDiv + "]";
ExpandFolder.selectorCloseItemDiv = ExpandFolder.selectorTreePaneDiv + " div[class=" + TemplateSettings.styleCloseTreeItemDiv + "]";
ExpandFolder.selectorOpenItemImg = ExpandFolder.selectorTreePaneDiv + " img[class=" + TemplateSettings.styleOpenTreeItemImg + "]";
ExpandFolder.selectorCloseItemImg = ExpandFolder.selectorTreePaneDiv + " img[class=" + TemplateSettings.styleCloseTreeItemImg + "]";
ExpandFolder.selectorFileItemImg = ExpandFolder.selectorTreePaneDiv + " img[class=" + TemplateSettings.styleFileTreeItemImg + "]";
ExpandFolder.expandDivIdPrefix = TemplateSettings.expandDivIdPrefix;
ExpandFolder.expandImgIdPrefix = TemplateSettings.expandImgIdPrefix;
ExpandFolder.initExpandFolder = function()
{
  $(ExpandFolder.selectorOpenItemDiv).each(function()
  {
    $(this).css("display", "block").attr(ExpandFolder.attributeFolded, false)
  });
  $(ExpandFolder.selectorCloseItemDiv).each(function()
  {
    $(this).css("display", "none").attr(ExpandFolder.attributeFolded, true)
  });
  $(ExpandFolder.selectorOpenItemImg).each(function()
  {
    $(this).attr("src", ExpandFolder.openIconPath)
  });
  $(ExpandFolder.selectorCloseItemImg).each(function()
  {
    $(this).attr("src", ExpandFolder.closeIconPath)
  });
  $(ExpandFolder.selectorFileItemImg).each(function()
  {
    $(this).attr("src", ExpandFolder.fileIconPath)
  })
};
ExpandFolder.openAll = function()
{
  $(ExpandFolder.selectorOpenItemDiv + "," + ExpandFolder.selectorCloseItemDiv).each(function()
  {
    $(this).css("display", "block").attr(ExpandFolder.attributeFolded, false)
  });
  $(ExpandFolder.selectorCloseItemImg).each(function()
  {
    $(this).attr("src", ExpandFolder.openIconPath).attr("class", ExpandFolder.styleOpenImg)
  })
};
ExpandFolder.closeAll = function()
{
  $(ExpandFolder.selectorOpenItemDiv + "," + ExpandFolder.selectorCloseItemDiv).each(function()
  {
    $(this).css("display", "none").attr(ExpandFolder.attributeFolded, true)
  });
  $(ExpandFolder.selectorOpenItemImg).each(function()
  {
    $(this).attr("src", ExpandFolder.closeIconPath).attr("class", ExpandFolder.styleCloseImg)
  })
};
ExpandFolder.expand = function(id, objCaller, params)
{
  var fullopen = false;
  if (objCaller == null)
    return false;
  if ((params != null) && (params.length > 0))
  {
    if (params[0].ctrlKey)
      fullopen = true
  }
  else if (window.event != null)
  {
    if (window.event.ctrlKey)
      fullopen = true
  }
  if (!fullopen)
  {
    $("#" + id).each(function()
    {
      var isObjDisplay = ($(this).css("display") == "block");
      $(this).css("display", (isObjDisplay ? "none" : "block")).attr(ExpandFolder.attributeFolded, isObjDisplay);
      $(objCaller).attr("src", (isObjDisplay ? ExpandFolder.closeIconPath : ExpandFolder.openIconPath)).attr("class", (isObjDisplay ? ExpandFolder.styleCloseImg : ExpandFolder.styleOpenImg))
    })
  }
  else
  {
    var divRoot = document.getElementById(id);
    if (divRoot == null)
      return false;
    $(divRoot).css("display", "block");
    var selector = "#" + id + ", #" + id + " div." + ExpandFolder.styleOpenDiv + ", #" + id + " div." + ExpandFolder.styleCloseDiv;
    $(selector).each(function()
    {
      $(this).css("display", "block").attr(ExpandFolder.attributeFolded, false)
    });
    $(objCaller).attr("src", ExpandFolder.openIconPath).attr("class", ExpandFolder.styleOpenImg);
    selector = "#" + id + " img." + ExpandFolder.styleOpenImg + ", #" + id + " img." + ExpandFolder.styleCloseImg;
    $(selector).each(function()
    {
      $(this).attr("src", ExpandFolder.openIconPath).attr("class", ExpandFolder.styleOpenImg)
    })
  }
};
function TocDataObject(type, category, level, url, id, text, baselevel, figure, table, code, hierarchy)
{
  this.dataType = type;
  this.dataCategory = category;
  this.dataLevel = level;
  this.dataURL = url;
  this.dataID = id;
  this.dataText = text;
  this.disablePrintPage = false;
  this.dataBaselevel = baselevel;
  this.dataFigureNo = figure;
  this.dataTableNo = table;
  this.dataCodeNo = code;
  this.expand = false;
  this.viewIcon = true;
  this.dataQuery = "";
  this.dataLabel = "";
  this.dataExpandLabel = "";
  this.dataHierarchy = hierarchy
}
TocDataObject.prototype = {
  getType: function()
  {
    return this.dataType
  }, getCategory: function()
    {
      return this.dataCategory
    }, getLevel: function()
    {
      return this.dataLevel
    }, getURL: function()
    {
      return this.dataURL
    }, getID: function()
    {
      return this.dataID
    }, getText: function()
    {
      return this.dataText
    }, getBaselevel: function()
    {
      return this.dataBaselevel
    }, getFigureNo: function()
    {
      return this.dataFigureNo
    }, getTableNo: function()
    {
      return this.dataTableNo
    }, getCodeNo: function()
    {
      return this.dataCodeNo
    }, getHierarchy: function()
    {
      return this.dataHierarchy
    }, enableExpand: function()
    {
      this.expand = true
    }, isExpandFolder: function()
    {
      return this.expand
    }, setQuery: function(str)
    {
      this.dataQuery = ((str == null) ? "" : str)
    }, getQuery: function()
    {
      return this.dataQuery
    }, setFigureNo: function(no)
    {
      this.dataFigureNo = (((no == null) || (no < 0)) ? 0 : no)
    }, setTableNo: function(no)
    {
      this.dataTableNo = (((no == null) || (no < 0)) ? 0 : no)
    }, setCodeNo: function(no)
    {
      this.dataCodeNo = (((no == null) || (no < 0)) ? 0 : no)
    }, setLabel: function(str)
    {
      this.dataLabel = ((str == null) ? "" : str)
    }, getLabel: function()
    {
      return this.dataLabel
    }, setExpandLabel: function(str)
    {
      this.dataExpandLabel = ((str == null) ? "" : str)
    }, getExpandLabel: function()
    {
      return this.dataExpandLabel
    }, enableViewIcon: function()
    {
      this.viewIcon = true
    }, disableViewIcon: function()
    {
      this.viewIcon = false
    }, isViewIcon: function()
    {
      return this.viewIcon
    }
};
function PageNaviObject(url)
{
  this.level = 0;
  this.title = "";
  this.currentId = "";
  this.currentUrl = url;
  this.parentId = "";
  this.prevId = "";
  this.nextId = "";
  this.disablePrintPage = false;
  this.linkEnabled = true;
  this.dataType = ""
}
;
function TocObject()
{
  this.logoFile = "";
  this.logoWidth = 0;
  this.logoHeight = 0;
  this.titleName = "";
  this.titleFile = TemplateSettings.templateTitleFileName;
  this.windowTitleName = "";
  this.displayNumber = false;
  this.modeAnchor = true;
  this.targetName = "";
  this.windowWidth = 280;
  this.openWithExpand = false;
  this.viewFileIcon = true;
  this.printPage = false;
  this.insertTitlePage = false;
  this.printSetting = true;
  this.baselevel = 0;
  this.figureNo = 0;
  this.tableNo = 0;
  this.codeNo = 0;
  this.currentURL = "";
  this.countGuideline = 1;
  this.rootURL = "";
  this.selectPackage = false;
  this.searchEnabled = true;
  this.arrayData = new Array;
  this.arrayData.length = 0;
  this.isNullOrEmpty = function(str)
  {
    if (str == null)
      return true;
    if (str == "")
      return true;
    return false
  };
  this.pageNaviObjects = {};
  this.pageParentList = [];
  this.getPageNaviObjectId = function(url, hierarchy)
  {
    if (this.isNullOrEmpty(url))
      return hierarchy;
    var pos = url.lastIndexOf("?");
    if (pos >= 0)
    {
      url = url.substr(0, pos)
    }
    var lpos = url.lastIndexOf("/");
    if (lpos == (url.length - 1))
    {
      return url
    }
    else
    {
      return url.substr(lpos + 1)
    }
  };
  this.getPageNaviObject = function(id)
  {
    if (this.isNullOrEmpty(id))
      return null;
    var obj = this.pageNaviObjects[id];
    return obj
  };
  this.setPageNaviObject = function(url, hierarchy)
  {
    var id = this.getPageNaviObjectId(url, hierarchy);
    var obj = this.getPageNaviObject(id);
    if (obj != null)
      return "";
    obj = new PageNaviObject(id);
    obj.currentUrl = url;
    this.pageNaviObjects[id] = obj;
    return id
  };
  this.hashHierarchy = {};
  this.getPageDataByHierarchy = function(hierarchy)
  {
    if ((typeof hierarchy === "string") && (hierarchy !== ""))
    {
      var index = this.hashHierarchy[hierarchy];
      if (typeof index !== "undefined")
      {
        return this.getData(index)
      }
    }
    return null
  };
  this.addHierarchyHash = function(hierarchy, index)
  {
    if ((typeof hierarchy === "string") && (hierarchy !== "") && (typeof index === "number") && (index >= 0))
    {
      this.hashHierarchy[hierarchy] = index
    }
  };
  this.setLogoFile = function(file)
  {
    this.logoFile = ((file == null) ? "" : file)
  };
  this.getLogoFile = function()
  {
    return this.logoFile
  };
  this.setLogoSize = function(width, height)
  {
    this.logoWidth = (((width == null) || (width < 0)) ? 0 : width);
    this.logoHeight = (((height == null) || (height < 0)) ? 0 : height)
  };
  this.getLogoWidth = function()
  {
    return this.logoWidth
  };
  this.getLogoHeight = function()
  {
    return this.logoHeight
  };
  this.setTitle = function(title)
  {
    this.titleName = ((title == null) ? "" : title)
  };
  this.getTitle = function()
  {
    return this.titleName
  };
  this.setWindowTitle = function(title)
  {
    this.windowTitleName = ((title == null) ? "" : title)
  };
  this.getWindowTitle = function()
  {
    return this.windowTitleName
  };
  this.setTitleFile = function(file)
  {
    this.titleFile = ((file == null) ? "" : file)
  };
  this.getTitleFile = function()
  {
    return this.titleFile
  };
  this.setTargetName = function(name)
  {
    this.targetName = ((name == null) ? "" : name)
  };
  this.getTargetName = function()
  {
    return this.targetName
  };
  this.isEnableTarget = function()
  {
    return (this.targetName != "")
  };
  this.setWindowWidth = function(width)
  {
    this.windowWidth = (((width == null) || (width < 0)) ? 0 : width)
  };
  this.getWindowWidth = function()
  {
    return this.windowWidth
  };
  this.enableDisplayNumber = function()
  {
    this.displayNumber = true
  };
  this.disableDisplayNumber = function()
  {
    this.displayNumber = false
  };
  this.isDisplayNumber = function()
  {
    return this.displayNumber
  };
  this.setOpenWithExpand = function(enable)
  {
    this.openWithExpand = enable
  };
  this.isOpenWithExpand = function()
  {
    return this.openWithExpand
  };
  this.setBaselevel = function(level)
  {
    this.baselevel = (((level == null) || (level < 0)) ? 0 : level)
  };
  this.getBaselevel = function()
  {
    return this.baselevel
  };
  this.setFigureNo = function(no)
  {
    this.figureNo = (((no == null) || (no < 0)) ? 0 : no)
  };
  this.getFigureNo = function()
  {
    return this.figureNo
  };
  this.addFigureNo = function(num)
  {
    var no = parseInt(num);
    if (isNaN(num))
      no = 1;
    this.figureNo += no
  };
  this.setTableNo = function(no)
  {
    this.tableNo = (((no == null) || (no < 0)) ? 0 : no)
  };
  this.getTableNo = function()
  {
    return this.tableNo
  };
  this.addTableNo = function(num)
  {
    var no = parseInt(num);
    if (isNaN(num))
      no = 1;
    this.tableNo += no
  };
  this.setCodeNo = function(no)
  {
    this.codeNo = (((no == null) || (no < 0)) ? 0 : no)
  };
  this.getCodeNo = function()
  {
    return this.codeNo
  };
  this.addCodeNo = function(num)
  {
    var no = parseInt(num);
    if (isNaN(num))
      no = 1;
    this.codeNo += no
  };
  this.setAnchorMode = function()
  {
    this.modeAnchor = true
  };
  this.setGetMode = function()
  {
    this.modeAnchor = false
  };
  this.isAnchorMode = function()
  {
    return this.modeAnchor
  };
  this.isGetMode = function()
  {
    return !(this.modeAnchor)
  };
  this.enableViewFileIcon = function()
  {
    this.viewFileIcon = true
  };
  this.disableViewFileIcon = function()
  {
    this.viewFileIcon = false
  };
  this.enablePrintPage = function()
  {
    this.printPage = true
  };
  this.disablePrintPage = function()
  {
    this.printPage = false
  };
  this.isEnablePrintPage = function()
  {
    return this.printPage
  };
  this.setInsertTitlePage = function(flag)
  {
    this.insertTitlePage = flag
  };
  this.isEnableInsertTitlePage = function()
  {
    return this.insertTitlePage
  };
  this.enablePrintSetting = function()
  {
    this.printSetting = true
  };
  this.disablePrintSetting = function()
  {
    this.printSetting = false
  };
  this.isEnablePrintSetting = function()
  {
    return this.printSetting
  };
  this.setRootURL = function(url)
  {
    this.rootURL = ((url == null) ? "" : url)
  };
  this.getRootURL = function()
  {
    return this.rootURL
  };
  this.setSelectPackageEnabled = function(flag)
  {
    this.selectPackage = flag
  };
  this.isEnabledSelectPackage = function()
  {
    return this.selectPackage
  };
  this.setSearchEnabled = function(flag)
  {
    this.searchEnabled = flag
  };
  this.isEnabledSearch = function()
  {
    return this.searchEnabled
  };
  this.versionName = "";
  this.setVersionName = function(name)
  {
    this.versionName = name
  };
  this.getVersionName = function()
  {
    return this.versionName
  };
  this.getDataArray = function()
  {
    return this.arrayData
  };
  this.getDataCount = function()
  {
    return this.arrayData.length
  };
  this.getData = function(no)
  {
    if ((no < 0) || (no >= this.getDataCount()))
      return null;
    return this.arrayData[no]
  };
  this.relatedLinks = {};
  this._maxLevel = 20;
  this._currentHierarchy = 10;
  this._dataHierarchy = new Array(this._maxLevel + 1);
  for (var n = 0; n <= this._maxLevel; n++)
    this._dataHierarchy[n] = 0;
  this._getHierarchy = function(level)
  {
    if (level < 0)
      level = 0;
    if (level > this._maxLevel)
      level = this._maxLevel;
    if (level < this._currentHierarchy)
      for (var n = level + 1; n <= this._maxLevel; n++)
        this._dataHierarchy[n] = 0;
    this._currentHierarchy = level;
    this._dataHierarchy[level]++;
    var hierarchy = "";
    for (var n = 0; n <= level; n++)
    {
      var x = this._dataHierarchy[n];
      if (n > 0)
        hierarchy += "_";
      hierarchy += ((x < 100) ? ((x < 10) ? "00" : "0") : "") + x
    }
    return hierarchy
  };
  this._dataCheckList = {};
  this._checkSameData = function(hierarchy)
  {
    if (typeof(this._dataCheckList[hierarchy]) !== "undefined")
      return true;
    this._dataCheckList[hierarchy] = true;
    return false
  };
  this._sortFunc = function(dataA, dataB)
  {
    if (dataA.dataHierarchy > dataB.dataHierarchy)
      return 1;
    if (dataA.dataHierarchy < dataB.dataHierarchy)
      return -1;
    return 0
  };
  this.sortTocData = function()
  {
    this.arrayData.sort(this._sortFunc)
  };
  this.addRelatedLinks = function(pageid, url, title)
  {
    var data = this.relatedLinks[pageid];
    if (typeof data === "undefined")
      data = [];
    var len = data.length;
    for (var n = 0; n < len; n++)
    {
      var work = data[n];
      if (work.url == url)
        return
    }
    data.push({
      url: url, title: title
    });
    this.relatedLinks[pageid] = data
  };
  this._addTocDataObjectCore = function(type, category, level, name, url, id, noPrint, hierarchy)
  {
    if (level <= this.baselevel)
    {
      this.figureNo = 1;
      this.tableNo = 1;
      this.codeNo = 1
    }
    var hie = (typeof hierarchy !== "undefined") ? hierarchy : this._getHierarchy(level);
    if (this._checkSameData(hie))
      return;
    var data = new TocDataObject(type, category, level, url, id, name, this.baselevel, this.figureNo, this.tableNo, this.codeNo, hie);
    data.disablePrintPage = ((typeof(noPrint) !== "undefined") ? noPrint : false);
    this.addHierarchyHash(data.getHierarchy(), this.arrayData.length);
    this.arrayData.push(data);
    if (data.disablePrintPage)
      return
  };
  this.addSectionHeader = function(category, level, name, url, id, noPrint, hierarchy)
  {
    this._addTocDataObjectCore("MAN_HEADER", category, level, name, url, id, noPrint, hierarchy)
  };
  this.addSection = function(category, level, name, url, id, noPrint, hierarchy)
  {
    this._addTocDataObjectCore("MAN", category, level, name, url, id, noPrint, hierarchy)
  };
  this.addHeader = function(category, level, name, url, id, noPrint, hierarchy)
  {
    this._addTocDataObjectCore("HEADER", category, level, name, url, id, noPrint, hierarchy)
  };
  this.addItem = function(category, level, name, url, id, noPrint, hierarchy)
  {
    this._addTocDataObjectCore("ITEM", category, level, name, url, id, noPrint, hierarchy)
  };
  this.addGuidelineSection = function(category, level, name, url, id, noPrint, hierarchy)
  {
    this._addTocDataObjectCore("GUIDELINE_SECTION", category, level, name, url, id, noPrint, hierarchy);
    this.currentURL = url;
    this.countGuideline = 1
  };
  this.addGuidelineHeader = function(category, level, name, url, id, noPrint, hierarchy)
  {
    this._addTocDataObjectCore("GUIDELINE_HEADER", category, level, name, url, id, noPrint, hierarchy);
    this.currentURL = url;
    this.countGuideline = 1
  };
  this.addGuidelineDesc = function(category, level, name, url, id, noPrint, hierarchy)
  {
    this._addTocDataObjectCore("GUIDELINE_HEADER", category, level, name, url, id, noPrint, hierarchy);
    this.currentURL = url;
    this.countGuideline = 1
  };
  this.addGuidelineItem = function(category, level, name, url, id, noPrint, hierarchy)
  {
    this._addTocDataObjectCore("GUIDELINE", category, level, name, url, id, noPrint, hierarchy);
    this.currentURL = url;
    this.countGuideline = 1
  };
  this.addSeparator = function(hierarchy)
  {
    this.figureNo = 1;
    this.tableNo = 1;
    this.codeNo = 1;
    this._addTocDataObjectCore("SEPARATOR", "", 0, "", "", "", true, hierarchy)
  };
  this.addBlankLine = function(hierarchy)
  {
    this.figureNo = 1;
    this.tableNo = 1;
    this.codeNo = 1;
    this._addTocDataObjectCore("BLANK", "", 0, "", "", "", true, hierarchy)
  };
  this.addExternal = function(category, level, name, url, hierarchy)
  {
    this._addTocDataObjectCore("EXTERNAL", category, level, name, url, "", true, hierarchy)
  };
  this.addExternalHeader = function(category, level, name, url, hierarchy)
  {
    this._addTocDataObjectCore("EXTERNAL_HEADER", category, level, name, url, "", true, hierarchy)
  };
  this.addExternalWithNumber = function(category, level, name, url, hierarchy)
  {
    this._addTocDataObjectCore("MAN_EXTERNAL", category, level, name, url, "", true, hierarchy)
  };
  this.addExternalHeaderWithNumber = function(category, level, name, url, hierarchy)
  {
    this._addTocDataObjectCore("MAN_EXTERNAL_HEADER", category, level, name, url, "", true, hierarchy)
  };
  this.addRawUrl = function(category, level, name, url, hierarchy)
  {
    this._addTocDataObjectCore("RAWURL", category, level, name, url, "", true, hierarchy)
  };
  this.addRawUrlHeader = function(category, level, name, url, hierarchy)
  {
    this._addTocDataObjectCore("RAWURL_HEADER", category, level, name, url, "", true, hierarchy)
  };
  this.addRawUrlWithNumber = function(category, level, name, url, hierarchy)
  {
    this._addTocDataObjectCore("MAN_RAWURL", category, level, name, url, "", true, hierarchy)
  };
  this.addRawUrlHeaderWithNumber = function(category, level, name, url, hierarchy)
  {
    this._addTocDataObjectCore("MAN_RAWURL_HEADER", category, level, name, url, "", true, hierarchy)
  };
  this.addNoUrlHeader = function(category, level, name, url, id, noPrint, hierarchy)
  {
    this._addTocDataObjectCore("NOURL_HEADER", category, level, name, url, id, noPrint, hierarchy)
  };
  this.addNoUrlHeaderWithNumber = function(category, level, name, url, id, noPrint, hierarchy)
  {
    this._addTocDataObjectCore("MAN_NOURL_HEADER", category, level, name, url, id, noPrint, hierarchy)
  };
  this._dataTypeSettings = {
    MAN_HEADER: [true, true, false, false], MAN: [true, true, false, false], HEADER: [true, true, false, false], ITEM: [true, true, false, false], GUIDELINE_SECTION: [true, true, false, false], GUIDELINE_HEADER: [true, true, false, false], GUIDELINE: [true, true, false, false], SEPARATOR: [false, false, false, false], EXTERNAL: [false, false, true, false], EXTERNAL_HEADER: [false, false, true, false], MAN_EXTERNAL: [false, false, true, false], MAN_EXTERNAL_HEADER: [false, false, true, false], RAWURL: [false, false, true, true], RAWURL_HEADER: [false, false, true, true], MAN_RAWURL: [false, false, true, true], MAN_RAWURL_HEADER: [false, false, true, true], NOURL_HEADER: [false, false, false, false], MAN_NOURL_HEADER: [false, false, false, false]
  };
  this.isBreadcrumbAvailable = function(data)
  {
    if (data == null)
      return false;
    var setting = this._dataTypeSettings[data.getType()];
    if (setting)
      return setting[0];
    return false
  };
  this.isBreadcrumbLinkAvailable = function(data)
  {
    if (data == null)
      return false;
    var setting = this._dataTypeSettings[data.getType()];
    if (setting)
      return setting[1];
    return false
  };
  this.isExternalLink = function(dataType)
  {
    if (dataType == null)
      return false;
    var setting = this._dataTypeSettings[dataType];
    if (setting)
      return setting[2];
    return false
  };
  this.isRawUrlLink = function(dataType)
  {
    if (dataType == null)
      return false;
    var setting = this._dataTypeSettings[dataType];
    if (setting)
      return setting[3];
    return false
  };
  this.makeAnchorURL = function(data)
  {
    if (data == null)
      return "";
    var level = "";
    var label = "";
    var url = "";
    var text = "";
    if (data.getType().match(/^man/i))
    {
      level = "?level=" + data.getQuery() + "&figure=" + data.getFigureNo() + "&table=" + data.getTableNo() + "&code=" + data.getCodeNo();
      label = data.getLabel()
    }
    url = data.getURL();
    text = ((this.isDisplayNumber() && (label != "")) ? (label + " ") : "") + data.getText();
    text = text.replace(/&/ig, "&amp;").replace(/</ig, "&lt;").replace(/>/ig, "&gt;");
    if (url == "")
    {
      url = text
    }
    else
    {
      var target = (this.isEnableTarget() ? (' target="' + this.getTargetName() + '"') : '');
      var id = ((data.getID() == "") ? "" : ("#" + data.getID()));
      if (data.getType().match(/external/i))
      {
        url = '<a href="' + this.rootURL + 'external.html?file=' + url + '"' + target + '>' + text + '</a>'
      }
      else if (data.getType().match(/rawurl/i))
      {
        if (this.isEnableTarget())
          url = '<a href="' + url + '" class="external_link"' + target + '>' + text + '</a>';
        else
          url = '<a href="' + url + '" class="external_link" target="_blank">' + text + '</a>'
      }
      else
      {
        url = '<a href="' + this.rootURL + url + level + id + '"' + target + '>' + text + '</a>'
      }
    }
    return url
  };
  this.makeGetURL = function(data)
  {
    if (data == null)
      return "";
    var url = "";
    var text = "";
    var label = "";
    var level = "";
    var figure = "";
    var table = "";
    var code = "";
    if (data.getType().match(/^man|^guideline/i))
    {
      level = data.getQuery();
      label = data.getLabel();
      figure = data.getFigureNo();
      table = data.getTableNo();
      code = data.getCodeNo()
    }
    url = data.getURL();
    text = ((this.isDisplayNumber() && (label != "")) ? (label + " ") : "") + data.getText();
    text = text.replace(/&/ig, "&amp;").replace(/</ig, "&lt;").replace(/>/ig, "&gt;");
    if (url == "")
    {
      url = text
    }
    else
    {
      var target = (this.isEnableTarget() ? this.getTargetName() : "");
      var id = ((data.getID() == "") ? "" : ("#" + data.getID()));
      if (data.getType().match(/external/i))
      {
        url = '<a href="javascript: Guideline.viewPage(\'' + this.rootURL + 'external.html?file=' + url + '\',\'' + target + '\',\'1\',1,1,1);">' + text + '</a>'
      }
      else if (data.getType().match(/rawurl/i))
      {
        if (this.isEnableTarget())
          url = '<a href="' + url + '" target="' + target + '">' + text + '</a>';
        else
          url = '<a href="' + url + '" target="_blank">' + text + '</a>'
      }
      else
      {
        url = '<a href="javascript: Guideline.viewPage(\'' + this.rootURL + url + id + '\',\'' + target + '\',\'' + level + '\',' + figure + ',' + table + ',' + code + ');">' + text + '</a>'
      }
    }
    return url
  };
  this.processTreeData = function()
  {
    this.sortTocData();
    var prevURL = "";
    var arrayLevel = new Array(this._maxLevel + 1);
    for (var x = 0; x <= this._maxLevel; x++)
      arrayLevel[x] = 0;
    var prevLevel = 999;
    var prevData = null;
    var prevId = "";
    var parentId = "";
    for (var i = 0; i < this.getDataCount(); i++)
    {
      var label = "";
      var query = "";
      var expandLabel = "";
      var data = this.getData(i);
      var currentLevel = data.getLevel();
      var baselevel = data.getBaselevel();
      var dataType = data.getType();
      var currentURL = data.getURL();
      var currentHierarchy = data.getHierarchy();
      var newId = this.setPageNaviObject(currentURL, currentHierarchy);
      if (!this.isNullOrEmpty(newId))
      {
        var obj = this.getPageNaviObject(newId);
        if (obj != null)
        {
          obj.level = currentLevel;
          obj.title = data.getText();
          obj.prevId = prevId;
          var prev = this.getPageNaviObject(prevId);
          if (prev != null)
          {
            prev.nextId = newId
          }
          if (currentLevel > 0)
            obj.parentId = this.getPageNaviObjectId(this.pageParentList[currentLevel - 1]);
          obj.disablePrintPage = data.disablePrintPage;
          obj.linkEnabled = this.isBreadcrumbLinkAvailable(data);
          obj.dataType = dataType
        }
        if (this.isNullOrEmpty(currentURL))
        {
          this.pageParentList[currentLevel] = currentHierarchy
        }
        else
        {
          this.pageParentList[currentLevel] = currentURL
        }
        if (this.isBreadcrumbAvailable(data) && currentURL != "")
          prevId = newId
      }
      if (currentLevel > prevLevel)
      {
        if (i > 0)
          this.getData(i - 1).enableExpand()
      }
      arrayLevel[currentLevel] = arrayLevel[currentLevel] + 1;
      for (var n = (currentLevel + 1); n <= this._maxLevel; n++)
        arrayLevel[n] = 0;
      if (dataType.match(/separator|blank/i))
      {
        arrayLevel[0] = arrayLevel[0] - 1;
        if (arrayLevel[0] < 0)
          arrayLevel[0] = 0
      }
      for (var n = 0; n <= this._maxLevel; n++)
      {
        if (arrayLevel[n] > 0)
        {
          expandLabel += (((n > 0) ? "_" : "") + arrayLevel[n]);
          var x = n - baselevel;
          if (x >= 0)
          {
            query += (((x > 0) ? "," : "") + arrayLevel[n]);
            if (x < 4)
            {
              label += (arrayLevel[n] + ".")
            }
            else
            {
              label = ""
            }
          }
        }
      }
      if ((currentURL == prevURL) && (currentURL != "") && (i > 0))
      {
        data.setQuery(prevData.getQuery());
        data.setFigureNo(prevData.getFigureNo());
        data.setTableNo(prevData.getTableNo());
        data.setCodeNo(prevData.getCodeNo())
      }
      else
      {
        data.setQuery(query);
        prevData = data
      }
      data.setLabel(label);
      data.setExpandLabel(expandLabel);
      prevLevel = currentLevel;
      prevURL = currentURL
    }
  };
  this.createContents = function()
  {
    var file = this.getLogoFile();
    if (file != "")
    {
      var elem = document.getElementById(TemplateSettings.titleLogoDivId);
      if (elem != null)
      {
        var obj = document.createElement("IMG");
        obj.src = this.rootURL + file;
        var width = this.getLogoWidth();
        var height = this.getLogoHeight();
        if (width > 0)
          obj.width = width;
        if (height > 0)
          obj.height = height;
        var objLink = document.createElement("A");
        objLink.href = this.rootURL + this.getTitleFile();
        objLink.appendChild(obj);
        elem.appendChild(objLink)
      }
    }
    var title = this.getTitle();
    {
      var elem = document.getElementById(TemplateSettings.titleTocDivId);
      if (elem != null)
      {
        var obj = document.createElement("A");
        obj.href = this.rootURL + this.getTitleFile();
        if (this.isEnableTarget())
          obj.target = this.getTargetName();
        obj.innerHTML = title;
        elem.appendChild(obj)
      }
    }
    if (this.isEnabledSearch())
    {
      var elem = document.getElementById(TemplateSettings.searchBoxMiniDivId);
      if (elem != null)
      {
        elem.className = TemplateSettings.searchBoxMiniDivStyle;
        var obj = document.createElement("FORM");
        obj.name = TemplateSettings.searchBoxMiniFormName;
        obj.action = this.rootURL + TemplateSettings.searchFileName;
        obj.method = "GET";
        var formHtml = "";
        formHtml += '<input type="text" id="search_mini_text" name="q" class="' + TemplateSettings.searchBoxMiniTextStyle + '" /> ';
        formHtml += '<input type="submit" class="' + TemplateSettings.searchBoxMiniButtonStyle + '" value="" />';
        obj.innerHTML = formHtml;
        obj.onsubmit = function()
        {
          var qobj = document.getElementById("search_mini_text");
          if ((qobj != null) && (qobj.value == ""))
            return false
        };
        elem.appendChild(obj)
      }
    }
    {
      if (this.getWindowTitle() != "")
      {
        document.title += (" - " + this.getWindowTitle())
      }
      else if (document.title == "")
      {
        document.title = this.getTitle()
      }
    }
    {
      var elem = document.getElementById(TemplateSettings.printControllerPaneId);
      if (elem != null)
      {
        var str = "";
        str += '<select id="' + TemplateSettings.selectCategoryId + '" name="category" size="1" class="' + TemplateSettings.styleSelectCategory + '" onChange="Reassemble.viewPrintPage();">' + '<option value="">' + LocaleString.lcStrLabelSelectChapter + '</option>' + '</select><br />';
        {
          elem.innerHTML += str;
          elem.style.display = "none";
          var selectObj = document.getElementById(TemplateSettings.selectCategoryId);
          if (selectObj != null)
          {
            for (var i = 0; i < this.getDataCount(); i++)
            {
              var data = this.getData(i);
              if ((data != null) && (data.getType().match(/^(guideline_section|header|man_header)$/i)))
              {
                var optObj = document.createElement("OPTION");
                optObj.innerHTML = ((data.getType().match(/^man/i) && this.isDisplayNumber() && (data.getLabel() != "")) ? (data.getLabel() + " ") : "") + data.getText();
                optObj.value = data.getCategory();
                selectObj.appendChild(optObj)
              }
            }
            var optObj = document.createElement("OPTION");
            optObj.innerHTML = LocaleString.lcStrLabelSelectAll;
            optObj.value = "*";
            selectObj.appendChild(optObj)
          }
        }
      }
    }
    var prev = 0;
    var objDIVs = new Array(this._maxLevel + 1);
    for (var x = 0; x <= this._maxLevel; x++)
      objDIVs[x] = null;
    var rootObj = null;
    var useFragment = false;
    if (document.createDocumentFragment)
    {
      rootObj = document.createDocumentFragment();
      useFragment = true
    }
    else
    {
      rootObj = document.getElementById(TemplateSettings.divTreePaneId)
    }
    if (rootObj != null)
    {
      objDIVs[0] = rootObj;
      for (var i = 0; i < this.getDataCount(); i++)
      {
        var data = this.getData(i);
        if (data == null)
          continue;
        var current = data.getLevel();
        var dataType = data.getType();
        var dataLabel = data.getLabel();
        var dataExpandLabel = data.getExpandLabel();
        if (current < prev)
        {
          for (var x = prev; x > current; x--)
          {
            objDIVs[x - 1].appendChild(objDIVs[x])
          }
        }
        var objDIV = document.createElement("DIV");
        objDIV.className = ExpandFolder.styleLineIconDiv;
        if (dataType.match(/^separator$/i))
        {
          objDIV.innerHTML = '<hr class="' + TemplateSettings.styleSeparatorLine + '">'
        }
        else if (dataType.match(/^blank$/i))
        {
          objDIV.innerHTML = '<br>'
        }
        else
        {
          var objSPAN = document.createElement("SPAN");
          if (dataType.match(/header|section/i))
          {
            objSPAN.className = TemplateSettings.styleHeaderLineSpan;
            objSPAN.className += (" treelevel_" + current)
          }
          else
          {
            objSPAN.className = TemplateSettings.styleItemLineSpan;
            objSPAN.className += (" treelevel_" + (current + 1))
          }
          if (this.modeAnchor)
          {
            objSPAN.innerHTML = this.makeAnchorURL(data)
          }
          else
          {
            if (dataType.match(/^man/i))
            {
              objSPAN.innerHTML = this.makeGetURL(data)
            }
            else
            {
              objSPAN.innerHTML = this.makeAnchorURL(data)
            }
          }
          var objIMG = document.createElement("IMG");
          if (data.isExpandFolder())
          {
            objIMG.src = (this.isOpenWithExpand() ? ExpandFolder.openIconPath : ExpandFolder.closeIconPath);
            objIMG.className = (this.isOpenWithExpand() ? ExpandFolder.styleOpenImg : ExpandFolder.styleCloseImg);
            objIMG.onclick = new Function("return ExpandFolder.expand('" + ExpandFolder.expandDivIdPrefix + data.getExpandLabel() + "', this, arguments);");
            objIMG.id = (ExpandFolder.expandImgIdPrefix + ExpandFolder.expandDivIdPrefix + data.getExpandLabel());
            if (objIMG.title !== null)
              objIMG.title = LocaleString.lcStrOpenDescendants;
            objDIV.appendChild(objIMG)
          }
          else
          {
            if (!(this.viewFileIcon) || !(data.isViewIcon()))
            {
              objDIV.className = ExpandFolder.styleLineNoIconDiv
            }
            else
            {
              objIMG.src = ExpandFolder.fileIconPath;
              objIMG.className = ExpandFolder.styleFileImg;
              objDIV.appendChild(objIMG)
            }
          }
          objDIV.appendChild(objSPAN)
        }
        objDIVs[current].appendChild(objDIV);
        if (data.isExpandFolder())
        {
          var objDIV = document.createElement("DIV");
          objDIV.className = (this.isOpenWithExpand() ? ExpandFolder.styleOpenDiv : ExpandFolder.styleCloseDiv);
          objDIV.id = ExpandFolder.expandDivIdPrefix + data.getExpandLabel();
          objDIV.setAttribute(ExpandFolder.attributeFolded, !(this.isOpenWithExpand()));
          objDIVs[current + 1] = objDIV
        }
        prev = current
      }
      for (var x = prev; x > 0; x--)
      {
        objDIVs[x - 1].appendChild(objDIVs[x])
      }
      if (useFragment)
      {
        var targetObj = document.getElementById(TemplateSettings.divTreePaneId);
        if (targetObj != null)
          targetObj.appendChild(rootObj)
      }
    }
  }
}
;
var Reassemble = Reassemble || function(){};
Reassemble.autoindexContentWidth = TemplateSettings.autoindexContentWidth;
Reassemble.autoindexToggleWidth = TemplateSettings.autoindexToggleWidth;
Reassemble.globalindexContentWidth = TemplateSettings.globalindexContentWidth;
Reassemble.globalindexToggleWidth = TemplateSettings.globalindexToggleWidth;
Reassemble.settingAttrId = TemplateSettings.settingAttrId;
Reassemble.autoindexContentId = TemplateSettings.autoindexContentId;
Reassemble.autoindexWrapperId = TemplateSettings.autoindexWrapperId;
Reassemble.autoindexTabId = TemplateSettings.autoindexTabId;
Reassemble.autoindexToggleId = TemplateSettings.autoindexToggleId;
Reassemble.autoindexToggleAttrId = TemplateSettings.autoindexToggleAttrId;
Reassemble.globalindexWrapperId = TemplateSettings.globalindexWrapperId;
Reassemble.globalindexTabId = TemplateSettings.globalindexTabId;
Reassemble.globalindexToggleId = TemplateSettings.globalindexToggleId;
Reassemble.globalindexToggleAttrId = TemplateSettings.globalindexToggleAttrId;
Reassemble.globalindexRootPaneId = TemplateSettings.globalindexRootPaneId;
Reassemble.globalindexEdgeId = TemplateSettings.globalindexEdgeId;
Reassemble.styleAutoindexContent = TemplateSettings.styleAutoindexContent;
Reassemble.styleAutoindexWrapper = TemplateSettings.styleAutoindexWrapper;
Reassemble.styleAutoindexTab = TemplateSettings.styleAutoindexTab;
Reassemble.styleAutoindexToggle = TemplateSettings.styleAutoindexToggle;
Reassemble.selectorAutoindexContentDiv = "#" + Reassemble.autoindexContentId;
Reassemble.selectorAutoindexWrapperDiv = "#" + Reassemble.autoindexWrapperId;
Reassemble.selectorAutoindexTabDiv = "#" + Reassemble.autoindexTabId;
Reassemble.selectorAutoindexToggleDiv = "#" + Reassemble.autoindexToggleId;
Reassemble.selectorGlobalindexWrapperDiv = "#" + Reassemble.globalindexWrapperId;
Reassemble.selectorGlobalindexTabDiv = "#" + Reassemble.globalindexTabId;
Reassemble.selectorGlobalindexToggleDiv = "#" + Reassemble.globalindexToggleId;
Reassemble.selectorGlobalindexEdgeDiv = "#" + Reassemble.globalindexEdgeId;
Reassemble.objectTocData = Reassemble.objectTocData || new TocObject;
Reassemble.autoindexEnabled = false;
Reassemble.globalindexEnabled = false;
Reassemble.autoindexScrollTarget = null;
Reassemble.globalindexScrollTarget = null;
Reassemble.viewMode = "0";
Reassemble.viewPackage = "";
Reassemble.packageList = [];
Reassemble.excludePages = {};
Reassemble.globalindexEdgeWidth = 3;
Reassemble.globalindexMinWidth = 360;
Reassemble.updatingIndexWidth = false;
Reassemble.updatingStartPosX = 0;
Reassemble.updatingStartWidth = 0;
Reassemble.viewPrintController = false;
Reassemble.str2int = function(str)
{
  if (str == null)
    return 0;
  var val = parseInt(str);
  if (isNaN(val))
    val = 0;
  return val
};
Reassemble._unescapeElement = document.createElement("div");
Reassemble.textContent = function(element, value)
{
  var content = element.textContent;
  if (typeof value === "undefined")
  {
    if (typeof content !== "undefined")
      return content;
    else
      return element.innerText
  }
  else
  {
    if (typeof content !== "undefined")
      element.textContent = value;
    else
      element.innerText = value
  }
};
Reassemble.unescapeHtml = function(str)
{
  var ret = str;
  if (ret && (typeof ret === "string"))
  {
    ret = ret.replace(/<script[^>]*>(.*?)<\/script>/gmi, "");
    Reassemble._unescapeElement.innerHTML = ret;
    ret = Reassemble.textContent(Reassemble._unescapeElement);
    Reassemble.textContent(Reassemble._unescapeElement, "")
  }
  return ret
};
Reassemble.escapeHtml = function(text)
{
  return text.replace(/&/ig, "&amp;").replace(/</ig, "&lt;").replace(/>/ig, "&gt;").replace(/\n/ig, "<br />").replace(/"/ig, "&quot;")
};
Reassemble.escapeJavaScript = function(str)
{
  if (str == null)
    return "";
  var ret = str;
  ret = ret.replace(/\\/g, "\\\\");
  ret = ret.replace(/"/g, "\\\"");
  ret = ret.replace(/\f/g, "\\f");
  ret = ret.replace(/\n/g, "\\n");
  ret = ret.replace(/\r/g, "\\r");
  ret = ret.replace(/\t/g, "\\t");
  return ret
};
Reassemble.escapeTitleAttribute = function(str)
{
  return Reassemble.escapeHtml(str).replace(/<br ?\/?>/ig, "&#10;")
};
Reassemble.setEventHandler = function(eventname, func)
{
  if ((eventname == null) || (eventname == ""))
    return;
  if (func == null)
    return;
  if (window.attachEvent)
    window.attachEvent("on" + eventname, func);
  else if (window.addEventListener)
    window.addEventListener(eventname, func, false)
};
Reassemble.resizeHandler = function()
{
  var clientHeight = window.innerHeight ? window.innerHeight : $(window).height();
  var clientWidth = $(window).width();
  if (clientWidth < 400)
    return;
  var contentWidth = clientWidth;
  var autoindexWidth = 0;
  var globalindexWidth = 0;
  if ((Reassemble.autoindexEnabled) || (Reassemble.globalindexEnabled))
  {
    var attrAutoindexToggle = null;
    if (Reassemble.autoindexEnabled)
    {
      attrAutoindexToggle = $(Reassemble.selectorAutoindexWrapperDiv).attr(Reassemble.autoindexToggleAttrId);
      if ((attrAutoindexToggle != null) && (attrAutoindexToggle == "0"))
      {
        $(Reassemble.selectorAutoindexTabDiv).css("display", "none");
        autoindexWidth = Reassemble.autoindexToggleWidth
      }
      else
      {
        $(Reassemble.selectorAutoindexTabDiv).css("display", "block");
        autoindexWidth = Reassemble.autoindexContentWidth + Reassemble.autoindexToggleWidth
      }
    }
    var attrGlobalindexToggle = $(Reassemble.selectorGlobalindexWrapperDiv).attr(Reassemble.globalindexToggleAttrId);
    if ((attrGlobalindexToggle != null) && (attrGlobalindexToggle == "0"))
    {
      $(Reassemble.selectorGlobalindexTabDiv).css("display", "none");
      $(Reassemble.selectorGlobalindexEdgeDiv).css("display", "none");
      globalindexWidth = Reassemble.globalindexToggleWidth;
      $(Reassemble.selectorGlobalindexEdgeDiv).width(0);
      $(Reassemble.selectorGlobalindexEdgeDiv).css("margin-left", 0)
    }
    else
    {
      $(Reassemble.selectorGlobalindexTabDiv).css("display", "block");
      $(Reassemble.selectorGlobalindexEdgeDiv).css("display", "block");
      globalindexWidth = Reassemble.globalindexContentWidth + Reassemble.globalindexEdgeWidth + Reassemble.globalindexToggleWidth;
      $(Reassemble.selectorGlobalindexEdgeDiv).width(Reassemble.globalindexEdgeWidth);
      $(Reassemble.selectorGlobalindexEdgeDiv).css("margin-left", Reassemble.globalindexContentWidth);
      if ($(ExpandFolder.selectorTreePaneDiv).offset() != null)
      {
        var treeOffsetTop = $(ExpandFolder.selectorTreePaneDiv).offset().top - $(window).scrollTop();
        if (clientHeight > (treeOffsetTop + 200))
        {
          $(ExpandFolder.selectorTreePaneDiv).height(clientHeight - treeOffsetTop - TemplateSettings.globalindexPanePadH)
        }
      }
    }
    contentWidth = clientWidth - autoindexWidth - globalindexWidth - TemplateSettings.autoindexContentPadW;
    $(Reassemble.selectorAutoindexContentDiv).width(contentWidth);
    $(Reassemble.selectorAutoindexContentDiv).css("margin-left", globalindexWidth);
    $(Reassemble.selectorAutoindexContentDiv).css("margin-right", autoindexWidth);
    $(Reassemble.selectorGlobalindexTabDiv).width(Reassemble.globalindexContentWidth);
    $(Reassemble.selectorGlobalindexTabDiv).css("margin-right", -Reassemble.globalindexContentWidth);
    $(Reassemble.selectorAutoindexWrapperDiv).width(autoindexWidth);
    $(Reassemble.selectorAutoindexWrapperDiv).css("left", clientWidth - autoindexWidth);
    $(Reassemble.selectorGlobalindexWrapperDiv).width(globalindexWidth)
  }
  $("#" + TemplateSettings.apiIframeId).each(function()
  {
    $(this).width(contentWidth - TemplateSettings.apiIframePadW).height(clientHeight - TemplateSettings.apiIframePadH)
  });
  Reassemble.scrollHandler()
};
Reassemble.scrollHandler = function()
{
  if (Reassemble.autoindexEnabled && (Reassemble.autoindexScrollTarget != null))
  {
    var obj = $(Reassemble.autoindexScrollTarget);
    obj.css("top", $(window).scrollTop());
    obj.css("left", $(window).width() - $(Reassemble.selectorAutoindexWrapperDiv).width() + $(window).scrollLeft())
  }
  if (Reassemble.globalindexEnabled && (Reassemble.globalindexScrollTarget != null))
  {
    var obj = $(Reassemble.globalindexScrollTarget);
    obj.css("top", $(window).scrollTop());
    obj.css("left", $(window).scrollLeft())
  }
  if (Reassemble.autoindexEnabled)
    Reassemble.autoindexFocusIndexInvoke()
};
Reassemble.autoindexToggleHandler = function()
{
  if (Reassemble.autoindexEnabled)
  {
    var attrToggle = $(Reassemble.selectorAutoindexWrapperDiv).attr(Reassemble.autoindexToggleAttrId);
    $(Reassemble.selectorAutoindexWrapperDiv).attr(Reassemble.autoindexToggleAttrId, (((attrToggle != null) && (attrToggle == "0")) ? "1" : "0"));
    Reassemble.resizeHandler()
  }
};
Reassemble.globalindexToggleHandler = function()
{
  if (Reassemble.globalindexEnabled)
  {
    var attrToggle = $(Reassemble.selectorGlobalindexWrapperDiv).attr(Reassemble.globalindexToggleAttrId);
    $(Reassemble.selectorGlobalindexWrapperDiv).attr(Reassemble.globalindexToggleAttrId, (((attrToggle != null) && (attrToggle == "0")) ? "1" : "0"));
    Reassemble.resizeHandler()
  }
};
Reassemble.autoindexFocusIndexInvoked = false;
Reassemble.selectorAutoindexFocusIndex = Reassemble.selectorAutoindexTabDiv + " a[href*='#']";
Reassemble.autoindexFocusIndex = function()
{
  var a,
    b,
    e,
    d = $(window).scrollTop() + TemplateSettings.autoindexFocusOffset;
  $(Reassemble.selectorAutoindexFocusIndex).each(function()
  {
    var c = "#" + $(this).attr("href").split("#")[1];
    if ($(c).length && ($(this).parent().css("display") != "none") && (e = $(c).offset().top, !(d < e) && (!a || b <= e)))
      a = this,
      b = e
  });
  $(Reassemble.selectorAutoindexFocusIndex).each(function()
  {
    Reassemble.autoindexToggleClass($(this), "focused", this == a)
  });
  Reassemble.autoindexFocusIndexInvoked = false
};
Reassemble.autoindexFocusIndexInvoke = function()
{
  Reassemble.autoindexFocusIndexInvoked || (setTimeout(Reassemble.autoindexFocusIndex, 100), Reassemble.autoindexFocusIndexInvoked = true)
};
Reassemble.autoindexToggleClass = function(a, b, d)
{
  d ? a.addClass(b) : a.removeClass(b)
};
Reassemble.reassemble = function()
{
  var enableAddon = false;
  var loader = new DynLoader(Reassemble.reassembleImpl, false);
  if ((typeof AddonList !== "undefined") && $.isArray(AddonList))
  {
    for (var n = 0, len = AddonList.length; n < len; n++)
    {
      var addonName = AddonList[n];
      if (addonName != "")
      {
        enableAddon = true;
        loader.addFile(addonName, TemplateSettings.getRootPath() + "Addon_" + addonName + "/tocData.js")
      }
    }
  }
  if (enableAddon)
  {
    loader.load()
  }
  else
  {
    Reassemble.reassembleImpl()
  }
};
Reassemble.reassembleImpl = function()
{
  Reassemble.objectTocData.processTreeData();
  var levels = "1";
  var figures = "";
  var tables = "";
  var codes = "";
  var forceNoIndex = false;
  var url = "";
  var q_search = "";
  var q_string = "";
  var startLevel = 1;
  var endLevel = 6;
  var offsetLevel = 0;
  var autoindex = false;
  var forceDefault = false;
  var forceNolabel = false;
  var forceNoChapter = false;
  var chaseIndexURL = true;
  var chaseIndexJavaScript = true;
  var folded = false;
  var noReset = false;
  var attrBody = document.body.getAttribute(Reassemble.settingAttrId);
  if (attrBody != null)
  {
    var params = attrBody.split(",");
    for (var i = 0; i < params.length; i++)
    {
      var param = params[i];
      var ind = param.indexOf("=");
      if (ind < 0)
        continue;
      var key = decodeURIComponent(param.substring(0, ind));
      key = key.replace(/\s/g, "");
      var data = decodeURIComponent(param.slice(ind + 1));
      if (data == null)
        data = "";
      data = data.replace(/\s/g, "");
      if (key.match(/^start$/i))
      {
        startLevel = Reassemble.str2int(data)
      }
      else if (key.match(/^end$/i))
      {
        endLevel = Reassemble.str2int(data)
      }
      else if (key.match(/^autoindex$/i))
      {
        if (data.match(/^yes$|^true$/i))
          autoindex = true;
        else if (data.match(/^no$|^false$/i))
          autoindex = false
      }
      else if (key.match(/^forcedefault$/i))
      {
        if (data.match(/^yes$|^true$/i))
          forceDefault = true;
        else if (data.match(/^no$|^false$/i))
          forceDefault = false
      }
      else if (key.match(/^forcenolabel$/i))
      {
        if (data.match(/^yes$|^true$/i))
          forceNolabel = true;
        else if (data.match(/^no$|^false$/i))
          forceNolabel = false
      }
      else if (key.match(/^forcenochapter$/i))
      {
        if (data.match(/^yes$|^true$/i))
          forceNoChapter = true;
        else if (data.match(/^no$|^false$/i))
          forceNoChapter = false
      }
      else if (key.match(/^level$/i))
      {
        levels = data.replace(/\./g, ",")
      }
      else if (key.match(/^figure$/i))
      {
        figures = Reassemble.str2int(data)
      }
      else if (key.match(/^table$/i))
      {
        tables = Reassemble.str2int(data)
      }
      else if (key.match(/^code$/i))
      {
        codes = Reassemble.str2int(data)
      }
      else if (key.match(/^chaseindex$/i))
      {
        if (data.match(/^yes$/i))
        {
          chaseIndexURL = true;
          chaseIndexJavaScript = true
        }
        else if (data.match(/^no$/i))
        {
          chaseIndexURL = false;
          chaseIndexJavaScript = false
        }
        else if (data.match(/^url$/i))
        {
          chaseIndexURL = true;
          chaseIndexJavaScript = false
        }
        else if (data.match(/^js$/i))
        {
          chaseIndexURL = false;
          chaseIndexJavaScript = true
        }
      }
      else if (key.match(/^offset$/i))
      {
        offsetLevel = Reassemble.str2int(data)
      }
      else if (key.match(/^autoindextab$/i))
      {
        if (data.match(/^fold$/i))
          folded = true;
        else if (data.match(/^open$/i))
          folded = false
      }
      else if (key.match(/^noreset$/i))
      {
        if (data.match(/^yes$|^true$/i))
          noReset = true;
        else if (data.match(/^no$|^false$/i))
          noReset = false
      }
      else if (key.match(/^forcenoindex$/i))
      {
        if (data.match(/^yes$|^true$/i))
          forceNoIndex = true;
        else if (data.match(/^no$|^false$/i))
          forceNoIndex = false
      }
      else if (key.match(/^printpage$/i))
      {
        if (data.match(/^yes$|^true$/i))
          PrintPage.createPrintPage(window, Reassemble.objectTocData)
      }
    }
    if (startLevel < 1)
      startLevel = 1;
    if (startLevel > 6)
      startLevel = 6;
    if (endLevel > 6)
      endLevel = 6;
    if (startLevel > endLevel)
      endLevel = startLevel;
    if (offsetLevel < -5)
      offsetLevel = -5;
    if (offsetLevel > 5)
      offsetLevel = 5
  }
  var query = location.search;
  query = query.slice(query.lastIndexOf("?") + 1);
  var params = query.split("&");
  for (var i = 0; i < params.length; i++)
  {
    var param = params[i];
    var ind = param.indexOf("=");
    if (ind < 0)
      continue;
    var key = param.substring(0, ind);
    key = decodeURIComponent(key);
    key = key.replace(/\s/g, "");
    var data = decodeURIComponent(param.slice(ind + 1));
    if (data == null)
      data = "";
    data = data.replace(/\s/g, "");
    if (key.match(/^level$/i))
    {
      if (!forceDefault)
        levels = data
    }
    else if (key.match(/^figure$/i))
    {
      if (!forceDefault)
        figures = data
    }
    else if (key.match(/^table$/i))
    {
      if (!forceDefault)
        tables = data
    }
    else if (key.match(/^code$/i))
    {
      if (!forceDefault)
        codes = data
    }
    else if (key.match(/^noindex$/i))
    {
      if (data.match(/^yes$|^true$/i))
        forceNoIndex = true;
      else if (data.match(/^no$|^false$/i))
        forceNoIndex = false
    }
    else if (key.match(/^url$/i))
    {
      url = data
    }
    else if (key.match(/^highlighttext$/i))
    {
      q_search = param.slice(ind + 1);
      if (q_search == null)
        q_search = "";
      var q_array = q_search.split("+");
      q_search = "";
      for (var n = 0; n < q_array.length; n++)
        q_search += (((n > 0) ? " " : "") + decodeURIComponent(q_array[n]))
    }
    else if (key.match(/^q$/i))
    {
      q_string = param.slice(ind + 1);
      if (q_string == null)
        q_string = "";
      var q_array = q_string.split("+");
      q_string = "";
      for (var n = 0; n < q_array.length; n++)
        q_string += (((n > 0) ? " " : "") + decodeURIComponent(q_array[n]))
    }
  }
  if ((q_string == "") && (q_search != ""))
    q_string = q_search;
  var arrayLevel = new Array(6);
  var arrayKeep = new Array(6);
  var figure = Reassemble.str2int(figures);
  figure = (figure > 0) ? (figure - 1) : 0;
  var table = Reassemble.str2int(tables);
  table = (table > 0) ? (table - 1) : 0;
  var code = Reassemble.str2int(codes);
  code = (code > 0) ? (code - 1) : 0;
  levels = levels.split(",");
  for (var i = 0; i < 6; i++)
  {
    var n = (levels.length > i) ? Reassemble.str2int(levels[i]) : 0;
    n = (n > 0) ? (n - 1) : 0;
    arrayLevel[i] = n;
    arrayKeep[i] = (levels.length > i) ? true : false
  }
  var baseLevel = 7;
  var baseLevelNone = 7;
  var arrayIndex = new Array;
  arrayIndex.length = 0;
  var elems;
  if (document.all)
  {
    elems = document.all
  }
  else if (document.getElementsByTagName)
  {
    elems = document.getElementsByTagName("*")
  }
  else
  {
    return
  }
  if (elems.length)
  {
    var basePageId = "";
    for (var i = 0; i < elems.length; i++)
    {
      var elem = elems[i];
      var tagName = elem.tagName;
      var className = elem.className;
      var noLabel = false;
      var noChapter = false;
      var noIndex = false;
      var keep = false;
      var elemAttr = elem.getAttribute(Reassemble.settingAttrId);
      if (elemAttr != null)
      {
        var attrs = elemAttr.split(",");
        for (var x = 0; x < attrs.length; x++)
        {
          attrs[x] = attrs[x].replace(/\s/g, "");
          if (attrs[x].match(/^none$/i))
          {
            noLabel = true;
            noIndex = true
          }
          if (attrs[x].match(/^keep$/i))
            keep = true;
          if (attrs[x].match(/^nochapter$/i))
            noChapter = true;
          if (attrs[x].match(/^nolabel$/i))
            noLabel = true;
          if (attrs[x].match(/^noindex$/i))
            noIndex = true
        }
      }
      if (forceNolabel)
        noLabel = true;
      if (forceNoChapter)
        noChapter = true;
      if (tagName.match(/^H[1-6]$/i))
      {
        if (!noLabel)
        {
          var current = Reassemble.str2int(tagName.slice(1)) - startLevel + offsetLevel;
          if ((current >= 0) && (current <= (endLevel - startLevel)))
          {
            for (var x = 0; x < current; x++)
            {
              if (arrayKeep[x])
                arrayLevel[x] = Reassemble.str2int(levels[x])
            }
            if (!keep)
            {
              for (var x = (current + 1); x < 6; x++)
              {
                arrayLevel[x] = 0;
                arrayKeep[x] = false
              }
              if ((current == 0) && !noReset)
              {
                figure = 0;
                table = 0;
                code = 0
              }
            }
            arrayLevel[current]++;
            arrayKeep[current] = false;
            var str = "";
            if (current < 4)
            {
              for (var x = 0; x <= current; x++)
                str += (arrayLevel[x] + ".");
              elem.innerHTML = (noChapter ? "" : (str + " ")) + elem.innerHTML
            }
          }
        }
        if (autoindex && !noIndex)
        {
          var current = Reassemble.str2int(tagName.slice(1)) - startLevel;
          if ((current >= 0) && (current <= (endLevel - startLevel)))
          {
            var elemId = elem.id;
            if ((elemId == null) || (elemId == ""))
            {
              elemId = "autoindex_" + basePageId + "_" + arrayIndex.length;
              elem.id = elemId
            }
            else
            {
              basePageId = elemId
            }
            var data = current + "\t" + elemId + "\t" + elem.innerHTML;
            arrayIndex.push(data);
            if (!noLabel)
            {
              if (baseLevel > current)
                baseLevel = current
            }
            else
            {
              if (baseLevelNone > current)
                baseLevelNone = current
            }
          }
        }
      }
      else if (tagName.match(/^DIV$/i))
      {
        if (!noLabel && className.match(/^figure$/i))
        {
          figure++;
          elem.innerHTML = LocaleString.lcStrLabelFigure + (noChapter ? "" : (arrayLevel[0] + "-")) + figure + ". " + elem.innerHTML
        }
        else if (!noLabel && className.match(/^table$/i))
        {
          table++;
          elem.innerHTML = LocaleString.lcStrLabelTable + (noChapter ? "" : (arrayLevel[0] + "-")) + table + ". " + elem.innerHTML
        }
        else if (!noLabel && className.match(/^code$/i))
        {
          code++;
          elem.innerHTML = LocaleString.lcStrLabelCode + (noChapter ? "" : (arrayLevel[0] + "-")) + code + ". " + elem.innerHTML
        }
      }
    }
  }
  if (!forceNoIndex && autoindex && ((typeof jQuery) == "function"))
  {
    Reassemble.autoindexEnabled = true;
    var objDivContent = document.getElementById(Reassemble.autoindexContentId);
    if (objDivContent == null)
    {
      $("body").wrapInner('<div id="' + Reassemble.autoindexContentId + '"></div>')
    }
    var objDivWrapper = document.getElementById(Reassemble.autoindexWrapperId);
    if (objDivWrapper == null)
    {
      $("body").prepend('<div id="' + Reassemble.autoindexWrapperId + '"></div>')
    }
    var objDivIndex = document.getElementById(Reassemble.autoindexTabId);
    if (objDivIndex == null)
    {
      $(Reassemble.selectorAutoindexWrapperDiv).prepend('<div id="' + Reassemble.autoindexTabId + '"></div>')
    }
    var objDivToggle = document.getElementById(Reassemble.autoindexToggleId);
    if (objDivToggle == null)
    {
      $(Reassemble.selectorAutoindexWrapperDiv).prepend('<div id="' + Reassemble.autoindexToggleId + '"></div>')
    }
    if (baseLevel > 6)
      baseLevel = baseLevelNone;
    var prev = 0;
    var strHtml = '<ul>';
    strHtml += ('<li><a href="#' + Reassemble.autoindexContentId + '" class="toplevel">' + LocaleString.lcStrLabelAcTopLevel + '</a></li>');
    for (var i = 0; i < arrayIndex.length; i++)
    {
      var inds = arrayIndex[i].split("\t");
      if (inds.length > 2)
      {
        var level = Reassemble.str2int(inds[0]);
        var id = inds[1];
        var text = inds[2];
        level -= baseLevel;
        if (level < 0)
          level = 0;
        if (level < prev)
        {
          for (var x = prev; x > level; x--)
            strHtml += '</ul>'
        }
        else if (level > prev)
        {
          for (var x = prev; x < level; x++)
            strHtml += '<ul>'
        }
        strHtml += ('<li><a href="#' + id + '" class="level' + level + '">' + text + '</a></li>');
        prev = level
      }
    }
    for (var x = prev; x > 0; x--)
      strHtml += '</ul>';
    $(Reassemble.selectorAutoindexContentDiv).attr("class", Reassemble.styleAutoindexContent);
    $(Reassemble.selectorAutoindexTabDiv).attr("class", Reassemble.styleAutoindexTab).html(strHtml);
    $(Reassemble.selectorAutoindexToggleDiv).attr("class", Reassemble.styleAutoindexToggle).click(Reassemble.autoindexToggleHandler);
    $(Reassemble.selectorAutoindexWrapperDiv).attr(Reassemble.autoindexToggleAttrId, (folded ? "0" : "1"));
    var pads = ["15px", "30px", "40px", "50px", "60px", "70px", "70px", "70px", "70px", "70px"];
    $(Reassemble.selectorAutoindexTabDiv + " a").each(function()
    {
      if (this.className.match(/^level[0-9]/i))
      {
        var a = parseInt(this.className.slice(5));
        var b = "0px 0px 0px " + pads[(isNaN(a) ? "0px" : a)];
        this.style.padding = b
      }
    });
    if ($(Reassemble.selectorAutoindexWrapperDiv).css("position") != "fixed")
      Reassemble.autoindexScrollTarget = document.getElementById(Reassemble.autoindexWrapperId)
  }
  if ((typeof jQuery) == "function")
  {
    var cursorType = "zoom-in";
    var UA = window.navigator.userAgent;
    if ((UA != null) && ((UA.match(/MSIE \d+.\d+/i) != null) || (UA.match(/Trident\/\d+.\d+/i) != null)))
      cursorType = "pointer";
    $("body img").each(function()
    {
      if ($(this).parents("a").length == 0)
      {
        if (this.title.match(/^DoNotOpen(Image)?Viewer/i) != null)
        {
          this.title = this.title.replace(/^DoNotOpen(Image)?Viewer\s*/i, "")
        }
        else
        {
          this.title = LocaleString.lcStrOpenViewer;
          $(this).click(function()
          {
            Reassemble.viewImage(this)
          }).css("cursor", cursorType)
        }
      }
      else
      {
        this.title = LocaleString.lcStrLinkJump
      }
    });
    $("body div.expand-container").each(function()
    {
      var expandId = this.id.replace("expander-", "");
      $("#expander-control-" + expandId).click(function()
      {
        Reassemble.expandMacro(this)
      })
    });
    $("body div.related_links").each(function()
    {
      var pageId = $(this).data("pageid");
      if ((pageId != null) && (pageId != "") && (Reassemble.objectTocData != null) && (Reassemble.objectTocData.relatedLinks != null))
      {
        var relatedLinks = Reassemble.objectTocData.relatedLinks;
        if (typeof(relatedLinks) == "object")
        {
          var linkList = relatedLinks[pageId];
          if (typeof(linkList) == "object")
          {
            var expandId = pageId + "-related";
            var content = "";
            content += '<div class="panel" style="border-width: 1px;">';
            content += '<div class="panelHeader" style="border-bottom-width: 1px;">';
            content += '<div class="expand-control" id="expander-control-' + expandId + '">';
            content += '<span class="expand-control-icon collapsed-icon"> </span>';
            content += '<span class="expand-control-text"><b>' + Reassemble.escapeHtml(LocaleString.lcStrRelatedLinks) + '</b></span>';
            content += '</div>';
            content += '</div>';
            content += '<div class="panelContent">';
            content += '<div class="expand-content expand-hidden" id="expander-content-' + expandId + '">';
            content += '<ul>';
            for (var n = 0; n < linkList.length; n++)
            {
              var linkObject = linkList[n];
              content += '<li><a href="../' + linkObject["url"] + '">' + Reassemble.escapeHtml(linkObject["title"]) + '</a></li>'
            }
            content += '</ul>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            $(this).html(content).addClass("related-links-exist");
            $("#expander-control-" + expandId).click(function()
            {
              Reassemble.expandMacro(this)
            })
          }
        }
      }
    })
  }
  if (!forceNoIndex && ((typeof jQuery) === "function") && ($(TemplateSettings.selectorTocFile).attr("src") != null) && (Reassemble.objectTocData == null))
  {
    alert(LocaleString.lcStrMessageNothingToc)
  }
  if (!forceNoIndex && ((typeof jQuery) === "function") && ($(TemplateSettings.selectorTocFile).attr("src") != null) && (Reassemble.objectTocData != null))
  {
    Reassemble.globalindexEnabled = true;
    var objDivContent = document.getElementById(Reassemble.autoindexContentId);
    if (objDivContent == null)
    {
      $("body").wrapInner('<div id="' + Reassemble.autoindexContentId + '"></div>')
    }
    $(Reassemble.selectorAutoindexContentDiv).attr("class", Reassemble.styleAutoindexContent);
    $("body").prepend('<div id="' + Reassemble.globalindexWrapperId + '"><div id="' + Reassemble.globalindexToggleId + '"></div><div id="' + Reassemble.globalindexTabId + '"></div><div id="' + Reassemble.globalindexEdgeId + '"></div></div>');
    $(Reassemble.selectorGlobalindexEdgeDiv).bind("mousedown", Reassemble.startUpdatingWidth);
    $("body").bind("mousemove", Reassemble.updatingWidth).bind("mouseup", Reassemble.endUpdatingWidth);
    $(Reassemble.selectorGlobalindexTabDiv).prepend('<div id="' + Reassemble.globalindexRootPaneId + '"></div>');
    $("#" + Reassemble.globalindexRootPaneId).html('<div id="' + TemplateSettings.titleLogoDivId + '" class="' + TemplateSettings.styleTitleLogoDiv + '" align="center"></div>' + '<div id="' + TemplateSettings.titleTocDivId + '" class="' + TemplateSettings.styleTitleTocDiv + '" align="center"></div>' + '<div id="' + TemplateSettings.searchBoxMiniDivId + '" align="center"></div>' + '<div id="' + TemplateSettings.printControllerId + '" align="left"></div>' + '<div id="' + TemplateSettings.treeControllerId + '"></div>' + '<div id="' + TemplateSettings.divTreePaneId + '" class="' + TemplateSettings.styleTreePane + '">' + '</div>');
    if ((Reassemble.objectTocData != null) && Reassemble.objectTocData.isEnabledSelectPackage())
    {
      Guideline.setupPackageList()
    }
    Reassemble.loadViewMode();
    var objPrintController = document.getElementById(TemplateSettings.printControllerId);
    if (objPrintController != null)
    {
      objPrintController.style.display = "none";
      var htmlPrintController = "";
      htmlPrintController += '<div id="' + TemplateSettings.printControllerBaseId + '">';
      htmlPrintController += '<div id="' + TemplateSettings.printControllerTitleId + '"></div>';
      htmlPrintController += '<div id="' + TemplateSettings.printControllerIconId + '"><input type="button" value=" " id="' + TemplateSettings.printControllerButtonId + '" onClick="Reassemble.togglePrintSettingButton()" title=""/></div>';
      htmlPrintController += '</div>';
      htmlPrintController += '<div id="' + TemplateSettings.printControllerPaneId + '"></div>';
      objPrintController.innerHTML = htmlPrintController;
      if ((Reassemble.objectTocData != null) && Reassemble.objectTocData.isEnablePrintSetting())
      {
        var objTitle = document.getElementById(TemplateSettings.printControllerTitleId);
        var objButton = document.getElementById(TemplateSettings.printControllerButtonId);
        var objPane = document.getElementById(TemplateSettings.printControllerPaneId);
        if ((objTitle != null) && (objButton != null) && (objPane != null))
        {
          objTitle.innerHTML = Reassemble.escapeHtml(LocaleString.lcStrLabelPrintSetting);
          var toolTip = LocaleString.lcStrLabelPrintSetting + "\n";
          if (Reassemble.isLocalChrome())
            toolTip += LocaleString.lcStrAlertPrintPageByChrome + "\n";
          toolTip += LocaleString.lcStrLabelPrintSettingToolTip;
          objButton.title = toolTip;
          if ((Reassemble.objectTocData != null) && Reassemble.objectTocData.isEnablePrintPage())
          {
            var labels = [LocaleString.lcStrLabelModeAll, LocaleString.lcStrLabelModeDesc, LocaleString.lcStrLabelModeItem];
            var htmlRadio = '';
            for (var n = 0, len = labels.length; n < len; n++)
            {
              htmlRadio += '<input type="radio" id="' + TemplateSettings.changeViewModeIdPrefix + n + '" name="mode" value="' + n + '" onClick="Reassemble.changeViewMode(\'' + n + '\');" ' + (Reassemble.viewMode == n ? 'checked ' : '') + ' /><label>' + labels[n] + '</label><br />'
            }
            htmlRadio += '<br />';
            objPane.innerHTML = htmlRadio
          }
        }
        objPrintController.style.display = "block"
      }
    }
    var htmlExpand = '<input type="button" value="' + Reassemble.escapeHtml(LocaleString.lcStrTitleOpenAll) + '" onClick="ExpandFolder.openAll();" />&nbsp;' + '<input type="button" value="' + Reassemble.escapeHtml(LocaleString.lcStrTitleCloseAll) + '" onClick="ExpandFolder.closeAll();" />&nbsp;';
    $("#" + TemplateSettings.treeControllerId).html(htmlExpand);
    $(Reassemble.selectorGlobalindexToggleDiv).click(Reassemble.globalindexToggleHandler);
    $(Reassemble.selectorGlobalindexWrapperDiv).attr(Reassemble.globalindexToggleAttrId, "1");
    if (Reassemble.objectTocData != null)
    {
      var rootURL = $(TemplateSettings.selectorTocFile).attr("src").replace(TemplateSettings.templateTocFileName, "");
      Reassemble.objectTocData.setRootURL(rootURL);
      Reassemble.objectTocData.createContents();
      ExpandFolder.initExpandFolder()
    }
    if (chaseIndexURL || chaseIndexJavaScript)
    {
      Reassemble.globalindexFocusIndex()
    }
    if ($(Reassemble.selectorGlobalindexWrapperDiv).css("position") != "fixed")
      Reassemble.globalindexScrollTarget = document.getElementById(Reassemble.globalindexWrapperId)
  }
  if (q_string != "")
  {
    var obj = document.getElementById("search_mini_text");
    if (obj != null)
      obj.value = q_string
  }
  if ((q_search != "") && ((typeof jQuery) == "function"))
  {
    var r_array = Search.parseQuery(q_search);
    var strReg = "";
    for (var x = 0; x < r_array.length; x++)
    {
      if (r_array[x] == "")
        continue;
      if (r_array[x].match(/^ +$/))
        continue;
      if (r_array[x].charAt(0) == "\t")
        continue;
      var str = Search.escapeRegex(r_array[x]);
      if (strReg != "")
        strReg += "|";
      strReg += str
    }
    if (strReg != "")
    {
      var objDivContent = document.getElementById(Reassemble.autoindexContentId);
      if (objDivContent != null)
      {
        $(document).ready(Reassemble.highlightText(document, objDivContent, strReg, "search_highlight"))
      }
      else
      {
        $(document).ready(Reassemble.highlightText(document, document.body, strReg, "search_highlight"))
      }
    }
  }
  if ((Reassemble.objectTocData != null) && ((typeof jQuery) === "function"))
  {
    var manager = Reassemble.objectTocData;
    var breadCrumb = $("div.breadcrumb,div.breadcrumb_bottom");
    var prevCell = $("td.page_navi_left");
    var nextCell = $("td.page_navi_right");
    var current = Reassemble.getCurrentPageNaviObject(manager);
    if (current != null)
    {
      if (breadCrumb.length > 0)
        breadCrumb.html(Reassemble.getBreadCrumbText(manager, current));
      if (prevCell.length > 0)
        prevCell.html(Reassemble.buildPageNaviLink(manager, current, true));
      if (nextCell.length > 0)
        nextCell.html(Reassemble.buildPageNaviLink(manager, current, false))
    }
  }
  Reassemble.loadSetting();
  Reassemble.changeViewMode(Reassemble.viewMode);
  Reassemble.changePrintSettingButtonFace();
  Reassemble.resizeHandler();
  Reassemble.scrollHandler();
  if (chaseIndexURL && ((typeof jQuery) === "function"))
    Reassemble.scrollIndexURL(location.href);
  if ((typeof jQuery) === "function")
  {
    $("table.codeblock td.code").each(function()
    {
      this.title = "Hint: double-click to select code"
    });
    $("table.codeblock td.code").bind("dblclick", function(e)
    {
      window.getSelection().selectAllChildren(e.target)
    });
    if (location.hash.length > 1)
    {
      var targetId = location.hash.substr(1);
      var targetObj = document.getElementById(targetId);
      if (targetObj != null)
      {
        var opos = $(targetObj).offset().top;
        if (opos > 0)
          window.scrollTo(0, opos)
      }
      else
      {
        var targetObjs = document.getElementsByName(targetId);
        if (targetObjs.length > 0)
        {
          var opos = $(targetObjs[0]).offset().top;
          if (opos > 0)
            window.scrollTo(0, opos)
        }
      }
    }
    var useViz = false;
    $("div.flowchart-inline, div.flowchart-block").each(function()
    {
      useViz = true
    });
    if (useViz)
      Reassemble.loadViz();
    Reassemble.termTipCalcBaseMargin = Reassemble.isFirefox() || Reassemble.isChrome();
    $("body").prepend("<style id=\"termTipAfter\"></style><style id=\"termTipUpperAfter\"></style><div id=\"TermTipDiv\" style=\"display: none;\"></div>");
    $("span.TermTip").on("mouseover", function(event)
    {
      Reassemble.showTermTip(this, event)
    }).on("mouseout", function()
    {
      Reassemble.hideTermTip()
    });
    Reassemble.controlTermTip();
    $("#termtip_controller input[name='termtip_display']:eq(0)").prop("checked", Reassemble.useTermTip);
    $("#termtip_controller input[name='termtip_display']:eq(1)").prop("checked", !Reassemble.useTermTip);
    $("#" + TemplateSettings.titleLogoDivId + " img").bind("load", Reassemble.resizeHandler)
  }
};
Reassemble.getCurrentPageNaviObject = function(manager)
{
  var current = Reassemble.getCurrentPageNaviObjectByUrl(manager, location.href);
  if (current == null)
  {
    current = Reassemble.getCurrentPageNaviObjectByUrl(manager, location.pathname)
  }
  return current
};
Reassemble.getCurrentPageNaviObjectByUrl = function(manager, url)
{
  var currentId = manager.getPageNaviObjectId(url);
  var current = manager.getPageNaviObject(currentId);
  return current
};
Reassemble.getBreadCrumbText = function(manager, current)
{
  var breadcrumbtext = Reassemble.escapeHtml(current.title);
  var pobj = manager.getPageNaviObject(current.parentId);
  while (pobj != null)
  {
    if (pobj.linkEnabled && pobj.currentUrl != "")
    {
      breadcrumbtext = '<a href="' + (manager.isRawUrlLink(pobj.dataType) ? '' : manager.getRootURL()) + pobj.currentUrl + '"' + (manager.isExternalLink(pobj.dataType) ? ' target="_blank"' : '') + '>' + Reassemble.escapeHtml(pobj.title) + '</a>' + Reassemble.escapeHtml(' > ') + breadcrumbtext
    }
    else
    {
      breadcrumbtext = Reassemble.escapeHtml(pobj.title) + Reassemble.escapeHtml(' > ') + breadcrumbtext
    }
    pobj = manager.getPageNaviObject(pobj.parentId)
  }
  return breadcrumbtext
};
Reassemble.buildPageNaviLink = function(manager, current, isPrev)
{
  var linktext = "";
  var obj;
  if (isPrev)
  {
    obj = manager.getPageNaviObject(current.prevId)
  }
  else
  {
    obj = manager.getPageNaviObject(current.nextId)
  }
  if (obj != null)
  {
    linktext = Reassemble.escapeHtml((isPrev ? "<< " : "") + obj.title + (isPrev ? "" : " >>"));
    if (obj.linkEnabled)
    {
      linktext = '<a href="' + (manager.isRawUrlLink(obj.dataType) ? '' : manager.getRootURL()) + obj.currentUrl + '"' + (manager.isExternalLink(obj.dataType) ? ' target="_blank"' : '') + '>' + linktext + '</a>'
    }
  }
  else
  {
    if (isPrev)
    {
      linktext = Reassemble.escapeHtml("<< " + LocaleString.lcStrTopPageName);
      linktext = '<a href="' + manager.getRootURL() + 'title.html">' + linktext + '</a>'
    }
  }
  return linktext
};
Reassemble.loadViz = function()
{
  TemplateSettings.addJavaScript(TemplateSettings.getRootPath() + "template/flowchart/js/Viz.js/viz.js", Reassemble.execViz, Reassemble.execViz, Reassemble.execViz)
};
Reassemble.execViz = function()
{
  $("div.flowchart-inline, div.flowchart-block").each(function()
  {
    if (Reassemble.isFirefox() || Reassemble.isChrome())
    {
      var img = Viz($(this).data("flowchart"), {format: "png-image-element"});
      this.appendChild(img)
    }
    else
    {
      $(this).append(Viz($(this).data("flowchart")))
    }
  })
};
Reassemble.showTermTip = function(obj, evt)
{
  var $obj = $(obj);
  if ($obj.hasClass("TermTipDisabled"))
    return;
  var termId = $obj.data("termid");
  if (termId)
  {
    if ((typeof TermTip !== "undefined") && (typeof TermTip.termTipData !== "undefined"))
    {
      var descriptionData = TermTip.termTipData[termId];
      if (descriptionData)
      {
        var $div = $("#TermTipDiv");
        $div.html(descriptionData["description"]);
        var lines = 1;
        var limit_top = $(window).scrollTop();
        var limit_bottom = limit_top + $(window).innerHeight();
        var limit_right = $(window).width();
        var base = $("div#autoindex_content");
        var base_offset = base.offset().top;
        var div_width = $div.outerWidth();
        var div_height = $div.outerHeight();
        var obj_offset = $obj.offset();
        var obj_left = obj_offset.left;
        var obj_top = obj_offset.top;
        var obj_width = $obj.width();
        var obj_height = $obj.outerHeight(true);
        if (obj_offset.left < obj.offsetLeft)
        {
          lines = 2;
          obj_left = limit_right
        }
        obj_height = obj_height / lines;
        var left_pos;
        var top_pos;
        if (limit_right >= (div_width + obj_left))
        {
          left_pos = obj_left - 4
        }
        else
        {
          left_pos = limit_right - div_width
        }
        var obj_lineheight = parseInt($(obj).css("line-height"), 10);
        if (isNaN(obj_lineheight))
          obj_lineheight = obj_height;
        if (Reassemble.termTipCalcBaseMargin)
        {
          if (limit_bottom >= (obj_top + div_height + obj_height))
          {
            top_pos = obj_top + obj_height - base_offset + 2;
            $obj.removeClass("TermTipUpper")
          }
          else
          {
            top_pos = obj_top - div_height - base_offset - 2;
            $obj.addClass("TermTipUpper")
          }
        }
        else
        {
          base_offset = ((base.length > 0) ? base[0].offsetTop : 0);
          var parent_margin_top = parseInt($(obj).parent().css("margin-top"), 10);
          var parent_margin_bottom = parseInt($(obj).parent().css("margin-bottom"), 10);
          if (isNaN(parent_margin_top))
            parent_margin_top = 0;
          if (isNaN(parent_margin_bottom))
            parent_margin_bottom = 0;
          var borderwidth = 0;
          $obj.parents("table,th,td").each(function()
          {
            var w = parseFloat($(this).css("border-top-width"));
            if (!isNaN(w))
              borderwidth += w;
            w = parseFloat($(this).css("border-bottom-width"));
            if (!isNaN(w))
              borderwidth += w
          });
          if (base_offset > 0)
          {
            top_pos = obj_top + (obj_height - obj_lineheight) + parent_margin_bottom + ((parent_margin_bottom > 0) ? -borderwidth : 2) - borderwidth
          }
          else
          {
            top_pos = obj_top + parent_margin_bottom + ((parent_margin_bottom > 0) ? -borderwidth : 2) - borderwidth
          }
          $obj.removeClass("TermTipUpper")
        }
        $("#termTipAfter").replaceWith("<style id=\"termTipAfter\">span.TermTip:not(.TermTipDisabled):hover:after { top: " + (obj_height - 14 + 3) + "px; }</style>");
        $("#termTipUpperAfter").replaceWith("<style id=\"termTipUpperAfter\">span.TermTip.TermTipUpper:not(.TermTipDisabled):hover:after { top: -3px; }</style>");
        $div.css({
          top: top_pos, left: left_pos
        }).show()
      }
    }
  }
};
Reassemble.hideTermTip = function()
{
  $("#TermTipDiv").hide()
};
Reassemble.useTermTip = true;
Reassemble.controlTermTip = function(flag)
{
  if (typeof flag === "boolean")
    Reassemble.useTermTip = flag;
  if (Reassemble.useTermTip)
  {
    $("span.TermTip").removeClass("TermTipDisabled")
  }
  else
  {
    $("span.TermTip").addClass("TermTipDisabled")
  }
};
Reassemble.changeTermTipEnabled = function()
{
  var value = $("input[name='termtip_display']:checked").val();
  if (value === "on")
  {
    Reassemble.useTermTip = true
  }
  else if (value === "off")
  {
    Reassemble.useTermTip = false
  }
  Reassemble.controlTermTip()
};
Reassemble.selectorGlobalindexFocusIndex = ExpandFolder.selectorTreePaneDiv + " a";
Reassemble.focusIndexJS = function(url)
{
  if (url == null)
    return;
  url = url.replace(/\.\.\//g, "");
  var a = null;
  $(Reassemble.selectorGlobalindexFocusIndex).each(function()
  {
    var b = $(this).attr("href");
    var c = b.match(/viewPage\("([^,]+)",[^\)]+\)/i);
    var d = RegExp.$1.replace(/\.\.\//g, "");
    if (c != null && d != null && url.lastIndexOf(d) != -1)
      a = b
  });
  $(Reassemble.selectorGlobalindexFocusIndex).each(function()
  {
    ($(this).attr("href") == a) ? $(this).addClass("focused") : $(this).removeClass("focused")
  })
};
Reassemble.filterURL = function(url)
{
  if (url == null)
    return null;
  var pQ = url.lastIndexOf("?");
  var pA = url.lastIndexOf("#");
  var sU = url;
  var sF = "";
  if (pQ != -1)
  {
    var qs = url.slice(pQ + 1);
    if (pQ < pA)
      qs = qs.slice(0, pA - pQ - 1);
    var qa = qs.split("&");
    for (var n = 0; n < qa.length; n++)
      if (qa[n].match(/^file=/i))
        sF = "?" + qa[n]
  }
  var sA = "";
  if (pA != -1)
  {
    sA = url.slice(pA);
    if (pA < pQ)
      sA = sA.slice(0, sA.indexOf("?"))
  }
  if (pQ != -1)
  {
    if ((pA != -1) && (pA < pQ))
      sU = url.slice(0, pA);
    else
      sU = url.slice(0, pQ)
  }
  else if (pA != -1)
  {
    if ((pQ != -1) && (pQ < pA))
      sU = url.slice(0, pQ);
    else
      sU = url.slice(0, pA)
  }
  return sU + sF + sA
};
Reassemble.focusIndexURL = function(url)
{
  if (url == null)
    return;
  var a = null;
  var c = null;
  var dUrl = decodeURIComponent(Reassemble.filterURL(url));
  $(Reassemble.selectorGlobalindexFocusIndex).each(function()
  {
    var b = $(this).attr("href");
    if (dUrl.lastIndexOf(Reassemble.filterURL(b.replace(/^(\.\.\/)+/g, ""))) != -1)
    {
      a = b;
      c = this
    }
  });
  $(Reassemble.selectorGlobalindexFocusIndex).each(function()
  {
    ($(this).attr("href") == a) ? $(this).addClass("focused") : $(this).removeClass("focused")
  });
  if (c != null)
  {
    $(c).parents("div." + ExpandFolder.styleOpenDiv + ",div." + ExpandFolder.styleCloseDiv).each(function()
    {
      $(this).css("display", "block").attr(ExpandFolder.attributeFolded, false);
      $(this).prev().children("img").each(function()
      {
        $(this).attr("class", ExpandFolder.styleOpenImg);
        Reassemble.setFolderIconImage(this)
      });
      Reassemble.saveSettingData(this.id, false, "/")
    })
  }
};
Reassemble.setFolderIconImage = function(imgObj)
{
  if (imgObj == null)
    return;
  var obj = $(imgObj);
  if (obj.hasClass(ExpandFolder.styleOpenImg))
  {
    obj.attr("src", ExpandFolder.openIconPath)
  }
  else
  {
    obj.attr("src", ExpandFolder.closeIconPath)
  }
};
Reassemble.globalindexFocusIndexInvoked = false;
Reassemble.globalindexFocusIndexURL = "";
Reassemble.globalindexFocusIndex = function()
{
  var url = location.href;
  if (url != Reassemble.globalindexFocusIndexURL)
  {
    Reassemble.focusIndexURL(url);
    Reassemble.globalindexFocusIndexURL = url
  }
  Reassemble.globalindexFocusIndexInvoked = false
};
Reassemble.globalindexFocusIndexInvoke = function()
{
  Reassemble.globalindexFocusIndexInvoked || (setTimeout(Reassemble.globalindexFocusIndex, 100), Reassemble.globalindexFocusIndexInvoked = true)
};
Reassemble.hashchangeHandler = function()
{
  if (Reassemble.globalindexEnabled)
    Reassemble.globalindexFocusIndexInvoke()
};
Reassemble.scrollIndexURL = function(url)
{
  if (url == null)
    return;
  var a = null;
  var dUrl = decodeURIComponent(Reassemble.filterURL(url));
  $(Reassemble.selectorGlobalindexFocusIndex).each(function()
  {
    var b = $(this).attr("href");
    if (dUrl.lastIndexOf(Reassemble.filterURL(b.replace(/^(\.\.\/)+/g, ""))) != -1)
      a = b
  });
  $(Reassemble.selectorGlobalindexFocusIndex).each(function()
  {
    if ($(this).attr("href") == a)
    {
      $(ExpandFolder.selectorTreePaneDiv).scrollTop($(this).offset().top - $(ExpandFolder.selectorTreePaneDiv).offset().top - 4)
    }
  })
};
Reassemble.saveSettingData = function(name, value, path)
{
  if (window.sessionStorage)
  {
    window.sessionStorage.setItem(name, encodeURIComponent(value))
  }
  else
  {
    var str = "";
    str += (name + "=" + encodeURIComponent(value));
    if (path)
      str += ("; path=" + path);
    document.cookie = str
  }
};
Reassemble.saveSetting = function()
{
  if (Reassemble.autoindexEnabled)
  {
    var attr = null;
    attr = $(Reassemble.selectorAutoindexWrapperDiv).attr(Reassemble.autoindexToggleAttrId);
    Reassemble.saveSettingData(TemplateSettings.cookieKeyAutoindexToggle, ((attr != null) ? attr : "1"), "/")
  }
  if ((Reassemble.globalindexEnabled) && (document.getElementById))
  {
    var attr = null;
    attr = $(Reassemble.selectorGlobalindexWrapperDiv).attr(Reassemble.globalindexToggleAttrId);
    Reassemble.saveSettingData(TemplateSettings.cookieKeyGlobalindexToggle, ((attr != null) ? attr : "1"), "/");
    $(ExpandFolder.selectorTreePaneDiv + " div[" + ExpandFolder.attributeFolded + "]").each(function()
    {
      Reassemble.saveSettingData($(this).attr("id"), $(this).attr(ExpandFolder.attributeFolded), "/")
    });
    Reassemble.saveSettingData(TemplateSettings.cookieKeyViewmode, Reassemble.viewMode, "/");
    Reassemble.saveSettingData(TemplateSettings.cookieKeyPackageName, Reassemble.viewPackage, "/");
    Reassemble.saveSettingData(TemplateSettings.cookieKeyGlobalindexWidth, Reassemble.globalindexContentWidth, "/");
    Reassemble.saveSettingData(TemplateSettings.cookieKeyViewPrintController, (Reassemble.viewPrintController ? "1" : "0"), "/");
    Reassemble.saveSettingData(TemplateSettings.cookieKeyUseTermTip, (Reassemble.useTermTip ? "1" : "0"), "/")
  }
};
Reassemble.loadViewMode = function()
{
  if (window.sessionStorage)
  {
    for (var n = 0; n < window.sessionStorage.length; n++)
    {
      var key = window.sessionStorage.key(n);
      var value = decodeURIComponent(window.sessionStorage.getItem(key));
      if (key == TemplateSettings.cookieKeyViewmode)
      {
        var nMode = parseInt(value);
        if (isNaN(nMode))
          nMode = 0;
        if ((nMode < 0) || (nMode > 2))
          nMode = 0;
        Reassemble.viewMode = "" + nMode
      }
    }
  }
  else
  {
    var settings = document.cookie.split(";");
    for (var n = 0; n < settings.length; n++)
    {
      var data = settings[n].split("=");
      var key = data[0].replace(/^ */, "");
      var value = decodeURIComponent(data[1]);
      if (key == TemplateSettings.cookieKeyViewmode)
      {
        var nMode = parseInt(value);
        if (isNaN(nMode))
          nMode = 0;
        if ((nMode < 0) || (nMode > 2))
          nMode = 0;
        Reassemble.viewMode = "" + nMode
      }
    }
  }
};
Reassemble.loadSetting = function()
{
  if (window.sessionStorage)
  {
    for (var n = 0; n < window.sessionStorage.length; n++)
    {
      var key = window.sessionStorage.key(n);
      var value = decodeURIComponent(window.sessionStorage.getItem(key));
      Reassemble.applySetting(key, value)
    }
  }
  else
  {
    var settings = document.cookie.split(";");
    for (var n = 0; n < settings.length; n++)
    {
      var data = settings[n].split("=");
      var key = data[0].replace(/^ */, "");
      var value = decodeURIComponent(data[1]);
      Reassemble.applySetting(key, value)
    }
  }
};
Reassemble.applySetting = function(key, value)
{
  if (Reassemble.autoindexEnabled)
  {
    if (key == TemplateSettings.cookieKeyAutoindexToggle)
      $(Reassemble.selectorAutoindexWrapperDiv).attr(Reassemble.autoindexToggleAttrId, value)
  }
  if (Reassemble.globalindexEnabled)
  {
    if (key == TemplateSettings.cookieKeyGlobalindexToggle)
    {
      $(Reassemble.selectorGlobalindexWrapperDiv).attr(Reassemble.globalindexToggleAttrId, value)
    }
    else
    {
      var obj = document.getElementById(key);
      if (obj)
      {
        $(obj).css("display", (value == "true" ? "none" : "block")).attr(ExpandFolder.attributeFolded, value);
        $("#" + ExpandFolder.expandImgIdPrefix + key).attr("src", (value == "true" ? ExpandFolder.closeIconPath : ExpandFolder.openIconPath)).attr("class", (value == "true" ? ExpandFolder.styleCloseImg : ExpandFolder.styleOpenImg))
      }
    }
  }
  if (key == TemplateSettings.cookieKeyViewmode)
  {
    var nMode = parseInt(value);
    if (isNaN(nMode))
      nMode = 0;
    if ((nMode < 0) || (nMode > 2))
      nMode = 0;
    Reassemble.viewMode = "" + nMode;
    var obj = document.getElementById(TemplateSettings.changeViewModeIdPrefix + Reassemble.viewMode);
    if (obj != null)
      obj.checked = true
  }
  else if (key == TemplateSettings.cookieKeyPackageName)
  {
    Reassemble.viewPackage = "" + value;
    var obj = document.getElementById(TemplateSettings.selectPackageId);
    if (obj)
      obj.value = Reassemble.viewPackage
  }
  else if (key == TemplateSettings.cookieKeyGlobalindexWidth)
  {
    var width = parseInt(value);
    if (isNaN(width))
      width = Reassemble.globalindexContentWidth;
    Reassemble.globalindexContentWidth = width;
    if (Reassemble.globalindexContentWidth < Reassemble.globalindexMinWidth)
      Reassemble.globalindexContentWidth = Reassemble.globalindexMinWidth
  }
  else if (key == TemplateSettings.cookieKeyViewPrintController)
  {
    Reassemble.viewPrintController = (("" + value) == "1")
  }
  else if (key == TemplateSettings.cookieKeyUseTermTip)
  {
    Reassemble.useTermTip = (("" + value) == "1")
  }
};
Reassemble.selectorChangeViewMode = Reassemble.selectorAutoindexTabDiv + " ul li a[href*='#" + TemplateSettings.guidelineItemLabelPrefix + "']";
Reassemble.changeViewMode = function(mode)
{
  var nMode = parseInt(mode);
  if (isNaN(nMode))
    nMode = 0;
  if ((nMode < 0) || (nMode > 2))
    nMode = 0;
  Reassemble.viewMode = "" + nMode;
  if ((typeof Guideline.initExpandGuideline) == "function")
  {
    Guideline.initExpandGuideline();
    if (Reassemble.autoindexEnabled)
    {
      switch (nMode)
      {
        case 1:
          $(Reassemble.selectorChangeViewMode).parent().css("display", "none");
          Reassemble.autoindexFocusIndexInvoke();
          break;
        case 0:
        case 2:
        default:
          $(Reassemble.selectorChangeViewMode).parent().css("display", "block");
          Reassemble.autoindexFocusIndexInvoke();
          break
      }
    }
  }
};
Reassemble.changePackage = function()
{
  var obj = document.getElementById(TemplateSettings.selectPackageId);
  if (obj != null)
  {
    var name = obj.value;
    Reassemble.viewPackage = name;
    Reassemble.changePackageImpl()
  }
};
Reassemble.changePackageImpl = function()
{
  if ((Reassemble.viewPackage != null) && (Reassemble.viewPackage != ""))
  {
    $("h1,h2,h3,h4,h5,h6,div.pagetitle,div.exclude").each(Reassemble.changePackageCss);
    $("div.openitem").each(Reassemble.changePackageCss2);
    $("a[href]").each(function()
    {
      Reassemble.changeIndexCssByPackage(this)
    })
  }
};
Reassemble.changePackageCss = function()
{
  var self = $(this);
  self.removeClass("excludedGuideline");
  self.removeClass("vanishGuideline");
  self.next().removeClass("excludedGuideline");
  self.next().removeClass("vanishGuideline");
  self.next().children("div.excludedLabel").remove();
  if (this.id.match(/^GuidelineSectionLabel/))
  {
    self.next().next().removeClass("excludedGuideline");
    self.next().next().removeClass("vanishGuideline")
  }
  var pages = Reassemble.excludePages[Reassemble.viewPackage];
  var id = this.id.match(/_[0-9]{8,}$/);
  if ((pages != null) && (id != null))
  {
    id = ("" + id).substr(1);
    if (pages[id] != null)
    {
      self.addClass("excludedGuideline");
      self.next().addClass("excludedGuideline");
      var packageName = "";
      var obj = document.getElementById(TemplateSettings.selectPackageId);
      if ((obj != null) && (obj.options != null))
        packageName = obj.options[obj.selectedIndex].text;
      var opt = LocaleString.lcStrLabelExclude[pages[id]];
      if (opt != null)
      {
        var msg = opt[0];
        if (msg != "")
        {
          self.next().prepend('<div class="excludedLabel">' + msg.replace(/{package}/ig, packageName) + '</div>')
        }
        var nClass = opt[1];
        if (nClass)
        {
          self.addClass("vanishGuideline");
          if (!self.hasClass("exclude"))
          {
            self.next().addClass("vanishGuideline")
          }
        }
      }
      if (this.id.match(/^GuidelineSectionLabel/))
      {
        self.next().next().addClass("excludedGuideline");
        self.next().next().addClass("vanishGuideline")
      }
    }
  }
};
Reassemble.changePackageCss2 = function()
{
  var self = $(this);
  self.removeClass("excludedGuideline");
  self.removeClass("vanishGuideline");
  var pages = Reassemble.excludePages[Reassemble.viewPackage];
  var id = this.id.match(/_[0-9]{8,}$/);
  if ((pages != null) && (id != null))
  {
    id = ("" + id).substr(1);
    if (pages[id] != null)
    {
      var opt = LocaleString.lcStrLabelExclude[pages[id]];
      if (opt != null)
      {
        var nClass = opt[1];
        if (nClass)
        {
          self.addClass("vanishGuideline")
        }
      }
      self.addClass("excludedGuideline")
    }
  }
};
Reassemble.changeIndexCssByPackage = function(obj)
{
  var f = false;
  var vanish = false;
  var ids = $(obj).attr("href").match(/_[0-9]{8,}/g);
  var pages = Reassemble.excludePages[Reassemble.viewPackage];
  if ((pages != null) && (ids != null))
  {
    for (var n = 0; n < ids.length; n++)
    {
      var id = ("" + ids[n]).substr(1);
      if (pages[id] != null)
      {
        f = true;
        var opt = LocaleString.lcStrLabelExclude[pages[id]];
        if (opt != null)
        {
          var nClass = opt[1];
          if (nClass)
          {
            vanish = true
          }
        }
        break
      }
    }
  }
  Reassemble.autoindexToggleClass($(obj), "excludeGuideline", f);
  Reassemble.autoindexToggleClass($(obj), "vanishGuideline", vanish)
};
Reassemble.viewPrintPage = function()
{
  var category = $("#" + TemplateSettings.selectCategoryId + " option:selected").val();
  if ((category != null) && (category != ""))
  {
    if (Reassemble.objectTocData != null)
    {
      var alertMessage = "";
      if (Reassemble.isLocalChrome())
        alertMessage += LocaleString.lcStrAlertPrintPageByChrome + "\n\n";
      alertMessage += LocaleString.lcStrAlertGoPrintPage + "\n\n" + LocaleString.lcStrLabelPrintSettingToolTip;
      if (alertMessage != "")
        alert(alertMessage);
      var rootURL = $(TemplateSettings.selectorTocFile).attr("src").replace(TemplateSettings.templateTocFileName, "");
      location.href = rootURL + "printpage.html?category=" + encodeURIComponent(category)
    }
  }
};
Reassemble.togglePrintSettingButton = function()
{
  Reassemble.viewPrintController = !Reassemble.viewPrintController;
  Reassemble.changePrintSettingButtonFace();
  Reassemble.saveSetting();
  Reassemble.resizeHandler()
};
Reassemble.changePrintSettingButtonFace = function()
{
  var objPane = $("#" + TemplateSettings.printControllerPaneId);
  var objButton = $("#" + TemplateSettings.printControllerButtonId);
  if ((objPane.length == 0) || (objButton.length == 0))
    return;
  if (Reassemble.viewPrintController)
  {
    objPane.css("display", "block");
    objButton.addClass(TemplateSettings.printControllerOpenedStyle)
  }
  else
  {
    objPane.css("display", "none");
    objButton.removeClass(TemplateSettings.printControllerOpenedStyle)
  }
};
Reassemble.highlightText = function(objDocument, node, regex, className)
{
  if (node.nodeType == 3)
  {
    var val = node.nodeValue;
    var re = new RegExp(regex, "i");
    var pos = val.search(re);
    var text = re.exec(val);
    if (pos >= 0 && !($(node.parentNode).hasClass(className)))
    {
      text = text[0];
      var span = objDocument.createElement("span");
      span.className = className;
      span.appendChild(objDocument.createTextNode(val.substr(pos, text.length)));
      var textNode = objDocument.createTextNode(val.substr(pos + text.length));
      node.parentNode.insertBefore(span, node.parentNode.insertBefore(textNode, node.nextSibling));
      node.nodeValue = val.substr(0, pos);
      Reassemble.highlightText(objDocument, textNode, regex, className)
    }
  }
  else
  {
    var name = (node.localName ? node.localName.toLowerCase() : node.nodeName ? node.nodeName.toLowerCase() : "");
    if (name == "img")
    {
      var alt = node.alt;
      if (alt != null)
      {
        var re = new RegExp(regex, "i");
        var pos = alt.search(re);
        if (pos >= 0)
        {
          var work = $(node);
          if (!(work.hasClass(className)))
            work.addClass(className)
        }
      }
    }
    if ((name == "button") || (name == "select") || (name == "textarea"))
      return;
    $(node.childNodes).each(function()
    {
      Reassemble.highlightText(objDocument, this, regex, className)
    })
  }
};
Reassemble.viewerElement = null;
Reassemble.backElement = null;
Reassemble.closeViewer = function()
{
  if (Reassemble.viewerElement != null)
  {
    $(Reassemble.viewerElement).remove();
    Reassemble.viewerElement = null
  }
  if (Reassemble.backElement != null)
  {
    $(Reassemble.backElement).remove();
    Reassemble.backElement = null
  }
};
Reassemble.viewImage = function(obj)
{
  if (obj == null)
    return;
  var clientHeight = window.innerHeight ? window.innerHeight : $(window).height();
  var clientWidth = $(window).width();
  var imageHeight = $(obj).height();
  var imageWidth = $(obj).width();
  var imageSrc = obj.src;
  var margin = 32;
  var tempObj = new Image;
  if (tempObj != null)
  {
    var temp = $(tempObj);
    temp.bind("load", function()
    {
      temp.unbind("load");
      var orgHeight = imageHeight * 2;
      var orgWidth = imageWidth * 2;
      if ((orgHeight < tempObj.height) || (orgWidth < tempObj.width))
      {
        orgHeight = tempObj.height;
        orgWidth = tempObj.width
      }
      temp.width(orgWidth).height(orgHeight);
      var winHeight = orgHeight;
      var winWidth = orgWidth;
      var overH = false;
      var overW = false;
      if (orgHeight > (clientHeight - margin * 2.5))
      {
        winHeight = clientHeight - margin * 2.5;
        overH = true
      }
      if (orgWidth > (clientWidth - margin * 2.5))
      {
        winWidth = clientWidth - margin * 2.5;
        overW = true
      }
      if (overH)
        winWidth += margin;
      if (overW)
        winHeight += margin;
      Reassemble.viewerElement = document.createElement("div");
      $(Reassemble.viewerElement).width(winWidth).height(winHeight).offset({
        left: ((clientWidth - winWidth) / 2), top: ((clientHeight - winHeight) / 2)
      });
      $(Reassemble.viewerElement).bind("click", Reassemble.closeViewer);
      $(Reassemble.viewerElement).css({
        position: "fixed", float: "left", zIndex: "9999", margin: "0px", "overflow-x": "auto", "overflow-y": "auto", cursor: "pointer", backgroundColor: "#ffffff", padding: "8px", border: "2px solid #000000", borderRadius: "8px", boxShadow: "rgba(0,0,0,0.5) 4px 4px"
      });
      $(Reassemble.viewerElement).append(tempObj);
      Reassemble.backElement = document.createElement("div");
      $(Reassemble.backElement).width(clientWidth).height(clientHeight).offset({
        left: 0, top: 0
      });
      $(Reassemble.backElement).bind("click", Reassemble.closeViewer);
      $(Reassemble.backElement).css({
        position: "fixed", float: "left", zIndex: "9998", "overflow-x": "auto", "overflow-y": "auto", backgroundColor: "#000000", filter: "alpha(opacity=60)", MozOpacity: "0.6", opacity: "0.6"
      });
      $("body").append(Reassemble.backElement).append(Reassemble.viewerElement)
    });
    temp.css({
      "max-width": "none", margin: "0px"
    });
    tempObj.src = obj.src
  }
};
Reassemble.startUpdatingWidth = function(event)
{
  Reassemble.updatingStartWidth = Reassemble.globalindexContentWidth;
  Reassemble.updatingStartPosX = event.clientX;
  Reassemble.updatingIndexWidth = true
};
Reassemble.updatingWidth = function(event)
{
  if (!Reassemble.updatingIndexWidth)
    return;
  Reassemble.globalindexContentWidth = Reassemble.updatingStartWidth + (event.clientX - Reassemble.updatingStartPosX);
  if (Reassemble.globalindexContentWidth < Reassemble.globalindexMinWidth)
    Reassemble.globalindexContentWidth = Reassemble.globalindexMinWidth;
  Reassemble.resizeHandler()
};
Reassemble.endUpdatingWidth = function(event)
{
  if (!Reassemble.updatingIndexWidth)
    return;
  Reassemble.updatingIndexWidth = false
};
Reassemble.expandMacro = function(obj)
{
  if ((obj == null) || (obj.id == null))
    return;
  var expandId = obj.id.replace("expander-control-", "");
  $(obj).toggleClass("expanded");
  var expanderContent = $("#expander-content-" + expandId);
  if ($(obj).hasClass("expanded"))
  {
    expanderContent.css({display: "block"}).animate({opacity: "1"}).removeClass("expand-hidden");
    $(obj).children(".expand-control-icon").each(function()
    {
      $(this).removeClass("collapsed-icon").addClass("expanded-icon")
    })
  }
  else
  {
    expanderContent.animate({opacity: "0"}, {complete: function()
      {
        expanderContent.css({display: "none"}).addClass("expand-hidden");
        $(obj).children(".expand-control-icon").each(function()
        {
          $(this).removeClass("expanded-icon").addClass("collapsed-icon")
        })
      }})
  }
};
Reassemble.startDownload = function(linkId, fileName, mimeType, content)
{
  var blob = new Blob([content], {type: mimeType});
  if (window.navigator.msSaveBlob)
  {
    window.navigator.msSaveBlob(blob, fileName)
  }
  else
  {
    var url = window.URL.createObjectURL(blob);
    var element = document.getElementById(linkId);
    if (element != null)
    {
      element.setAttribute("target", "_blank");
      element.setAttribute("href", url);
      element.setAttribute("download", fileName)
    }
  }
};
Reassemble.isLocalChrome = function()
{
  var UA = window.navigator.userAgent;
  if ((UA != null) && (UA.match(/Edge\/\d+.\d+/i) != null))
    return false;
  if ((UA != null) && (UA.match(/chrome/i) != null))
  {
    var protocol = location.protocol;
    return ((protocol != null) && (protocol.match(/file:/i) != null))
  }
  return false
};
Reassemble.isInternetExplorer = function()
{
  var UA = window.navigator.userAgent;
  if ((UA != null) && (UA.match(/MSIE \d+.\d+/i) != null))
    return true;
  if ((UA != null) && (UA.match(/Trident\/\d+.\d+/i) != null))
    return true;
  if ((UA != null) && (UA.match(/Edge\/\d+.\d+/i) != null))
    return true;
  return false
};
Reassemble.isFirefox = function()
{
  var UA = window.navigator.userAgent;
  if ((UA != null) && (UA.match(/firefox/i) != null))
    return true;
  return false
};
Reassemble.isChrome = function()
{
  var UA = window.navigator.userAgent;
  if ((UA != null) && (UA.match(/Edge\/\d+.\d+/i) != null))
    return false;
  if ((UA != null) && (UA.match(/chrome/i) != null))
    return true;
  return false
};
Reassemble.setEventHandler("load", Reassemble.reassemble);
Reassemble.setEventHandler("unload", Reassemble.saveSetting);
Reassemble.setEventHandler("scroll", Reassemble.scrollHandler);
Reassemble.setEventHandler("resize", Reassemble.resizeHandler);
Reassemble.setEventHandler("hashchange", Reassemble.hashchangeHandler);
var Guideline = function(){};
var countGuidelineItem = 1;
Guideline.initExpandGuideline = function()
{
  var query = location.search;
  if (query.lastIndexOf("?") != -1)
    query = query.slice(query.lastIndexOf("?") + 1);
  var params = query.split("&");
  var mode = Reassemble.viewMode;
  var level = "1";
  var figure = "1";
  var table = "1";
  var code = "1";
  var url = "";
  for (i = 0; i < params.length; i++)
  {
    var param = params[i];
    var ind = param.indexOf("=");
    if (ind < 0)
      continue;
    var key = param.substring(0, ind);
    key = decodeURIComponent(key);
    var data = decodeURIComponent(param.slice(ind + 1));
    if (key.match(/^mode$/i))
    {}
    else if (key.match(/^level$/i))
    {
      level = data
    }
    else if (key.match(/^figure$/i))
    {
      figure = parseInt(data);
      if (isNaN(figure))
        figure = 0
    }
    else if (key.match(/^table$/i))
    {
      table = parseInt(data);
      if (isNaN(table))
        table = 0
    }
    else if (key.match(/^code$/i))
    {
      code = parseInt(data);
      if (isNaN(code))
        code = 0
    }
    else if (key.match(/^url$/i))
    {
      url = data
    }
  }
  var nMode = parseInt(mode);
  if (isNaN(nMode))
    nMode = 0;
  if ((nMode < 0) || (nMode > 2))
    nMode = 0;
  $("div[id^=" + TemplateSettings.guidelineDescIdPrefix + "]").css("display", (((nMode == 0) || (nMode == 1)) ? "block" : "none"));
  $("div[id^=" + TemplateSettings.guidelineItemIdPrefix + "]").css("display", (((nMode == 0) || (nMode == 2)) ? "block" : "none"))
};
Guideline.viewPage = function(url, target, level, figure, table, code)
{
  var urls = url.split("#");
  var loc = urls[0] + "?level=" + level + "&figure=" + figure + "&table=" + table + "&code=" + code + ((urls.length > 1) ? ("#" + urls[1]) : (""));
  if ((target != null) && (target == "_blank"))
  {
    window.open(loc, target)
  }
  else
  {
    location.href = loc
  }
};
Guideline.setupPackageList = function()
{
  var sdate = new Date;
  var yy = sdate.getYear();
  var mm = sdate.getMonth() + 1;
  var dd = sdate.getDate();
  if (yy < 2000)
    yy += 1900;
  if (mm < 10)
    mm = "0" + mm;
  if (dd < 10)
    dd = "0" + dd;
  var ndate = yy + mm + dd;
  TemplateSettings.addJavaScript(TemplateSettings.getRootPath() + "excludePages.js?ver=" + ndate, Guideline.setupPackageListImpl, Guideline.setupPackageListImpl)
};
Guideline.setupPackageListImpl = function()
{
  if ((Reassemble.packageList != null) && (Reassemble.packageList.length > 0))
  {
    var obj = document.getElementById(TemplateSettings.selectPackageId);
    if (obj == null)
    {
      var htmlSelect = '<select id="' + TemplateSettings.selectPackageId + '" onchange="Reassemble.changePackage();"></select><br />';
      var tmpPrintController = $("#" + TemplateSettings.printControllerId).html();
      $("#" + TemplateSettings.printControllerId).html(htmlSelect + tmpPrintController);
      obj = document.getElementById(TemplateSettings.selectPackageId)
    }
    if ((obj != null) && (obj.options != null))
    {
      obj.options.length = 0;
      for (var n = 0; n < Reassemble.packageList.length; n++)
      {
        var opt = document.createElement("option");
        opt.value = Reassemble.packageList[n].key;
        opt.text = Reassemble.packageList[n].title;
        if (Reassemble.packageList[n].key == Reassemble.viewPackage)
          opt.selected = true;
        obj.options.add(opt)
      }
    }
    Reassemble.changePackageImpl();
    Reassemble.resizeHandler();
    Reassemble.scrollHandler()
  }
};
var Search = function(){};
Search.resultCount = 0;
Search.indexData = [];
Search.search = function(query, msgId, dstId, api, skip)
{
  var enableAddon = false;
  var loader = new DynLoader(Search.searchImpl, false);
  loader.option = {
    query: query, msgId: msgId, dstId: dstId, api: api, skip: skip
  };
  if ((typeof AddonList !== "undefined") && $.isArray(AddonList))
  {
    for (var n = 0, len = AddonList.length; n < len; n++)
    {
      var addonName = AddonList[n];
      if (addonName != "")
      {
        enableAddon = true;
        loader.addFile(addonName, TemplateSettings.getRootPath() + "Addon_" + addonName + "/searchindex.js")
      }
    }
  }
  if (enableAddon)
  {
    loader.load()
  }
  else
  {
    Search.goSearch(query, msgId, dstId, api, skip)
  }
};
Search.searchImpl = function(param)
{
  Search.goSearch(param.option.query, param.option.msgId, param.option.dstId, param.option.api, param.option.skip)
};
Search.goSearch = function(query, msgId, dstId, api, skip)
{
  var sobj = document.getElementById(msgId);
  var dobj = document.getElementById(dstId);
  if ((sobj == null) || (dobj == null))
    return;
  if ((typeof jQuery) != "function")
  {
    alert(LocaleString.lcStrMessageNeedJQuery);
    return
  }
  if (Search.indexData.length == 0)
  {
    return
  }
  if ($("#" + dstId).html() != "")
    return;
  Search.resultCount = 0;
  $("#" + msgId).html(LocaleString.lcStrMessageSearching);
  var array = new Array(0);
  for (var n = 0; n < Search.indexData.length; n++)
  {
    var data = Search.indexData[n];
    if (data == null)
      continue;
    if (data.length < 4)
      continue;
    if (!api && (data[3] == 1))
      continue;
    var ret = Search.matchQuery(query, data, dstId, msgId);
    if (ret != null)
      array.push(ret)
  }
  array.sort(Search.resultSorter);
  while (skip > array.length)
    skip -= TemplateSettings.searchResultCountPerPage;
  if (skip < 0)
    skip = 0;
  for (var n = 0; n < array.length; n++)
  {
    var data = array[n];
    if (data == null)
      continue;
    if (data.length < 4)
      continue;
    if (n < skip)
      continue;
    var url = data[0];
    var title = data[1];
    title = title.replace(/&/ig, "&amp;").replace(/</ig, "&lt;").replace(/>/ig, "&gt;");
    url = Search.addQueryToURL(url, query, "highlighttext");
    if ((url.length > 1) && (url[0] == "/"))
      url = url.slice(1);
    var ext = "";
    ext += "<p class=\"search_result_title\">";
    ext += "<a href=\"" + url + "\">" + title + "</a> (score: " + data[3] + ")<br />";
    ext += "</p>";
    var pageObj = Reassemble.getCurrentPageNaviObjectByUrl(Reassemble.objectTocData, url);
    if (pageObj != null)
    {
      ext += "<p class=\"search_result_breadcrumb\">";
      ext += Reassemble.getBreadCrumbText(Reassemble.objectTocData, pageObj);
      ext += "</p>"
    }
    ext += "<p class=\"search_result_line\">" + data[2] + "</p>";
    $("#" + dstId).append($(ext));
    Search.resultCount++;
    if (Search.resultCount >= TemplateSettings.searchResultCountPerPage)
      break
  }
  var msgBtn = "";
  if (skip > 0)
    msgBtn += (" <input type=\"button\" onclick=\"btnClick('" + (skip - TemplateSettings.searchResultCountPerPage) + "')\" value=\"" + (LocaleString.lcStrLabelSearchPrev.replace("%c%", TemplateSettings.searchResultCountPerPage)) + "\">");
  if ((skip + TemplateSettings.searchResultCountPerPage) < array.length)
    msgBtn += (" <input type=\"button\" onclick=\"btnClick('" + (skip + TemplateSettings.searchResultCountPerPage) + "')\" value=\"" + (LocaleString.lcStrLabelSearchNext.replace("%c%", TemplateSettings.searchResultCountPerPage)) + "\">");
  var msg = "";
  msg += "<hr class=\"" + TemplateSettings.searchMessageLineStyle + "\">";
  msg += (LocaleString.lcStrLabelSearchResult.replace("%r%", "" + array.length));
  if (array.length > 0)
    msg += (LocaleString.lcStrLabelSearchView.replace("%s%", "" + (skip + 1)).replace("%e%", "" + (skip + Search.resultCount)));
  msg += msgBtn;
  msg += "<hr class=\"" + TemplateSettings.searchMessageLineStyle + "\">";
  $("#" + msgId).html(msg);
  if (msgBtn != "")
  {
    var html = $("#" + dstId).html() + ("<div>" + msg + "</div>");
    $("#" + dstId).html(html)
  }
};
Search.resultSorter = function(dataA, dataB)
{
  if (dataA[3] == dataB[3])
  {
    if (dataA[1] < dataB[1])
      return -1;
    return 1
  }
  return (dataB[3] - dataA[3])
};
Search.addQueryToURL = function(url, query, word)
{
  if ((url == null) || (query == null))
    return "";
  var posA = url.indexOf("?");
  var posB = url.indexOf("#");
  if (posB < 0)
    return (url + ((posA < 0) ? ("?" + word + "=") : ("&" + word + "=")) + encodeURIComponent(query));
  return (url.slice(0, posB) + ((posA < 0) ? ("?" + word + "=") : ("&" + word + "=")) + encodeURIComponent(query) + url.slice(posB))
};
Search.parseQuery = function(query)
{
  var array = query.split(" ");
  var ret = new Array(0);
  var start = 0;
  var flag = false;
  var invert = false;
  var work = "";
  while (start < array.length)
  {
    var str = array[start];
    if (!flag)
    {
      if (str.charAt(0) == "-")
      {
        str = str.slice(1);
        invert = true
      }
      else
      {
        invert = false
      }
    }
    else
    {
      work += " "
    }
    flag = Search.checkDQ(str, -1, flag);
    if (flag)
    {
      work += (str.replace(/"/g, ""))
    }
    else
    {
      work += (str.replace(/"/g, ""));
      ret.push((invert ? "\t" : "") + work);
      work = ""
    }
    start++
  }
  if (work != "")
    ret.push((invert ? "\t" : "") + work);
  return ret
};
Search.checkDQ = function(str, pos, flag)
{
  var ret = flag;
  var p = str.indexOf("\"", (pos + 1));
  if (p >= 0)
  {
    ret = Search.checkDQ(str, p, !ret)
  }
  return ret
};
Search.matchQuery = function(query, data, dstId, msgId)
{
  var array = Search.parseQuery(query);
  var find = true;
  var rst = "";
  var filtered = data[2];
  var findPos = filtered.length;
  var onlyInvert = true;
  var findInvert = false;
  var score = 0;
  for (var n = 0; n < array.length; n++)
  {
    if (array[n] == "")
      continue;
    if (array[n].match(/^ +$/))
      continue;
    var invert = false;
    var str = array[n];
    if (str.charAt(0) == "\t")
    {
      str = str.slice(1);
      if (str.match(/^ +$/))
        continue;
      invert = true
    }
    else
    {
      onlyInvert = false
    }
    str = Search.escapeRegex(str);
    var re = new RegExp(str, "i");
    var pos = filtered.search(re);
    var reS = new RegExp(str, "ig");
    var matchTitle = data[1].match(reS);
    if (matchTitle != null)
    {
      if (!invert)
        score += matchTitle.length * 99
    }
    var match = filtered.match(reS);
    if (match != null)
    {
      if (!invert)
        score += match.length
    }
    var flag = (pos >= 0);
    if (invert)
    {
      if (flag)
      {
        findInvert = true;
        find = false
      }
    }
    else
    {
      if (findInvert)
        continue;
      find &= flag;
      if (!flag)
        continue;
      if (findPos > pos)
        findPos = pos
    }
  }
  if ((find && !findInvert && !onlyInvert))
  {
    if (findPos == filtered.length)
      findPos = 0;
    var start = 0;
    if (findPos < TemplateSettings.searchResultDigestLength)
    {
      start = 0
    }
    else if ((findPos + TemplateSettings.searchResultDigestLength) > filtered.length)
    {
      start = filtered.length - TemplateSettings.searchResultDigestLength * 2
    }
    else
    {
      start = findPos - TemplateSettings.searchResultDigestLength
    }
    if (start < 0)
      start = 0;
    rst = Search.escapeHtml(filtered.substr(start, TemplateSettings.searchResultDigestLength * 2));
    var url = data[0];
    var title = data[1];
    if ((url.length > 1) && (url[0] == "/"))
      url = url.slice(1);
    var ext = "";
    var strReg = "";
    for (var n = 0; n < array.length; n++)
    {
      if (array[n] == "")
        continue;
      if (array[n].match(/^ +$/))
        continue;
      if (array[n].charAt(0) == "\t")
        continue;
      var str = Search.escapeRegex(array[n]);
      if (strReg != "")
        strReg += "|";
      strReg += str
    }
    if (strReg != "")
    {
      var reR = new RegExp(strReg, "ig");
      rst = rst.replace(reR, Search.highlighter)
    }
    ext += (((start > 0) ? "..." : "") + rst + (((start + TemplateSettings.searchResultDigestLength * 2) < filtered.length) ? "..." : "") + "<br />");
    return new Array(url, title, ext, score)
  }
  return null
};
Search.highlighter = function(str)
{
  return ("<span class=\"search_highlight\">" + str + "</span>")
};
Search.escapeRegex = function(str)
{
  if (str == null)
    return "";
  if (typeof(str) != "string")
    return "";
  var ret = str;
  ret = ret.replace(/\\/g, "\\\\");
  ret = ret.replace(/\^/g, "\\^");
  ret = ret.replace(/\$/g, "\\$");
  ret = ret.replace(/\./g, "\\.");
  ret = ret.replace(/\*/g, "\\*");
  ret = ret.replace(/\+/g, "\\+");
  ret = ret.replace(/\|/g, "\\|");
  ret = ret.replace(/\(/g, "\\(");
  ret = ret.replace(/\)/g, "\\)");
  ret = ret.replace(/\[/g, "\\[");
  ret = ret.replace(/\]/g, "\\]");
  ret = ret.replace(/\{/g, "\\{");
  ret = ret.replace(/\}/g, "\\}");
  ret = ret.replace(/\//g, "\\/");
  return ret
};
Search.escapeHtml = function(html)
{
  if (html == null)
    return "";
  if (typeof(html) != "string")
    return "";
  var ret = html;
  ret = ret.replace(/&/g, "&amp;");
  ret = ret.replace(/</g, "&lt;");
  ret = ret.replace(/>/g, "&gt;");
  ret = ret.replace(/"/g, "&quot;");
  ret = ret.replace(/\n/g, "<br />");
  ret = ret.replace(/\t/g, "&nbsp;&nbsp;");
  return ret
};
Search.filterHtml = function(html)
{
  if (html == null)
    return "";
  if (typeof(html) != "string")
    return "";
  var ret = html;
  ret = Search.removeTagAndText(ret, "head");
  ret = Search.removeTagAndText(ret, "noscript");
  ret = Search.removeTagAndText(ret, "script");
  ret = Search.removeTagAndText(ret, "style");
  ret = Search.extractTextFromTag(ret, "pre", "", "", "", true);
  ret = ret.replace(/\n/g, "");
  ret = Search.extractTextFromTag(ret, "div", "class=\"(table|figure|code)\"", "", "\n", false);
  ret = ret.replace(/<!--.*?-->/ig, "");
  ret = ret.replace(/<br( +[^>]*\/?>|>)/ig, "\n");
  ret = ret.replace(/<(th|td|dd)( +[^>]*>|>)/ig, "\t");
  ret = ret.replace(/<li( +[^>]*>|>)/ig, "\n\t\u00b7 ");
  ret = ret.replace(/<\/(h[1-6]|tr|p|ul|ol|dt|dd|div|li) *>/ig, "\n");
  ret = ret.replace(/<[^>]*>/g, "");
  ret = ret.replace(/&lt;/ig, "<");
  ret = ret.replace(/&gt;/ig, ">");
  ret = ret.replace(/&quot;/ig, "\"");
  ret = ret.replace(/&nbsp;/ig, " ");
  ret = ret.replace(/&amp;/ig, "&");
  ret = ret.replace(/\r/g, "");
  ret = ret.replace(/ +/g, " ");
  ret = ret.replace(/ \n/g, "\n");
  ret = ret.replace(/\n+/g, "\n");
  return ret
};
Search.removeTagAndText = function(html, tag)
{
  if (html == null)
    return "";
  if (typeof(html) != "string")
    return "";
  if (tag == null)
    return "";
  if (typeof(tag) != "string")
    return "";
  var ret = html;
  var pos = 0;
  var reTagS = new RegExp("<" + tag + "( +[^>]*>|>)", "i");
  var reTagE = new RegExp("<\/" + tag + " *>", "i");
  while (pos >= 0)
  {
    pos = ret.search(reTagS);
    if (pos < 0)
      break;
    var matchS = ret.match(reTagS);
    var lenS = (matchS[0]).length;
    var work = ret.slice(pos + lenS);
    var epos = work.search(reTagE);
    if (epos < 0)
    {
      epos = pos + lenS;
      ret = ret.slice(0, pos) + ret.slice(epos)
    }
    else
    {
      var matchE = work.match(reTagE);
      var lenE = (matchE[0]).length;
      ret = ret.slice(0, pos) + work.slice(epos + lenE)
    }
  }
  return ret
};
Search.extractTextFromTag = function(html, tag, attr, before, after, convertLF)
{
  if (html == null)
    return "";
  if (typeof(html) != "string")
    return "";
  if (tag == null)
    return html;
  if (typeof(tag) != "string")
    return html;
  var strAttr = "";
  if ((attr != null) && (typeof(attr) == "string"))
    strAttr = attr;
  var strBefore = "";
  if ((before != null) && (typeof(before) == "string"))
    strBefore = before;
  var strAfter = "";
  if ((after != null) && (typeof(after) == "string"))
    strAfter = after;
  var ret = html;
  var pos = 0;
  var reTagS = new RegExp("<" + tag + ((strAttr != "") ? (" " + strAttr) : "") + "( [^>]*[^\/]>|>)", "i");
  var reTagE = new RegExp("<\/" + tag + " *>", "i");
  while (pos >= 0)
  {
    pos = ret.search(reTagS);
    if (pos < 0)
      break;
    var matchS = ret.match(reTagS);
    var lenS = (matchS[0]).length;
    var work = ret.slice(pos + lenS);
    var epos = work.search(reTagE);
    if (epos < 0)
      break;
    var matchE = work.match(reTagE);
    var lenE = (matchE[0]).length;
    if (convertLF)
    {
      ret = ret.slice(0, pos) + strBefore + work.slice(0, epos).replace(/\n/g, "<br />") + strAfter + work.slice(epos + lenE)
    }
    else
    {
      ret = ret.slice(0, pos) + strBefore + work.slice(0, epos) + strAfter + work.slice(epos + lenE)
    }
  }
  return ret
};
var DynLoader = function(func, useAjax, loadAsync)
  {
    this.firefunc = func;
    this.filelist = new Array;
    this.deferlist = new Array;
    this.keylist = [];
    this.modeAjax = ((useAjax !== undefined) && useAjax) ? true : false;
    this.async = ((loadAsync !== undefined) && loadAsync) ? true : false;
    this.timeout = 3 * 60 * 1000
  };
DynLoader.prototype = {
  reset: function()
  {
    this.filelist = new Array;
    this.deferlist = new Array;
    this.keylist = []
  }, setCallback: function(func)
    {
      this.firefunc = func
    }, setAjaxMode: function(mode)
    {
      this.modeAjax = ((mode !== undefined) && mode) ? true : false
    }, setLoadAsync: function(mode)
    {
      this.async = ((mode !== undefined) && mode) ? true : false
    }, setTimeout: function(timeout)
    {
      this.timeout = ((timeout !== undefined) ? timeout : 3 * 60 * 1000)
    }, addFile: function(datakey, filename, force)
    {
      this.filelist.push({
        key: datakey, file: filename, data: null, done: false, exist: false, error: false, force: (force !== undefined && force), json: false
      });
      this.keylist[datakey] = this.filelist.length - 1
    }, addFileJSON: function(datakey, filename, force)
    {
      this.filelist.push({
        key: datakey, file: filename, data: null, done: false, exist: false, error: false, force: (force !== undefined && force), json: true
      });
      this.keylist[datakey] = this.filelist.length - 1
    }, getData: function(datakey)
    {
      if (this.keylist[datakey] != null)
        return this.filelist[this.keylist[datakey]];
      return null
    }, isComplete: function()
    {
      for (var i = 0; i < this.filelist.length; i++)
      {
        var data = this.filelist[i];
        if (data == null)
          continue;
        if (data.done)
          continue;
        return false
      }
      return true
    }, isSuccess: function()
    {
      for (var i = 0; i < this.filelist.length; i++)
      {
        var data = this.filelist[i];
        if (data == null)
          continue;
        if (!data.done)
          return false;
        if (data.error)
          return false
      }
      return true
    }, isAvailableForLocalFile: function()
    {
      if (isChrome() && this.modeAjax)
        return false;
      return true
    }, isAjaxMode: function()
    {
      return this.modeAjax
    }, successFunc: function(param, datakey, data)
    {
      if ((param != null) && (datakey != null))
      {
        var obj = param.getData(datakey);
        if (obj != null)
        {
          obj.done = true;
          obj.error = false;
          obj.exist = (data != null);
          obj.data = data
        }
        if (param.isComplete() && param.firefunc != null)
          param.firefunc(param)
      }
      else
      {
        console.error("DynLoader.successFunc: parameter error!")
      }
    }, errorFunc: function(param, datakey, data)
    {
      if ((param != null) && (datakey != null))
      {
        var obj = param.getData(datakey);
        if (obj != null)
        {
          obj.done = true;
          obj.error = true;
          obj.exist = false;
          obj.data = null
        }
        if (param.isComplete() && param.firefunc != null)
          param.firefunc(param)
      }
      else
      {
        console.error("DynLoader.errorFunc: parameter error!")
      }
    }, load: function()
    {
      if (this.filelist == null)
      {
        console.error("DynLoader.load: filelist is null.");
        return
      }
      if (this.filelist.length == 0)
      {
        console.error("DynLoader.load: filelist is empty.");
        return
      }
      if (this.isAjaxMode())
      {
        this.loadByAjax()
      }
      else
      {
        this.loadByScript()
      }
    }, loadByAjax: function()
    {
      for (var i = 0; i < this.filelist.length; i++)
      {
        var obj = this.filelist[i];
        if (obj == null)
          continue;
        obj["option"] = {
          param: this, key: obj.key, successFunc: this.successFunc, errorFunc: this.errorFunc
        };
        var deferred = $.ajax({
            async: this.async, context: obj.option, timeout: this.timeout, url: obj.file, dataType: (obj.json ? "json" : "script")
          }).then(function(data)
          {
            this.successFunc(this.param, this.key, data)
          }, function(data)
          {
            this.errorFunc(this.param, this.key, data)
          });
        this.deferlist.push(deferred)
      }
    }, loadByScript: function()
    {
      var _self = this;
      for (var i = 0; i < this.filelist.length; i++)
      {
        var obj = this.filelist[i];
        if (obj == null)
          continue;
        obj["option"] = {
          param: _self, key: obj.key, successFunc: _self.successFunc, errorFunc: _self.errorFunc
        };
        obj["errorCB"] = function()
        {
          var option = this.UtilityOption;
          if (option != null)
            option.errorFunc(option.param, option.key, null)
        };
        obj["loadCB"] = function()
        {
          var option = this.UtilityOption;
          if (option != null)
            option.successFunc(option.param, option.key, null)
        };
        obj["readyCB"] = function()
        {
          switch (script.readyState)
          {
            case"complete":
            case"loaded":
              var option = this.UtilityOption;
              if (option != null)
                option.successFunc(option.param, option.key, null);
              break
          }
        };
        var script = this.addJavaScript(obj.file, obj.readyCB, obj.loadCB, obj.errorCB, obj.force, obj.option);
        if (script != null)
          obj["script"] = script
      }
    }, addJavaScript: function(url, readyCB, loadCB, errorCB, force, option)
    {
      if (url != "")
      {
        var heads = document.getElementsByTagName("head");
        if (heads.length > 0)
        {
          var scripts = heads[0].getElementsByTagName("script");
          for (var i = 0; i < scripts.length; i++)
          {
            if ((scripts[i].src != null) && (scripts[i].src.indexOf(url) != -1))
            {
              if (!force)
                return null;
              scripts[i].remove();
              break
            }
          }
          var obj = document.createElement("script");
          if (obj != null)
          {
            obj.type = "text/javascript";
            obj.src = url;
            if (readyCB != null)
              obj.onreadystatechange = readyCB;
            if (loadCB != null)
              obj.onload = loadCB;
            if (errorCB != null)
              obj.onerror = errorCB;
            if (option != null)
              obj["UtilityOption"] = option;
            heads[0].appendChild(obj);
            return obj
          }
        }
      }
      return null
    }
}
