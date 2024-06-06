/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneLaptop",
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

   var pathdregular = "M3 4.5C3 3.67 3.67 3 4.5 3h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H10v-1h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V6H3V4.5ZM10 15h7.5a.5.5 0 0 0 0-1H10v1Zm-5 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1H5ZM2 8.5C2 7.67 2.67 7 3.5 7h4C8.33 7 9 7.67 9 8.5v8c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 2 16.5v-8ZM3.5 8a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-4Z";
   var pathdfilled = "M3 4.5C3 3.67 3.67 3 4.5 3h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H10V8a2 2 0 0 0-2-2H3V4.5ZM10 15h7.5a.5.5 0 0 0 0-1H10v1ZM2 8.5C2 7.67 2.67 7 3.5 7h4C8.33 7 9 7.67 9 8.5v8c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 2 16.5v-8ZM5 15a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1H5Z";
   
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