/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ExpandUpLeft",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16 6a2 2 0 0 0-2-2h-2.5a.5.5 0 0 1 0-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.5a.5.5 0 0 1 1 0V14c0 1.1.9 2 2 2h4v-4c0-1.1.9-2 2-2h4V6Zm-4 5a1 1 0 0 0-1 1v4h3a2 2 0 0 0 2-2v-3h-4ZM9 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V4.7l4.15 4.15a.5.5 0 1 0 .7-.7L4.71 4H8.5a.5.5 0 0 0 .5-.5Z",
    FILLED : "M14 4a2 2 0 0 1 2 2v4h-4a2 2 0 0 0-2 2v4H6a2 2 0 0 1-2-2v-2.5a.5.5 0 0 0-1 0V14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.5a.5.5 0 0 0 0 1H14Zm-5-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V4.7l4.15 4.15a.5.5 0 1 0 .7-.7L4.71 4H8.5a.5.5 0 0 0 .5-.5Z"
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