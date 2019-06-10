// -----------------------------------------------------------------
function Util_CompareForSortBySDKVersion(a, b) {
  var aa = a['NXAddon'];
  var bb = b['NXAddon'];
  if (aa < bb) { return 1; }
  else if (aa > bb) { return -1; }
  else { return 0; }
}

function MakeTableImpl(column, id) {
  var tmp = version_table.sort(Util_CompareForSortBySDKVersion);
  // console.log(tmp);

  // column の順に要素を整列
  var tmp2 = tmp.map(function(e) {
    var a = [];
    for (var i = 0; i < column.length; i++) {
      a.push(e[column[i]]);
    }
    return a;
  });

  var div = $('#' + id);
  var brother = div.next();
  if (div.parent().prop('tagName') == 'MACRO') {
      brother = div.parent().next();
  }

  var parent = $('tbody', brother);
  for (var i = 0; i < tmp2.length; i++) {
    var str = '<tr><td class="confluenceTd">' + tmp2[i].join('</td><td class="confluenceTd">') + '</td></tr>';
    parent.append(str);    
  }
}

function MakeTable() {
  for (var key in CategoryTableAndColumn) {
    // console.log('[KEY]', key, '[DATA]', CategoryTableAndColumn[key]);
    MakeTableImpl(CategoryTableAndColumn[key], key)
  }
}
MakeTable();
