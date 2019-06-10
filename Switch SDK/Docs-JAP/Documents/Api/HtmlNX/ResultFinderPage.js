var previousInput;

function OnTextChanged_Result()
{
    var v = document.getElementById("codeValue").value;

    if (previousInput == v)
    {
        return;
    }
    previousInput = v;

    var v2 = v.replace(/[^0-9xa-f]/gi,"");
    var v3 = v2.replace(/0x/i, "");

    if( v3.length < 8 )
    {
        var d = 8 - v3.length;
        document.getElementById("remainMessage").innerHTML = "（あと " + d + " 桁）";
    }
    else if( v3.length > 8 )
    {
        var od = v3.length - 8;
        document.getElementById("remainMessage").innerHTML = "（ " + od + " 桁オーバー）";
    }
    else
    {
        document.getElementById("remainMessage").innerHTML = "";
    }
    if( v3.length != 8 )
    {
        ClearSearchResult();
        return;
    }

    v3 = v3.toLowerCase();
    var value = parseInt(v3, 16);

    SetSearchResult(value);
}

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function OnLoad()
{
    RegisterEventHandler(document.getElementById("codeValue"), "mouseup", this, OnTextChanged_Result, false);
    RegisterEventHandler(document.getElementById("codeValue"), "keyup", this, OnTextChanged_Result, false);
    RegisterEventHandler(document.getElementById("codeValue"), "change", this, OnTextChanged_Result, false);

    document.getElementById("codeValue").focus();
    OnTextChanged_Result();
}

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

window.onload = OnLoad;
