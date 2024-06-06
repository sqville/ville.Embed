/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SaveSync",
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

   var pathdregular = "M3 5c0-1.1.9-2 2-2h8.38a2 2 0 0 1 1.41.59l1.62 1.62A2 2 0 0 1 17 6.62V9.6c-.32-.16-.65-.3-1-.4V6.63a1 1 0 0 0-.3-.7L14.1 4.28a1 1 0 0 0-.71-.29H13v2.5c0 .83-.67 1.5-1.5 1.5h-4A1.5 1.5 0 0 1 6 6.5V4H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1v-4.5c0-.83.67-1.5 1.5-1.5h4.84c-.4.28-.77.62-1.08 1H6.5a.5.5 0 0 0-.5.5V16h3.2c.1.35.24.68.4 1H5a2 2 0 0 1-2-2V5Zm4-1v2.5c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5V4H7Zm3 10.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z";
   var pathdfilled = "M3 5c0-1.1.9-2 2-2h1v3.5C6 7.33 6.67 8 7.5 8h4c.83 0 1.5-.67 1.5-1.5V3h.38a2 2 0 0 1 1.41.59l1.62 1.62A2 2 0 0 1 17 6.62V9.6a5.48 5.48 0 0 0-5.66.4H6.5c-.83 0-1.5.67-1.5 1.5V17a2 2 0 0 1-2-2V5Zm6 9.5c0-1.33.47-2.55 1.26-3.5H6.5a.5.5 0 0 0-.5.5V17h3.6c-.38-.75-.6-1.6-.6-2.5ZM12 3H7v3.5c0 .28.22.5.5.5h4a.5.5 0 0 0 .5-.5V3Zm-2 11.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.97 1.97 0 0 0-.94-.25 2 2 0 0 0-1.44.59.5.5 0 0 1-.71-.71 3 3 0 0 1 3.62-.48V12c0-.28.22-.5.5-.5Zm-.88 5.53a3 3 0 0 1-2.62-.18V17a.5.5 0 0 1-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.97 1.97 0 0 0 .94.25 2 2 0 0 0 1.44-.59.5.5 0 0 1 .71.71 3 3 0 0 1-1 .66Z";
   
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