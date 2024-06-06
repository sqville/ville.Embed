/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextBulletListSquareEdit",
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

   var pathdregular = "M5.75 3h8.5A2.75 2.75 0 0 1 17 5.75V9c-.34.02-.68.1-1 .23V5.75C16 4.78 15.22 4 14.25 4h-8.5C4.78 4 4 4.78 4 5.75v8.5c0 .97.78 1.75 1.75 1.75h3.72l-.04.16-.21.84H5.75A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3ZM9.5 13h2.44l-1 1H9.5a.5.5 0 0 1 0-1Zm-2-5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM6.75 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm1.48 5.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   var pathdfilled = "M3 5.75A2.75 2.75 0 0 1 5.75 3h8.5A2.75 2.75 0 0 1 17 5.75V9c-.69.03-1.37.31-1.9.84L11.94 13H9.5a.5.5 0 0 0 0 1h1.44l-.67.67c-.4.41-.7.92-.84 1.49l-.21.84H5.75A2.75 2.75 0 0 1 3 14.25v-8.5ZM6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75 2.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM6.75 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 7.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm1.48 5.38 4.83-4.83a1.87 1.87 0 1 1 2.64 2.64l-4.83 4.83a2.2 2.2 0 0 1-1.02.58l-1.5.37a.89.89 0 0 1-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02Z";
   
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