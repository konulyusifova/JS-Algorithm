var num = prompt("Ədəd daxil edin:");
var newNum = num;
var eks = 0;
while (num > 0) {
    var teklik = num % 10;
    num = (num - teklik) / 10;
    eks = eks * 10 + teklik;
}
if (eks == newNum) {
    console.log("palindromdur");
}
else {
    console.log("palindrom deyil");
}
