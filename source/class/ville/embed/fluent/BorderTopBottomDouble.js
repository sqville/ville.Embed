/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BorderTopBottomDouble",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3.05 5.41A3 3 0 0 1 6 3h8a3 3 0 0 1 2.95 2.41.5.5 0 0 1-.4.6.5.5 0 0 1-.6-.47A2 2 0 0 0 14 4H6a2 2 0 0 0-1.95 1.6.5.5 0 0 1-.6.4.5.5 0 0 1-.4-.59ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5Zm-13 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 14.5c0-.28.22-.5.5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0-3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Z",
    FILLED : "M6 4.5a1.5 1.5 0 0 0-1.43 1.04.75.75 0 0 1-1.38-.58A3 3 0 0 1 6 3h8a3 3 0 0 1 2.81 1.96.75.75 0 0 1-1.38.58A1.5 1.5 0 0 0 14 4.5H6ZM3.75 11a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5c0 .41-.34.75-.75.75Zm12.5 0a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5c0 .41-.34.75-.75.75Zm-12.5 4.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75ZM3 13.75c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
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