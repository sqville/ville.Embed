/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClipboardLink",
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

   var pathdregular = "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V11h-1V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h2.76c.12.36.3.7.5 1H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 15.5a3.5 3.5 0 0 0-3.5-3.5h-.09a.5.5 0 0 0 .09 1h.16a2.5 2.5 0 0 1-.16 5l-.1.01a.5.5 0 0 0 .1 1V19h.2a3.5 3.5 0 0 0 3.3-3.5Zm-6-3a.5.5 0 0 0-.5-.5h-.2a3.5 3.5 0 0 0 .2 7h.09a.5.5 0 0 0-.09-1h-.16a2.5 2.5 0 0 1 .16-5h.09a.5.5 0 0 0 .41-.5Zm2.5 2.5h-3.09a.5.5 0 0 0 .09 1h3.09a.5.5 0 0 0-.09-1Z";
   var pathdfilled = "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V11h-3.5a4.5 4.5 0 0 0-3.74 7H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 15.5a3.5 3.5 0 0 0-3.5-3.5h-.09a.5.5 0 0 0 .09 1h.16a2.5 2.5 0 0 1-.16 5l-.1.01a.5.5 0 0 0 .1 1V19h.2a3.5 3.5 0 0 0 3.3-3.5Zm-6-3a.5.5 0 0 0-.5-.5h-.2a3.5 3.5 0 0 0 .2 7h.09a.5.5 0 0 0-.09-1h-.16a2.5 2.5 0 0 1 .16-5h.09a.5.5 0 0 0 .41-.5Zm2.5 2.5h-3.09a.5.5 0 0 0 .09 1h3.09a.5.5 0 0 0-.09-1Z";
   
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