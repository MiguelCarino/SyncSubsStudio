// i18n — Sync Studio. Fleet convention (see Topo): English source strings ARE
// the keys, so a missing entry falls back to English. Locale comes from
// carino-lang.js (window.CarinoLang.current); this script must load deferred
// AFTER carino-lang.js. Reacts to the 'carino:langchange' event.
// Japanese deliberately says "PC", not コンピューター.

const I18N = {
    es: {
        'Late shift.': 'Turno nocturno.',
        'Good morning.': 'Buenos días.',
        'Good afternoon.': 'Buenas tardes.',
        'Good evening.': 'Buenas noches.',
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
        "☰ Controls": "☰ Controles",
        "Media": "Medios",
        "Script": "Guion",
        "Keys": "Teclas",
        "In Chrome, the mic is transcribed by Google’s speech servers (Edge uses Microsoft’s). Other browsers use Whisper, which runs here after downloading a 39 MB model from Hugging Face once.": "En Chrome, el micrófono lo transcriben los servidores de voz de Google (Edge usa los de Microsoft). Otros navegadores usan Whisper, que funciona aquí tras descargar una vez un modelo de 39 MB de Hugging Face.",
        "Runs in your browser. Nothing you add here is uploaded.": "Funciona en tu navegador. Nada de lo que añades aquí se sube.",
        "YouTube videos load from YouTube. In Chrome the mic goes to Google’s speech servers; Whisper downloads its model from Hugging Face.": "Los vídeos de YouTube se cargan desde YouTube. En Chrome, el micrófono va a los servidores de voz de Google; Whisper descarga su modelo de Hugging Face.",
        "Sync lyrics and subtitles": "Sincroniza letras y subtítulos",
        "to what you hear.": "con lo que oyes.",
        "Load a video or song and paste the lines. Press Enter on each line as it is said, then download SRT or LRC.": "Carga un vídeo o una canción y pega las líneas. Pulsa Intro en cada línea cuando suene y descarga SRT o LRC.",
        "Drop a video, song or subtitle file here or": "Suelta aquí un vídeo, una canción o un archivo de subtítulos o",
        "browse": "examina",
        "Opened in this browser": "Se abre en este navegador",
        "Try:": "Prueba:",
        "Sample lines": "Líneas de ejemplo",
        "Sample line one": "Línea de ejemplo uno",
        "Sample line two": "Línea de ejemplo dos",
        "Sample line three": "Línea de ejemplo tres",
        "Press Enter as each line starts": "Pulsa Intro cuando empiece cada línea",
        "YouTube could not be reached": "No se pudo conectar con YouTube",
        "Controls": "Controles",
    },
    'pt-BR': {
        'Late shift.': 'Turno da noite.',
        'Good morning.': 'Bom dia.',
        'Good afternoon.': 'Boa tarde.',
        'Good evening.': 'Boa noite.',
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
        "☰ Controls": "☰ Controles",
        "Media": "Mídia",
        "Script": "Roteiro",
        "Keys": "Teclas",
        "In Chrome, the mic is transcribed by Google’s speech servers (Edge uses Microsoft’s). Other browsers use Whisper, which runs here after downloading a 39 MB model from Hugging Face once.": "No Chrome, o microfone é transcrito pelos servidores de fala do Google (o Edge usa os da Microsoft). Outros navegadores usam o Whisper, que roda aqui depois de baixar uma vez um modelo de 39 MB do Hugging Face.",
        "Runs in your browser. Nothing you add here is uploaded.": "Roda no seu navegador. Nada do que você adiciona aqui é enviado.",
        "YouTube videos load from YouTube. In Chrome the mic goes to Google’s speech servers; Whisper downloads its model from Hugging Face.": "Vídeos do YouTube carregam do YouTube. No Chrome, o microfone vai para os servidores de fala do Google; o Whisper baixa o modelo do Hugging Face.",
        "Sync lyrics and subtitles": "Sincronize letras e legendas",
        "to what you hear.": "com o que você ouve.",
        "Load a video or song and paste the lines. Press Enter on each line as it is said, then download SRT or LRC.": "Carregue um vídeo ou uma música e cole as linhas. Aperte Enter em cada linha quando ela for dita e baixe SRT ou LRC.",
        "Drop a video, song or subtitle file here or": "Solte aqui um vídeo, uma música ou um arquivo de legendas ou",
        "browse": "procure",
        "Opened in this browser": "Aberto neste navegador",
        "Try:": "Experimente:",
        "Sample lines": "Linhas de exemplo",
        "Sample line one": "Linha de exemplo um",
        "Sample line two": "Linha de exemplo dois",
        "Sample line three": "Linha de exemplo três",
        "Press Enter as each line starts": "Aperte Enter quando cada linha começar",
        "YouTube could not be reached": "Não foi possível acessar o YouTube",
        "Controls": "Controles",
    },
    ja: {
        'Late shift.': '夜勤お疲れさま。',
        'Good morning.': 'おはようございます。',
        'Good afternoon.': 'こんにちは。',
        'Good evening.': 'こんばんは。',
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
        "☰ Controls": "☰ コントロール",
        "Media": "メディア",
        "Script": "原稿",
        "Keys": "キー",
        "In Chrome, the mic is transcribed by Google’s speech servers (Edge uses Microsoft’s). Other browsers use Whisper, which runs here after downloading a 39 MB model from Hugging Face once.": "Chrome では、マイクの音声は Google の音声サーバーで文字起こしされます（Edge は Microsoft のサーバー）。その他のブラウザーでは Whisper を使い、Hugging Face から 39 MB のモデルを一度ダウンロードした後、このページ内で動作します。",
        "Runs in your browser. Nothing you add here is uploaded.": "ブラウザ内で動作します。ここに追加したものはアップロードされません。",
        "YouTube videos load from YouTube. In Chrome the mic goes to Google’s speech servers; Whisper downloads its model from Hugging Face.": "YouTube の動画は YouTube から読み込まれます。Chrome ではマイクの音声が Google の音声サーバーに送られます。Whisper はモデルを Hugging Face からダウンロードします。",
        "Sync lyrics and subtitles": "歌詞と字幕を",
        "to what you hear.": "聞こえる音に合わせる。",
        "Load a video or song and paste the lines. Press Enter on each line as it is said, then download SRT or LRC.": "動画か曲を読み込み、行を貼り付けます。各行が聞こえたら Enter を押し、SRT か LRC でダウンロードします。",
        "Drop a video, song or subtitle file here or": "動画、曲、字幕ファイルをここにドロップするか",
        "browse": "ファイルを選択",
        "Opened in this browser": "このブラウザー内で開きます",
        "Try:": "試す:",
        "Sample lines": "サンプルの行",
        "Sample line one": "サンプル行 1",
        "Sample line two": "サンプル行 2",
        "Sample line three": "サンプル行 3",
        "Press Enter as each line starts": "各行の始まりで Enter を押す",
        "YouTube could not be reached": "YouTube に接続できませんでした",
        "Controls": "コントロール",
    },
    ru: {
        'Late shift.': 'Ночная смена.',
        'Good morning.': 'Доброе утро.',
        'Good afternoon.': 'Добрый день.',
        'Good evening.': 'Добрый вечер.',
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
        "☰ Controls": "☰ Управление",
        "Media": "Медиа",
        "Script": "Текст",
        "Keys": "Клавиши",
        "In Chrome, the mic is transcribed by Google’s speech servers (Edge uses Microsoft’s). Other browsers use Whisper, which runs here after downloading a 39 MB model from Hugging Face once.": "В Chrome речь с микрофона распознают серверы Google (в Edge — серверы Microsoft). Другие браузеры используют Whisper: он работает здесь, один раз скачав модель 39 МБ с Hugging Face.",
        "Runs in your browser. Nothing you add here is uploaded.": "Работает в вашем браузере. Ничего из добавленного сюда не загружается.",
        "YouTube videos load from YouTube. In Chrome the mic goes to Google’s speech servers; Whisper downloads its model from Hugging Face.": "Видео YouTube загружаются с YouTube. В Chrome звук с микрофона уходит на серверы Google; Whisper скачивает модель с Hugging Face.",
        "Sync lyrics and subtitles": "Синхронизируйте тексты и субтитры",
        "to what you hear.": "с тем, что слышите.",
        "Load a video or song and paste the lines. Press Enter on each line as it is said, then download SRT or LRC.": "Загрузите видео или песню и вставьте строки. Нажимайте Enter на каждой строке, когда она звучит, затем скачайте SRT или LRC.",
        "Drop a video, song or subtitle file here or": "Перетащите сюда видео, песню или файл субтитров или",
        "browse": "выберите файл",
        "Opened in this browser": "Открывается в этом браузере",
        "Try:": "Попробуйте:",
        "Sample lines": "Пример строк",
        "Sample line one": "Пример, строка один",
        "Sample line two": "Пример, строка два",
        "Sample line three": "Пример, строка три",
        "Press Enter as each line starts": "Нажимайте Enter в начале каждой строки",
        "YouTube could not be reached": "Не удалось связаться с YouTube",
        "Controls": "Управление",
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
