var db;  
  
function openDatabase() {  
    db = openDatabase('MemoDatabase', '1.0', '留言本数据库', 2 * 1024 * 1024);  
    db.transaction(function(tx) {  
        tx.executeSql('CREATE TABLE IF NOT EXISTS Memos (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, time TEXT)');  
    });  
} 
  
// 保存留言到数据库  
function saveToDatabase(memoId) {  
    if (!db) {  
        console.error('数据库未初始化！');  
        return;  
    } 
    var memoText = document.getElementById(memoId).value;  
    var timestamp = new Date().toLocaleString();  
  
    db.transaction(function(tx) {  
        tx.executeSql('INSERT INTO Memos (text, time) VALUES (?, ?)', [memoText, timestamp], function(tx, results) {  
            console.log('留言已保存');  
            displayMessages(); // 更新页面显示  
        });  
    });  
}  
  
// 从数据库读取留言  
function readFromDatabase() {  
    if (!db) {  
        console.error('数据库未初始化！');  
        return;  
    } 
    db.transaction(function(tx) {  
        tx.executeSql('SELECT * FROM Memos ORDER BY id DESC', [], function(tx, results) {  
            var msgElement = document.getElementById('msg');  
            msgElement.innerHTML = '';  
  
            for (var i = 0; i < results.rows.length; i++) {  
                var row = results.rows.item(i);  
                var p = document.createElement('p');  
                p.textContent = row.text + ' (' + row.time + ')';  
                msgElement.appendChild(p);  
            }  
        });  
    });  
}  
  
// 初始化数据库（清空所有留言）  
function clearDatabase() {  
    if (!db) {  
        console.error('数据库未初始化！');  
        return;  
    } 
    db.transaction(function(tx) {  
        tx.executeSql('DELETE FROM Memos');  
        document.getElementById('memo').value = ''; // 清空textarea  
        document.getElementById('msg').innerHTML = ''; // 清空显示留言的段落  
    });  
}  
  
// 页面加载时打开数据库连接并显示已有留言  
window.onload = function() {  
    openDatabase();  
    readFromDatabase(); // 调用函数显示已有的留言  
};