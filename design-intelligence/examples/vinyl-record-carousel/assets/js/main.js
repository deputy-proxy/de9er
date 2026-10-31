const albums = [
  { title: 'Soft Focus', artist: 'Arlo June', tone: '#c68b60', ink: '#342b39', art: 'loop' },
  { title: 'Afterimage', artist: 'Nera Bloom', tone: '#b197fc', ink: '#33213f', art: 'eclipse' },
  { title: 'Slow Current', artist: 'Glass Orchard', tone: '#c47e83', ink: '#392b38', art: 'balance' },
  { title: 'Night Signal', artist: 'Mira Vale', tone: '#df9477', ink: '#4c3038', art: 'fold' },
  { title: 'Blue Hour', artist: 'Common Weather', tone: '#d76b9d', ink: '#392448', art: 'wave' },
  { title: 'Paper Moons', artist: 'Ellis North', tone: '#9d91ca', ink: '#29344d', art: 'steps' },
  { title: 'Open Circuit', artist: 'Low Season', tone: '#8b638d', ink: '#272338', art: 'ribbon' },
  { title: 'Golden Static', artist: 'Sable Coast', tone: '#b58bbd', ink: '#36314f', art: 'orbit' }
];
const titleNode = document.querySelector('#album-title');
const artistNode = document.querySelector('#artist-name');
const progressNode = document.querySelector('#record-progress');
const canvas = document.querySelector('#record-scene');
const fallback = document.querySelector('#fallback-rail');
let active = 1;
let sceneApi = null;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function updateSelection(index) {
  active = (index + albums.length) % albums.length;
  titleNode.textContent = albums[active].title;
  artistNode.textContent = albums[active].artist;
  [...progressNode.children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === active)));
  if (sceneApi) sceneApi.select(active);
  [...fallback.children].forEach((node, i) => node.classList.toggle('active', i === active));
}

albums.forEach((album, index) => {
  const button = document.createElement('button');
  button.className = 'progress-dot';
  button.type = 'button';
  button.setAttribute('aria-label', `Show ${album.title} by ${album.artist}`);
  button.setAttribute('aria-pressed', String(index === active));
  button.addEventListener('click', () => updateSelection(index));
  progressNode.append(button);
});
document.querySelector('[data-prev]').addEventListener('click', () => updateSelection(active - 1));
document.querySelector('[data-next]').addEventListener('click', () => updateSelection(active + 1));

function buildFallback() {
  fallback.hidden = false;
  fallback.innerHTML = '';
  albums.forEach((album, index) => {
    const cover = document.createElement('div');
    cover.className = `fallback-cover${index === active ? ' active' : ''}`;
    cover.textContent = album.title;
    fallback.append(cover);
  });
  canvas.hidden = true;
}

function coverTexture(THREE, album, index) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 512;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 512, 512); g.addColorStop(0, album.tone); g.addColorStop(1, album.ink);
  ctx.fillStyle = g; ctx.fillRect(0, 0, 512, 512);
  ctx.globalAlpha = .24; ctx.fillStyle = '#fff';
  if (index % 4 === 0) { ctx.beginPath(); ctx.arc(350, 180, 140, 0, Math.PI * 2); ctx.fill(); ctx.globalCompositeOperation = 'destination-out'; ctx.beginPath(); ctx.arc(405, 150, 120, 0, Math.PI * 2); ctx.fill(); ctx.globalCompositeOperation = 'source-over'; }
  else if (index % 4 === 1) { ctx.beginPath(); ctx.ellipse(260, 250, 180, 90, -.7, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 3; for (let i=0;i<5;i++){ctx.beginPath();ctx.ellipse(260,250,180-i*20,90-i*10,-.7,0,Math.PI*2);ctx.stroke();} }
  else if (index % 4 === 2) { ctx.translate(256,256); ctx.rotate(-.55); for(let i=0;i<7;i++){ctx.fillRect(-220+i*58,-250,24,500);} ctx.setTransform(1,0,0,1,0,0); }
  else { ctx.beginPath(); ctx.moveTo(70,410); ctx.bezierCurveTo(80,60,420,80,440,390); ctx.bezierCurveTo(250,470,240,110,70,410); ctx.fill(); }
  ctx.globalAlpha=1; ctx.fillStyle='rgba(255,255,255,.84)'; ctx.font='500 19px monospace'; ctx.fillText(`SIDE A  /  0${index+1}`,30,46);
  ctx.fillStyle='#fff'; ctx.font='italic 48px Georgia'; ctx.fillText(album.title,30,440,450);
  const texture = new THREE.CanvasTexture(c); texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = 4; return texture;
}

async function initThree() {
  try {
    const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.181.0/build/three.module.js');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, canvas.clientWidth / canvas.clientHeight, .1, 100);
    camera.position.set(0, 1.0, 11.8); camera.lookAt(0, 0, 0);
    scene.add(new THREE.HemisphereLight(0xe7d9ff, 0x211a29, 2.0));
    const key = new THREE.DirectionalLight(0xffe8d2, 3.2); key.position.set(-4, 7, 8); scene.add(key);
    const rim = new THREE.PointLight(0xa58aff, 28, 22); rim.position.set(5, 2, -3); scene.add(rim);
    const rail = new THREE.Group(); scene.add(rail);
    const recordGeometry = new THREE.CircleGeometry(1.13, 72);
    const holeGeometry = new THREE.CircleGeometry(.07, 32);
    const groups = [];
    const radius = 4.65;
    albums.forEach((album, index) => {
      const angle = index / albums.length * Math.PI * 2;
      const group = new THREE.Group(); group.position.set(Math.sin(angle)*radius, 0, Math.cos(angle)*radius); group.rotation.y = angle;
      const vinyl = new THREE.Mesh(recordGeometry, new THREE.MeshStandardMaterial({ color: 0x17171b, roughness: .42, metalness: .22 })); vinyl.position.set(.48,0,-.035); group.add(vinyl);
      for(let ring=0;ring<8;ring++){const groove=new THREE.Mesh(new THREE.TorusGeometry(.27+ring*.105,.004,4,72),new THREE.MeshBasicMaterial({color:0x77747d,transparent:true,opacity:.22}));groove.position.set(.48,0,.012+ring*.0003);group.add(groove);}
      const label = new THREE.Mesh(new THREE.CircleGeometry(.25,48),new THREE.MeshStandardMaterial({color:album.tone,roughness:.7}));label.position.set(.48,0,.02);group.add(label);
      const hole = new THREE.Mesh(holeGeometry,new THREE.MeshBasicMaterial({color:0x09090b}));hole.position.set(.48,0,.025);group.add(hole);
      const coverMat = new THREE.MeshStandardMaterial({map:coverTexture(THREE,album,index),roughness:.82,metalness:.02});
      const edge = new THREE.Mesh(new THREE.BoxGeometry(2.23,2.23,.055),new THREE.MeshStandardMaterial({color:0x17151b,roughness:.9})); edge.position.set(-.42,0,.055); group.add(edge);
      const cover = new THREE.Mesh(new THREE.PlaneGeometry(2.22,2.22),coverMat); cover.position.set(-.42,0,.1); group.add(cover);
      rail.add(group); groups.push(group);
    });
    let targetRotation = -active / albums.length * Math.PI * 2;
    rail.rotation.y = targetRotation;
    let currentRotation = targetRotation;
    let raf = 0; let visible = true;
    const resize = () => { const w=canvas.clientWidth,h=canvas.clientHeight; if(!w||!h)return; renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); render(); };
    const observer = new ResizeObserver(resize); observer.observe(canvas);
    const intersection = new IntersectionObserver(entries => {visible=entries[0].isIntersecting; if(visible) render(); else {cancelAnimationFrame(raf);raf=0;}}); intersection.observe(canvas);
    function draw(){
      raf=0; if(!visible)return;
      let difference=targetRotation-currentRotation; difference=Math.atan2(Math.sin(difference),Math.cos(difference));
      if(reducedMotion) currentRotation=targetRotation; else currentRotation+=difference*.085;
      rail.rotation.y=currentRotation; renderer.render(scene,camera);
      if(!reducedMotion && Math.abs(difference)>.001) raf=requestAnimationFrame(draw);
    }
    function render(){if(visible && !raf) raf=requestAnimationFrame(draw);}
    render();
    sceneApi={select(index){const base=-index/albums.length*Math.PI*2;let delta=Math.atan2(Math.sin(base-currentRotation),Math.cos(base-currentRotation));targetRotation=currentRotation+delta;render();}};
    document.querySelector('[data-rail]').addEventListener('keydown', event => {if(event.key==='ArrowLeft'){event.preventDefault();updateSelection(active-1);} if(event.key==='ArrowRight'){event.preventDefault();updateSelection(active+1);}});
    let pointerStart=null;
    canvas.addEventListener('pointerdown',e=>{pointerStart=e.clientX;canvas.setPointerCapture(e.pointerId);});
    canvas.addEventListener('pointerup',e=>{if(pointerStart!==null){const delta=e.clientX-pointerStart;if(Math.abs(delta)>28)updateSelection(active+(delta<0?1:-1));pointerStart=null;}});
    canvas.addEventListener('pointercancel',()=>{pointerStart=null;});
    document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;}else render();});
    canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();cancelAnimationFrame(raf);raf=0;buildFallback();});
    window.addEventListener('pagehide',()=>{cancelAnimationFrame(raf);observer.disconnect();intersection.disconnect();groups.forEach(group=>group.traverse(obj=>{if(obj.geometry)obj.geometry.dispose();if(obj.material){const mats=Array.isArray(obj.material)?obj.material:[obj.material];mats.forEach(mat=>{if(mat.map)mat.map.dispose();mat.dispose();});}}));renderer.dispose();});
  } catch (error) {
    console.warn('3D record rail unavailable; showing the static album rail.', error);
    buildFallback();
  }
}

if (reducedMotion) document.documentElement.classList.add('reduced-motion');
initThree();
