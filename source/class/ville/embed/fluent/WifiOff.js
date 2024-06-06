/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WifiOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7l3.03 3.03a9.63 9.63 0 0 0-3.06 2.86.5.5 0 0 0 .82.57 8.61 8.61 0 0 1 2.97-2.7l1.44 1.44A6.44 6.44 0 0 0 4.28 11a.5.5 0 1 0 .9.45A5.41 5.41 0 0 1 8.1 8.82l1.86 1.85a4.02 4.02 0 0 0-3.63 2.43.5.5 0 0 0 .92.4 3.03 3.03 0 0 1 3.93-1.6l1.65 1.65a.5.5 0 0 0 .2.2l4.1 4.1a.5.5 0 0 0 .71-.7l-15-15ZM9.6 7.48l1.02 1.02a5.43 5.43 0 0 1 4.28 2.97.5.5 0 0 0 .9-.46A6.43 6.43 0 0 0 9.6 7.48ZM7.14 5.01l.8.81a8.6 8.6 0 0 1 9.2 3.5.5.5 0 0 0 .83-.57A9.61 9.61 0 0 0 7.14 5.02Zm3.82 8.78a1.3 1.3 0 1 1-1.83 1.83 1.3 1.3 0 0 1 1.83-1.83Z";
   var pathdfilled = "M3.28 2.22a.75.75 0 0 0-1.06 1.06l2.89 2.89A9.5 9.5 0 0 0 2.24 8.9a.75.75 0 1 0 1.23.86A7.97 7.97 0 0 1 6.2 7.27l.96.96A6.44 6.44 0 0 0 4.3 11.1a.75.75 0 0 0 1.34.67 4.9 4.9 0 0 1 2.68-2.4l1.28 1.28a4.11 4.11 0 0 0-3.34 2.46.75.75 0 1 0 1.38.6 2.63 2.63 0 0 1 3.92-1.1l5.17 5.17a.75.75 0 1 0 1.06-1.06L3.28 2.22Zm8.09 7.03a4.92 4.92 0 0 1 3.08 2.54.75.75 0 1 0 1.33-.69A6.43 6.43 0 0 0 9.7 7.57l1.68 1.68ZM8.55 6.43a7.96 7.96 0 0 1 8.06 3.33.75.75 0 1 0 1.23-.85A9.47 9.47 0 0 0 7.31 5.19l1.24 1.24Zm2.37 9.2a1.24 1.24 0 1 0-1.76-1.75 1.24 1.24 0 0 0 1.76 1.76Z";
   
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