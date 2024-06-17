/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DataBarVerticalAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15 3a2 2 0 0 1 2 2v4.6c-.32-.16-.65-.3-1-.4V5a1 1 0 1 0-2 0v4.02c-.34.03-.68.1-1 .19V5c0-1.1.9-2 2-2ZM9.07 15.36c.09.57.26 1.1.5 1.6A2 2 0 0 1 8 15V8a2 2 0 1 1 4 0v1.6c-.36.18-.7.4-1 .66V8a1 1 0 1 0-2 0v7a1 1 0 0 0 .07.36ZM5 9a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4c0-1.1.9-2 2-2Zm1 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm13 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    FILLED : "M15 3a2 2 0 0 1 2 2v4.6a5.48 5.48 0 0 0-4-.4V5c0-1.1.9-2 2-2ZM9 14.5c0 .88.2 1.72.58 2.46A2 2 0 0 1 8 15V8a2 2 0 1 1 4 0v1.6a5.5 5.5 0 0 0-3 4.9ZM7 11a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0v-4Zm12 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
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