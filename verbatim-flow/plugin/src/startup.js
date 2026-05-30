// //variables
// let worksheet = Api.GetActiveSheet();

// // Sets speech names
// worksheet.GetRange("A1").SetValue("1AC");
// worksheet.GetRange("B1").SetValue("1NC");
// worksheet.GetRange("C1").SetValue("2AC");
// worksheet.GetRange("D1").SetValue("Block");
// worksheet.GetRange("E1").SetValue("1AR");
// worksheet.GetRange("F1").SetValue("2NR");
// worksheet.GetRange("G1").SetValue("2AR");

window.Asc.plugin.init = function () {
    window.Asc.plugin.executeMethod("InputText", ["Hello World"]);
}