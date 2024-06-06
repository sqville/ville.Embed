/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClipboardTaskListLtr",
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

   var pathdregular = "M9.35 7.85a.5.5 0 0 0-.7-.7l-1.42 1.4-.4-.35a.5.5 0 0 0-.67.73l.75.69c.2.18.5.17.7-.02l1.74-1.75Zm0 4.3c.2.2.2.5 0 .7L7.6 14.6a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0Zm1.65.6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1H11Zm-.5-4.5c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5ZM8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM5.5 4h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12c0-.28.22-.5.5-.5Z";
   var pathdfilled = "M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3ZM8 3.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm1.35 4.35L7.6 9.6a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 1 1 .68-.73l.4.36 1.4-1.41a.5.5 0 1 1 .71.7Zm0 4.3c.2.2.2.5 0 .7L7.6 14.6a.5.5 0 0 1-.69.02l-.75-.69a.5.5 0 0 1 .68-.73l.4.36 1.4-1.41c.2-.2.52-.2.71 0Zm1.65.6h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1Zm-.5-4.5c0-.28.22-.5.5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5Z";
   
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