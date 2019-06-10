function MakeNwSwVersionsTable_UtilCompareForSort(a, b) {
  if (a[0] < b[0]) { return 1; }
  else if (a[0] > b[0]) { return -1; }
  else { return 0; }
}
var nx_sw_version_header =
  ["NX Addon version", "FW for NX", "Joy-Con (L) FW", "Joy-Con (R) FW", "Switch Pro Controller FW", "VSI for NX<br/>TargetManager", "Clang for NX", "NVN Driver", "NVN API version", "CPU Profiler"];
function MakeNxSwVesrsionRowspanAdjustedArray() {
  var tmp = nx_sw_versions.sort(MakeNwSwVersionsTable_UtilCompareForSort);
  
  // 1パス目: とりあえず { value: "1.0.0", count: 1 } に変換する。
  var map1 = tmp.map(function(e, i, array) {
    // console.log(i);
    var a = e.map(function(e2, i2) {
      var tmp = { value: e2, count: 1 };
      return tmp;
    });
    return a;
  });

  // 2パス目: rowspan 用の count を調整する
  for (var i = 1; i < map1.length; i++) {
    var col = map1[i];
    for (var j = 0; j < col.length; j++) {
      var same_k = -99;
      for (var k = i-1; k >= 0; k--) {
        if (col[j].value == map1[k][j].value) {
          same_k = k;
        } else {
          break;
        }
      }
      if (same_k >= 0) {
        map1[same_k][j].count += 1;
        col[j].count = 0;
      }
    }
  }
  console.log(map1);
  return map1;
}
function MakeNxSwVesrsionTr(arr) {
  var tmp = '<tr>';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].count > 0) {
      tmp += '<td rowspan="' + arr[i].count + '">' + arr[i].value + '</td>';
    }
  }
  tmp += '</tr>';
  console.log(tmp);
  return tmp;
}
function MakeNwSwVersionsTable() {
  var adjustedArray = MakeNxSwVesrsionRowspanAdjustedArray();
  var tmp = '<thead><th>';
  tmp += nx_sw_version_header.join('</th><th>');
  tmp += '</th></thead>';
 
  tmp += '<tbody>';
  adjustedArray.reduce(function(prev, cur, index) {
    if (index == 1) {
      tmp += MakeNxSwVesrsionTr(prev);
    }
    tmp += MakeNxSwVesrsionTr(cur);
  });
  tmp += '</tbody>';
  var elm = document.getElementById('nx_sw_version_table');
  var table = document.createElement('table');
  table.innerHTML = tmp;
  elm.textContent = null;
  elm.appendChild(table);
}
MakeNwSwVersionsTable();
