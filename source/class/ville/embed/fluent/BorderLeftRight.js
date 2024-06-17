/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BorderLeftRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.66 3.07a.5.5 0 0 0-.66.38.5.5 0 0 0 .46.6A2 2 0 0 1 16 6v8a2 2 0 0 1-1.6 1.95.5.5 0 0 0-.4.6.5.5 0 0 0 .66.38A3 3 0 0 0 17 14V6a3 3 0 0 0-2.34-2.93Zm-9.32 0a.5.5 0 0 1 .66.38.5.5 0 0 1-.46.6A2 2 0 0 0 4 6v8a2 2 0 0 0 1.6 1.95.5.5 0 0 1 .4.6.5.5 0 0 1-.66.38A3 3 0 0 1 3 14V6a3 3 0 0 1 2.34-2.93ZM8 16.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z",
    FILLED : "M15.5 6a1.5 1.5 0 0 0-1.04-1.43.75.75 0 0 1 .58-1.38A3 3 0 0 1 17 6v8a3 3 0 0 1-1.96 2.82.75.75 0 0 1-.58-1.39l.07-.03c.57-.21.97-.76.97-1.4V6ZM8.75 3a.75.75 0 1 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Zm0 12.5a.75.75 0 1 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5ZM5.45 4.6A1.5 1.5 0 0 0 4.5 6v8a1.5 1.5 0 0 0 1.03 1.43h.01a.75.75 0 0 1-.58 1.38A3 3 0 0 1 3 14.02V6a3 3 0 0 1 1.96-2.82.75.75 0 1 1 .49 1.42Z"
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