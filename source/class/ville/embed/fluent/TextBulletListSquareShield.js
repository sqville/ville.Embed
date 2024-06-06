/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextBulletListSquareShield",
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

   var pathdregular = "M5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v4.67a2.81 2.81 0 0 1-1-.51V5.75C16 4.78 15.22 4 14.25 4h-8.5C4.78 4 4 4.78 4 5.75v8.5c0 .97.78 1.75 1.75 1.75h4.48c.1.35.22.68.38 1H5.75A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3Zm3.75 7h3.37c-.5.35-1 .5-1.52.5-.44 0-.8.2-1.04.5H9.5a.5.5 0 0 1 0-1ZM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM14.5 19c-.04 0-.08 0-.11-.02a5.67 5.67 0 0 1-1.76-.98c-.35-.3-.64-.63-.88-1a5.15 5.15 0 0 1-.75-2.64V11.87c0-.2.16-.37.35-.37 1.07 0 2.03-.46 2.9-1.39.07-.07.16-.11.25-.11s.18.04.24.11a3.89 3.89 0 0 0 2.9 1.39c.2 0 .36.17.36.38v2.48a5.15 5.15 0 0 1-.75 2.64c-.24.37-.53.7-.88 1a5.67 5.67 0 0 1-1.87 1Z";
   var pathdfilled = "M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v4.67a3.23 3.23 0 0 1-1.52-1 1.34 1.34 0 0 0-1.95 0c-.22.24-.44.43-.66.58H9.5a.5.5 0 0 0 0 1h.8c-.19.25-.3.56-.3.88v2.51c.04.96.23 1.83.6 2.61H5.76A2.75 2.75 0 0 1 3 14.25v-8.5ZM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM6.75 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 7.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM14.5 19c-.04 0-.08 0-.11-.02a5.67 5.67 0 0 1-1.76-.98c-.35-.3-.64-.63-.88-1a5.15 5.15 0 0 1-.75-2.64V11.87c0-.2.16-.37.35-.37 1.07 0 2.03-.46 2.9-1.39.07-.07.16-.11.25-.11s.18.04.24.11a3.89 3.89 0 0 0 2.9 1.39c.2 0 .36.17.36.38v2.48a5.15 5.15 0 0 1-.75 2.64c-.24.37-.53.7-.88 1a5.67 5.67 0 0 1-1.87 1Z";
   
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