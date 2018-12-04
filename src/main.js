import $ from 'jquery';
import 'animate.css'

const $box = $('#box');
const $ttotto = $('#ttotto');

let opened = false;

function reset() {
  $ttotto.removeClass();
  $box.removeClass();
  $('.particle').removeClass().addClass('particle')
}

function boxOpen() {
  $ttotto.addClass('fadeInUp animated');
  $box.addClass('tada animated')
  popParticles();
}

const colors = [
  'red',
  'yellow',
  'aqua',
  'GreenYellow',
  'Lime',
  'DeepPink',
  'Aquamarine',
]

function randomColor(elem) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  $(elem).css('background-color', color)
}

function popParticles() {
  $('.particle').each((idx, elem) => {
    $(elem).addClass('animated')
    randomColor(elem)
  })
}

$box.on('click', () => {
  if (opened) {
    reset()
  } else {
    boxOpen();
  }

  opened = !opened;
})
