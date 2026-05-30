window.Asc.plugin.init = function () {
    this.callCommand(function () {
        var oSheet = Api.GetActiveSheet();
        oSheet.GetRangeByNumber(0, 0).SetValue("1AC");
        oSheet.GetRangeByNumber(0, 1).SetValue("1NC");
        oSheet.GetRangeByNumber(0, 2).SetValue("2AC");
        oSheet.GetRangeByNumber(0, 3).SetValue("Block");
        oSheet.GetRangeByNumber(0, 4).SetValue("1AR");
        oSheet.GetRangeByNumber(0, 5).SetValue("2NR");
        oSheet.GetRangeByNumber(0, 6).SetValue("2AR");
    });
}