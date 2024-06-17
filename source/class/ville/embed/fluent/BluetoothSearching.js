/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BluetoothSearching",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.85 2.15A.5.5 0 0 0 9 2.5v6.4L5.83 6.12a.5.5 0 1 0-.66.76L8.74 10l-3.57 3.12a.5.5 0 0 0 .66.76L9 11.1v6.4a.5.5 0 0 0 .85.35l4-4a.5.5 0 0 0-.02-.73L10.26 10l3.57-3.12a.5.5 0 0 0 .02-.73l-4-4ZM10 16.29V11.1l2.77 2.42L10 16.3Zm2.77-9.81L10 8.9V3.7l2.77 2.78Zm4.26.25a.5.5 0 1 0-.84.55 5 5 0 0 1 0 5.45.5.5 0 0 0 .84.54 6 6 0 0 0 0-6.54Zm-2.29 1.03a.5.5 0 0 1 .69.17 4 4 0 0 1 0 4.13.5.5 0 1 1-.86-.51 3 3 0 0 0 0-3.1.5.5 0 0 1 .17-.69Z",
    FILLED : "M10.28 2.22A.75.75 0 0 0 9 2.75v5.67L6.22 6.17a.75.75 0 1 0-.94 1.16L8.56 10l-3.28 2.67a.75.75 0 0 0 .94 1.16L9 11.58v5.67a.75.75 0 0 0 1.28.53l4-4a.75.75 0 0 0-.06-1.11L10.94 10l3.28-2.67a.75.75 0 0 0 .06-1.11l-4-4Zm.22 13.22v-3.86l2.13 1.73-2.13 2.13Zm2.13-8.75L10.5 8.42V4.56l2.13 2.13Zm5.62-.01a.75.75 0 0 0-1.35.64 6.22 6.22 0 0 1 0 5.36.75.75 0 0 0 1.35.64 7.72 7.72 0 0 0 0-6.64Zm-3 1.13c.4-.14.82.07.96.46a5.24 5.24 0 0 1 0 3.46.75.75 0 0 1-1.42-.5 3.74 3.74 0 0 0 0-2.47.75.75 0 0 1 .46-.95Z"
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