'use babel';

function apply() {
  atom.config.onDidChange('atom-angi-wen-ui.fonts.fontSize', (value) => {
      var fontSize = Math.round(value.newValue);
      if ( fontSize > 11  && fontSize < 33 ) {
        document.querySelector(':root').style.fontSize = `${fontSize}px`;
      }
  });
}

module.exports = {
  apply
};
