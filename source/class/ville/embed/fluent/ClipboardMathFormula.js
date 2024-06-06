/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClipboardMathFormula",
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

   var pathdregular = "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h3.65a1.5 1.5 0 0 1-.11-1H5.5a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v3.57c.23.05.46.13.68.25.12.06.23.13.32.21V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm4.45 7.28a1.92 1.92 0 0 1 2.78-1.57.5.5 0 0 1-.45.9.92.92 0 0 0-1.33.74l-.09 1.17h1.14a.5.5 0 1 1 0 1h-1.21l-.24 3.2a1.92 1.92 0 0 1-2.78 1.57.5.5 0 1 1 .46-.9.92.92 0 0 0 1.32-.74l.24-3.13h-.79a.5.5 0 0 1 0-1h.86l.1-1.24Zm5.4 4.07a.5.5 0 0 0-.7-.7l-1.06 1.05-.46-.73a1 1 0 0 0-1.42-.28.5.5 0 0 0 .58.81l.57.93-1.21 1.22a.5.5 0 0 0 .7.7l1.06-1.05.45.74c.31.5.98.61 1.44.26a.5.5 0 0 0-.6-.8l-.57-.92 1.22-1.23Z";
   var pathdfilled = "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h3.65a1.5 1.5 0 0 1 1.92-2.05L11.2 14a1.5 1.5 0 0 1 .22-2.98l.02-.32a2.92 2.92 0 0 1 4.23-2.38c.12.06.23.13.32.21V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm4.45 7.28a1.92 1.92 0 0 1 2.78-1.57.5.5 0 0 1-.45.9.92.92 0 0 0-1.33.74l-.09 1.17h1.14a.5.5 0 1 1 0 1h-1.21l-.24 3.2a1.92 1.92 0 0 1-2.78 1.57.5.5 0 1 1 .46-.9.92.92 0 0 0 1.32-.74l.24-3.13h-.79a.5.5 0 0 1 0-1h.86l.1-1.24Zm5.4 4.07a.5.5 0 0 0-.7-.7l-1.06 1.05-.46-.73a1 1 0 0 0-1.42-.28.5.5 0 0 0 .58.81l.57.93-1.21 1.22a.5.5 0 0 0 .7.7l1.06-1.05.45.74c.31.5.98.61 1.44.26a.5.5 0 0 0-.6-.8l-.57-.92 1.22-1.23Z";
   
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