/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HomeSplit",
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

   var pathdregular = "M11 2.38a1.5 1.5 0 0 0-2 0L3.5 7.33c-.32.29-.5.7-.5 1.12v7.05c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8.45c0-.43-.18-.83-.5-1.12L11 2.38Zm-1.33.74a.5.5 0 0 1 .66 0l5.5 4.95c.11.1.17.23.17.38v7.05a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V8.45a.5.5 0 0 1 .17-.38l5.5-4.95Zm.83 10.38a.5.5 0 1 0-1 0v1a.5.5 0 0 0 1 0v-1ZM10 9c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm.5-3.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Z";
   var pathdfilled = "M11 2.38a1.5 1.5 0 0 0-2 0L3.5 7.33c-.32.29-.5.7-.5 1.12v7.05c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8.45c0-.43-.18-.83-.5-1.12L11 2.38Zm-.5 11.12v1a.5.5 0 0 1-1 0v-1a.5.5 0 1 1 1 0ZM10 9c.28 0 .5.22.5.5v1a.5.5 0 0 1-1 0v-1c0-.28.22-.5.5-.5Zm.5-3.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0Z";
   
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