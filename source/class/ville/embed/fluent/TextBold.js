/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextBold",
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

   var pathdregular = "M5.5 4.25C5.5 3.56 6.06 3 6.75 3h3.5a4 4 0 0 1 3.17 6.44c.9.7 1.58 1.8 1.58 3.31A4.23 4.23 0 0 1 10.75 17h-4c-.69 0-1.25-.56-1.25-1.25V4.25ZM8 11v3.5h2.75c.81 0 1.75-.62 1.75-1.75S11.56 11 10.75 11H8Zm0-2.5h2.25a1.5 1.5 0 1 0 0-3H8v3Z";
   var pathdfilled = "M5 4.5C5 3.67 5.67 3 6.5 3h3.88a4.12 4.12 0 0 1 3.44 6.39 4.24 4.24 0 0 1 1.43 3.24A4.36 4.36 0 0 1 10.88 17H6.5A1.5 1.5 0 0 1 5 15.5v-11ZM8 6v2.25h2.38a1.13 1.13 0 0 0 0-2.25H8Zm0 5.25V14h2.88c.7 0 1.37-.54 1.37-1.37 0-.84-.69-1.38-1.37-1.38H8Z";
   
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