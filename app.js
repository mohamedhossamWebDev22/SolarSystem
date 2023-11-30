const planetsInformation = [
  "Mercury is the closest planet to the Sun and the smallest in our solar system. It has a barren, rocky surface with extreme temperature variations, ranging from scorching hot to freezing cold.",

  "Venus is often called Earth's 'sister planet' due to its similar size, but it has a thick, toxic atmosphere composed mainly of carbon dioxide. It experiences a runaway greenhouse effect, making it the hottest planet in our solar system.",

  "Earth is the only known planet to support life. With a diverse environment, including oceans, continents, and a life-sustaining atmosphere, it is home to a wide variety of ecosystems and species.",

  "Known as the 'Red Planet,' Mars has a rusty-red appearance due to iron oxide on its surface. It has polar ice caps, canyons, and the largest volcano in the solar system, Olympus Mons. Scientists are interested in Mars for potential signs of past or present life.",

  "Jupiter is the largest planet in our solar system, with a massive atmosphere primarily composed of hydrogen and helium. It has a strong magnetic field and numerous moons, including the four largest, known as the Galilean moons: Io, Europa, Ganymede, and Callisto.",

  "Saturn is famous for its stunning ring system, which is composed of icy particles and rock. This gas giant has a similar composition to Jupiter and is known for its extensive moon system, with Titan being the largest and notable for its thick atmosphere.",

  "Uranus is an ice giant with a bluish-green tint due to methane in its atmosphere. It rotates on its side, and its rings are oriented differently from other planets. It has a collection of small, icy moons.",

  "Neptune is the farthest known planet from the Sun and is another ice giant. It has a dynamic atmosphere with storms and a dark spot reminiscent of Jupiter's Great Red Spot. Triton, its largest moon, is unique for its retrograde orbit and geysers.",
],
titles = [
  "<h1>Mercury :</h1>",
  "<h1>Venus :</h1>",
  "<h1>Earth :</h1>",
  "<h1>Mars :</h1>",
  "<h1>Jupiter :</h1>",
  "<h1>Saturn :</h1>",
  "<h1>Uranus :</h1>",
  "<h1>Neptune :</h1>"
]

const resultElement = document.getElementById("result"),
title = document.getElementById("title");

const showInfo = (num) => {
  title.innerHTML = titles[num];

  resultElement.innerHTML = planetsInformation[num];
};
