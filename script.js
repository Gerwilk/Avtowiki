/* ============ ДАННЫЕ ============
   wiki у модели — статья в английской Википедии (для фото).
   Если фото неподходящее, можно задать поле photo: 'https://…' у модели. */
const BRANDS = [
  {id:'toyota',name:'Toyota',mono:'TO',color:'#eb0a1e',wiki:'Toyota',country:'Япония',region:'Азия',founded:1937,
   desc:'Крупнейший производитель автомобилей в мире по объёму продаж.',
   models:[
     {name:'Camry',years:'2018–н.в.',body:'Седан',engine:'2.5 л, гибрид',drive:'Передний',hp:218,accel:7.6,top:180,wiki:'Toyota Camry'},
     {name:'Land Cruiser 300',years:'2021–н.в.',body:'Внедорожник',engine:'3.3 л, дизель V6',drive:'Полный',hp:306,accel:9.4,top:180,wiki:'Toyota Land Cruiser (300 Series)'}]},
  {id:'bmw',name:'BMW',mono:'BM',color:'#1c69d4',wiki:'BMW',country:'Германия',region:'Европа',founded:1916,
   desc:'Премиальные автомобили, известные динамикой и управляемостью.',
   models:[
     {name:'M3 Competition',years:'2021–н.в.',body:'Седан',engine:'3.0 л, рядная шестёрка',drive:'Задний',hp:510,accel:3.5,top:290,wiki:'BMW M3'},
     {name:'X5 xDrive40i',years:'2018–н.в.',body:'Кроссовер',engine:'3.0 л, рядная шестёрка',drive:'Полный',hp:381,accel:5.5,top:250,wiki:'BMW X5'}]},
  {id:'tesla',name:'Tesla',mono:'TS',color:'#e31937',wiki:'Tesla, Inc.',country:'США',region:'Америка',founded:2003,
   desc:'Пионер массовых электромобилей и автопилота.',
   models:[
     {name:'Model 3 Long Range',years:'2021–н.в.',body:'Седан',engine:'Электро, 2 мотора',drive:'Полный',hp:498,accel:3.9,top:233,wiki:'Tesla Model 3'},
     {name:'Model S Plaid',years:'2021–н.в.',body:'Лифтбек',engine:'Электро, 3 мотора',drive:'Полный',hp:1020,accel:2.1,top:322,wiki:'Tesla Model S'}]},
  {id:'porsche',name:'Porsche',mono:'PO',color:'#b8962e',wiki:'Porsche',country:'Германия',region:'Европа',founded:1931,
   desc:'Спорткары с заводской историей гонок и узнаваемым дизайном.',
   models:[
     {name:'911 Carrera S',years:'2019–н.в.',body:'Купе',engine:'3.0 л, рядная шестёрка турбо',drive:'Задний',hp:450,accel:3.5,top:308,wiki:'Porsche 911'},
     {name:'Taycan Turbo S',years:'2020–н.в.',body:'Седан',engine:'Электро, 2 мотора',drive:'Полный',hp:761,accel:2.6,top:260,wiki:'Porsche Taycan'}]},
  {id:'lada',name:'Lada',mono:'LD',color:'#1a5fa8',wiki:'Lada',country:'Россия',region:'Европа',founded:1966,
   desc:'Массовые автомобили, известные неприхотливостью и доступностью.',
   models:[
     {name:'Vesta',years:'2015–н.в.',body:'Седан',engine:'1.6 л, атмосферный',drive:'Передний',hp:106,accel:11.5,top:180,wiki:'Lada Vesta'},
     {name:'Niva Legend',years:'2020–н.в.',body:'Внедорожник',engine:'1.7 л, атмосферный',drive:'Полный',hp:83,accel:19.0,top:130,wiki:'Lada Niva'}]},
  {id:'mercedes',name:'Mercedes-Benz',mono:'MB',color:'#7d8b99',wiki:'Mercedes-Benz',country:'Германия',region:'Европа',founded:1926,
   desc:'Один из старейших автопроизводителей, известный роскошью и безопасностью.',
   models:[
     {name:'C 300',years:'2021–н.в.',body:'Седан',engine:'2.0 л, турбо, рядная четвёрка',drive:'Задний',hp:258,accel:6.0,top:250,wiki:'Mercedes-Benz C-Class'},
     {name:'G 63 AMG',years:'2018–н.в.',body:'Внедорожник',engine:'4.0 л, V8 битурбо',drive:'Полный',hp:585,accel:4.5,top:240,wiki:'Mercedes-Benz G-Class'}]},
  {id:'audi',name:'Audi',mono:'AU',color:'#bb0a30',wiki:'Audi',country:'Германия',region:'Европа',founded:1909,
   desc:'Премиум-бренд Volkswagen Group с акцентом на полный привод и технологии.',
   models:[
     {name:'A4 40 TFSI',years:'2015–н.в.',body:'Седан',engine:'2.0 л, турбо, рядная четвёрка',drive:'Передний',hp:204,accel:7.5,top:250,wiki:'Audi A4'},
     {name:'RS6 Avant',years:'2019–н.в.',body:'Универсал',engine:'4.0 л, V8 битурбо',drive:'Полный',hp:600,accel:3.6,top:305,wiki:'Audi RS 6 Avant'}]},
  {id:'ferrari',name:'Ferrari',mono:'FE',color:'#dc1c13',wiki:'Ferrari',country:'Италия',region:'Европа',founded:1939,
   desc:'Легендарный итальянский производитель спорткаров и гоночных машин Формулы 1.',
   models:[
     {name:'SF90 Stradale',years:'2019–н.в.',body:'Купе',engine:'4.0 л, V8 + 3 электромотора',drive:'Полный',hp:1000,accel:2.5,top:340,wiki:'Ferrari SF90 Stradale'},
     {name:'Roma',years:'2020–н.в.',body:'Купе',engine:'3.9 л, V8 битурбо',drive:'Задний',hp:620,accel:3.4,top:320,wiki:'Ferrari Roma'}]},
  {id:'lamborghini',name:'Lamborghini',mono:'LB',color:'#e8b400',wiki:'Lamborghini',country:'Италия',region:'Европа',founded:1963,
   desc:'Итальянские суперкары с агрессивным дизайном и мощными двигателями.',
   models:[
     {name:'Revuelto',years:'2023–н.в.',body:'Купе',engine:'6.5 л, V12 + гибрид',drive:'Полный',hp:1015,accel:2.5,top:350,wiki:'Lamborghini Revuelto'},
     {name:'Urus',years:'2018–н.в.',body:'Кроссовер',engine:'4.0 л, V8 битурбо',drive:'Полный',hp:650,accel:3.5,top:305,wiki:'Lamborghini Urus'}]},
  {id:'ford',name:'Ford',mono:'FD',color:'#1d4f9c',wiki:'Ford Motor Company',country:'США',region:'Америка',founded:1903,
   desc:'Один из крупнейших американских производителей, известный Mustang и пикапами.',
   models:[
     {name:'Mustang GT',years:'2015–н.в.',body:'Купе',engine:'5.0 л, V8',drive:'Задний',hp:450,accel:4.3,top:250,wiki:'Ford Mustang'},
     {name:'F-150 Raptor',years:'2017–н.в.',body:'Пикап',engine:'3.5 л, V6 битурбо',drive:'Полный',hp:450,accel:5.5,top:180,wiki:'Ford F-150 Raptor'}]},
  {id:'honda',name:'Honda',mono:'HO',color:'#cc0000',wiki:'Honda',country:'Япония',region:'Азия',founded:1948,
   desc:'Японский бренд, известный надёжными двигателями и спортивными хэтчбеками.',
   models:[
     {name:'Civic Type R',years:'2023–н.в.',body:'Хэтчбек',engine:'2.0 л, турбо, рядная четвёрка',drive:'Передний',hp:329,accel:5.5,top:275,wiki:'Honda Civic Type R'},
     {name:'CR-V',years:'2017–н.в.',body:'Кроссовер',engine:'1.5 л, турбо, рядная четвёрка',drive:'Полный',hp:193,accel:9.0,top:200,wiki:'Honda CR-V'}]},
  {id:'hyundai',name:'Hyundai',mono:'HY',color:'#2a5ea8',wiki:'Hyundai Motor Company',country:'Южная Корея',region:'Азия',founded:1967,
   desc:'Корейский производитель с сильной линейкой электромобилей.',
   models:[
     {name:'Ioniq 5',years:'2021–н.в.',body:'Кроссовер',engine:'Электро, 2 мотора',drive:'Полный',hp:325,accel:5.2,top:185,wiki:'Hyundai Ioniq 5'},
     {name:'Tucson',years:'2021–н.в.',body:'Кроссовер',engine:'1.6 л, турбо, рядная четвёрка',drive:'Передний',hp:180,accel:9.5,top:190,wiki:'Hyundai Tucson'}]},
  {id:'kia',name:'Kia',mono:'KI',color:'#bb162b',wiki:'Kia Corporation',country:'Южная Корея',region:'Азия',founded:1944,
   desc:'Корейский бренд с современным дизайном и гарантией от производителя.',
   models:[
     {name:'EV6 GT',years:'2021–н.в.',body:'Кроссовер',engine:'Электро, 2 мотора',drive:'Полный',hp:584,accel:3.5,top:260,wiki:'Kia EV6'},
     {name:'Sportage',years:'2021–н.в.',body:'Кроссовер',engine:'2.0 л, атмосферный',drive:'Передний',hp:150,accel:10.5,top:190,wiki:'Kia Sportage'}]},
  {id:'mazda',name:'Mazda',mono:'MZ',color:'#9b1b30',wiki:'Mazda',country:'Япония',region:'Азия',founded:1920,
   desc:'Японский бренд, известный управляемостью и дизайном Kodo.',
   models:[
     {name:'MX-5',years:'2015–н.в.',body:'Родстер',engine:'2.0 л, атмосферный',drive:'Задний',hp:184,accel:6.5,top:219,wiki:'Mazda MX-5'},
     {name:'CX-5',years:'2017–н.в.',body:'Кроссовер',engine:'2.5 л, атмосферный',drive:'Передний',hp:194,accel:8.5,top:200,wiki:'Mazda CX-5'}]},
  {id:'volkswagen',name:'Volkswagen',mono:'VW',color:'#1e5aa8',wiki:'Volkswagen',country:'Германия',region:'Европа',founded:1937,
   desc:'Массовый немецкий бренд, известный Golf и надёжностью.',
   models:[
     {name:'Golf GTI',years:'2020–н.в.',body:'Хэтчбек',engine:'2.0 л, турбо, рядная четвёрка',drive:'Передний',hp:245,accel:6.0,top:250,wiki:'Volkswagen Golf'},
     {name:'Tiguan',years:'2016–н.в.',body:'Кроссовер',engine:'2.0 л, турбо, рядная четвёрка',drive:'Полный',hp:190,accel:8.5,top:210,wiki:'Volkswagen Tiguan'}]},
  {id:'volvo',name:'Volvo',mono:'VO',color:'#2c5f8a',wiki:'Volvo Cars',country:'Швеция',region:'Европа',founded:1927,
   desc:'Шведский бренд, известный безопасностью и скандинавским дизайном.',
   models:[
     {name:'XC90',years:'2015–н.в.',body:'Кроссовер',engine:'2.0 л, турбо, рядная четвёрка',drive:'Полный',hp:250,accel:6.4,top:180,wiki:'Volvo XC90'},
     {name:'XC60',years:'2017–н.в.',body:'Кроссовер',engine:'2.0 л, турбо, рядная четвёрка',drive:'Полный',hp:250,accel:6.4,top:180,wiki:'Volvo XC60'}]},
  {id:'chevrolet',name:'Chevrolet',mono:'CH',color:'#c9a227',wiki:'Chevrolet',country:'США',region:'Америка',founded:1911,
   desc:'Американский бренд, известный Corvette и массовыми моделями.',
   models:[
     {name:'Corvette Stingray',years:'2020–н.в.',body:'Купе',engine:'6.2 л, V8',drive:'Задний',hp:495,accel:2.9,top:312,wiki:'Chevrolet Corvette'},
     {name:'Tahoe',years:'2021–н.в.',body:'Внедорожник',engine:'5.3 л, V8',drive:'Полный',hp:355,accel:6.6,top:180,wiki:'Chevrolet Tahoe'}]},
  {id:'subaru',name:'Subaru',mono:'SU',color:'#1f4e9a',wiki:'Subaru Corporation',country:'Япония',region:'Азия',founded:1953,
   desc:'Японский бренд, известный полным приводом и оппозитными двигателями.',
   models:[
     {name:'WRX',years:'2021–н.в.',body:'Седан',engine:'2.4 л, турбо, оппозитный',drive:'Полный',hp:271,accel:5.6,top:250,wiki:'Subaru WRX'},
     {name:'Forester',years:'2018–н.в.',body:'Кроссовер',engine:'2.5 л, атмосферный, оппозитный',drive:'Полный',hp:182,accel:9.5,top:190,wiki:'Subaru Forester'}]},
  {id:'skoda',name:'Skoda',mono:'SK',color:'#3a9d23',wiki:'Škoda Auto',country:'Чехия',region:'Европа',founded:1895,
   desc:'Чешский бренд Volkswagen Group с практичными и просторными автомобилями.',
   models:[
     {name:'Octavia',years:'2020–н.в.',body:'Лифтбек',engine:'1.4 л, турбо, рядная четвёрка',drive:'Передний',hp:150,accel:8.6,top:218,wiki:'Škoda Octavia'},
     {name:'Kodiaq',years:'2016–н.в.',body:'Кроссовер',engine:'2.0 л, турбо, рядная четвёрка',drive:'Полный',hp:190,accel:8.4,top:210,wiki:'Škoda Kodiaq'}]},
  {id:'renault',name:'Renault',mono:'RN',color:'#e8c000',wiki:'Renault',country:'Франция',region:'Европа',founded:1899,
   desc:'Французский бренд с доступными и практичными автомобилями.',
   models:[
     {name:'Duster',years:'2021–н.в.',body:'Кроссовер',engine:'2.0 л, атмосферный',drive:'Полный',hp:150,accel:10.5,top:180,wiki:'Renault Duster'},
     {name:'Megane E-Tech',years:'2022–н.в.',body:'Кроссовер',engine:'Электро',drive:'Передний',hp:218,accel:7.4,top:160,wiki:'Renault Megane E-Tech Electric'}]},
  {id:'nissan',name:'Nissan',mono:'NI',color:'#c3002f',wiki:'Nissan',country:'Япония',region:'Азия',founded:1933,
   desc:'Японский бренд, известный спорткаром Z и кроссоверами.',
   models:[
     {name:'Z',years:'2023–н.в.',body:'Купе',engine:'3.0 л, турбо, V6',drive:'Задний',hp:405,accel:4.5,top:250,wiki:'Nissan Z'},
     {name:'Qashqai',years:'2021–н.в.',body:'Кроссовер',engine:'1.3 л, турбо, рядная четвёрка',drive:'Передний',hp:158,accel:9.0,top:190,wiki:'Nissan Qashqai'}]},
  {id:'jeep',name:'Jeep',mono:'JP',color:'#5b6b2e',wiki:'Jeep',country:'США',region:'Америка',founded:1941,
   desc:'Американский бренд внедорожников с историей с 1941 года.',
   models:[
     {name:'Wrangler',years:'2018–н.в.',body:'Внедорожник',engine:'3.6 л, V6',drive:'Полный',hp:285,accel:7.0,top:180,wiki:'Jeep Wrangler'},
     {name:'Grand Cherokee',years:'2022–н.в.',body:'Внедорожник',engine:'2.0 л, турбо, рядная четвёрка',drive:'Полный',hp:272,accel:6.8,top:200,wiki:'Jeep Grand Cherokee'}]}
];

const REGIONS = [
  {id:'all',label:'Все'},{id:'Европа',label:'Европа'},{id:'Азия',label:'Азия'},{id:'Америка',label:'Америка'}
];

/* ============ УТИЛИТЫ ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
const MOBILE = matchMedia('(max-width: 640px)').matches;

const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hl = (text, q) => !q ? esc(text) :
  String(text).split(new RegExp('(' + escRe(q) + ')', 'gi'))
    .map((p, i) => i % 2 ? `<mark>${esc(p)}</mark>` : esc(p)).join('');
const clamp = (v, a = 0, b = 100) => Math.max(a, Math.min(b, v));
const maxHp = b => Math.max(...b.models.map(m => m.hp));

const BY_ID = Object.fromEntries(BRANDS.map(b => [b.id, b]));
const MODELS = [];
const MODEL = {};
BRANDS.forEach(b => b.models.forEach((m, i) => {
  const item = {key: `${b.id}:${i}`, b, m, i};
  MODELS.push(item);
  MODEL[item.key] = item;
}));
const TOP = {
  hp: Math.max(...MODELS.map(x => x.m.hp)),
  top: Math.max(...MODELS.map(x => x.m.top))
};

/* ============ ХРАНИЛИЩЕ ============ */
const store = {
  get(k, f){
    try { const v = localStorage.getItem(k); return v === null ? f : JSON.parse(v); }
    catch(e){ return f; }
  },
  set(k, v){
    try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){}
  }
};

/* ============ ФОТО ============
   Берём главное изображение статьи модели в Википедии через API с origin=*.
   Результат кэшируется. Если фото нет, на карточке остаётся цветная монограмма. */
const PHOTO_KEY = 'autowiki-photos-v2';
const photoCache = store.get(PHOTO_KEY, {});
const inflight = new Map();

async function wikiThumb(title){
  const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1' +
              '&prop=pageimages&piprop=thumbnail&pithumbsize=640&titles=' + encodeURIComponent(title);
  const r = await fetch(url);
  if(!r.ok) throw new Error('http ' + r.status);
  const d = await r.json();
  const page = Object.values(d.query?.pages || {})[0];
  return page?.thumbnail?.source || null;
}

function photoFor(key){
  const item = MODEL[key];
  if(!item) return Promise.resolve(null);
  if(item.m.photo) return Promise.resolve(item.m.photo);
  if(key in photoCache) return Promise.resolve(photoCache[key]);
  if(inflight.has(key)) return inflight.get(key);

  const p = (async () => {
    let answered = false;
    for(const title of [item.m.wiki, item.b.wiki].filter(Boolean)){
      try{
        const src = await wikiThumb(title);
        answered = true;
        if(src){
          photoCache[key] = src;
          store.set(PHOTO_KEY, photoCache);
          return src;
        }
      } catch(e){ /* сеть недоступна, попробуем дальше */ }
    }
    if(answered){
      photoCache[key] = null;
      store.set(PHOTO_KEY, photoCache);
    }
    return null;
  })().finally(() => inflight.delete(key));

  inflight.set(key, p);
  return p;
}

function loadImg(img){
  const key = img.dataset.key;
  if(!key) return;
  photoFor(key).then(src => {
    if(!src || !img.isConnected || img.dataset.key !== key) return;
    img.onload = () => img.classList.add('ok');
    img.src = src;
    if(img.complete && img.naturalWidth) img.classList.add('ok');
  }).catch(() => {});
}

// Грузим фото только когда карточка появилась в зоне видимости
const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  for(const en of entries){
    if(en.isIntersecting){
      io.unobserve(en.target);
      loadImg(en.target);
    }
  }
}, {rootMargin: '160px'}) : null;

function hydrate(root){
  $$('img[data-key]', root).forEach(img => {
    if(io) io.observe(img);
    else loadImg(img);
  });
}

/* ============ СОСТОЯНИЕ ============ */
const state = { q: '', region: 'all', sort: 'name', view: 'catalog' };
let favs = new Set(store.get('autowiki-favs', []));
const saveFavs = () => store.set('autowiki-favs', [...favs]);

let cmp = store.get('autowiki-cmp', ['toyota:0', 'bmw:0']);
if(!Array.isArray(cmp) || cmp.length !== 2 || cmp.some(k => !MODEL[k])) cmp = ['toyota:0', 'bmw:0'];
const saveCmp = () => store.set('autowiki-cmp', cmp);

let currentBrand = null;
let currentKey = null;
let lastFocus = null;

/* ============ КАТАЛОГ ============ */
const SORTERS = {
  name:    (a, b) => a.name.localeCompare(b.name, 'en'),
  founded: (a, b) => a.founded - b.founded,
  power:   (a, b) => maxHp(b) - maxHp(a)
};

function filtered(){
  const q = state.q.trim().toLowerCase();
  return BRANDS
    .filter(b => {
      if(state.region !== 'all' && b.region !== state.region) return false;
      if(!q) return true;
      return [b.name, b.country, ...b.models.map(m => m.name)]
        .some(s => s.toLowerCase().includes(q));
    })
    .sort(SORTERS[state.sort]);
}

function cardHTML(b, i){
  const q = state.q.trim();
  const on = favs.has(b.id);
  return `
  <article class="card" data-id="${b.id}" tabindex="0" role="button"
    aria-label="${esc(b.name)}: открыть характеристики" style="--c:${b.color};--i:${i}">
    <div class="photo">
      <img alt="" data-key="${b.id}:0">
      <span class="mono" aria-hidden="true">${esc(b.mono)}</span>
    </div>
    <div class="card-body">
      <div class="card-top">
        <div>
          <h3>${hl(b.name, q)}</h3>
          <p class="meta">${esc(b.country)} · с ${b.founded} года</p>
        </div>
        <button class="fav" data-fav="${b.id}" aria-pressed="${on}"
          aria-label="${on ? 'Убрать из избранного' : 'Добавить в избранное'}">${on ? '♥' : '♡'}</button>
      </div>
      <p class="desc">${esc(b.desc)}</p>
      <div class="tags">${b.models.map(m => `<span class="tag">${hl(m.name, q)}</span>`).join('')}</div>
      <div class="card-foot"><span>Моделей: ${b.models.length}</span><i aria-hidden="true">→</i></div>
    </div>
  </article>`;
}

function renderGrid(el, list, animate){
  el.classList.toggle('anim', animate && !REDUCE);
  el.innerHTML = list.map(cardHTML).join('');
  hydrate(el);
}

function render(animate = false){
  const list = filtered();
  const grid = $('#grid');
  if(list.length){
    renderGrid(grid, list, animate);
  } else {
    grid.classList.remove('anim');
    grid.innerHTML = `<div class="empty"><p>Ничего не найдено. Попробуйте другой запрос или сбросьте фильтры.</p>
      <button class="btn" data-reset>Сбросить фильтры</button></div>`;
  }
  $('#count').textContent = list.length ? `Марок: ${list.length} из ${BRANDS.length}` : '';
  $('#clear').hidden = !state.q;
}

function renderChips(){
  $('#chips').innerHTML = REGIONS.map(r =>
    `<button class="chip" data-region="${r.id}" aria-pressed="${state.region === r.id}">${r.label}</button>`
  ).join('');
}

function renderFavs(){
  const list = BRANDS.filter(b => favs.has(b.id));
  const el = $('#favGrid');
  if(!list.length){
    el.classList.remove('anim');
    el.innerHTML = `<div class="empty"><p>Пока пусто. Нажмите ♡ на карточке марки, и она появится здесь.</p>
      <button class="btn" data-view-go="catalog">Перейти в каталог</button></div>`;
    return;
  }
  renderGrid(el, list, false);
}

function resetFilters(){
  state.q = ''; state.region = 'all'; state.sort = 'name';
  $('#q').value = '';
  $('#sort').value = 'name';
  hideSuggest();
  renderChips();
  render(true);
}

/* ============ 3D-КОЛЬЦО И СЧЁТЧИКИ ============ */
function renderRing(){
  const items = BRANDS.slice(0, 10);
  const step = 360 / items.length;
  $('#ring').innerHTML = items.map((b, i) => `
    <button class="ring-item" data-id="${b.id}" tabindex="-1" aria-label="${esc(b.name)}"
      style="--c:${b.color};--a:${(i * step).toFixed(2)}deg">${esc(b.mono)}</button>`).join('');
}

function countUp(el, to){
  if(REDUCE){ el.textContent = to; return; }
  const t0 = performance.now(), dur = 1000;
  (function f(t){
    const p = Math.min(1, (t - t0) / dur);
    el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if(p < 1) requestAnimationFrame(f);
  })(t0);
}

/* ============ ПОДСКАЗКИ ============ */
let sug = [], sugIdx = -1;
const input = $('#q');
const suggest = $('#suggest');

function buildSuggest(){
  const q = state.q.trim().toLowerCase();
  sug = [];
  if(q){
    sug = MODELS.filter(x =>
      x.b.name.toLowerCase().includes(q) ||
      x.b.country.toLowerCase().includes(q) ||
      x.m.name.toLowerCase().includes(q)
    ).slice(0, 8);
  }
  if(!sug.length){ hideSuggest(); return; }
  sugIdx = 0;
  suggest.innerHTML = sug.map((x, i) => `
    <li role="option" id="sug-${i}" data-i="${i}" aria-selected="${i === 0}">
      <span>${hl(x.b.name + ' ' + x.m.name, state.q.trim())}</span>
      <span class="s-sub">${esc(x.m.body)} · ${esc(x.m.years)}</span>
    </li>`).join('');
  suggest.hidden = false;
  input.setAttribute('aria-expanded', 'true');
  input.setAttribute('aria-activedescendant', 'sug-0');
}

function setActive(i){
  sugIdx = i;
  $$('li', suggest).forEach((li, k) => li.setAttribute('aria-selected', k === i));
  input.setAttribute('aria-activedescendant', `sug-${i}`);
  $$('li', suggest)[i]?.scrollIntoView({block: 'nearest'});
}

function hideSuggest(){
  suggest.hidden = true;
  input.setAttribute('aria-expanded', 'false');
  input.removeAttribute('aria-activedescendant');
  sugIdx = -1;
}

function pickSuggest(i){
  const x = sug[i];
  if(!x) return;
  hideSuggest();
  openBrand(x.b.id, x.i);
}

/* ============ ИЗБРАННОЕ И СРАВНЕНИЕ ============ */
function updateFavCount(bump = false){
  const el = $('#favCount');
  el.textContent = favs.size;
  if(bump){
    el.classList.remove('bump');
    void el.offsetWidth;
    el.classList.add('bump');
  }
}

let toastT;
function toast(msg){
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 1800);
}

function toggleFav(id){
  const added = !favs.has(id);
  added ? favs.add(id) : favs.delete(id);
  saveFavs();
  updateFavCount(added);
  toast(added ? 'Добавлено в избранное' : 'Удалено из избранного');
  if(state.view === 'catalog') render(false);
  if(state.view === 'favs') renderFavs();
  if(currentBrand && currentBrand.id === id) updateModalButtons();
}

function addToCompare(key){
  if(cmp.includes(key)){ toast('Уже в сравнении'); return; }
  cmp = [cmp[1], key];
  saveCmp();
  toast('Добавлено в сравнение');
  updateModalButtons();
}

/* ============ МОДАЛЬНОЕ ОКНО ============ */
const modal = $('#modal');
const isModalOpen = () => modal.classList.contains('open');

function updateModalButtons(){
  if(!currentBrand) return;
  const fav = $('#mFav');
  const cmpBtn = $('#mCmp');
  if(fav){
    const on = favs.has(currentBrand.id);
    fav.setAttribute('aria-pressed', on);
    fav.classList.toggle('fav-on', on);
    fav.textContent = on ? '♥ В избранном' : '♡ В избранное';
  }
  if(cmpBtn){
    const on = cmp.includes(currentKey);
    cmpBtn.setAttribute('aria-pressed', on);
    cmpBtn.textContent = on ? '✓ В сравнении' : '⇄ В сравнение';
  }
}

function openBrand(id, idx = 0, push = true){
  const b = BY_ID[id];
  if(!b) return;
  if(!isModalOpen()) lastFocus = document.activeElement;
  currentBrand = b;

  $('#modalBody').innerHTML = `
    <div class="m-photo" style="--c:${b.color}">
      <img alt="" id="mImg">
      <span class="mono lg" aria-hidden="true">${esc(b.mono)}</span>
    </div>
    <div class="m-body">
      <h2 id="mTitle">${esc(b.name)}</h2>
      <p class="meta">${esc(b.country)} · основан в ${b.founded} · ${esc(b.region)}</p>
      <p class="m-desc">${esc(b.desc)}</p>
      <div class="m-actions">
        <button class="btn ghost" id="mFav" data-fav="${b.id}" aria-pressed="false">♡ В избранное</button>
        <button class="btn ghost" id="mCmp" aria-pressed="false">⇄ В сравнение</button>
      </div>
      <div class="tabs" role="tablist" aria-label="Модели">
        ${b.models.map((m, k) => `
          <button class="tab" role="tab" id="tab-${k}" aria-controls="panel" aria-selected="false"
            tabindex="-1" data-model="${k}">${esc(m.name)}</button>`).join('')}
      </div>
      <div id="panel" role="tabpanel"></div>
    </div>`;

  selectModel(idx);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lock');
  if(push) history.replaceState(null, '', '#' + b.id);
  setTimeout(() => modal.querySelector('.close').focus({preventScroll: true}), 60);
}

function closeModal(){
  if(!isModalOpen()) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lock');
  const h = state.view === 'catalog' ? '' : '#' + state.view;
  history.replaceState(null, '', location.pathname + location.search + h);
  currentBrand = null;
  currentKey = null;
  if(lastFocus && lastFocus.focus) lastFocus.focus({preventScroll: true});
}

const spec = (label, value) => `<div class="spec"><small>${label}</small><b>${esc(value)}</b></div>`;
const bar = (label, pct, text) => `
  <div>
    <div class="bar-head"><span>${label}</span><b>${esc(text)}</b></div>
    <div class="bar-track"><div class="bar-fill" style="--w:${clamp(pct)}%"></div></div>
  </div>`;

function selectModel(k){
  const item = MODEL[`${currentBrand.id}:${k}`];
  const m = item.m;
  currentKey = item.key;

  $$('#modal .tab').forEach((t, j) => {
    t.setAttribute('aria-selected', j === k);
    t.tabIndex = j === k ? 0 : -1;
  });
  $('#panel').setAttribute('aria-labelledby', `tab-${k}`);
  $('#panel').innerHTML = `
    <div class="panel">
      <h3>${esc(m.name)}</h3>
      <p class="sub">${esc(m.body)} · ${esc(m.years)}</p>
      <div class="specs">
        ${spec('Двигатель', m.engine)}
        ${spec('Привод', m.drive)}
        ${spec('Мощность', m.hp + ' л.с.')}
        ${spec('Разгон 0–100', m.accel + ' с')}
        ${spec('Макс. скорость', m.top + ' км/ч')}
      </div>
      <div class="bars">
        ${bar('Мощность', m.hp / TOP.hp * 100, m.hp + ' л.с.')}
        ${bar('Динамика (разгон)', (20 - m.accel) / 18 * 100, m.accel + ' с')}
        ${bar('Скорость', m.top / TOP.top * 100, m.top + ' км/ч')}
      </div>
    </div>`;

  const img = $('#mImg');
  img.classList.remove('ok');
  img.dataset.key = item.key;
  loadImg(img);
  updateModalButtons();
}

function trapFocus(e){
  const focusable = $$('button,[href],input,select,[tabindex]', modal)
    .filter(el => el.tabIndex >= 0 && !el.disabled);
  if(!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
  else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
}

/* ============ СРАВНЕНИЕ ============ */
function renderCompareSelects(){
  const opts = BRANDS.map(b => `
    <optgroup label="${esc(b.name)}">
      ${b.models.map((m, i) => `<option value="${b.id}:${i}">${esc(m.name)}</option>`).join('')}
    </optgroup>`).join('');
  $('#selA').innerHTML = opts;
  $('#selB').innerHTML = opts;
}

function renderCompare(){
  const A = MODEL[cmp[0]], B = MODEL[cmp[1]];
  $('#selA').value = cmp[0];
  $('#selB').value = cmp[1];

  const row = (label, a, b, better) => {
    let ca = '', cb = '';
    if(better && a !== b){
      const aWin = better === 'max' ? a > b : a < b;
      ca = aWin ? ' win' : '';
      cb = aWin ? '' : ' win';
    }
    return `<div class="cmp-row">
      <span class="cmp-label">${label}</span>
      <span class="cmp-cell${ca}">${esc(a)}</span>
      <span class="cmp-cell${cb}">${esc(b)}</span>
    </div>`;
  };
  const head = x => `
    <div class="photo"><img alt="" data-key="${x.key}"><span class="mono" style="--c:${x.b.color}">${esc(x.b.mono)}</span></div>
    <h3>${esc(x.b.name)} ${esc(x.m.name)}</h3>`;

  $('#compareOut').innerHTML = `
    <div class="cmp-table">
      <div class="cmp-row head">
        <span></span>
        <span class="cmp-cell">${head(A)}</span>
        <span class="cmp-cell">${head(B)}</span>
      </div>
      ${row('Кузов', A.m.body, B.m.body)}
      ${row('Годы', A.m.years, B.m.years)}
      ${row('Двигатель', A.m.engine, B.m.engine)}
      ${row('Привод', A.m.drive, B.m.drive)}
      ${row('Мощность, л.с.', A.m.hp, B.m.hp, 'max')}
      ${row('Разгон 0–100, с', A.m.accel, B.m.accel, 'min')}
      ${row('Макс. скорость, км/ч', A.m.top, B.m.top, 'max')}
    </div>`;
  hydrate($('#compareOut'));
}

/* ============ РЕЙТИНГИ ============ */
function renderRatings(){
  const sorted = fn => [...MODELS].sort(fn).slice(0, 10);
  const board = (title, list, val, fmt, pct) => `
    <section class="board">
      <h3>${title}</h3>
      <ol>${list.map((x, i) => `
        <li class="row" data-key="${x.key}" tabindex="0">
          <span class="rank">${i + 1}</span>
          <div class="row-main">
            <b>${esc(x.b.name)} <span>${esc(x.m.name)}</span></b>
            <div class="bar-track"><div class="bar-fill" style="--w:${clamp(pct(x))}%"></div></div>
          </div>
          <span class="val">${fmt(val(x))}</span>
        </li>`).join('')}
      </ol>
    </section>`;

  $('#ratings').innerHTML =
    board('Мощность', sorted((a, b) => b.m.hp - a.m.hp), x => x.m.hp,
      v => v + ' л.с.', x => x.m.hp / TOP.hp * 100) +
    board('Разгон 0–100', sorted((a, b) => a.m.accel - b.m.accel), x => x.m.accel,
      v => v + ' с', x => (20 - x.m.accel) / 18 * 100) +
    board('Макс. скорость', sorted((a, b) => b.m.top - a.m.top), x => x.m.top,
      v => v + ' км/ч', x => x.m.top / TOP.top * 100);
}

/* ============ НАВИГАЦИЯ ============ */
const VIEWS = ['catalog', 'compare', 'ratings', 'favs', 'race'];

function showView(name, push = true){
  if(!VIEWS.includes(name)) name = 'catalog';
  state.view = name;
  $$('.view').forEach(v => { v.hidden = v.id !== 'view-' + name; });
  $$('.nav-tab').forEach(t => t.setAttribute('aria-selected', t.dataset.view === name));
  if(name === 'compare') renderCompare();
  if(name === 'ratings') renderRatings();
  if(name === 'favs') renderFavs();
  if(push && location.hash !== '#' + name) history.replaceState(null, '', '#' + name);
  window.scrollTo({top: 0, behavior: REDUCE ? 'auto' : 'smooth'});
}

function route(){
  const h = location.hash.slice(1);
  if(BY_ID[h]){
    showView('catalog', false);
    openBrand(h, 0, false);
    return;
  }
  closeModal();
  showView(VIEWS.includes(h) ? h : 'catalog', false);
}

/* ============ ЗВЁЗДЫ НА ФОНЕ ============ */
(function stars(){
  if(REDUCE) return;
  const c = $('#stars');
  const ctx = c.getContext('2d');
  const DPR_MAX = MOBILE ? 1 : 2;
  let w, h, dpr, pts = [], raf = 0, last = 0, rt;

  function size(){
    w = innerWidth; h = innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, DPR_MAX);
    c.width = w * dpr; c.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(MOBILE ? 45 : 120, Math.floor(w * h / 10000));
    pts = Array.from({length: n}, () => ({
      x: Math.random() * w, y: Math.random() * h, z: Math.random() * 0.7 + 0.3
    }));
  }
  function frame(t){
    const dt = last ? Math.min(50, t - last) / 16.67 : 1;
    last = t;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#fff';
    for(const p of pts){
      p.y += p.z * 0.3 * dt;
      if(p.y > h){ p.y = 0; p.x = Math.random() * w; }
      ctx.globalAlpha = 0.25 + p.z * 0.5;
      ctx.fillRect(p.x, p.y, p.z * 1.5, p.z * 1.5);
    }
    raf = requestAnimationFrame(frame);
  }
  const start = () => { if(!raf){ last = 0; raf = requestAnimationFrame(frame); } };
  const stop = () => { cancelAnimationFrame(raf); raf = 0; };

  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(size, 150); });
  size();
  start();
})();

/* ============ ОБРАБОТЧИКИ ============ */
let debounceT;
input.addEventListener('input', e => {
  state.q = e.target.value;
  clearTimeout(debounceT);
  debounceT = setTimeout(() => { render(false); buildSuggest(); }, 120);
});
input.addEventListener('focus', buildSuggest);
input.addEventListener('blur', hideSuggest);
input.addEventListener('keydown', e => {
  const open = !suggest.hidden && sug.length;
  if(e.key === 'ArrowDown' && open){ e.preventDefault(); setActive((sugIdx + 1) % sug.length); }
  else if(e.key === 'ArrowUp' && open){ e.preventDefault(); setActive((sugIdx - 1 + sug.length) % sug.length); }
  else if(e.key === 'Enter' && open && sugIdx >= 0){ e.preventDefault(); pickSuggest(sugIdx); }
  else if(e.key === 'Escape'){ hideSuggest(); input.blur(); }
});

// mousedown, чтобы blur не сработал раньше клика
suggest.addEventListener('mousedown', e => {
  const li = e.target.closest('li[data-i]');
  if(li){ e.preventDefault(); pickSuggest(+li.dataset.i); }
});

document.addEventListener('pointerdown', e => {
  if(!e.target.closest('.search-wrap')) hideSuggest();
});

$('#clear').addEventListener('click', () => {
  input.value = '';
  state.q = '';
  hideSuggest();
  render(false);
  input.focus();
});

$('#chips').addEventListener('click', e => {
  const chip = e.target.closest('[data-region]');
  if(!chip) return;
  state.region = chip.dataset.region;
  renderChips();
  render(true);
});

$('#sort').addEventListener('change', e => {
  state.sort = e.target.value;
  render(true);
});

function onCardClick(e){
  const fav = e.target.closest('[data-fav]');
  if(fav){ toggleFav(fav.dataset.fav); return; }
  if(e.target.closest('[data-reset]')){ resetFilters(); return; }
  const go = e.target.closest('[data-view-go]');
  if(go){ showView(go.dataset.viewGo); return; }
  const card = e.target.closest('.card');
  if(card) openBrand(card.dataset.id);
}
function onCardKey(e){
  if((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')){
    e.preventDefault();
    openBrand(e.target.dataset.id);
  }
}
const gridEl = $('#grid');
const favGridEl = $('#favGrid');
gridEl.addEventListener('click', onCardClick);
favGridEl.addEventListener('click', onCardClick);
gridEl.addEventListener('keydown', onCardKey);
favGridEl.addEventListener('keydown', onCardKey);

// 3D-наклон карточек (только при наведении мышью)
if(FINE && !REDUCE){
  gridEl.addEventListener('pointermove', e => {
    const card = e.target.closest('.card');
    if(!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.setProperty('--ry', (px * 10).toFixed(2) + 'deg');
    card.style.setProperty('--rx', (-py * 10).toFixed(2) + 'deg');
  });
  gridEl.addEventListener('pointerout', e => {
    const card = e.target.closest?.('.card');
    if(card && !card.contains(e.relatedTarget)){
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    }
  });
}

$('#ring').addEventListener('click', e => {
  const item = e.target.closest('.ring-item');
  if(item) openBrand(item.dataset.id);
});

$('#ratings').addEventListener('click', e => {
  const row = e.target.closest('[data-key]');
  if(!row) return;
  const [id, idx] = row.dataset.key.split(':');
  openBrand(id, +idx);
});
$('#ratings').addEventListener('keydown', e => {
  if(e.key === 'Enter' && e.target.matches('[data-key]')) e.target.click();
});

$('#selA').addEventListener('change', e => { cmp[0] = e.target.value; saveCmp(); renderCompare(); });
$('#selB').addEventListener('change', e => { cmp[1] = e.target.value; saveCmp(); renderCompare(); });

$$('.nav-tab').forEach(t => t.addEventListener('click', () => showView(t.dataset.view)));
$('.logo').addEventListener('click', e => { e.preventDefault(); showView('catalog'); });

modal.addEventListener('click', e => {
  if(e.target === modal || e.target.closest('[data-close]')){ closeModal(); return; }
  const tab = e.target.closest('[data-model]');
  if(tab){ selectModel(+tab.dataset.model); return; }
  if(e.target.closest('#mFav')){ toggleFav(currentBrand.id); return; }
  if(e.target.closest('#mCmp')){ addToCompare(currentKey); return; }
});
modal.addEventListener('keydown', e => {
  if(e.target.classList.contains('tab') && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')){
    e.preventDefault();
    const tabs = $$('.tab', modal);
    const next = (tabs.indexOf(e.target) + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectModel(next);
    tabs[next].focus();
  }
});

document.addEventListener('keydown', e => {
  if(isModalOpen()){
    if(e.key === 'Escape'){ closeModal(); return; }
    if(e.key === 'Tab') trapFocus(e);
    return;
  }
  const tag = document.activeElement.tagName;
  if(e.key === '/' && tag !== 'INPUT' && tag !== 'SELECT' && tag !== 'TEXTAREA'){
    e.preventDefault();
    showView('catalog');
    input.focus();
  }
});

window.addEventListener('hashchange', route);

/* ============ СТАРТ ============ */
renderRing();
renderChips();
renderCompareSelects();
$('#sort').value = state.sort;
render(true);
updateFavCount();
countUp($('#statBrands'), BRANDS.length);
countUp($('#statModels'), MODELS.length);
countUp($('#statRegions'), new Set(BRANDS.map(b => b.region)).size);
route();
