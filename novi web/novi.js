

//dark mode toogle
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

/*Animacija natipsa Franikm*/
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



  /*chart*/

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Social Media', 'WebDesign', 'VIdeo Editing', 'Programing', 'Graphic Design'],
      datasets: [{
        label: '# of Votes',
        data: [19, 19, 15, 18, 10, 3],
        backgroundColor: [
          'rgba(255, 0, 0, 0.8)',
          'rgba(0,255,0,0.3)',
          'rgb(255,0,255)',
          'rgb(0,157,196)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba	(0,0,255)'
        ],
        borderWidth: 2

      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });




//animacija
  var maxElements = 200;
var duration = 15100;
var toAnimate = [];
var radius = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
var distance = radius / 4 <= 150 ? 150 : radius / 4; 
var colors = ['#FFC641', '#16A3B2', '#4AEDC2', '#FE5E33'];

var createElements = (function() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < maxElements; i++) {
    var el = document.createElement('div');
    el.classList.add('particule');
    el.style.color = colors[anime.random(0, 3)];
    toAnimate.push(el);
    fragment.appendChild(el);
  }
  document.body.appendChild(fragment);
})();

var animate = function(el, i) {
  var angle = Math.random() * Math.PI * 2;
  anime({
    targets: el,
    translateX: [0, Math.cos(angle) * distance],
    translateY: [0, Math.sin(angle) * distance],
    scale: [
      {value: [0, 1], duration: 400, easing: 'easeOutBack'},
      {value: 0, duration: 400, delay: duration - 800, easing: 'easeInBack'}
    ],
    offset: (duration / maxElements) * i,
    duration: duration,
    easing: 'easeOutSine',
    loop: true
  });
}

toAnimate.forEach(animate);





