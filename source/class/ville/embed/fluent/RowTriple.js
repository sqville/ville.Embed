/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RowTriple",
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

   var pathdregular = "M3 3.5C3 2.67 3.67 2 4.5 2h11c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 4.5v-1ZM4.5 3a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-11ZM3 9.5C3 8.67 3.67 8 4.5 8h11c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 10.5v-1ZM4.5 9a.5.5 0 0 0-.5.5v1c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-11Zm0 5c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11ZM4 15.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v1a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-1Z";
   var pathdfilled = "M4.5 2C3.67 2 3 2.67 3 3.5v1C3 5.33 3.67 6 4.5 6h11c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11Zm0 6C3.67 8 3 8.67 3 9.5v1c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11Zm0 6c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11Z";
   
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