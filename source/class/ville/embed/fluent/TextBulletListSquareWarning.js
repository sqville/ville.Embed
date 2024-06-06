/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextBulletListSquareWarning",
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

   var pathdregular = "M6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 0 0 1h2.77l.44-.9.06-.1H9.5Zm0 3h1.77l-.5 1H9.5a.5.5 0 0 1 0-1Zm-3.75 3h4.02l-.5 1H5.75A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v5.77l-.7-1.41a2.05 2.05 0 0 0-.3-.44V5.75C16 4.78 15.22 4 14.25 4h-8.5C4.78 4 4 4.78 4 5.75v8.5c0 .97.78 1.75 1.75 1.75Zm7.85-5.45a1 1 0 0 1 1.8 0l3.5 7A1 1 0 0 1 18 19h-7a1 1 0 0 1-.9-1.45l3.5-7ZM15 12.5a.5.5 0 1 0-1 0v3a.5.5 0 1 0 1 0v-3Zm-.5 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z";
   var pathdfilled = "M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v5.77l-.7-1.41a2 2 0 0 0-3.53-.11H9.5a.5.5 0 0 0 0 1h2.77l-1 2H9.5a.5.5 0 0 0 0 1h1.27l-1.5 3H5.75A2.75 2.75 0 0 1 3 14.25v-8.5ZM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM6.75 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 7.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm4.6 3.05a1 1 0 0 1 1.8 0l3.5 7A1 1 0 0 1 18 19h-7a1 1 0 0 1-.9-1.45l3.5-7ZM15 12.5a.5.5 0 1 0-1 0v3a.5.5 0 1 0 1 0v-3Zm-.5 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z";
   
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