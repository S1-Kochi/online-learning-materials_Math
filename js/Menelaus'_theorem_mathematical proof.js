// ==========================
// ルール定義
// ==========================
const rules1 = [
  {
    type: "pair",
    CE_F1: "p1_A1",
    CE_S1: "p1_A2",
    valid_F1: ["BR", "RB"], 
    valid_S1: ["RD", "DR"]  
  },
  {
    type: "pair",
    CE_F1: "p2_A3",
    CE_S1: "p2_A4",
    valid_F1: ["DR", "RD"],
    valid_S1: ["RA", "AR"]
  },
  {
    type: "pair",
    CE_F1: "p3_A5",
    CE_S1: "p3_A6",
    valid_F1: ["BR", "RB"],
    valid_S1: ["RD", "DR"]
  },
  {
    type: "pair",
    CE_F1: "p4_A7",
    CE_S1: "p4_A8",
    valid_F1: ["DR", "RD"],
    valid_S1: ["RA", "AR"]
  },
  {
    type: "pair",
    CE_F1: "p5_A9",
    CE_S1: "p5_A10",
    valid_F1: ["BR", "RB"],
    valid_S1: ["RD", "DR"]
  },
  {
    type: "pair",
    CE_F1: "p6_A11",
    CE_S1: "p6_A12",
    valid_F1: ["DR", "RD"],
    valid_S1: ["RA", "AR"]
  }
];

const rules2 = [
  {
    type: "pair",
    CE_F1: "p21_B1",
    CE_S1: "p21_B2",
    valid_F1: ["BR", "RB"],
    valid_S1: ["RD", "DR"]
  },
  {
    type: "pair",
    CE_F1: "p22_B3",
    CE_S1: "p22_B4",
    // 💡 1対1で対応する順番を完全に一致させて並べています
    valid_F1: ["ADC", "DCA", "CAD", "CDA", "DAC", "ACD", "ARQ", "RQA", "QAR", "QRA", "RAQ", "AQR"],
    valid_S1: ["ARQ", "RQA", "QAR", "QRA", "RAQ", "AQR", "ADC", "DCA", "CAD", "CDA", "DAC", "ACD"]
  },
  {
    type: "pair",
    CE_F1: "p23_B5",
    CE_S1: "p23_B6",
    valid_F1: ["RQA"],
    valid_S1: ["ARQ"]
  },
  {
    type: "pair",
    CE_F1: "p24_B7",
    CE_S1: "p24_B8",
    // 💡 1対1で対応する順番を完全に一致させて並べています
    valid_F1: ["ADC", "DCA", "CAD", "CDA", "DAC", "ACD", "ARQ", "RQA", "QAR", "QRA", "RAQ", "AQR"],
    valid_S1: ["ARQ", "RQA", "QAR", "QRA", "RAQ", "AQR", "ADC", "DCA", "CAD", "CDA", "DAC", "ACD"]
  },
  {
    type: "pair",
    CE_F1: "p25_B9",
    CE_S1: "p25_B10",
    valid_F1: ["DA", "AD"],
    valid_S1: ["RA", "AR"]
  },
  {
    type: "pair",
    CE_F1: "p26_B11",
    CE_S1: "p26_B12",
    valid_F1: ["BR", "RB"],
    valid_S1: ["RD", "DR"]
  },
  {
    type: "pair",
    CE_F1: "p27_B13",
    CE_S1: "p27_B14",
    valid_F1: ["AC", "CA", "AQ", "QA"],
    valid_S1: ["QA", "AQ", "CA", "AC"]
  },
  {
    type: "pair",
    CE_F1: "p28_B15",
    CE_S1: "p28_B16",
    valid_F1: ["AD", "DA", "AR", "RA"],
    valid_S1: ["RA", "AR", "DA", "AD"]
  },
  {
    type: "pair",
    CE_F1: "p29_B17",
    CE_S1: "p29_B18",
    valid_F1: ["DR", "RD"],
    valid_S1: ["RA", "AR"]
  },
  {
    type: "pair",
    CE_F1: "p30_B19",
    CE_S1: "p30_B20",
    valid_F1: ["BR", "RB"],
    valid_S1: ["RD", "DR"]
  },
  {
    type: "pair",
    CE_F1: "p31_B21",
    CE_S1: "p31_B22",
    valid_F1: ["DR", "RD"],
    valid_S1: ["RA", "AR"]
  }
];

// ==========================
// 共通判定処理コア
// ==========================
function validateRules(rules) {
  let correct = true;

  rules
    .filter(r => r.type === "pair")
    .forEach(r => {
      const CE_F1El = document.querySelector(`[data-id="${r.CE_F1}"]`);
      const CE_S1El = document.querySelector(`[data-id="${r.CE_S1}"]`);

      // 要素がない場合はスキップせず「不正解」にする（HTMLバグ検知のため）
      if (!CE_F1El || !CE_S1El) {
        correct = false;
        return;
      }

      // 値をトリミングし、大文字に統一することで全半角や大文字小文字のミスを防ぐ
      const CE_F1 = CE_F1El.value.trim().toUpperCase();
      const CE_S1 = CE_S1El.value.trim().toUpperCase();

      // 💡 分子が配列の「何番目」にあるかインデックスを取得
      const f1Index = r.valid_F1.indexOf(CE_F1);

      // 1. 分子がそもそも正解配列の中に存在するかチェック
      if (f1Index === -1) {
        correct = false;
        return;
      }

      // 2. 分子と同じ位置（インデックス）にある分母の正解文字と、実際の入力が一致するかチェック
      const expectedS1 = r.valid_S1[f1Index];
      if (CE_S1 !== expectedS1) {
        correct = false;
      }
    });

  return correct;
}

// ==========================
// 各ボタンのアクション
// ==========================
function check1() {
  const result = document.getElementById("result1");
  const isCorrect = validateRules(rules1);
  if (result) {
    result.textContent = isCorrect ? "正解！" : "不正解";
    result.style.color = isCorrect ? "green" : "red";
  }
}

function check2() {
  const result = document.getElementById("result2");
  const isCorrect = validateRules(rules2);
  if (result) {
    result.textContent = isCorrect ? "正解！" : "不正解";
    result.style.color = isCorrect ? "green" : "red";
  }
}