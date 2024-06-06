/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CloudOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7l3.67 3.67c-.25.53-.4 1.11-.47 1.73H5.1A3.34 3.34 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h9.01l2.86 2.85a.5.5 0 0 0 .7-.7l-15-15ZM13.3 14h-8A2.33 2.33 0 0 1 3 11.62a2.33 2.33 0 0 1 2.28-2.37h.07a1 1 0 0 0 1-.9c.04-.38.11-.74.23-1.06L13.29 14ZM17 11.62c0 .9-.48 1.68-1.18 2.08l.73.73a3.4 3.4 0 0 0 1.45-2.8 3.33 3.33 0 0 0-3.28-3.38h-.07C14.4 5.92 12.82 4 10 4c-1.2 0-2.2.35-2.94.94l.71.71A3.76 3.76 0 0 1 10 5c2.1 0 3.45 1.32 3.65 3.35a1 1 0 0 0 1 .9h.07A2.33 2.33 0 0 1 17 11.62Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7l3.67 3.67c-.25.53-.4 1.11-.47 1.73h-.07A3.33 3.33 0 0 0 2 11.62 3.33 3.33 0 0 0 5.28 15h9.01l2.86 2.85a.5.5 0 0 0 .7-.7l-15-15ZM18 11.62a3.4 3.4 0 0 1-1.45 2.8l-9.5-9.48A4.66 4.66 0 0 1 10 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0 1 18 11.62Z";
   
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