/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Timeline",
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

   var pathdregular = "M3.5 3C2.67 3 2 3.67 2 4.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9ZM3 4.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4Zm.5 6.5c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9ZM3 12.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4Zm14-.06a2 2 0 0 1-1-3.88 2 2 0 0 1 1 3.88ZM16.5 3c.28 0 .5.22.5.5v4.04a3.02 3.02 0 0 0-1 0V3.5c0-.28.22-.5.5-.5Zm0 10.5c-.17 0-.34-.01-.5-.04v4.04a.5.5 0 0 0 1 0v-4.04c-.16.03-.33.04-.5.04Z";
   var pathdfilled = "M3.5 3C2.67 3 2 3.67 2 4.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9Zm0 8c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-9ZM17 12.44a2 2 0 0 1-1-3.88 2 2 0 0 1 1 3.88ZM16.5 3c.28 0 .5.22.5.5v4.04a3.02 3.02 0 0 0-1 0V3.5c0-.28.22-.5.5-.5Zm0 10.5c-.17 0-.34-.01-.5-.04v4.04a.5.5 0 0 0 1 0v-4.04c-.16.03-.33.04-.5.04Z";
   
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