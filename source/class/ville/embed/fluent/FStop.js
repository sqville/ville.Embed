/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FStop",
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

   var pathdregular = "M10.88 5.35a2.83 2.83 0 0 1 3.68-2.22l.78.26a.5.5 0 1 0 .32-.95l-.8-.26a3.83 3.83 0 0 0-4.96 3L9.24 9H5.5a.5.5 0 1 0 0 1h3.57l-.62 3.63a2.83 2.83 0 0 1-4.24 1.96l-.45-.27a.5.5 0 1 0-.52.86l.46.27a3.83 3.83 0 0 0 5.74-2.65l.65-3.8h3.41a.5.5 0 0 0 0-1h-3.24l.62-3.65Z";
   var pathdfilled = "M11.08 5.68c.28-1.63 2-2.58 3.53-1.95l.36.14a.75.75 0 1 0 .56-1.38l-.36-.15A4.08 4.08 0 0 0 9.6 5.43L9 9H5.74a.75.75 0 1 0 0 1.5h2.98l-.5 2.96a2.58 2.58 0 0 1-3.92 1.75l-.16-.1a.75.75 0 0 0-.8 1.27l.16.1c2.46 1.55 5.7.1 6.2-2.77l.55-3.21h2.99a.75.75 0 1 0 0-1.5h-2.74l.57-3.32Z";
   
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