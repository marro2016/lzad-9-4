function drawTree (heightTree) {
        for (var i = 1; i <= heightTree; i++) {
        var star = '';
        for (var h = heightTree; h > i; h--) {
         star += ' ';
        }
        for (var j = 0; j < i; j++) {
        star += '*';
        }
        for (var l = 1; l < i; l++) {
        star += '*';
        }
        console.log(star);      
 }
}
drawTree(10);
