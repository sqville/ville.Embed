/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PreviewLink",
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

   var pathdregular = "M4 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-3ZM5 6v2h10V6H5Zm6.5 4a.5.5 0 0 0-.5.5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4Zm.5 4v-3h3v3h-3Zm-8-3c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 11Zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM2 5.5A2.5 2.5 0 0 1 4.5 3h11A2.5 2.5 0 0 1 18 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-9ZM4.5 4C3.67 4 3 4.67 3 5.5v9c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-11Z";
   var pathdfilled = "M5 6v2h10V6H5Zm7 5v3h3v-3h-3ZM2 5.75A2.75 2.75 0 0 1 4.75 3h10.5A2.75 2.75 0 0 1 18 5.75v8.5A2.75 2.75 0 0 1 15.25 17H4.75A2.75 2.75 0 0 1 2 14.25v-8.5Zm2-.25v3c0 .27.22.5.5.5h11a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5Zm7 5v4c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5Zm-6.5 0a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 14c0 .28.22.5.5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z";
   
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