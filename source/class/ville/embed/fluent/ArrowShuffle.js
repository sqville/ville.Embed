/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowShuffle",
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

   var pathdregular = "M15.85 4.15a.5.5 0 0 0-.7.7L16.3 6c-3.33.07-5.29 1.9-7.1 3.6l-.04.03C7.28 11.4 5.53 13 2.5 13a.5.5 0 0 0 0 1c3.45 0 5.45-1.87 7.3-3.6l.04-.03C11.68 8.65 13.4 7.07 16.3 7l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2ZM2.5 6c2.81 0 4.66 1.24 6.26 2.64l-.28.26-.46.43C6.52 8.03 4.92 7 2.5 7a.5.5 0 0 1 0-1Zm13.8 8c-2.7-.06-4.5-1.28-6.06-2.64l.28-.26.46-.43c1.46 1.27 3 2.27 5.31 2.33l-1.14-1.15a.5.5 0 0 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 0 1-.7-.7L16.3 14Z";
   var pathdfilled = "M15.78 3.72a.75.75 0 1 0-1.06 1.06l.75.75c-3.09.28-4.88 2.2-6.47 3.9l-.05.06C7.2 11.38 5.65 13 2.75 13a.75.75 0 0 0 0 1.5c3.58 0 5.53-2.09 7.25-3.94l.05-.05c1.58-1.7 2.98-3.17 5.34-3.46l-.67.67a.75.75 0 0 0 1.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2ZM2.75 5.5c2.78 0 4.58 1.26 6.05 2.7l-.48.5-.1.1-.45.49C6.42 7.97 4.99 7 2.75 7a.75.75 0 1 1 0-1.5Zm12.72 8.97c-2.34-.21-3.94-1.37-5.27-2.66l.49-.51.09-.1.45-.49c1.17 1.14 2.4 2.02 4.16 2.24l-.67-.67a.75.75 0 1 1 1.06-1.06l2 2c.3.3.3.77 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.75-.75Z";
   
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