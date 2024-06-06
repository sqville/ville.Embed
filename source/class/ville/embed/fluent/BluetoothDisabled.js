/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BluetoothDisabled",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "m13.5 14.2 3.65 3.65a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7L9 9.71v.06l-3.83 3.35a.5.5 0 0 0 .66.76L9 11.1v6.4a.5.5 0 0 0 .85.35l3.65-3.64Zm.33-7.32-2.58 2.25-.7-.7 2.22-1.95L10 3.7v4.17l-1-1V2.5a.5.5 0 0 1 .85-.35l4 4a.5.5 0 0 1-.02.73ZM10 11.1l2.77 2.42L10 16.3V11.1Z";
   var pathdfilled = "m13.68 14.38 3.47 3.47a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7l6.81 6.82-3.68 3a.75.75 0 0 0 .94 1.16L9 11.58v5.67a.75.75 0 0 0 1.28.53l3.4-3.4Zm-1.21-1.2.15.14-2.12 2.12v-3.86l1.97 1.6Zm1.75-5.85L11.6 9.47 10.53 8.4l2.1-1.7-2.13-2.14v3.82L9 6.88V2.75a.75.75 0 0 1 1.28-.53l4 4a.75.75 0 0 1-.06 1.11Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});