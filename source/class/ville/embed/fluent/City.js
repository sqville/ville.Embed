/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.City",
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

   var pathdregular = "M10 2c.28 0 .5.22.5.5V4h1c.83 0 1.5.67 1.5 1.5V9h2.5c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-6.18c0-.53.28-1.02.73-1.29l3-1.8c.09-.05.18-.1.27-.13V5.5C7 4.67 7.67 4 8.5 4h1V2.5c0-.28.22-.5.5-.5ZM8 7.1c.56.2 1 .73 1 1.42V17h2v-6.5c0-.65.42-1.2 1-1.41V5.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1.6Zm4.5 2.9a.5.5 0 0 0-.5.5V17h3.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-3ZM7.24 8.09l-3 1.8a.5.5 0 0 0-.24.43v6.18c0 .28.22.5.5.5H8V8.52a.5.5 0 0 0-.76-.43Z";
   var pathdfilled = "M11 2c.28 0 .5.22.5.5V4h1c.83 0 1.5.67 1.5 1.5v2.55a2.5 2.5 0 0 0-2 2.45V18h-2V8a2 2 0 0 0-2-2v-.5C8 4.67 8.67 4 9.5 4h1V2.5c0-.28.22-.5.5-.5ZM8.64 7.24c-.28-.2-.48-.2-.64-.15a.77.77 0 0 0-.14.06L4.73 9.03A1.5 1.5 0 0 0 4 10.32v6.18c0 .83.67 1.5 1.5 1.5H9V8a1 1 0 0 0-.36-.76ZM15.5 9h-1c-.83 0-1.5.68-1.5 1.5V18h3.5c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-1Z";
   
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