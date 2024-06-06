/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.AppsAddIn",
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

   var pathdregular = "M15 3a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0V6h2a.5.5 0 0 0 0-1h-2V3ZM4.5 17A1.5 1.5 0 0 1 3 15.5v-11C3 3.67 3.67 3 4.5 3H9c.83 0 1.5.67 1.5 1.5v5h5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-11Zm6-6.5V16h5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5h-5Zm-1 5.5v-5.5H4v5a.5.5 0 0 0 .5.5h5Zm0-11.5A.5.5 0 0 0 9 4H4.5a.5.5 0 0 0-.5.5v5h5.5v-5Z";
   var pathdfilled = "M15 2.5c.41 0 .75.34.75.75v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5c0-.41.34-.75.75-.75ZM4.75 3C3.78 3 3 3.78 3 4.75v10.5c0 .97.78 1.75 1.75 1.75h10.5c.97 0 1.75-.78 1.75-1.75v-4.5C17 9.78 16.22 9 15.25 9h-4a.25.25 0 0 1-.25-.25v-4C11 3.78 10.22 3 9.25 3h-4.5ZM4.5 4.75c0-.14.11-.25.25-.25h4.5c.14 0 .25.11.25.25v4c0 .08 0 .17.02.25H4.5V4.75Zm5 5.75v5H4.75a.25.25 0 0 1-.25-.25V10.5h5Zm1.5 5v-5.02l.25.02h4c.14 0 .25.11.25.25v4.5c0 .14-.11.25-.25.25H11Z";
   
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