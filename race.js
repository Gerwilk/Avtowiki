/* ============ ГОНКА 400 м ============
   Использует данные BRANDS, MODEL из script.js.
   Модель: постоянное ускорение до максимальной скорости. Это упрощение. */
(function(){
  const view = document.getElementById('view-race');
  if(!view || typeof MODEL === 'undefined') return;

  const q = s => view.querySelector(s);
  const TRACK = 400;

  const selA = q('#raceA');
  const selB = q('#raceB');
  const speedSel = q('#raceSpeed');
  const goBtn = q('#raceGo');
  const resetBtn = q('#raceReset');
  const countEl = q('#raceCount');
  const resultEl = q('#raceResult');

  const lanes = [0, 1].map(i => {
    const el = q('#lane' + i);
    return {
      el,
      track: el.querySelector('.track'),
      car: el.querySelector('.car'),
      kmh: el.querySelector('.kmh'),
      ts: el.querySelector('.ts'),
      name: el.querySelector('.lname'),
      W: 0,
      carW: 92
    };
  });

  let running = false;
  let raf = 0;
  let last = 0;
  let sims = [];
  let timers = [];

  // Списки моделей
  const opts = BRANDS.map(b => `<optgroup label="${b.name}">${b.models.map((m, i) =>
    `<option value="${b.id}:${i}">${m.name}</option>`).join('')}</optgroup>`).join('');
  selA.innerHTML = opts;
  selB.innerHTML = opts;
  selA.value = 'tesla:1';
  selB.value = 'ferrari:0';

  const itemOf = sel => MODEL[sel.value];
  const speedMult = () => Number(speedSel.value) || 1;

  function measure(){
    lanes.forEach(L => {
      L.W = L.track.clientWidth;
      L.carW = L.car.offsetWidth || 92;
    });
  }

  function setBusy(busy){
    goBtn.disabled = busy;
    selA.disabled = busy;
    selB.disabled = busy;
  }

  function setup(){
    [selA, selB].forEach((sel, i) => {
      const L = lanes[i];
      const it = itemOf(sel);
      L.el.style.setProperty('--c', it.b.color);
      L.el.classList.remove('win');
      L.name.textContent = `${it.b.name} ${it.m.name}`;
      L.kmh.textContent = '0 км/ч';
      L.ts.textContent = '0.00 с';
      L.car.style.transform = 'translate3d(0,0,0)';
    });
    measure();
  }

  function countdown(steps, done){
    countEl.hidden = false;
    let i = 0;
    const tick = () => {
      if(!running) return;
      if(i >= steps.length){
        countEl.hidden = true;
        done();
        return;
      }
      countEl.textContent = steps[i++];
      countEl.classList.remove('pop');
      void countEl.offsetWidth;
      countEl.classList.add('pop');
      timers.push(setTimeout(tick, 650));
    };
    tick();
  }

  function start(){
    if(running) return;
    running = true;
    setBusy(true);
    resultEl.hidden = true;
    setup();

    sims = [selA, selB].map(sel => {
      const it = itemOf(sel);
      return {
        it,
        a: (100 / 3.6) / it.m.accel,   // м/с², ускорение из времени 0–100 км/ч
        vmax: it.m.top / 3.6,          // м/с
        v: 0, s: 0, t: 0,
        finish: null
      };
    });

    countdown(['3', '2', '1', 'GO!'], () => {
      last = 0;
      raf = requestAnimationFrame(frame);
    });
  }

  function reset(){
    running = false;
    cancelAnimationFrame(raf);
    raf = 0;
    timers.forEach(clearTimeout);
    timers = [];
    countEl.hidden = true;
    resultEl.hidden = true;
    setBusy(false);
    setup();
  }

  function draw(i, s){
    const L = lanes[i];
    const maxX = Math.max(0, L.W - L.carW - 22);
    const x = Math.min(s.s, TRACK) / TRACK * maxX;
    L.car.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`;
    L.kmh.textContent = Math.round(s.v * 3.6) + ' км/ч';
    L.ts.textContent = (s.finish !== null ? s.finish : s.t).toFixed(2) + ' с';
  }

  function frame(now){
    if(!last) last = now;
    const dt = Math.min(0.05, (now - last) / 1000) * speedMult();
    last = now;

    let allDone = true;
    sims.forEach((s, i) => {
      if(s.finish === null){
        s.t += dt;
        s.v = Math.min(s.v + s.a * dt, s.vmax);
        s.s += s.v * dt;
        if(s.s >= TRACK){
          // Точное время пересечения финиша (интерполяция внутри шага)
          s.finish = s.t - (s.s - TRACK) / s.v;
          s.s = TRACK;
        } else {
          allDone = false;
        }
      }
      draw(i, s);
    });

    if(allDone) finish();
    else raf = requestAnimationFrame(frame);
  }

  function finish(){
    running = false;
    raf = 0;
    const [a, b] = sims;
    const diff = Math.abs(a.finish - b.finish);
    let title;

    if(diff < 0.005){
      title = 'Ничья';
      lanes.forEach(L => L.el.classList.remove('win'));
    } else {
      const w = a.finish < b.finish ? 0 : 1;
      lanes.forEach((L, i) => L.el.classList.toggle('win', i === w));
      const wi = sims[w].it;
      title = `Победитель: ${wi.b.name} ${wi.m.name}`;
    }

    resultEl.innerHTML = `
      <b>${title}</b>
      <span>${a.it.b.name} ${a.it.m.name}: ${a.finish.toFixed(2)} с · ${b.it.b.name} ${b.it.m.name}: ${b.finish.toFixed(2)} с</span>
      <span>Разница: ${diff.toFixed(2)} с</span>`;
    resultEl.hidden = false;
    setBusy(false);
  }

  goBtn.addEventListener('click', start);
  resetBtn.addEventListener('click', reset);
  [selA, selB].forEach(sel => sel.addEventListener('change', () => {
    if(!running) setup();
  }));
  window.addEventListener('resize', measure);

  setup();
})();
