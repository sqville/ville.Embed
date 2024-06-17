/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowEnterUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.86 2.16a.5.5 0 0 0-.72 0l-4 4.25a.5.5 0 0 0 .72.68L8 3.76V15a3 3 0 0 0 3 3h4.5a.5.5 0 0 0 0-1H11a2 2 0 0 1-2-2V3.76l3.14 3.33a.5.5 0 0 0 .72-.68l-4-4.25Z",
    FILLED : "M8.8 2.24a.75.75 0 0 0-1.1 0l-4 4.25A.75.75 0 1 0 4.8 7.5l2.7-2.87v10.11c0 1.8 1.46 3.25 3.25 3.25h4.5a.75.75 0 0 0 0-1.5h-4.5c-.97 0-1.75-.78-1.75-1.75V4.65l2.7 2.86a.75.75 0 1 0 1.1-1.02l-4-4.25Z"
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