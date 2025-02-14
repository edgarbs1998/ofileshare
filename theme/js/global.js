var bgFill = false;

function bookmarksite(title, url)
{
    if (window.sidebar) // firefox
        window.sidebar.addPanel(title, url, "");
    else if (window.opera && window.print) { // opera
        var elem = document.createElement('a');
        elem.setAttribute('href', url);
        elem.setAttribute('title', title);
        elem.setAttribute('rel', 'sidebar');
        elem.click();
    }
    else if (document.all)// ie
        window.external.AddFavorite(url, title);
}

function showHideStatsTab(id)
{
    if ($("currentTab").value.length > 0)
    {
        $($("currentTab").value).style.display = "none";
    }
    $("currentTab").value = id;
    $(id).style.display = "block";
    return false;
}

function showHideTip(ele)
{
    $('.formTip').addClass('hidden');
    $('#' + ele.id + 'Tip').removeClass('hidden');
}

function bytesToSize(bytes, precision)
{
    var kilobyte = 1024;
    var megabyte = kilobyte * 1024;
    var gigabyte = megabyte * 1024;
    var terabyte = gigabyte * 1024;

    if ((bytes >= 0) && (bytes < kilobyte)) {
        return bytes + ' B';

    } else if ((bytes >= kilobyte) && (bytes < megabyte)) {
        return (bytes / kilobyte).toFixed(precision) + ' KB';

    } else if ((bytes >= megabyte) && (bytes < gigabyte)) {
        return (bytes / megabyte).toFixed(precision) + ' MB';

    } else if ((bytes >= gigabyte) && (bytes < terabyte)) {
        return (bytes / gigabyte).toFixed(precision) + ' GB';

    } else if (bytes >= terabyte) {
        return (bytes / terabyte).toFixed(precision) + ' TB';

    } else {
        return bytes + ' B';
    }
}

function humanReadableTime(seconds)
{
    var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    var numseconds = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);

    rs = '';
    if (numhours > 0)
    {
        if (numhours != 1)
        {
            rs += numhours + " hours";
        }
        else
        {
            rs += numhours + " hour";
        }
        rs += " ";
    }
    if (numminutes > 0)
    {
        if (numminutes != 1)
        {
            rs += numminutes + " minutes";
        }
        else
        {
            rs += numminutes + " minutes";
        }
        rs += " ";
    }
    if (numseconds != 1)
    {
        rs += numseconds + " seconds";
    }
    else
    {
        rs += numseconds + " second";
    }

    return rs;
}

function browserXHR2Support()
{
    if (new XMLHttpRequest().upload)
    {
        return true;
    }

    return false;
}