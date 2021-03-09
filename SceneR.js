class SceneR extends Phaser.Scene {
    constructor() {
      super("Result");
    }

    preload() {
    }

    create() {

        var codes = ["4rfXb","HQOo6","eLTVY","KRjaJ","sJLXr","d92rD","vUQYr","SSFRG","mnz6i","5ejIb","JUsBO","8u10C","OW8JX","ysGTm","HCAvx","cVeUz"];
        var cam = this.cameras.add(0,0,1280,720);
        cam.setBackgroundColor(0xffffff);
        var code;
        var bar = this.add.graphics();
        // console.log(bar);
        bar.fillStyle(0x1a1e1e, 1);
        bar.fillRect(0, 0, 1280, 100);

        var risks = localStorage.getItem("risks");
        
        console.log("before sum" + risks);

        var normalbet = localStorage.getItem("normalbet");
        var sadbet = localStorage.getItem("sadbet");
        var happybet = localStorage.getItem("happybet");
        var angrybet = localStorage.getItem("angrybet");
        var tranquilbet = localStorage.getItem("tranquilbet");

        console.log(normalbet);        
        console.log(sadbet);
        console.log(happybet);
        console.log(angrybet);
        console.log(tranquilbet);

        normalbet = Number(normalbet);
        sadbet = Number(sadbet);
        happybet = Number(happybet);
        angrybet = Number(angrybet);
        tranquilbet = Number(tranquilbet);

        var normalstr = String.fromCharCode(96 + normalbet);
        var sadstr = String.fromCharCode(96 + sadbet);
        var happystr = String.fromCharCode(96 + happybet);
        var angrystr = String.fromCharCode(96 + angrybet);
        var tranquilstr = String.fromCharCode(96 + tranquilbet);

        var codestr = normalstr.concat(sadstr);
        codestr = codestr.concat(happystr);
        codestr = codestr.concat(angrystr);
        codestr = codestr.concat(tranquilstr);
        
        console.log(codestr);

        var value = Number(risks);
        var sum = 0;
        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        risks = sum;

        console.log("after sum" + risks);

        code = codestr.concat(risks);
        
        var style1 = { font: "bold 32px Arial", fill: "#fff", boundsAlignH:"center", boundsAlignV: "middle"};
        var text1 = this.add.text(15, 50, "Section 4: Results", style1);

        var style2 = { font: "26px Arial", fill: "#da0b0b ", boundsAlignH:"center", boundsAlignV: "middle"};
        var text2 = this.add.text(50, 200, "Your Results:", style2);
        var style3 = { font: "26px Arial", fill: "#000 ", align:"left", wordWrap: {width: 1000, useAdvanceWrap: true}};
        var text3 = this.add.text(150, 265, "Please enter code given below in the form", style3)
        var text4 = this.add.text(150, 345, code, style3)
        var text5 = this.add.text(150, 425, "Thank You for Participating You can quit this tab after entering the code", style3);
    }
}