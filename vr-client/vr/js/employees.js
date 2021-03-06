var textureLoader = new THREE.TextureLoader();
var employeeMaterials = [
 		new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/aasmund-isaksen.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/adam-gullerud-haeger.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/alexander-perry.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/astrid-loevoey-siem.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/axel-borge.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/cathrine-holm.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/christian-skroevseth.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/duy-dinh.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/erlend-schei.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/goran-stene-solomonovic.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/haavard-ranum.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/jasmine-garry.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/jonas-laberg.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/jonas-lepsoey.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/ketil-hoel-pedersen.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/knut-soelberg.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/kristin-shovick.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/lars-helgeland.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/lise-bulling.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/lise-marie-scheele.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/magnus-green.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/mariana-eggers.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/mark-west.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/marthe-froeshaug.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/martin-gravraak.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/mia-skagestad.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/michael-marszalek.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/morten-hjerpseth.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/niels-henrik-hagen.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/nikhil-andre-luthra.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/nina-kristin-langseth.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/oeystein-jakobsen.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/ole-hallvard-kveseth.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/ole-hopland.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/ole-joergen-tallaksrud.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/ole-mikkel-sjoelie.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/olga-ionova.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/per-atle-holvik.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/phuong-nguyen.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/randveig-skageng.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/rita-schistad-stensvoll.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/roar-flaten.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/rune-olsen.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/silje-hol-sletteng.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/siri-benjaminsen.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/solveig-grieg.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/stein-carlsen.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/stian-westvig.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/stine-modal.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/svein-arild-myhrer.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/sverre-hurum.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/thomas-bergheim.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/thomas-lundbye.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/thomas-wilhelmsen.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/tor-erling-aanerud.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/tore-dahl.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/torgeir-nilsen.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/ulrikke-pedersen.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/vibeke-berge.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/vilje-mohn.png'), color: 0xffffff } ),
    new THREE.MeshBasicMaterial( { map: textureLoader.load('textures/employees/vivi-ann-ringnes.png'), color: 0xffffff } )
];

const size = 25;
var boxThing = new THREE.BoxGeometry(size, size, size);
const groupSize = employeeMaterials.length;
const numGroups = 1;

var uniqueEmployees = employeeMaterials.map(employee => new THREE.Mesh( boxThing, employee ));
const employees = [];
for (let emp = 0; emp < groupSize * numGroups; emp++) {
    employees.push(uniqueEmployees[emp % groupSize].clone());
}
