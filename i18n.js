// i18n — Sync Studio. Fleet convention (see Topo): English source strings ARE
// the keys, so a missing entry falls back to English. Locale comes from
// carino-lang.js (window.CarinoLang.current); this script must load deferred
// AFTER carino-lang.js. Reacts to the 'carino:langchange' event.
// Japanese deliberately says "PC", not コンピューター.

const I18N = {
    es: {
        // Keyboard legend
        'Sync': 'Sincronizar',
        'Blank': 'Blanco',
        'Skip': 'Saltar',
        'Undo': 'Deshacer',
        'Play/Pause': 'Reproducir/Pausar',
        'Mic': 'Mic',
        // Video module
        'Monitor': 'Monitor',
        'Load YT': 'Cargar YT',
        'Local File': 'Archivo local',
        'Pop-out': 'Ventana aparte',
        // Source module
        'Source': 'Fuente',
        'Import Script': 'Importar guion',
        'Auto': 'Auto',
        'Auto ON': 'Auto ON',
        'Mic ON': 'Mic ON',
        'Listening...': 'Escuchando...',
        // Output module
        'Output': 'Salida',
        'Strip': 'Quitar tiempos',
        // Placeholders / titles
        'YouTube URL...': 'URL de YouTube...',
        'Paste script here, or use Mic to transcribe live...': 'Pega aquí el guion, o usa el micrófono para transcribir en vivo...',
        'Auto-submit on silence': 'Enviar automáticamente al detectar silencio',
        // JS status strings
        'Loading…': 'Cargando…',
        'Downloading Whisper model (~39 MB, cached after first use)…': 'Descargando el modelo Whisper (~39 MB, queda en caché tras el primer uso)…',
        'Could not start transcription:': 'No se pudo iniciar la transcripción:',
    },
    'pt-BR': {
        'Sync': 'Sincronizar',
        'Blank': 'Em branco',
        'Skip': 'Pular',
        'Undo': 'Desfazer',
        'Play/Pause': 'Reproduzir/Pausar',
        'Mic': 'Mic',
        'Monitor': 'Monitor',
        'Load YT': 'Carregar YT',
        'Local File': 'Arquivo local',
        'Pop-out': 'Janela separada',
        'Source': 'Fonte',
        'Import Script': 'Importar roteiro',
        'Auto': 'Auto',
        'Auto ON': 'Auto ON',
        'Mic ON': 'Mic ON',
        'Listening...': 'Ouvindo...',
        'Output': 'Saída',
        'Strip': 'Remover tempos',
        'YouTube URL...': 'URL do YouTube...',
        'Paste script here, or use Mic to transcribe live...': 'Cole o roteiro aqui, ou use o microfone para transcrever ao vivo...',
        'Auto-submit on silence': 'Enviar automaticamente ao detectar silêncio',
        'Loading…': 'Carregando…',
        'Downloading Whisper model (~39 MB, cached after first use)…': 'Baixando o modelo Whisper (~39 MB, fica em cache após o primeiro uso)…',
        'Could not start transcription:': 'Não foi possível iniciar a transcrição:',
    },
    ja: {
        'Sync': '同期',
        'Blank': '空行',
        'Skip': 'スキップ',
        'Undo': '元に戻す',
        'Play/Pause': '再生/一時停止',
        'Mic': 'マイク',
        'Monitor': 'モニター',
        'Load YT': 'YT読み込み',
        'Local File': 'ローカルファイル',
        'Pop-out': '別ウィンドウ',
        'Source': 'ソース',
        'Import Script': '台本をインポート',
        'Auto': '自動',
        'Auto ON': '自動 ON',
        'Mic ON': 'マイク ON',
        'Listening...': '聞き取り中...',
        'Output': '出力',
        'Strip': 'タイム除去',
        'YouTube URL...': 'YouTubeのURL...',
        'Paste script here, or use Mic to transcribe live...': 'ここに台本を貼り付けるか、マイクでリアルタイムに文字起こし...',
        'Auto-submit on silence': '無音を検出したら自動確定',
        'Loading…': '読み込み中…',
        'Downloading Whisper model (~39 MB, cached after first use)…': 'Whisperモデルをダウンロード中 (約39 MB、初回以降はキャッシュされます)…',
        'Could not start transcription:': '文字起こしを開始できませんでした:',
    },
    ru: {
        'Sync': 'Синхр.',
        'Blank': 'Пустая метка',
        'Skip': 'Пропустить',
        'Undo': 'Отменить',
        'Play/Pause': 'Пуск/пауза',
        'Mic': 'Микрофон',
        'Monitor': 'Монитор',
        'Load YT': 'Загрузить YT',
        'Local File': 'Локальный файл',
        'Pop-out': 'Отдельное окно',
        'Source': 'Источник',
        'Import Script': 'Импорт текста',
        'Auto': 'Авто',
        'Auto ON': 'Авто ВКЛ',
        'Mic ON': 'Микрофон ВКЛ',
        'Listening...': 'Слушаю...',
        'Output': 'Результат',
        'Strip': 'Убрать тайминги',
        'YouTube URL...': 'URL YouTube...',
        'Paste script here, or use Mic to transcribe live...': 'Вставьте текст сюда или включите микрофон для живой расшифровки...',
        'Auto-submit on silence': 'Автоотправка при тишине',
        'Loading…': 'Загрузка…',
        'Downloading Whisper model (~39 MB, cached after first use)…': 'Загрузка модели Whisper (~39 МБ, кешируется после первого использования)…',
        'Could not start transcription:': 'Не удалось запустить расшифровку:',
    },
};

let LOCALE = 'en';

function setLocale(l) {
    LOCALE = (l === 'en' || I18N[l]) ? l : 'en';
    document.documentElement.lang = LOCALE;
}

function t(key) {
    const dict = I18N[LOCALE];
    return (dict && dict[key]) || key;
}

// Static markup: elements carrying data-i18n use their original English text
// as the key (captured on first pass so locale switches stay reversible).
function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        if (!el.dataset.i18nKey) el.dataset.i18nKey = el.textContent.trim();
        el.textContent = t(el.dataset.i18nKey);
    });
}

// Prominent placeholder/title attributes, assigned explicitly.
function applyAttrI18n() {
    const ytUrl = document.getElementById('ytUrl');
    if (ytUrl) ytUrl.placeholder = t('YouTube URL...');
    const src = document.getElementById('sourceText');
    if (src) src.placeholder = t('Paste script here, or use Mic to transcribe live...');
    const autoBtn = document.getElementById('autoBtn');
    if (autoBtn) autoBtn.title = t('Auto-submit on silence');
}

// --- Fleet wiring ---
function currentFleetLang() { return (window.CarinoLang && window.CarinoLang.current) || 'en'; }

function applyI18n() {
    setLocale(currentFleetLang());
    applyStaticI18n();
    applyAttrI18n();
}

// carino-lang.js is deferred and runs before DOMContentLoaded, so CarinoLang
// exists by then (this script is deferred and placed after it).
document.addEventListener('DOMContentLoaded', applyI18n);
window.addEventListener('carino:langchange', applyI18n);
