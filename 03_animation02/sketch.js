// アニメーションのサンプル2

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
  if (key == 'g') {
    sample[0].play();
    animation = new Anim_g();
  }
  if (key == 'h') {
    sample[1].play();
    animation = new Anim_h();
  }
  if (key == 'j') {
    sample[2].play();
    animation = new Anim_j();
  }
}

// アニメーションを定義

// ------------------------------------------------------
// 直線的な動き
function Anim_a() {
  //初期設定
  this.x = 10;
  this.y = height / 2.0;
  this.draw = function() {
    //アニメーションの描画
    this.x += 20;
    fill(31, 127, 255);
    ellipse(this.x, this.y, 40, 40);
  };
};

// ------------------------------------------------------
// 動きの起点をランダムに
function Anim_s() {
  //初期設定
  this.x = 10;
  this.y = random(height);
  this.draw = function() {
    //アニメーションの描画
    this.x += 20;
    fill(31, 127, 255);
    ellipse(this.x, this.y, 40, 40);
  };
};

// ------------------------------------------------------
// 関数を利用した動き1 - sin波
function Anim_d() {
  //初期設定
  this.x = 10;
  this.y = height / 2;
  this.count = 0;
  this.draw = function() {
    //アニメーションの描画
    this.x += 20;
    this.y = sin(this.count / 5.0) * height / 4 + height / 2;
    fill(31, 127, 255);
    ellipse(this.x, this.y, 40, 40);
    this.count++;
  };
};

// ------------------------------------------------------
// 関数を利用した動き2 - 円
function Anim_f() {
  //初期設定
  this.x = 10;
  this.y = height / 2;
  this.count = 0;
  this.draw = function() {
    //アニメーションの描画
    this.x = cos(this.count / 4.0) * height / 3 + width / 2;
    this.y = sin(this.count / 4.0) * height / 3 + height / 2;
    fill(31, 127, 255);
    ellipse(this.x, this.y, 40, 40);
    this.count++;
  };
};

// ------------------------------------------------------
// 拡大
function Anim_g() {
  //初期設定
  this.x = width / 2;
  this.y = height / 2;
  this.size = 0;
  rectMode(CENTER);
  this.draw = function() {
    //アニメーションの描画
    fill(31, 127, 255);
    rect(this.x, this.y, this.size, this.size);
    this.size += 20;
  };
};

// ------------------------------------------------------
// 縮小
function Anim_h() {
  //初期設定
  this.x = width / 2;
  this.y = height / 2;
  this.size = width;
  rectMode(CENTER);
  this.draw = function() {
    //アニメーションの描画
    fill(31, 127, 255);
    rect(this.x, this.y, this.size, this.size);
    this.size /= 1.2;
  };
};

// ------------------------------------------------------
// 色
function Anim_j() {
  //初期設定
  this.r = 0;
  this.g = 0;
  this.b = 255;
  rectMode(CORNER);
  this.draw = function() {
    //アニメーションの描画
    fill(this.r, this.g, this.b);
    rect(0, 0, width, height);
    this.r = (this.r + 2) % 255;
    this.b = (this.b - 2) % 255;
  };
};