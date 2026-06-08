// ==========================
// ルール定義
// ==========================

const rules1 = [
  {
    type: "pair",
    CE_F1: "p1_A1", CE_S1: "p1_A2",
    valid_F1: ["OAB", "ABO", "BOA", "BAO", "AOB", "OBA", "OCA", "CAO", "AOC", "ACO", "COA", "OAC"],
    valid_S1: ["OCA", "CAO", "AOC", "ACO", "COA", "OAC", "OAB", "ABO", "BOA", "BAO", "AOB", "OBA"]
  },
  {
    type: "pair",
    CE_F1: "p2_A3", CE_S1: "p2_A4",
    valid_F1: ["BH", "HB", "BH", "HB"],
    valid_S1: ["CK", "KC", "KC", "CK"]
  },
  {
    type: "pair",
    CE_F1: "p3_A5", CE_S1: "p3_A6",
    valid_F1: ["BPH", "PHB", "HBP", "HPB", "PBH", "BHP", "CPK", "PKC", "KCP", "PCK", "KPC", "CKP"],
    valid_S1: ["CPK", "PKC", "KCP", "KPC", "PCK", "CKP", "BPH", "PHB", "HBP", "PBH", "HPB", "BHP"]
  },
  {
    type: "pair",
    CE_F1: "p4_A7", CE_S1: "p4_A8",
    valid_F1: ["BHP", "PHB", "CKP", "PKC"],
    valid_S1: ["CKP", "PKC", "BHP", "PHB"]
  },
  {
    type: "pair",
    CE_F1: "p5_A9", CE_S1: "p5_A10",
    valid_F1: ["BH", "HB", "BH", "HB", "KC", "CK", "KC", "CK"],
    valid_S1: ["CK", "KC", "KC", "CK", "HB", "BH", "BH", "HB"]
  },
  {
    type: "pair",
    CE_F1: "p6_A11", CE_S1: "p6_A12",
    valid_F1: ["HBP", "PBH", "PCK", "KCP"],
    valid_S1: ["KCP", "PCK", "PBH", "HBP"]
  },
  {
    type: "pair",
    CE_F1: "p7_A13", CE_S1: "p7_A14",
    valid_F1: ["BPH", "PHB", "HBP", "HPB", "PBH", "BHP", "CPK", "PKC", "KCP", "PCK", "KPC", "CKP"],
    valid_S1: ["CPK", "PKC", "KCP", "KPC", "PCK", "CKP", "BPH", "PHB", "HBP", "PBH", "HPB", "BHP"]
  },
  {
    type: "pair",
    CE_F1: "p8_A15", CE_S1: "p8_A16",
    valid_F1: ["BP", "PB", "BP", "PB"],
    valid_S1: ["PC", "CP", "CP", "PC"]
  },
  {
    type: "pair",
    CE_F1: "p9_A17", CE_S1: "p9_A18",
    valid_F1: ["BP", "PB", "BP", "PB"],
    valid_S1: ["PC", "CP", "CP", "PC"]
  }
];

const rules2 = [
  {
    type: "pair",
    CE_F1: "p21_B1", CE_S1: "p21_B2",
    valid_F1: ["OAB", "BOA", "ABO", "BAO", "AOB", "OBA", "OBC", "BCO", "COB", "BOC", "OCB", "CBO"],
    valid_S1: ["OBC", "COB", "BCO", "CBO", "BOC", "OCB", "OAB", "ABO", "BOA", "AOB", "OBA", "BAO"]
  },
  {
    type: "pair",
    CE_F1: "p22_B3", CE_S1: "p22_B4",
    valid_F1: ["CE", "EC", "CE", "EC"],
    valid_S1: ["AD", "DA", "DA", "AD"]
  },
  {
    type: "pair",
    CE_F1: "p23_B5", CE_S1: "p23_B6",
    valid_F1: ["AQD", "QDA", "DAQ", "DQA", "ADQ", "QAD", "CQE", "QEC", "ECQ", "EQC", "CEQ", "QCE"],
    valid_S1: ["CQE", "QEC", "ECQ", "EQC", "CEQ", "QCE", "AQD", "QDA", "DAQ", "EQC", "CEQ", "QAD"]
  },
  {
    type: "pair",
    CE_F1: "p24_B7", CE_S1: "p24_B8",
    valid_F1: ["AQD", "DQA", "EQC", "CQE"],
    valid_S1: ["CQE", "EQC", "DQA", "AQD"]
  },
  {
    type: "pair",
    CE_F1: "p25_B9", CE_S1: "p25_B10",
    valid_F1: ["AD", "DA", "AD", "DA", "CE", "EC", "CE", "EC"],
    valid_S1: ["CE", "EC", "EC", "CE", "AD", "DA", "DA", "AD"]
  },
  {
    type: "pair",
    CE_F1: "p26_B11", CE_S1: "p26_B12",
    valid_F1: ["DAQ", "QAD", "QCE", "ECQ"],
    valid_S1: ["ECQ", "QCE", "QAD", "DAQ"]
  },
  {
    type: "pair",
    CE_F1: "p27_B13", CE_S1: "p27_B14",
    valid_F1: ["AQD", "QDA", "DAQ", "DQA", "ADQ", "QAD", "CQE", "QEC", "ECQ", "EQC", "CEQ", "QCE"],
    valid_S1: ["CQE", "QEC", "ECQ", "EQC", "CEQ", "QCE", "AQD", "QDA", "DAQ", "EQC", "CEQ", "QAD"]
  },
  {
    type: "pair",
    CE_F1: "p28_B15", CE_S1: "p28_B16",
    valid_F1: ["CQ", "QC", "CQ", "QC"],
    valid_S1: ["QA", "AQ", "AQ", "QA"]
  },
  {
    type: "pair",
    CE_F1: "p29_B17", CE_S1: "p29_B18",
    valid_F1: ["CQ", "QC", "CQ", "QC"],
    valid_S1: ["QA", "AQ", "AQ", "QA"]
  }
];

const rules3 = [
  {
    type: "pair",
    CE_F1: "p31_C1", CE_S1: "p31_C2",
    valid_F1: ["OCA", "CAO", "AOC", "ACO", "OAC", "COA", "COB", "OBC", "BCO", "OCB", "CBO", "BOC"],
    valid_S1: ["OBC", "BCO", "COB", "CBO", "OCB", "BOC", "OCA", "CAO", "AOC", "COA", "OAC", "ACO"]
  },
  {
    type: "pair",
    CE_F1: "p32_C3", CE_S1: "p32_C4",
    valid_F1: ["AF", "FA", "AF", "FA"],
    valid_S1: ["BG", "GB", "GB", "BG"]
  },
  {
    type: "pair",
    CE_F1: "p33_C5", CE_S1: "p33_C6",
    valid_F1: ["AFR", "RAF", "FRA", "ARF", "FAR", "RFA", "BGR", "RBG", "GRB", "BRG", "GBR", "RGB"],
    valid_S1: ["BGR", "RBG", "GRB", "BRG", "GBR", "RGB", "AFR", "RAF", "GRB", "BRG", "GBR", "RFA"]
  },
  {
    type: "pair",
    CE_F1: "p34_C7", CE_S1: "p34_C8",
    valid_F1: ["AFR", "RFA", "RGB", "BGR"],
    valid_S1: ["BGR", "RGB", "RFA", "AFR"]
  },
  {
    type: "pair",
    CE_F1: "p35_C9", CE_S1: "p35_C10",
    valid_F1: ["AF", "AF", "FA", "FA", "GB", "BG", "GB", "BG"],
    valid_S1: ["BG", "GB", "BG", "GB", "AF", "AF", "FA", "FA"]
  },
  {
    type: "pair",
    CE_F1: "p36_C11", CE_S1: "p36_C12",
    valid_F1: ["RAF", "FAR", "RBG", "GBR"],
    valid_S1: ["RBG", "GBR", "RAF", "FAR"]
  },
  {
    type: "pair",
    CE_F1: "p37_C13", CE_S1: "p37_C14",
    valid_F1: ["AFR", "RAF", "FRA", "ARF", "FAR", "RFA", "BGR", "RBG", "GRB", "BRG", "GBR", "RGB"],
    valid_S1: ["BGR", "RBG", "GRB", "BRG", "GBR", "RGB", "AFR", "RAF", "GRB", "BRG", "GBR", "RFA"]
  },
  {
    type: "pair",
    CE_F1: "p38_C15", CE_S1: "p38_C16",
    valid_F1: ["AR", "RA", "AR", "RA"], 
    valid_S1: ["RB", "RB", "BR", "BR"]
  },
  {
    type: "pair",
    CE_F1: "p39_C17", CE_S1: "p39_C18",
    valid_F1: ["AR", "RA", "AR", "RA"],
    valid_S1: ["RB", "RB", "BR", "BR"]
  }
];

const rules4 = [
  {
    type: "pair",
    CE_F1: "p41_D1", CE_S1: "p41_D2",
    valid_F1: ["BP", "PB", "BP", "PB"],
    valid_S1: ["PC", "CP", "CP", "PC"]
  },
  {
    type: "pair",
    CE_F1: "p42_D3", CE_S1: "p42_D4",
    valid_F1: ["CQ", "QC", "CQ", "QC"],
    valid_S1: ["QA", "AQ", "AQ", "QA"]
  },
  {
    type: "pair",
    CE_F1: "p43_D5", CE_S1: "p43_D6",
    valid_F1: ["AR", "RA", "AR", "RA"],
    valid_S1: ["RB", "RB", "BR", "BR"]
  },
  {
    type: "pair",
    CE_F1: "p44_D7", CE_S1: "p44_D8",
    valid_F1: ["OAB", "ABO", "BOA", "BAO", "AOB", "OBA"],
    valid_S1: ["OCA", "CAO", "AOC", "ACO", "COA", "OAC"]
  },
  {
    type: "pair",
    CE_F1: "p45_D9", CE_S1: "p45_D10",
    valid_F1: ["OBC", "BCO", "COB", "BOC", "OCB", "CBO"],
    valid_S1: ["OAB", "ABO", "BOA", "AOB", "OBA", "BAO"]
  },
  {
    type: "pair",
    CE_F1: "p46_D11", CE_S1: "p46_D12",
    valid_F1: ["OCA", "CAO", "AOC", "ACO", "OAC", "COA"],
    valid_S1: ["OBC", "BCO", "COB", "CBO", "OCB", "BOC"]
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

      // 画面上に該当する入力欄がない場合はエラー（検証用）
      if (!CE_F1El || !CE_S1El) {
        correct = false;
        return;
      }

      // 入力値をトリミングして大文字に統一
      const CE_F1 = CE_F1El.value.trim().toUpperCase();
      const CE_S1 = CE_S1El.value.trim().toUpperCase();

      // 入力された分子(F1)が、正解の配列の「何番目」に存在するかを調べる
      let f1Index = -1;
      
      // 同じ値が複数ある場合（順不同マッピング）に対応するため、ループで一致するものを探す
      for (let i = 0; i < r.valid_F1.length; i++) {
        if (r.valid_F1[i] === CE_F1) {
          // 分子が一致し、かつその位置に対応する分母(S1)の値が実際の入力値と一致するかチェック
          if (r.valid_S1[i] === CE_S1) {
            f1Index = i;
            break; // 完璧なペアが見つかればループを抜ける
          }
        }
      }

      // 該当するインデックスが見つからなければ（ペアとして不成立なら）不正解
      if (f1Index === -1) {
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

function check3() {
  const result = document.getElementById("result3");
  const isCorrect = validateRules(rules3);
  if (result) {
    result.textContent = isCorrect ? "正解！" : "不正解";
    result.style.color = isCorrect ? "green" : "red";
  }
}

function check4() {
  const result = document.getElementById("result4");
  const isCorrect = validateRules(rules4);
  if (result) {
    result.textContent = isCorrect ? "正解！" : "不正解";
    result.style.color = isCorrect ? "green" : "red";
  }
}