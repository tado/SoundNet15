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
  if(animation){
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

}

Anim_a.prototype.draw = function() {

};

// ------------------------------------------------------
// Animation S
function Anim_s() {

}

Anim_s.prototype.draw = function() {

};

// ------------------------------------------------------
// Animation D
function Anim_d() {

}

Anim_d.prototype.draw = function() {

};

// ------------------------------------------------------
// Animation F
function Anim_f() {

}

Anim_f.prototype.draw = function() {

};