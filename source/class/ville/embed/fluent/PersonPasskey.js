/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PersonPasskey",
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

   var pathdregular = "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-2 5a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18a9.14 9.14 0 0 0 5.14-1.4v-1.32c-.23.25-.5.48-.81.67A8.16 8.16 0 0 1 10 17a8.16 8.16 0 0 1-4.33-1.05A3.36 3.36 0 0 1 4 13a1 1 0 0 1 1-1h8.27a3.86 3.86 0 0 1-.13-1H5.01Zm9 0a3 3 0 0 0 1.92 2.8l.08.03v5.03c0 .1.03.2.1.27l.6.73c.16.2.46.2.63.03l1.54-1.57a.43.43 0 0 0-.02-.62l-1.35-1.2 1.35-1.18c.2-.17.2-.47 0-.64l-.94-.82A3 3 0 1 0 14 11Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z";
   var pathdfilled = "M10 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-5 9a2 2 0 0 0-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0 0 10 18a9.14 9.14 0 0 0 5.14-1.4v-2.22c-1.19-.65-2-1.92-2-3.38H5.01Zm9 0a3 3 0 0 0 2 2.83v5.03c0 .1.03.2.1.27l.6.73c.16.2.46.2.63.03l1.54-1.57a.43.43 0 0 0-.02-.62l-1.35-1.2 1.35-1.18c.2-.17.2-.47 0-.64l-.94-.82A3 3 0 1 0 14 11Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z";
   
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