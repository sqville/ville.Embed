/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SportHockey",
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

   var pathdregular = "M11.97 2.06a3.7 3.7 0 0 1 3.45 1.3l1.71 1.93c.75.84 1.08 2.02.73 3.13-2.1 6.7-7.03 9.08-10.19 9.55-.9.14-1.76-.22-2.39-.78l-1.8-1.6A4.07 4.07 0 0 1 2.2 11.2c2.12-5.99 6.46-8.47 9.76-9.15Zm2.7 1.97c-.68-.76-1.6-1.17-2.5-.99-3 .61-7.03 2.89-9.02 8.5-.4 1.15.02 2.44.98 3.3l1.82 1.6c.46.41 1.03.63 1.57.54 2.85-.42 7.41-2.57 9.39-8.86.23-.73.02-1.55-.53-2.16l-1.71-1.93Zm-.6.98c.28.04.47.3.42.57a11.89 11.89 0 0 1-3.32 6.44 11.28 11.28 0 0 1-4.53 2.96.5.5 0 0 1-.28-.96c1.05-.3 2.66-1.22 4.1-2.7a10.9 10.9 0 0 0 3.05-5.9.5.5 0 0 1 .57-.41Z";
   var pathdfilled = "M11.97 2.06a3.7 3.7 0 0 1 3.45 1.3l1.71 1.93c.75.84 1.08 2.02.73 3.13-2.1 6.7-7.03 9.08-10.19 9.55-.9.14-1.76-.22-2.39-.78l-1.8-1.6A4.07 4.07 0 0 1 2.2 11.2c2.12-5.99 6.46-8.47 9.76-9.15Zm2.52 3.52a.5.5 0 1 0-.98-.16 10.9 10.9 0 0 1-3.05 5.9 10.32 10.32 0 0 1-4.1 2.7.5.5 0 1 0 .28.96c1.25-.36 3-1.38 4.53-2.96a11.89 11.89 0 0 0 3.32-6.44Z";
   
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