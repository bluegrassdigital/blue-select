## Normal

<?codeembed seamless title="Result" size="iphone5s" base="docs/base.html" adjust-height use-html="select" scripts="../dist/blue-select.umd.js,select.js" stylesheets="select.css"></codeembed?>

## Disabled

<?codeembed seamless title="Result" size="iphone5s" base="docs/base.html" adjust-height scripts="../dist/blue-select.umd.js,select.js" stylesheets="select.css">
<div class="select" id="Foo">
  <select disabled name="SomeSelect">
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
</codeembed?>

<?tabs>
<codeblock title="HTML" lang="html" ref="select">
<div class="select" id="Foo">
  <select name="SomeSelect">
    <option value="">Please select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
</codeblock>
<codeblock title="CSS" lang="scss" external="docs/select.css"></codeblock>
<codeblock title="JS" lang="javascript" external="docs/select.js"></codeblock>
</tabs?>
