
function GetResultModuleNumber(value)
{
    return (value >> 0) & 0x1FF;
}

function GetResultDescription(value)
{
    return (value >> 9) & 0x1FFF;
}

function GetResultSubDescription(value)
{
    return (value >> 22) & 0x3FF;
}

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

var g_Modules = g_ResultsInfo.ResultInfos.ResultModules;
var g_Descriptions = g_ResultsInfo.ResultInfos.ErrorResults;
var g_ReferenceInfos = g_ResultsInfo.ReferenceInfos;

function FindModuleInfoByModuleNumber(moduleNumber)
{
    for (var i = 0; i < g_Modules.length; ++i)
    {
        var module = g_Modules[i];
        if (module.Number == moduleNumber)
        {
            return module;
        }
    }
    return null;
}

function FindModuleInfoByModuleName(moduleName)
{
    for (var i = 0; i < g_Modules.length; ++i)
    {
        var module = g_Modules[i];
        if (module.Name == moduleName)
        {
            return module;
        }
    }
    return null;
}

function FindDescriptionInfosByValue(value)
{
    var moduleNumber = GetResultModuleNumber(value);
    var moduleInfo = FindModuleInfoByModuleNumber(moduleNumber);
    if (moduleInfo == null)
    {
        return [];
    }
    var moduleName = moduleInfo.Name;
    var description = GetResultDescription(value);
    var ret = [];
    var n = 0;
    for (var i = 0; i < g_Descriptions.length; ++i)
    {
        var d = g_Descriptions[i];
        if (d.ModuleName == moduleName && d.DescriptionBegin <= description && description < d.DescriptionEnd)
        {
            ret[n++] = d;
        }
    }
    ret.sort(function(x, y) { return (x.DescriptionEnd - x.DescriptionBegin) - (y.DescriptionEnd - y.DescriptionBegin); });
    return ret;
}

function FindExactDescriptionInfoByValue(value)
{
    var moduleNumber = GetResultModuleNumber(value);
    var moduleInfo = FindModuleInfoByModuleNumber(moduleNumber);
    if (moduleInfo == null)
    {
        return null;
    }
    var moduleName = moduleInfo.Name;
    var description = GetResultDescription(value);
    var subDescription = GetResultSubDescription(value);
    for (var i = 0; i < g_Descriptions.length; ++i)
    {
        var d = g_Descriptions[i];
        if (d.ModuleName == moduleName && d.DescriptionValue == description && subDescription == 0)
        {
            return d;
        }
    }
    return null;
}

function GetResultFullNameHtml(resultInfo)
{
    if (resultInfo == null)
    {
        return "(unknown)";
    }
    var fullName = resultInfo.Namespace + "::" + resultInfo.Name;
    for (var i = 0; i < g_ReferenceInfos.length; ++i)
    {
        var info = g_ReferenceInfos[i];
        if (info.Name == fullName)
        {
            return "<a class='el' href='" + info.Path + "'>" + fullName + "</a>";
        }
    }
    return fullName;
}

function SetSearchResult(value)
{
    if (value == 0)
    {
        document.getElementById("resultInfo").style.display = "none";
        document.getElementById("parentResultsHolder").style.display = "none";
        document.getElementById("resultMessage").innerHTML = "nn::ResultSuccess";
        return;
    }

    var moduleNumber = GetResultModuleNumber(value);
    var description = GetResultDescription(value);
    var moduleInfo = FindModuleInfoByModuleNumber(moduleNumber);
    var descriptionInfo = FindExactDescriptionInfoByValue(value);

    var moduleName = (moduleInfo != null) ? moduleInfo.Name : "(unknown)";
    var descriptionName = GetResultFullNameHtml(descriptionInfo);

    document.getElementById("resultInfo").style.display = "block";
    document.getElementById("resultMessage").innerHTML = descriptionName;
    document.getElementById("resultModule").innerHTML = moduleNumber + " = " + moduleName;
    document.getElementById("resultDescription").innerHTML = description;

    var parentTable = document.getElementById("parentResults");
    while (parentTable.rows.length > 1)
    {
        parentTable.deleteRow(1);
    }
    var parents = FindDescriptionInfosByValue(value);
    for (var i = 0; i < parents.length; ++i)
    {
        var parent = parents[i];
        var row = parentTable.insertRow(i + 1);
        var j = 0;
        row.insertCell(j++).innerHTML = GetResultFullNameHtml(parent);
        row.insertCell(j++).innerHTML = parent.ReadableText.length > 0 ? parent.ReadableText[0].Text : "(no text)";
        row.insertCell(j++).innerHTML = FindModuleInfoByModuleName(parent.ModuleName).Number + " = " + parent.ModuleName;
        row.insertCell(j++).innerHTML = parent.IsAbstract ? "(abstract)" : parent.DescriptionValue;
        row.insertCell(j++).innerHTML = "[" + parent.DescriptionBegin + ", " + parent.DescriptionEnd + ")";
    }
    document.getElementById("parentResultsHolder").style.display = parents.length == 0 ? "none" : "block";
}

function ClearSearchResult()
{
    document.getElementById("resultInfo").style.display = "none";
    document.getElementById("parentResultsHolder").style.display = "none";
    document.getElementById("resultMessage").innerHTML = "(なし)";
}

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function CallMember(obj, member)
{
    return function()
    {
        return member.apply(obj, arguments);
    };
}

function CallWithParam(func, params)
{
    return function()
    {
        return func.apply(window, params);
    };
}

function RegisterEventHandler(obj, type, listener, handler, useCapture)
{
    if( ! listener.eventHandlerHelpers )
    {
        listener.eventHandlerHelpers = new Array();
    }

    var id = "" + type + handler + useCapture;
    var helper = listener.eventHandlerHelpers[id];

    if( obj.addEventListener )
    {
        if( ! helper )
        {
            helper = new function(obj, cb)
                {
                    this.obj = obj;
                    this.cb = cb;
                    this.handleEvent = function(e)
                    {
                        return this.cb.apply(this.obj, arguments);
                    }
                }(listener, handler);

            listener.eventHandlerHelpers[id] = helper;
        }
        obj.addEventListener(type, helper, useCapture);
    }
    else
    {
        if( ! helper )
        {
            helper = CallMember(listener, handler);
            listener.eventHandlerHelpers[id] = helper;
        }
        obj.attachEvent("on" + type, helper);
    }
}
