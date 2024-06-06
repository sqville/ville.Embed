/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BrightnessLow",
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

   var pathdregular = "M10.5 3.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM10 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm10 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-6.5 5.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1ZM5 10a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm.85-4.85a.5.5 0 1 0-.7.7l.5.5a.5.5 0 1 0 .7-.7l-.5-.5Zm-.7 9.7c.2.2.5.2.7 0l.5-.5a.5.5 0 0 0-.7-.7l-.5.5a.5.5 0 0 0 0 .7Zm9-9.7a.5.5 0 0 1 .7.7l-.5.5a.5.5 0 0 1-.7-.7l.5-.5Zm.7 9.7a.5.5 0 0 1-.7 0l-.5-.5a.5.5 0 0 1 .7-.7l.5.5c.2.2.2.5 0 .7Z";
   var pathdfilled = "M10 3c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 7V7a3 3 0 1 1 0 6Zm6.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1ZM10 15c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm-5.5-4.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1h1Zm.65-5.35c.2-.2.5-.2.7 0l.5.5a.5.5 0 1 1-.7.7l-.5-.5a.5.5 0 0 1 0-.7Zm.7 9.7a.5.5 0 0 1-.7-.7l.5-.5a.5.5 0 0 1 .7.7l-.5.5Zm9-9.7a.5.5 0 0 0-.7 0l-.5.5a.5.5 0 0 0 .7.7l.5-.5a.5.5 0 0 0 0-.7Zm-.7 9.7a.5.5 0 0 0 .7-.7l-.5-.5a.5.5 0 0 0-.7.7l.5.5Z";
   
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