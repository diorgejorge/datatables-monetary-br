jQuery.fn.dataTableExt.aTypes.unshift(
    function (sData) {
        if (/(R\$ ?\d+.?\d+,?\d+)/.test(sData))
        {
            return 'monetary-br';
        }
    else
        {
            return null;
        }
    }
);

jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "monetary-br-pre": function (a) {
        var x = a.replace(".", "").replace(/,/, ".").replace("R$", "");
        return parseFloat(x);
    },

    "monetary-br-asc": function (a, b) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },

    "monetary-br-desc": function (a, b) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});
