/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClipboardCode",
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

   var pathdregular = "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v5.88a1.5 1.5 0 0 0-1-.38V4.5a.5.5 0 0 0-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 0 1-1.41-1H5.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h3.96l.4.47c.3.35.72.53 1.14.53H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm6.99 8.64a.5.5 0 1 0-.97-.28l-2 7a.5.5 0 1 0 .97.28l2-7Zm-4.11 1.68a.5.5 0 1 0-.76-.65l-1.5 1.75a.5.5 0 0 0 0 .65l1.5 1.75a.5.5 0 1 0 .76-.65l-1.22-1.42 1.22-1.43Zm5.3 3.56a.5.5 0 0 1-.06-.71l1.22-1.42-1.22-1.43a.5.5 0 0 1 .76-.65l1.5 1.75a.5.5 0 0 1 0 .65l-1.5 1.75a.5.5 0 0 1-.7.06Z";
   var pathdfilled = "M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v5.88a1.5 1.5 0 0 0-2.44.71l-.4 1.41h-.74a1.5 1.5 0 0 0-2.55-.48l-1.5 1.75a1.5 1.5 0 0 0 0 1.95l1.5 1.75c.29.35.7.53 1.13.53H5.5A1.5 1.5 0 0 1 4 16.5v-12C4 3.67 4.67 3 5.5 3h1.59ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm2.88 10.32a.5.5 0 1 0-.76-.65l-1.5 1.75a.5.5 0 0 0 0 .65l1.5 1.75a.5.5 0 0 0 .7.06.5.5 0 0 0 .06-.71l-1.22-1.42 1.22-1.43Zm4.1-1.68a.5.5 0 1 0-.96-.28l-2 7a.5.5 0 1 0 .97.28l2-7Zm1.2 5.24a.5.5 0 0 1-.06-.71l1.22-1.42-1.22-1.43a.5.5 0 0 1 .76-.65l1.5 1.75a.5.5 0 0 1 0 .65l-1.5 1.75a.5.5 0 0 1-.7.06Z";
   
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