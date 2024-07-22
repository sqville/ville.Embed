/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
 qx.Class.define("ville.embed.iconicss.Abstract",
 {
  type: "abstract", 
  
  extend : qx.ui.basic.Label,

  statics :
  {
    ICONICSSICONTAG : "i",
    ICONICSSNAMESPACE : "icss",
    ICONICSSALLSTYLERULE : "position: relative; display:inline-block; font-style: normal; background-color:currentColor; box-sizing: border-box; vertical-align: middle;",
    ICONICSSALLPSEUDOBEFORERULE : "content: ''; border-width: 0; position: absolute; box-sizing: border-box;",
    ICONICSSALLPSEUDOAFTERRULE : "content: ''; border-width: 0; position: absolute; box-sizing: border-box;"
  },
 
  construct (size, color)
   {
    super();

    this.setRich(true);

    if (size != null) {
      this.setSize(size);
    }
    if (color != null) {
      this.setTextColor(color);
    }

    // construct global rule name
    var icsstag = this.constructor.superclass.ICONICSSICONTAG;
    var icssns = this.constructor.superclass.ICONICSSNAMESPACE;
    var globalrulename = `${icsstag}[class*='${icssns}-']`;

    // add CSS rules to global stylesheet
    var sheet = qx.ui.style.Stylesheet.getInstance();
    sheet.addRule(globalrulename, this.constructor.superclass.ICONICSSALLSTYLERULE);
    sheet.addRule(globalrulename, this.constructor.superclass.ICONICSSALLPSEUDOBEFORERULE);
    sheet.addRule(globalrulename, this.constructor.superclass.ICONICSSALLPSEUDOAFTERRULE);

    // set icon specific values
    var cssclassnm = this.constructor.CSSCLASS;
    this.setCssClass(`${icssns}-${cssclassnm}`);
    // add icon specific CSS rules to global stylesheet
    var rulens = `${icsstag}.${icssns}-${cssclassnm}`;
    sheet.addRule(rulens, this.constructor.STYLERULE);
    sheet.addRule(`${rulens}:before`, this.constructor.PSEUDOBEFORERULE);
    sheet.addRule(`${rulens}:after`, this.constructor.PSEUDOAFTERRULE);
    
    // set all values
    this._addIconTag(this.getCssClass(), this.getSize(), this.getTextColor());
  
  },

  properties :
  {
    /** Font size of the widget */
    size :
    {
      check : "Integer",
      init : 1
    },

    /**
    * The tag to use for this element
    */
    cssClass :
    {
      check : "String",
      init : "",
      nullable : true,
      themeable : true,
      apply : "_applyCssClass"
    }
  },

   members : 
   {    
    _addIconTag (cssclass, size, color)
    {
      this.setValue(`<i class="${cssclass}" style="font-size:${size}em; color:${color};"></i>`);
    },

    // property apply
    _applyCssClass (value, old) 
    {
      this.getContentElement().removeClass(old);
      this.getContentElement().addClass(value);
    }
   }
 });