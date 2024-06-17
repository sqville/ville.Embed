/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DataBarVerticalArrowDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15 3a2 2 0 0 1 2 2v4.6c-.32-.16-.65-.3-1-.4V5a1 1 0 1 0-2 0v4.02c-.34.03-.68.1-1 .19V5c0-1.1.9-2 2-2Zm-3 5v1.6c-.36.18-.7.4-1 .66V8a1 1 0 1 0-2 0v7a1 1 0 0 0 .07.36c.09.57.26 1.1.5 1.6A2 2 0 0 1 8 15V8a2 2 0 1 1 4 0Zm-5 3a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0v-4Zm-2-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm14 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z",
    FILLED : "M15 3a2 2 0 0 1 2 2v4.6a5.48 5.48 0 0 0-4-.4V5c0-1.1.9-2 2-2ZM9 14.5a5.5 5.5 0 0 1 3-4.9V8a2 2 0 1 0-4 0v7a2 2 0 0 0 1.58 1.96A5.48 5.48 0 0 1 9 14.5ZM5 9a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4c0-1.1.9-2 2-2Zm14 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z"
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