// アニメーションのサンプル1

var sample = []; //サウンドファイルの配列
var animation; // 現在再生しているアニメーション

// サウンドファイルをプレロード
function preload() {
  sample[0] = loadSound('assets/se01.wav');
  sample[1] = loadSound('assets/se02.wav');
  sample[2] = loadSound('assets/se03.wav');
  sample[3] = loadSound('assets/se04.wav');
}

// 初期設定
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// アニメーションを再生
function draw() {
  background(0);
  if (animation) {
    animation.draw();
  }
}

// キー入力でサウンドを再生 + アニメーションを選択
function keyTyped() {
  if (key == 'a') {
    sample[0].play();
    animation = new Anim_a();
  }
  if (key == 's') {
    sample[1].play();
    animation = new Anim_s();
  }
  if (key == 'd') {
    sample[2].play();
    animation = new Anim_d();
  }
  if (key == 'f') {
    sample[3].play();
    animation = new Anim_f();
  }
}

// アニメーションを定義

// ------------------------------------------------------
// Animation A
function Anim_a() {
  this.x = width / 2; //X初期位置を画面の中心に
  this.y = height / 2; //y初期値を画面の中心に
  this.diameter = 0; //直径の初期値を0に
  this.speed = 10; //スピードを10に
  this.draw = function() {
    noStroke(); // 線は描かない
    fill(0, 127, 255); // 塗りの色を設定
    //指定した直径で円を描く
    ellipse(this.x, this.y, this.diameter, this.diameter);
    this.diameter += this.speed; //スピードの値分、直径を増加させる
  };
};

// ------------------------------------------------------
// Animation S
function Anim_s() {
  this.width = 0; //幅の初期値を0に
  this.speed = 80; //スピードを80に
  this.draw = function() {
    noStroke();
    fill(255, 0, 0);
    rectMode(CORNER); // 四角形の描画モードをCORNERに
    rect(0, 0, this.width, height); //四角形を描画
    this.width += this.speed; //四角形の幅を変化させる
  };
};

// ------------------------------------------------------
// Animation D
function Anim_d() {
  this.rotate = 0; //回転角度の初期値を0に
  this.size = 0; //サイズの初期値を0に
  this.speed = 50; //スピードの初期値を0に
  this.draw = function() {
    push(); //座標を記録
    fill(255, 255, 0);
    noStroke();
    //原点(中心軸)を画面の中心に
    translate(width / 2, height / 2);
    //指定した角度で回転
    rotate(radians(this.rotate));
    //四角形の描画モードを設定
    rectMode(CENTER);
    rect(0, 0, this.size, this.size); //四角形を描く
    pop(); //座標を復元
    this.rotate += this.speed; //角度を変更
    this.size += this.speed; //サイズを変更
  };
};

// ------------------------------------------------------
// Animation F
function Anim_f() {
  this.bgColor = 255; //初期の色を白に
  this.speed = -2; //スピードを-2に
  this.draw = function() {
    noStroke();
    fill(this.bgColor); // 設定した色で描画
    rect(0, 0, width, height); //四角形を描く
    this.bgColor += this.speed; //色を変更
  };
};