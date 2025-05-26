// ======= Герои и предметы (пример) =======
const heroes = [
  {name:"Abaddon",img:"images/heroes/abaddon.jpg",desc:"Танк и саппорт, снимает дебаффы и лечит."},
  {name:"Alchemist",img:"images/heroes/alchemist.jpg",desc:"Фермер, быстро набирает золото, разгоняется к концу игры."},
  {name:"Ancient Apparition",img:"images/heroes/ancient_apparition.jpg",desc:"Мощный саппорт, препятствует лечению врагов."},
  {name:"Anti-Mage",img:"images/heroes/anti_mage.jpg",desc:"Контрит магов, быстро фармит и уничтожает ману врагов."},
  {name:"Arc Warden",img:"images/heroes/arc_warden.jpg",desc:"Создаёт свою копию, идеально пушит и сплитит линии."},
  {name:"Axe",img:"images/heroes/axe.jpg",desc:"Инициатор и танк, агрит врагов и наносит урон топором."},
  {name:"Bane",img:"images/heroes/bane.jpg",desc:"Контролирует противников с помощью сна и ульты."},
  {name:"Batrider",img:"images/heroes/batrider.jpg",desc:"Захватывает одного героя и тянет его за собой."},
  {name:"Beastmaster",img:"images/heroes/beastmaster.jpg",desc:"Призывает зверей и отлично инициирует."},
  {name:"Bloodseeker",img:"images/heroes/bloodseeker.jpg",desc:"Становится быстрее по раненным врагам, хорошо ганкает."},
  {name:"Bounty Hunter",img:"images/heroes/bounty_hunter.jpg",desc:"Невидимка, ставит метки за золото и охотится за врагами."},
  {name:"Brewmaster",img:"images/heroes/brewmaster.jpg",desc:"Может разделяться на трёх духов для хаоса в драке."},
  {name:"Bristleback",img:"images/heroes/bristleback.jpg",desc:"Очень живучий и наносит урон шипами."},
  {name:"Broodmother",img:"images/heroes/broodmother.jpg",desc:"Паукообразный пушер, создаёт сеть и управляет пауками."},
  {name:"Centaur Warrunner",img:"images/heroes/centaur.jpg",desc:"Танк с мощным станом и ускорением для команды."},
  {name:"Chaos Knight",img:"images/heroes/chaos_knight.jpg",desc:"Вызывает копии себя и наносит огромный урон с руки."},
  {name:"Chen",img:"images/heroes/chen.jpg",desc:"Управляет крипами леса, лечит и пушит вместе с ними."},
  {name:"Clinkz",img:"images/heroes/clinkz.jpg",desc:"Лучник, невидимка и убийца одиночных целей."},
  {name:"Clockwerk",img:"images/heroes/clockwerk.jpg",desc:"Инициирует с помощью хука и удерживает врагов в ловушке."},
  {name:"Crystal Maiden",img:"images/heroes/crystal_maiden.jpg",desc:"Дает ману союзникам, замедляет и контролирует врагов."},
  {name:"Dark Seer",img:"images/heroes/dark_seer.jpg",desc:"Вакуумирует врагов и ускоряет союзников."},
  {name:"Dark Willow",img:"images/heroes/dark_willow.jpg",desc:"Контролирует врагов, наносит магический урон."},
  {name:"Dawnbreaker",img:"images/heroes/dawnbreaker.jpg",desc:"Лечит и наносит урон с помощью солнечных способностей."},
  {name:"Dazzle",img:"images/heroes/dazzle.jpg",desc:"Сохраняет союзников живыми с помощью сейва и лечения."},
  {name:"Death Prophet",img:"images/heroes/death_prophet.jpg",desc:"Пушит здания с помощью духов."},
  {name:"Disruptor",img:"images/heroes/disruptor.jpg",desc:"Контролирует врагов полями и возвращает их назад."},
  {name:"Doom",img:"images/heroes/doom.jpg",desc:"Выключает врага из драки своим ультом."},
  {name:"Dragon Knight",img:"images/heroes/dragon_knight.jpg",desc:"Танк, превращается в дракона и пушит."},
  {name:"Drow Ranger",img:"images/heroes/drow_ranger.jpg",desc:"Дальник, раздаёт урон и замедляет врагов."},
  {name:"Earth Spirit",img:"images/heroes/earth_spirit.jpg",desc:"Сложный инициатор с прокаткой камней."},
  {name:"Earthshaker",img:"images/heroes/earthshaker.jpg",desc:"Инициирует и наносит много урона по области."},
  {name:"Elder Titan",img:"images/heroes/elder_titan.jpg",desc:"Уменьшает броню и сопротивление врагов."},
  {name:"Ember Spirit",img:"images/heroes/ember_spirit.jpg",desc:"Очень мобильный керри, наносит урон огнём."},
  {name:"Enchantress",img:"images/heroes/enchantress.jpg",desc:"Лечит, стреляет с большой скоростью, управляет нейтралами."},
  {name:"Enigma",img:"images/heroes/enigma.jpg",desc:"Пушит и инициирует с помощью Black Hole."},
  {name:"Faceless Void",img:"images/heroes/faceless_void.jpg",desc:"Контролирует время и кидает купол."},
  {name:"Grimstroke",img:"images/heroes/grimstroke.jpg",desc:"Связывает врагов и наносит урон."},
  {name:"Gyrocopter",img:"images/heroes/gyrocopter.jpg",desc:"Наносит урон по площади с ракетами и флагканон."},
  {name:"Hoodwink",img:"images/heroes/hoodwink.jpg",desc:"Станет и наносит урон издалека, ставит сети."},
  {name:"Huskar",img:"images/heroes/huskar.jpg",desc:"Становится сильнее с потерей здоровья, прыгает в бой."},
  {name:"Invoker",img:"images/heroes/invoker.jpg",desc:"Маг с 10+ заклинаниями."},
  {name:"Io",img:"images/heroes/io.jpg",desc:"Связывает себя с союзником, телепортирует и лечит."},
  {name:"Jakiro",img:"images/heroes/jakiro.jpg",desc:"Маг, замедляет и поджигает врагов."},
  {name:"Juggernaut",img:"images/heroes/juggernaut.jpg",desc:"Керри с неуязвимостью и мощным ультом."},
  {name:"Keeper of the Light",img:"images/heroes/keeper_of_the_light.jpg",desc:"Дает ману, сдерживает линии, перемещает союзников."},
  {name:"Kunkka",img:"images/heroes/kunkka.jpg",desc:"Контролирует врагов кораблём и торентом."},
  {name:"Legion Commander",img:"images/heroes/legion_commander.jpg",desc:"Вызов на дуэль и увеличение урона."},
  {name:"Leshrac",img:"images/heroes/leshrac.jpg",desc:"Пушит здания и наносит магический урон."},
  {name:"Lich",img:"images/heroes/lich.jpg",desc:"Замедляет врагов и наносит урон ультой."},
  {name:"Lifestealer",img:"images/heroes/lifestealer.jpg",desc:"Восстанавливает здоровье с атаками, может прятаться в союзниках."},
  {name:"Lina",img:"images/heroes/lina.jpg",desc:"Маг, сжигает врагов и станит их."},
  {name:"Lion",img:"images/heroes/lion.jpg",desc:"Оглушает, сжигает ману и убивает ультой."},
  {name:"Lone Druid",img:"images/heroes/lone_druid.jpg",desc:"Играет с медведем-компаньоном."},
  {name:"Luna",img:"images/heroes/luna.jpg",desc:"Керри с магическим и физическим уроном по области."},
  {name:"Lycan",img:"images/heroes/lycan.jpg",desc:"Превращается в волка, призывает волков, быстро пушит."},
  {name:"Magnus",img:"images/heroes/magnus.jpg",desc:"Собирает врагов ультой и баффает союзников."},
  {name:"Marci",img:"images/heroes/marci.jpg",desc:"Мобильный боец с возможностью бросать врагов и союзников."},
  {name:"Mars",img:"images/heroes/mars.jpg",desc:"Станет копьём и защищает ареной."},
  {name:"Medusa",img:"images/heroes/medusa.jpg",desc:"Очень сильный керри в лейте, превращает в камень."},
  {name:"Meepo",img:"images/heroes/meepo.jpg",desc:"Управляет несколькими копиями себя."},
  {name:"Mirana",img:"images/heroes/mirana.jpg",desc:"Стреляет стрелой, становится невидимой с командой."},
  {name:"Monkey King",img:"images/heroes/monkey_king.jpg",desc:"Прыгает по деревьям и вызывает армию клонов."},
  {name:"Morphling",img:"images/heroes/morphling.jpg",desc:"Меняет статы и копирует способности врагов."},
  {name:"Muerta",img:"images/heroes/muerta.jpg",desc:"Наносит магический урон и становится неуязвимой."},
  {name:"Naga Siren",img:"images/heroes/naga_siren.jpg",desc:"Вызывает иллюзии, усыпляет врагов."},
  {name:"Nature's Prophet",img:"images/heroes/natures_prophet.jpg",desc:"Телепортируется по карте и вызывает энтов."},
  {name:"Necrophos",img:"images/heroes/necrophos.jpg",desc:"Лечит себя и казнит слабых врагов."},
  {name:"Night Stalker",img:"images/heroes/night_stalker.jpg",desc:"Становится сильнее ночью, гоняет врагов."},
  {name:"Nyx Assassin",img:"images/heroes/nyx_assassin.jpg",desc:"Невидимка, станит врагов и отражает заклинания."},
  {name:"Ogre Magi",img:"images/heroes/ogre_magi.jpg",desc:"Двойная или тройная магия благодаря мультикасту."},
  {name:"Omniknight",img:"images/heroes/omniknight.jpg",desc:"Сейвит союзников, лечит и делает их неуязвимыми."},
  {name:"Oracle",img:"images/heroes/oracle.jpg",desc:"Снимает дебаффы и спасает союзников от смерти."},
  {name:"Outworld Destroyer",img:"images/heroes/outworld_destroyer.jpg",desc:"Высасывает ману и наносит магический урон."},
  {name:"Pangolier",img:"images/heroes/pangolier.jpg",desc:"Катится шаром и контролирует врагов."},
  {name:"Phantom Assassin",img:"images/heroes/phantom_assassin.jpg",desc:"Режет врагов критами, умеет избегать урон."},
  {name:"Phantom Lancer",img:"images/heroes/phantom_lancer.jpg",desc:"Спамит иллюзии и сбивает столку врагов."},
  {name:"Phoenix",img:"images/heroes/phoenix.jpg",desc:"Лечит и наносит урон огнем, превращается в яйцо."},
  {name:"Primal Beast",img:"images/heroes/primal_beast.jpg",desc:"Ломает врагов своей силой и тараном."},
  {name:"Puck",img:"images/heroes/puck.jpg",desc:"Очень мобильный маг с контролем."},
  {name:"Pudge",img:"images/heroes/pudge.jpg",desc:"Мясник с мощным хук и высоким уроном."},
  {name:"Pugna",img:"images/heroes/pugna.jpg",desc:"Ставит вард, высасывает жизнь и отменяет магию врагов."},
  {name:"Queen of Pain",img:"images/heroes/queen_of_pain.jpg",desc:"Мобильный маг, наносит урон по области."},
  {name:"Razor",img:"images/heroes/razor.jpg",desc:"Вытягивает урон и бьёт молниями."},
  {name:"Riki",img:"images/heroes/riki.jpg",desc:"Невидимка, контролирует врагов облаком дыма."},
  {name:"Rubick",img:"images/heroes/rubick.jpg",desc:"Крадёт способности у врагов."},
  {name:"Sand King",img:"images/heroes/sand_king.jpg",desc:"Прыгает в бой, наносит урон по области."},
  {name:"Shadow Demon",img:"images/heroes/shadow_demon.jpg",desc:"Создаёт иллюзии и снимает баффы."},
  {name:"Shadow Fiend",img:"images/heroes/shadow_fiend.jpg",desc:"Наносит урон по области и издалека."},
  {name:"Shadow Shaman",img:"images/heroes/shadow_shaman.jpg",desc:"Станит и вызывает тотемы для пуша."},
  {name:"Silencer",img:"images/heroes/silencer.jpg",desc:"Запрещает врагам использовать способности."},
  {name:"Skywrath Mage",img:"images/heroes/skywrath_mage.jpg",desc:"Сильный магический урон, мощный контроль."},
  {name:"Slardar",img:"images/heroes/slardar.jpg",desc:"Станит, раскрывает врагов и уменьшает броню."},
  {name:"Slark",img:"images/heroes/slark.jpg",desc:"Крадёт статы и хорошо уходит из-под атаки."},
  {name:"Snapfire",img:"images/heroes/snapfire.jpg",desc:"Стреляет печеньками и бомбами."},
  {name:"Sniper",img:"images/heroes/sniper.jpg",desc:"Бьёт с большого расстояния и добивает врагов."},
  {name:"Spectre",img:"images/heroes/spectre.jpg",desc:"Появляется везде и хорошо дерется в лейте."},
  {name:"Spirit Breaker",img:"images/heroes/spirit_breaker.jpg",desc:"Сбивает врагов во время разгона по всей карте."},
  {name:"Storm Spirit",img:"images/heroes/storm_spirit.jpg",desc:"Очень мобильный маг с большим уроном по одной цели."},
  {name:"Sven",img:"images/heroes/sven.jpg",desc:"Мощный урон по площади, станит и становится очень сильным."},
  {name:"Techies",img:"images/heroes/techies.jpg",desc:"Ставит мины и взрывает врагов."},
  {name:"Templar Assassin",img:"images/heroes/templar_assassin.jpg",desc:"Имеет невидимость и наносит огромный урон."},
  {name:"Terrorblade",img:"images/heroes/terrorblade.jpg",desc:"Создаёт иллюзии, обменивается здоровьем с врагом."},
  {name:"Tidehunter",img:"images/heroes/tidehunter.jpg",desc:"Дает стан по площади и хорошо держит удар."},
  {name:"Timbersaw",img:"images/heroes/timbersaw.jpg",desc:"Мобильный герой против толстяков, наносит урон по деревьям."},
  {name:"Tinker",img:"images/heroes/tinker.jpg",desc:"Обновляет свои заклинания и наносит магический урон."},
  {name:"Tiny",img:"images/heroes/tiny.jpg",desc:"Мощный бёрст по одной цели и пушер."},
  {name:"Treant Protector",img:"images/heroes/treant.jpg",desc:"Лечит здания и становится невидимым среди деревьев."},
  {name:"Troll Warlord",img:"images/heroes/troll_warlord.jpg",desc:"Быстро атакует и может становиться неуязвимым."},
  {name:"Tusk",img:"images/heroes/tusk.jpg",desc:"Инициирует и сбивает врагов снежком."},
  {name:"Underlord",img:"images/heroes/underlord.jpg",desc:"Наносит урон по площади, перемещает всю команду."},
  {name:"Undying",img:"images/heroes/undying.jpg",desc:"Призывает зомби и ворует силу у врагов."},
  {name:"Ursa",img:"images/heroes/ursa.jpg",desc:"Быстро убивает Рошана и наносит урон по одной цели."},
  {name:"Vengeful Spirit",img:"images/heroes/vengeful_spirit.jpg",desc:"Может менять местами союзников и врагов."},
  {name:"Venomancer",img:"images/heroes/venomancer.jpg",desc:"Отравляет врагов и замедляет их."},
  {name:"Viper",img:"images/heroes/viper.jpg",desc:"Отравляет врагов и очень силён на линии."},
  {name:"Visage",img:"images/heroes/visage.jpg",desc:"Призывает фамильяров и контролирует их."},
  {name:"Void Spirit",img:"images/heroes/void_spirit.jpg",desc:"Мобильный герой с уроном и контролем."},
  {name:"Warlock",img:"images/heroes/warlock.jpg",desc:"Призывает голема и лечит союзников."},
  {name:"Weaver",img:"images/heroes/weaver.jpg",desc:"Становится невидимым и откатывает время."},
  {name:"Windranger",img:"images/heroes/windranger.jpg",desc:"Станет и наносит много урона издалека."},
  {name:"Winter Wyvern",img:"images/heroes/winter_wyvern.jpg",desc:"Лечит союзников и может стравливать врагов друг с другом."},
  {name:"Witch Doctor",img:"images/heroes/witch_doctor.jpg",desc:"Станит врагов и лечит союзников."},
  {name:"Wraith King",img:"images/heroes/wraith_king.jpg",desc:"Воскрешается после смерти и наносит критический урон."},
  {name:"Zeus",img:"images/heroes/zeus.jpg",desc:"Мощный магический урон по всей карте."}
];

    // Добавь больше героев по аналогии
;
const items = [
    {name: "Blink Dagger", img: "images/items/blink.jpg", desc: "Телепортация на короткую дистанцию."},
    {name: "Black King Bar", img: "images/items/bkb.jpg", desc: "Дает иммунитет к магии."},
    {name: "Aghanim's Scepter", img: "images/items/aghs.jpg", desc: "Улучшает ультимейт героя."},
    {name: "Divine Rapier", img: "images/items/rapier.jpg", desc: "Самый сильный предмет на урон."},
    {name: "Shadow Blade", img: "images/items/shadow_blade.jpg", desc: "Дает невидимость и урон."},
    // Добавь больше предметов по аналогии
];

// ======= Вставка карточек героев =======
function renderCards(list, containerId, filter = "") {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    list.filter(el => el.name.toLowerCase().includes(filter.toLowerCase())).forEach(el => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `<img src="${el.img}" alt="${el.name}"><h3>${el.name}</h3><p>${el.desc}</p>`;
        card.onclick = () => showDetails(el);
        container.appendChild(card);
    });
}
// ======= Показать детали при клике =======
function showDetails(obj) {
    alert(`${obj.name}\n\n${obj.desc}`);
}

// ======= Фильтрация =======
document.addEventListener('DOMContentLoaded', () => {
    renderCards(heroes, "heroList");
    renderCards(items, "itemList");

    document.getElementById('heroFilter').oninput = e => renderCards(heroes, "heroList", e.target.value);
    document.getElementById('itemFilter').oninput = e => renderCards(items, "itemList", e.target.value);
});

// ======= Анимированный фон-партиклы =======
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let w = window.innerWidth, h = window.innerHeight;
let particles = [];
function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
}
window.addEventListener('resize', resize);
resize();

function createParticles() {
    particles = [];
    for(let i=0;i<80;i++) {
        particles.push({
            x: Math.random()*w,
            y: Math.random()*h,
            r: Math.random()*2+1,
            d: Math.random()*1.5+0.3,
            dx: Math.random()*0.7-0.35,
            dy: Math.random()*0.8+0.1,
            color: "rgba(120,220,255,0.5)"
        });
    }
}
function drawParticles() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p=>{
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
    });
}
function updateParticles() {
    for (let p of particles) {
        p.y += p.dy;
        p.x += p.dx;
        if (p.y > h) { p.y = 0; p.x = Math.random()*w; }
        if (p.x < 0 || p.x > w) { p.x = Math.random()*w; }
    }
}
function animateParticles() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animateParticles);
}
createParticles();
animateParticles();
