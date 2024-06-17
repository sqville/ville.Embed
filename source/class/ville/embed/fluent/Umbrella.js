/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Umbrella",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.51 9.13c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05a.5.5 0 0 0 .84 0l.03-.05a3.18 3.18 0 0 1 .56-.6c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05A.5.5 0 0 0 18 9.5C18 5.72 14.78 2 10 2 5.22 2 2 5.72 2 9.5a.5.5 0 0 0 .92.28l.03-.05a3.2 3.2 0 0 1 .56-.6c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05a.5.5 0 0 0 .84 0l.03-.05a3.2 3.2 0 0 1 .56-.6Zm-5.35-1A6.87 6.87 0 0 1 10 3a6.87 6.87 0 0 1 6.84 5.13A3.17 3.17 0 0 0 15 7.5c-.92 0-1.66.46-2.14.87-.14.12-.26.24-.36.35-.1-.11-.22-.23-.36-.35A3.33 3.33 0 0 0 10 7.5c-.92 0-1.66.46-2.14.87-.14.12-.26.24-.36.35-.1-.11-.22-.23-.36-.35A3.33 3.33 0 0 0 5 7.5c-.74 0-1.37.3-1.84.63ZM10 9.5c-.15 0-.32.05-.5.15v6.1a1.25 1.25 0 1 1-2.5 0v-.25a.5.5 0 0 0-1 0v.25a2.25 2.25 0 0 0 4.5 0v-6.1c-.18-.1-.35-.15-.5-.15Z",
    FILLED : "M8.51 9.13c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05a.5.5 0 0 0 .84 0l.03-.05a3.18 3.18 0 0 1 .56-.6c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05A.5.5 0 0 0 18 9.5C18 5.72 14.78 2 10 2 5.22 2 2 5.72 2 9.5a.5.5 0 0 0 .92.28l.03-.05a3.2 3.2 0 0 1 .56-.6c.4-.34.9-.63 1.49-.63.58 0 1.1.3 1.49.63a3.88 3.88 0 0 1 .56.6l.03.05a.5.5 0 0 0 .84 0l.03-.05a3.2 3.2 0 0 1 .56-.6ZM10 9.5c-.15 0-.32.05-.5.15v6.1a1.25 1.25 0 1 1-2.5 0v-.25a.5.5 0 0 0-1 0v.25a2.25 2.25 0 0 0 4.5 0v-6.1c-.18-.1-.35-.15-.5-.15Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});