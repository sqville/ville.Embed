/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Javascript",
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

   var pathdregular = "M11.5 9.5c0-.83.67-1.5 1.5-1.5h1.5a.5.5 0 0 1 0 1H13a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5H12a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13a1.5 1.5 0 0 1-1.5-1.5v-1Zm-.5-1a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1c.83 0 1.5-.67 1.5-1.5v-5ZM3 6v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3Zm3-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z";
   var pathdfilled = "M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm7.25 1.5a.75.75 0 0 0-.75.75v5c0 .14-.11.25-.25.25h-1a.75.75 0 0 0 0 1.5h1c.97 0 1.75-.78 1.75-1.75v-5a.75.75 0 0 0-.75-.75Zm1.25 1.75v1c0 .97.78 1.75 1.75 1.75h.5c.14 0 .25.11.25.25v1c0 .14-.11.25-.25.25h-1.5a.75.75 0 0 0 0 1.5h1.5c.97 0 1.75-.78 1.75-1.75v-1c0-.97-.78-1.75-1.75-1.75h-.5a.25.25 0 0 1-.25-.25v-1c0-.14.11-.25.25-.25h1.5a.75.75 0 0 0 0-1.5h-1.5c-.97 0-1.75.78-1.75 1.75Z";
   
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