/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BrightnessHigh",
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

   var pathdregular = "M10 2c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm0 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-1a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm7.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1ZM10 16c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm-6.5-5.5a.5.5 0 0 0 0-1H2.46a.5.5 0 0 0 0 1H3.5Zm.65-6.35c.2-.2.5-.2.7 0l1 1a.5.5 0 1 1-.7.7l-1-1a.5.5 0 0 1 0-.7Zm.7 11.7a.5.5 0 0 1-.7-.7l1-1a.5.5 0 0 1 .7.7l-1 1Zm11-11.7a.5.5 0 0 0-.7 0l-1 1a.5.5 0 0 0 .7.7l1-1a.5.5 0 0 0 0-.7Zm-.7 11.7a.5.5 0 0 0 .7-.7l-1-1a.5.5 0 0 0-.7.7l1 1Z";
   var pathdfilled = "M10.5 2.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM10 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm3 4a3 3 0 0 0-3-3v6a3 3 0 0 0 3-3Zm5 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-7.5 6.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM4 10a.5.5 0 0 1-.5.5H2.46a.5.5 0 0 1 0-1H3.5c.28 0 .5.22.5.5Zm.85-5.85a.5.5 0 1 0-.7.7l1 1a.5.5 0 1 0 .7-.7l-1-1Zm-.7 11.7c.2.2.5.2.7 0l1-1a.5.5 0 0 0-.7-.7l-1 1a.5.5 0 0 0 0 .7Zm11-11.7a.5.5 0 0 1 .7.7l-1 1a.5.5 0 0 1-.7-.7l1-1Zm.7 11.7a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 .7-.7l1 1c.2.2.2.5 0 .7Z";
   
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