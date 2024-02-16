zipMods = [
  ['hl.zip', 'Half-Life', 214283501, 21, 10485760],
  ['opposing_force_en.zip', 'Dont Select, broken', 221191140, 22, 10485760],
  ['halva_rus.zip', 'Dont Select, broken', 303881453, 29, 10485760, 10485760],
  ['opposing_force_rus.zip', 'Dont Select, broken', 223479923, 22, 10485760]
];

pkgMods = [
];
var selectZip = document.getElementById('selectZip');
var iArgs = document.getElementById('iArgs');
selectZip.addEventListener('change', function() {
  if (selectZip.value == "hl.zip") {
    //alert('Bugs: menu lagging.');
    iArgs.value = "-dev 1 -game valve -width 1280 -height 720 +_sethdmodels 0";
  }
  else if (selectZip.value == "blue_shift_en.zip") {
    //alert('Bugs: Sometimes needs noclip, because you can\'t pick armor');
    iArgs.value = "-dev 1 -game valve";
  }
  else if (selectZip.value == "opposing_force_en.zip") {
    //alert('Bugs: Menu lagging, doesn\'t spawn NPCs (because old xash version).');
    iArgs.value = "-dev 1 -game gearbox";
  }
  else if (selectZip.value == "halva_rus.zip") {
    //alert('Bugs: No bugs.');
    iArgs.value = "-dev 1 -game valve";
  }
  else if (selectZip.value == "blue_shift_rus.zip") {
    //alert('Bugs: Sometimes needs noclip, because you can\'t pick armor');
    iArgs.value = "-dev 1 -game valve";
  }
  else if (selectZip.value == "opposing_force_rus.zip") {
    //alert('Bugs: Doesn\'t spawn NPCs (because old xash version).');
    iArgs.value = "-dev 1 -game valve";
  }
});
