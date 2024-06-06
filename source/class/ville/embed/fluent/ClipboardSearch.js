/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClipboardSearch",
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

   var pathdregular = "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v3.76c.32-.12.65-.2 1-.23V4.5c0-.28.22-.5.5-.5h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-2.59c.12.32.12.68 0 1h2.59c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3Zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3ZM8.3 14.6a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 0 0 .7-.7L8.3 14.6Zm-2.8.4a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z";
   var pathdfilled = "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v3.76a4.5 4.5 0 0 1 5.56 6.18l2 2c.42.42.54 1.03.35 1.56h2.59c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3Zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3ZM8.3 14.6a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 0 0 .7-.7L8.3 14.6Zm-2.8.4a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z";
   
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