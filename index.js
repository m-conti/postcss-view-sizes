
const process = (direction) => {
  const dynamicDirections = ['d', 'l', 's'].map((prefix) => prefix + direction);

  return (decl) => {
    dynamicDirections.forEach((dynamicDirection) => {
      if (!decl.value.includes(dynamicDirection)) return;
      decl.cloneBefore({ value: decl.value.replace(dynamicDirection, direction) })
    });
  };
};

const processHeight = process('vh');
const processWidth = process('vw');

/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => ({
  postcssPlugin: 'postcss-view-sizes',
  Declaration(decl) {
    if (decl.value.includes('vh')) { processHeight(decl); }
    if (decl.value.includes('vw')) { processWidth(decl); }
  }
})

module.exports.postcss = true
