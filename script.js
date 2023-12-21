/* Q1 forを使ったループ処理を作ってください。*/
for (var i = 0; i < 8; i++) {
  console.log("観察" + i + "日目");
};
/* Q2 for inを使ったループ処理を作ってください。*/
var items = ["水", "肥料"];
for (index in items) {
  console.log(items[index]);
};
/* Q3 for ofを使ったループ処理を作ってください。*/
var friends = [
  { name: "merody", animal: "rabbit", },
  { name: "kuromi", animal: "cat", },
  { name: "pianpo", animal: "sheep", }
]
for (friend of friends) { console.log(friend); };
