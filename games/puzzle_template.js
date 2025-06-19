// Universal Puzzle Game Template Generator
// This script creates functional puzzle games for all categories

const puzzleGameTemplates = {
    // Logic Puzzles (045-050)
    logicGrid: {
        title: "ロジックグリッド",
        icon: "🧩", 
        description: "論理的思考力を鍛える推理パズル",
        mechanics: "grid_deduction"
    },
    sudokuLight: {
        title: "数独ライト", 
        icon: "🔢",
        description: "4×4数独で論理的思考力を鍛える",
        mechanics: "number_placement"
    },
    patternMatch: {
        title: "パターンマッチ",
        icon: "🔍", 
        description: "パターン認識力を鍛えて分析力を向上",
        mechanics: "pattern_matching"
    },
    memoryPuzzle: {
        title: "記憶パズル",
        icon: "🧠",
        description: "記憶力と集中力を鍛えて情報処理能力を向上", 
        mechanics: "sequence_memory"
    },
    numberLogic: {
        title: "数字推理",
        icon: "🔢",
        description: "数字パターンを理解して論理的思考力を鍛える",
        mechanics: "number_sequence"
    },
    colorLogic: {
        title: "色彩論理",
        icon: "🎨", 
        description: "色の組み合わせから規則を見つける論理パズル",
        mechanics: "color_logic"
    },
    
    // Pattern Recognition (051-056)
    sequencePattern: {
        title: "順序パターン",
        icon: "📊",
        description: "数列パターンを見つけて次の値を予測する",
        mechanics: "sequence_recognition"
    },
    visualPattern: {
        title: "図形パターン", 
        icon: "🔺",
        description: "図形の配置パターンを理解して法則を見つける",
        mechanics: "shape_pattern"
    },
    colorPattern: {
        title: "配色パターン",
        icon: "🌈",
        description: "色の変化パターンを分析して次を予測する", 
        mechanics: "color_sequence"
    },
    symbolPattern: {
        title: "記号認識",
        icon: "🔣",
        description: "記号の並びから隠れたルールを発見する",
        mechanics: "symbol_recognition"
    },
    movementPattern: {
        title: "動作パターン",
        icon: "🔄", 
        description: "要素の移動パターンを追跡して予測する",
        mechanics: "movement_tracking"
    },
    sizePattern: {
        title: "サイズ変化",
        icon: "📏",
        description: "大きさの変化パターンを理解する認識ゲーム",
        mechanics: "size_progression"
    },

    // Number Puzzles (057-062)  
    numberSequence: {
        title: "数列完成",
        icon: "🔢",
        description: "数列の法則を見つけて空欄を埋める",
        mechanics: "arithmetic_sequence"
    },
    calculationPuzzle: {
        title: "計算パズル",
        icon: "➕",
        description: "四則演算を使って目標値を作る",
        mechanics: "target_calculation"
    },
    numberMatching: {
        title: "数字マッチング", 
        icon: "🎯",
        description: "条件に合う数字の組み合わせを見つける",
        mechanics: "number_pairing"
    },
    mathPyramid: {
        title: "数字ピラミッド",
        icon: "📐",
        description: "隣接する数の和でピラミッドを完成させる",
        mechanics: "pyramid_building"
    },
    digitSum: {
        title: "桁和パズル",
        icon: "🧮", 
        description: "各桁の和が指定値になる数を見つける",
        mechanics: "digit_manipulation"
    },
    numberGrid: {
        title: "数字配置",
        icon: "⚹",
        description: "制約条件を満たすように数字を配置する",
        mechanics: "constrained_placement"
    },

    // Word Puzzles (063-066)
    anagramSolver: {
        title: "アナグラム",
        icon: "🔤", 
        description: "文字を並び替えて単語を作る語彙力ゲーム",
        mechanics: "letter_rearrangement"
    },
    wordFinding: {
        title: "単語探し",
        icon: "🔍",
        description: "文字グリッドから隠れた単語を見つける",
        mechanics: "word_search"
    },
    vocabularyBuilder: {
        title: "語彙構築",
        icon: "📚",
        description: "限られた文字で最も多くの単語を作る",
        mechanics: "word_formation"
    },
    wordChain: {
        title: "しりとり連鎖",
        icon: "🔗",
        description: "前の単語の最後の文字で新しい単語を作る",
        mechanics: "word_chaining"
    },

    // Spatial Puzzles (067-068)
    blockPuzzle: {
        title: "ブロックパズル",
        icon: "🧱",
        description: "ブロックを移動させて目標配置を作る",
        mechanics: "block_arrangement"
    },
    rotationGame: {
        title: "回転パズル", 
        icon: "🔄",
        description: "図形を回転させて正しい向きに揃える",
        mechanics: "rotation_matching"
    },

    // Memory & Math (069-070)
    memorySequence: {
        title: "記憶シーケンス",
        icon: "🧠",
        description: "複雑な数列を記憶して再現する高度な記憶ゲーム",
        mechanics: "advanced_memory"
    },
    equationSolver: {
        title: "方程式パズル",
        icon: "🔬", 
        description: "代数的思考で未知数を求める数学パズル",
        mechanics: "equation_solving"
    }
};

// Game mechanics implementations
const gameMechanics = {
    // Basic puzzle mechanics that can be reused
    generateRandomSequence: (length, max) => {
        return Array.from({length}, () => Math.floor(Math.random() * max));
    },
    
    createGrid: (rows, cols, fillValue = null) => {
        return Array(rows).fill().map(() => Array(cols).fill(fillValue));
    },
    
    shuffleArray: (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
    
    generateArithmeticSequence: (start, diff, length) => {
        return Array.from({length}, (_, i) => start + (i * diff));
    }
};

// Export for use in game files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { puzzleGameTemplates, gameMechanics };
}